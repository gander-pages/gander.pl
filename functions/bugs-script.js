export async function onRequestGet({env}) {
    return fetch(`${env.VITE_SENTRY_BUNDLE}`);
}

