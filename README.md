# 🦆 Gander Site - Technical Documentation Site

A [VitePress](https://vitepress.dev/)-based documentation site featuring technical articles, code solutions, and development guides. Built with modern web technologies and deployed as a static site.

## 🚀 Quick Start

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
# Start development server with environment variables
npm run dev
```

### Build & Deploy

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
docs/
├── index.md                 # Homepage
├── solutions/              # Organized solutions
│   ├── pimcore/            # Pimcore CMS solutions
│   ├── self-hosted/        # Self-hosting guides
│   └── services/           # External service integrations
├── tools/                  # Development tools & utilities
├── utils/                  # General utilities
├── assets/                 # Images and static assets
└── public/                 # Public assets (favicons, manifests)

.vitepress/
├── config.ts              # Main [VitePress](https://vitepress.dev/) configuration
└── functions/
    └── _middleware.js     # [Cloudflare](https://www.cloudflare.com/) Functions middleware
```

## 🛠️ Technology Stack

- **Static Site Generator**: [VitePress](https://vitepress.dev/)
- **Environment Management**: [dotenvx](https://dotenvx.com/)
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/)
- **Analytics**: [Umami](https://umami.is/) & [Medama](https://medama.io/) integration
- **Security**: Content Security Policy with nonce-based loading
- **Language**: [TypeScript](https://www.typescriptlang.org/) configuration

## 📚 Content Categories

### 🔧 Services
External service integrations and API documentation

### 🏠 Self-Hosted
Self-hosting solutions and server configurations

### 📦 Pimcore
CMS-specific solutions, workflows, and integrations

### 🛠️ Tools/Projects
Development tools, utilities, and project guides

### ⚙️ Utils
General utility documentation and helpers

### 📜 Outdated
Legacy content maintained for reference

## 🔒 Security Features

- **Content Security Policy**: Strict CSP with nonce-based script/style loading
- **Security Headers**: Comprehensive security header implementation
- **CSP Reporting**: External endpoint for CSP violation reporting
- **Environment-based**: All external integrations are environment-variable driven

## 🌟 Key Features

- ✅ Clean, searchable documentation interface
- ✅ Hierarchical navigation structure
- ✅ Deep outline navigation for better accessibility
- ✅ Mobile-responsive design
- ✅ Analytics integration ([Umami](https://umami.is/), [Medama](https://medama.io/))
- ✅ SEO optimized
- ✅ Security-first approach with CSP
- ✅ Environment-based configuration

## 📝 Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start [VitePress](https://vitepress.dev/) dev server with environment variables |
| `npm run build` | Build the static site for production |
| `npm run preview` | Serve the built site locally for testing |
| `npm run dotenvx` | Access [dotenvx](https://dotenvx.com/) commands for environment management |

## 🤝 Contributing

This is a personal documentation site. Content is organized to be easily searchable and navigable for technical reference.

## 📄 License

All content and code in this repository is for personal use and documentation purposes.
