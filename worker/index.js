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

class NonceHandler {
    constructor(nonce) {
        this.nonce = nonce;
    }

    element(element) {
        element.setAttribute('nonce', this.nonce);
    }
}

async function handleNonceResponse(response) {
    const nonce = generateNonce();

    let newHeaders = new Headers(response.headers);
    newHeaders.set('Reporting-Endpoints', `csp-endpoint="${REPORT_URL}"`)
    newHeaders.set('Content-Security-Policy-Report-Only', `default-src 'self'; script-src 'self' 'unsafe-inline' 'nonce-${nonce}' 'strict-dynamic' 'wasm-unsafe-eval' http: https:; img-src 'self' data: https://raw.githubusercontent.com; object-src 'none'; base-uri 'none'; connect-src 'self' https://medama.gander.tools/; style-src 'self' 'unsafe-inline' 'nonce-${nonce}'; style-src-attr 'unsafe-inline'; require-trusted-types-for 'script'; report-to csp-endpoint; report-uri ${REPORT_URL}`);

    return new HTMLRewriter()
        .on('script, style, link[rel="stylesheet"], link[rel="manifest"]', new NonceHandler(nonce))
        .transform(new Response(response.body, {
            headers: newHeaders,
            status: response.status,
            statusText: response.statusText,
        }));
}

function generateNonce() {
    return crypto.randomUUID();
}
