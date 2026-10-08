# Gander Site

Technical articles, code solutions and development guides, built with [VitePress](https://vitepress.dev/) and hosted on [Cloudflare Workers](https://developers.cloudflare.com/workers/static-assets/).

## Development

Requires [Node.js](https://nodejs.org/) v22 (see `.nvmrc`).

```bash
npm ci
npm run dev
```

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the dev server |
| `npm run build` | Build the site for production |
| `npm run preview` | Serve the production build locally |

## Structure

```
docs/            # Markdown content
.vitepress/      # VitePress configuration
worker/          # Cloudflare Worker serving the built site
wrangler.jsonc   # Cloudflare configuration
```

## License

[MIT](LICENSE)
