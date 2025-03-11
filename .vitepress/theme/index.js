import * as Sentry from "@sentry/vue";
import DefaultTheme from 'vitepress/theme'



/** @type {import('vitepress').Theme} */
export default  {
    extends: DefaultTheme,
    async enhanceApp({ app }) {
        if (!import.meta.env.SSR && import.meta.env.VITE_SENTRY_DSN) {
            Sentry.init({
                app,
                dsn: import.meta.env.VITE_SENTRY_DSN,
                environment: import.meta.env.MODE,
                integrations: [
                    Sentry.replayIntegration({
                        maskAllText: false,
                        maskAllInputs: false,
                        blockAllMedia: false,
                    }),
                ],
                replaysSessionSampleRate: 0,
                replaysOnErrorSampleRate: 0.1,
                dist: import.meta.env.VITE_COMMIT_SHA,
            });
        }
    }
}
