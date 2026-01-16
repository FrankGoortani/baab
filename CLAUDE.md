# Baab Studio - Project Guidelines

## Overview

**baab studio** is an art portfolio website for artist Ronak Bahador, showcasing abstract figurative artwork exploring identity, spirituality, and cultural heritage.

**Live site**: https://baab.studio

## Project Structure

```
baab/
├── baab-svelte/          # SvelteKit app (primary, actively developed)
├── *.html                # Legacy static HTML pages (kept for reference/SEO)
├── css/                  # Styles for legacy HTML pages
└── static assets         # Images (*.jpg, *.png) used by both versions
```

### Primary Development: `baab-svelte/`

The SvelteKit app is the active codebase. Key paths:
- `src/lib/components/` - Svelte components (gallery, hero, header, footer)
- `src/lib/stores/artworks.ts` - Artwork data and types
- `src/routes/` - Page routes (home, about, artwork detail pages)
- `static/` - Static assets for Svelte app

## Tech Stack

- **Framework**: SvelteKit 2.x with Svelte 5
- **Styling**: TailwindCSS 4.x with CSS variables for theming
- **Language**: TypeScript
- **Build**: Vite
- **Testing**: Vitest + Storybook
- **Deployment**: Static site generation (adapter-static)

## Development Commands

All commands run from `baab-svelte/` directory:

```bash
npm run dev          # Start dev server (localhost:5173)
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Check formatting (Prettier) + linting (ESLint)
npm run check        # TypeScript/Svelte type checking
npm run format       # Auto-fix formatting issues
npm run storybook    # Launch Storybook (localhost:6006)
```

## Code Style

- **Prettier**: tabs, single quotes, 100 char width
- **ESLint**: Svelte + TypeScript rules enforced
- **Each blocks**: Always use keyed each blocks `{#each items as item (item.id)}`

## Required Checks Before Commit

```bash
cd baab-svelte
npm run lint
npm run check
```

Both must pass with no errors.

## Design System

CSS variables defined in `src/app.css`:
- `--background-color` - Page background (#f7f7f2)
- `--text-color` - Body text
- `--heading-color` - Headings
- `--accent-color` - Primary accent
- `--gold-accent` - Gold highlights (#c2a66b)

## Adding New Artwork

1. Add artwork data to `src/lib/stores/artworks.ts`
2. Add image to `static/` directory
3. Follow the `DetailedArtwork` type interface

## Architecture Notes

- Static site generation for GitHub Pages deployment
- Artwork detail pages use dynamic routes: `/artwork/[slug]`
- SEO metadata in `+page.svelte` files via `<svelte:head>`
- Legacy HTML files exist alongside Svelte app for historical reference

## Deployment

The site deploys as a static build. The `build/` directory output can be served from any static host.

## Do Not Commit

- `node_modules/`
- `.svelte-kit/`
- `build/`
- `.env` files
- Archive files (*.zip, *.tar.gz)
