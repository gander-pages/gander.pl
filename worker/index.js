const REPORT_PATH = '/csp-report';
const MAX_BODY_BYTES = 8 * 1024;
const MAX_FIELD_LENGTH = 200;
// Unauthenticated endpoint: cap distinct rows so spoofed reports cannot grow the table forever. At the cap the
// least-reported, oldest row is evicted, so one-off junk drops out while real repeating violations stay.
const MAX_ROWS = 500;

// ponytail: schema is created lazily on the first report, move to wrangler d1 migrations if it ever evolves
const SCHEMA = 'CREATE TABLE IF NOT EXISTS csp_reports (directive TEXT NOT NULL, blocked TEXT NOT NULL, document TEXT NOT NULL, count INTEGER NOT NULL DEFAULT 1, first_seen TEXT NOT NULL, last_seen TEXT NOT NULL, user_agent TEXT, PRIMARY KEY (directive, blocked, document))';
const EVICT = `DELETE FROM csp_reports WHERE rowid IN (SELECT rowid FROM csp_reports ORDER BY count, last_seen LIMIT 1) AND (SELECT COUNT(*) FROM csp_reports) >= ${MAX_ROWS} AND NOT EXISTS (SELECT 1 FROM csp_reports WHERE directive = ?1 AND blocked = ?2 AND document = ?3)`;
const UPSERT = "INSERT INTO csp_reports (directive, blocked, document, first_seen, last_seen, user_agent) VALUES (?1, ?2, ?3, datetime('now'), datetime('now'), ?4) ON CONFLICT DO UPDATE SET count = count + 1, last_seen = datetime('now')";

let schemaReady;

export default {
    async fetch(request, env, ctx) {
        if (new URL(request.url).pathname === REPORT_PATH) {
            return handleReport(request, env, ctx);
        }

        const response = await env.ASSETS.fetch(request);

        if (response.headers.get("Content-Type")?.includes("text/html")) {
            return await handleNonceResponse(request, response);
        }

        return response;
    },
};

async function handleNonceResponse(request, response) {
    const nonce = generateNonce();
    const reportUrl = new URL(REPORT_PATH, request.url).href;

    let newHeaders = new Headers(response.headers);
    newHeaders.set('Reporting-Endpoints', `csp-endpoint="${reportUrl}"`)
    newHeaders.set('Content-Security-Policy-Report-Only', `default-src 'self'; script-src 'self' 'unsafe-inline' 'nonce-${nonce}' 'strict-dynamic' http: https:; object-src 'none'; base-uri 'none'; connect-src 'self' https://medama.gander.tools/; style-src 'self' 'unsafe-inline' 'nonce-${nonce}'; require-trusted-types-for 'script'; report-to csp-endpoint; report-uri ${REPORT_PATH}`);

    let body = await response.text();
    body = body.replace(/{{CSP-NONCE}}/g, nonce);

    return new Response(body, {
        headers: newHeaders,
        status: response.status,
        statusText: response.statusText,
    });
}

function generateNonce() {
    return crypto.randomUUID();
}

async function handleReport(request, env, ctx) {
    if (request.method !== 'POST') {
        return new Response(null, {status: 405, headers: {Allow: 'POST'}});
    }

    if (!/json|csp-report/.test(request.headers.get('Content-Type') ?? '')) {
        return new Response(null, {status: 415});
    }

    const raw = await readLimited(request, MAX_BODY_BYTES);
    if (raw === null) {
        return new Response(null, {status: 413});
    }

    let payload;
    try {
        payload = JSON.parse(raw);
    } catch {
        return new Response(null, {status: 400});
    }

    const host = new URL(request.url).host;
    const userAgent = clamp(request.headers.get('User-Agent') ?? '');
    const rows = extractViolations(payload).filter((v) => v.host === host);

    // Reports are fire-and-forget for the browser, so answer first and write in the background.
    ctx.waitUntil(store(env.CSP_DB, rows, userAgent));

    return new Response(null, {status: 204});
}

// Reads the body without buffering more than `max` bytes; returns null when it is larger.
async function readLimited(request, max) {
    if (Number(request.headers.get('Content-Length')) > max) {
        return null;
    }

    const chunks = [];
    let total = 0;
    const reader = request.body?.getReader();

    while (reader) {
        const {done, value} = await reader.read();
        if (done) {
            break;
        }

        total += value.length;
        if (total > max) {
            await reader.cancel();
            return null;
        }
        chunks.push(value);
    }

    return new Blob(chunks).text();
}

// Handles both the legacy `report-uri` body ({"csp-report": {...}}) and the Reporting API body ([{type, body}, ...]).
function extractViolations(payload) {
    const items = Array.isArray(payload)
        ? payload.filter((r) => r?.type === 'csp-violation').map((r) => r.body)
        : [payload?.['csp-report']];

    return items.filter(Boolean).flatMap((r) => {
        const documentUrl = parseUrl(r.documentURL ?? r['document-uri']);
        if (!documentUrl) {
            return [];
        }

        const directive = r.effectiveDirective ?? r['effective-directive'] ?? r['violated-directive'] ?? 'unknown';
        const blocked = r.blockedURL ?? r['blocked-uri'] ?? '';
        const blockedUrl = parseUrl(blocked);

        return [{
            host: documentUrl.host,
            directive: clamp(String(directive).split(' ')[0].replace(/[^a-z-]/gi, '') || 'unknown'),
            // Query strings and fragments are dropped so every distinct violation maps to one row.
            blocked: clamp(blockedUrl && blockedUrl.protocol.startsWith('http') ? blockedUrl.origin : String(blocked) || 'inline'),
            document: clamp(documentUrl.pathname),
        }];
    });
}

async function store(db, rows, userAgent) {
    if (!db || rows.length === 0) {
        return;
    }

    try {
        schemaReady ??= db.exec(SCHEMA);
        await schemaReady;
        await db.batch(rows.flatMap((v) => [
            db.prepare(EVICT).bind(v.directive, v.blocked, v.document),
            db.prepare(UPSERT).bind(v.directive, v.blocked, v.document, userAgent),
        ]));
    } catch (error) {
        schemaReady = undefined;
        console.error('Failed to store CSP report', error);
    }
}

function parseUrl(value) {
    try {
        return new URL(value);
    } catch {
        return null;
    }
}

function clamp(value) {
    return value.slice(0, MAX_FIELD_LENGTH);
}
