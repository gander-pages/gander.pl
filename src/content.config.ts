import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';

// Low-cardinality topic sent to Medama as a page event property.
const topics = [
    'database',
    'devops',
    'docker',
    'frontend',
    'games',
    'git',
    'home',
    'javascript',
    'jetbrains',
    'linux',
    'misc',
    'osm',
    'php',
    'pimcore',
    'self-hosted',
    'services',
    'symfony',
    'windows',
] as const;

export const collections = {
    docs: defineCollection({
        loader: docsLoader(),
        schema: docsSchema({ extend: z.object({ topic: z.enum(topics).optional() }) }),
    }),
    // UI strings per locale (src/content/i18n/<lang>.json), including our own component keys.
    i18n: defineCollection({
        loader: i18nLoader(),
        schema: i18nSchema({
            extend: z.object({ 'cookieNotice.label': z.string(), 'cookieNotice.text': z.string() }).partial(),
        }),
    }),
};
