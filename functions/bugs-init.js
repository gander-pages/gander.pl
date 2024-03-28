export async function onRequestGet({env}) {
    return new Response(`Sentry.init({dsn: '${env.SENTRY_DSN}',tunnel: '/bugs-tunnel'});`, {headers: [['content-type', 'text/javascript']]});
}

