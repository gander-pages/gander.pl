# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Gander Site is a comprehensive VitePress-based technical documentation site featuring:
- Technical articles and code solutions
- Development guides and tutorials
- Tool-specific documentation and utilities
- Self-hosting guides and server configurations
- Pimcore CMS solutions and workflows
- Service integrations and API documentation

The site is built with modern web technologies, deployed as a static site on Cloudflare Pages, and emphasizes security-first architecture with Content Security Policy implementation.

## Build System and Commands

This project uses VitePress with dotenvx for environment management:

- **Development server**: `npm run dev` - Starts VitePress dev server with environment variables
- **Build for production**: `npm run build` - Builds the static site for deployment
- **Preview build**: `npm run preview` - Serves the built site locally for testing
- **Environment management**: `npm run dotenvx` - Access to dotenvx commands for environment variable management

All commands are prefixed with `dotenvx run --` to load environment variables from `.env` files.

## Prerequisites and Setup

- **Node.js**: v18+ recommended
- **Package Manager**: npm or yarn
- **Installation**: Run `npm install` to install dependencies
- **Environment**: Uses dotenvx for environment variable management

## Key Features

The site includes several important features:
- Clean, searchable documentation interface
- Hierarchical navigation structure with deep outline support
- Mobile-responsive design optimized for all devices
- SEO optimization with proper metadata and structure
- Analytics integration supporting both Umami and Medama platforms
- Security-first approach with comprehensive CSP implementation
- Environment-based configuration for all external integrations

## Architecture and Structure

### Core Structure
- **docs/**: Main content directory containing all markdown files
  - **index.md**: Homepage with project showcase and news
  - **solutions/**: Organized solutions by category (pimcore/, self-hosted/, services/)
  - **tools/**: Tool-specific guides and utilities
  - **utils/**: Utility documentation and helpers
  - **assets/**: Images and static assets
  - **public/**: Public assets (favicons, manifests)

### Configuration
- **.vitepress/config.ts**: Main VitePress configuration with:
  - Site metadata and SEO settings
  - Complex sidebar navigation structure
  - Analytics integration (Umami, Medama)
  - CSP (Content Security Policy) implementation
  - Custom head transformations for nonce injection

### Middleware
- **functions/_middleware.js**: Cloudflare Functions middleware that:
  - Generates CSP nonces for security
  - Sets security headers including CSP reporting
  - Replaces nonce placeholders in HTML output

## Content Organization

The site follows a hierarchical structure visible in the VitePress config sidebar:
- **Services**: External service integrations
- **Self-Hosted**: Self-hosting solutions and configurations
- **Pimcore**: CMS-specific solutions and workflows
- **Tools/Projects**: Development tools and utilities
- **Utils**: General utility documentation
- **Outdated**: Legacy content maintained for reference

## Technology Stack

- **Static Site Generator**: VitePress for fast, modern documentation sites
- **Environment Management**: dotenvx for secure environment variable handling
- **Deployment Platform**: Cloudflare Pages for global CDN and edge functions
- **Analytics**: Dual integration with Umami and Medama analytics platforms
- **Security**: Content Security Policy with nonce-based loading
- **Configuration Language**: TypeScript for type-safe configuration
- **Middleware**: Cloudflare Functions for server-side processing

## Environment and Security

The project implements strict Content Security Policy with:
- Nonce-based script and style loading for enhanced security
- CSP reporting to external endpoint for violation monitoring
- Environment-based analytics integration preventing hardcoded secrets
- Support for both Umami and Medama analytics platforms
- Comprehensive security headers via Cloudflare Functions middleware

## Development Notes

- Uses TypeScript for configuration
- Implements custom HTML transformations for security headers
- All external links and integrations are environment-variable driven
- Clean URLs enabled with dead link checking disabled for external references
- Deep outline navigation enabled for better content accessibility

## Deployment and Maintenance

- **Build Process**: Production builds are optimized for static hosting
- **Preview Testing**: Use `npm run preview` to test builds locally before deployment
- **Environment Variables**: All external integrations use environment variables for configuration
- **Content Updates**: Markdown files can be edited directly, changes are reflected after rebuild
- **Security Monitoring**: CSP violations are reported to external endpoint for monitoring
- **Analytics**: Both Umami and Medama analytics provide usage insights

## Content Guidelines

When working with content in this repository:
- All documentation should be in markdown format
- Images and assets should be placed in the `docs/assets/` directory
- Follow the existing hierarchical structure for new content
- Use descriptive filenames and maintain consistent formatting
- External links should be verified and kept up to date
