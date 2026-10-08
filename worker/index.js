const REPORT_URL = 'https://csp.gander.tools/';

export default {
    async fetch(request, env) {
        const response = await env.ASSETS.fetch(request);

        if (response.headers.get("Content-Type")?.includes("text/html")) {
            return await handleNonceResponse(response);
        }

        return response;
    },
};

async function handleNonceResponse(response) {
    const nonce = generateNonce();

    let newHeaders = new Headers(response.headers);
    newHeaders.set('Reporting-Endpoints', `csp-endpoint="${REPORT_URL}"`)
    newHeaders.set('Content-Security-Policy-Report-Only', `default-src 'self'; script-src 'self' 'unsafe-inline' 'nonce-${nonce}' 'strict-dynamic' http: https:; img-src 'self' data:; object-src 'none'; base-uri 'none'; connect-src 'self' https://medama.gander.tools/; style-src 'self' 'unsafe-inline' 'nonce-${nonce}'; style-src-attr 'unsafe-inline'; require-trusted-types-for 'script'; report-to csp-endpoint; report-uri ${REPORT_URL}`);

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
