export async function onRequest(context) {
    const response = await context.next();

    if (response.headers.get("Content-Type")?.includes("text/html")) {
        return await handleNonceResponse(response);
    }

    return response;
}

async function handleNonceResponse(response) {
    const nonce = generateNonce();

    let newHeaders = new Headers(response.headers);
    newHeaders.set('Reporting-Endpoints', 'csp-endpoint="https://csp.gander.tools/"')
    newHeaders.set('Content-Security-Policy-Report-Only', `default-src 'self'; script-src 'self' https: 'unsafe-inline' 'unsafe-eval' 'nonce-${nonce}' 'strict-dynamic' https://static.cloudflareinsights.com/beacon.min.js; style-src-attr 'self' 'unsafe-inline'; script-src-elem 'self' https://medama.gander.tools/script.js https://static.cloudflareinsights.com/beacon.min.js; object-src 'none'; base-uri 'none'; connect-src 'self' https://cloudflareinsights.com/ https://medama.gander.tools/ https://sentry.gander.tools/; style-src 'self' 'nonce-${nonce}' 'unsafe-inline'; img-src 'self' data: w3.org/svg/2000; require-trusted-types-for 'script'; report-to csp-endpoint; report-uri https://csp.gander.tools/`);

    let body = await response.text();
    body = body.replace(/{{CSP-NONCE}}/g, nonce);

    return new Response(body, {
        headers: newHeaders,
        status: response.status,
        statusText: response.statusText,
    });

}

function generateNonce() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
}
