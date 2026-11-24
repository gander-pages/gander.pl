import { execFileSync } from 'node:child_process';
import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';

// Only the maintained article sections go into the feed; legacy root pages are under content review.
const ARTICLE_SECTIONS = ['solutions/', 'tools/'];

/**
 * Publication date = author date of the commit that added the file (following renames).
 * Needs full git history (`npm run build:shallow` unshallows the clone on Cloudflare).
 * Falls back to the `lastUpdated` frontmatter date when git history is unavailable.
 */
function getPubDate({ filePath, data }: CollectionEntry<'docs'>): Date | undefined {
    if (filePath) {
        try {
            const dates = execFileSync('git', ['log', '--follow', '--diff-filter=A', '--format=%aI', '--', filePath], {
                encoding: 'utf8',
                stdio: ['ignore', 'pipe', 'ignore'],
            }).trim().split('\n').filter(Boolean);
            if (dates.length > 0) return new Date(dates[dates.length - 1]);
        } catch {
            // Git not available: use the fallback below.
        }
    }
    return data.lastUpdated instanceof Date ? data.lastUpdated : undefined;
}

export async function GET(context: APIContext) {
    const articles = (await getCollection('docs'))
        .filter(({ id, data }) => !data.draft && ARTICLE_SECTIONS.some((section) => id.startsWith(section)))
        .map((entry) => ({ entry, pubDate: getPubDate(entry) }))
        .filter((article): article is { entry: CollectionEntry<'docs'>; pubDate: Date } => article.pubDate !== undefined)
        .sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

    return rss({
        title: 'Gander Site',
        description: 'Code solutions, tips and tricks.',
        site: context.site!,
        trailingSlash: false,
        items: articles.map(({ entry: { id, data }, pubDate }) => ({
            title: data.title,
            description: data.description,
            pubDate,
            link: `/${id}`,
            categories: data.topic ? [data.topic] : undefined,
        })),
    });
}
