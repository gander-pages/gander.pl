# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a VitePress-based documentation site (gander.pl) containing technical articles, tips, and code solutions. It's a static site generator project that compiles markdown documentation into a clean, searchable website.

## Build System and Commands

This project uses VitePress with dotenvx for environment management:

- **Development server**: `npm run dev` - Starts VitePress dev server with environment variables
- **Build for production**: `npm run build` - Builds the static site for deployment
- **Preview build**: `npm run preview` - Serves the built site locally for testing
- **Environment management**: `npm run dotenvx` - Access to dotenvx commands for environment variable management

All commands are prefixed with `dotenvx run --` to load environment variables from `.env` files.

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

## Environment and Security

The project implements strict Content Security Policy with:
- Nonce-based script and style loading
- CSP reporting to external endpoint
- Environment-based analytics integration
- Support for both Umami and Medama analytics platforms

## Development Notes

- Uses TypeScript for configuration
- Implements custom HTML transformations for security headers
- All external links and integrations are environment-variable driven
- Clean URLs enabled with dead link checking disabled for external references
- Deep outline navigation enabled for better content accessibility