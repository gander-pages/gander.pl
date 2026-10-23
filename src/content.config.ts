import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

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
};
