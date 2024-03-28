export async function onRequestGet({env}) {
    return new Response(`Sentry.init({dsn: '${env.VITE_SENTRY_DSN}',tunnel: '/bugs-tunnel'});`, {headers: [['content-type', 'text/javascript']]});
}

