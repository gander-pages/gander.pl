export async function onRequestGet({env}) {
    return fetch(`${env.SENTRY_BUNDLE}`);
}

