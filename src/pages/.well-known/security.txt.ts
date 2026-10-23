import type { APIRoute } from 'astro';

// Expires is renewed on every build; RFC 9116 recommends less than a year ahead.
export const GET: APIRoute = ({ site }) => {
  const expires = new Date(Date.now() + 364 * 24 * 60 * 60 * 1000).toISOString();
  const body = [
    'Contact: https://github.com/gander-pages/gander.pl/security/advisories',
    `Expires: ${expires}`,
    'Preferred-Languages: en, pl',
    `Canonical: ${new URL('/.well-known/security.txt', site)}`,
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
