# Baab Studio SvelteKit Art Portfolio

A modern SvelteKit-based art portfolio website for showcasing Ronak Bahador's artwork. This project uses SvelteKit, TailwindCSS, and TypeScript to create a responsive and accessible art gallery website.

## Features

- Responsive art gallery with artwork details
- Individual artwork detail pages
- About page with artist information
- Modern, clean UI with TailwindCSS
- Fully responsive design for mobile and desktop

## Project Structure

```
baab-svelte/
├── src/                    # Source code
│   ├── lib/                # Library code
│   │   ├── components/     # Svelte components
│   │   │   ├── about/      # About page components
│   │   │   ├── common/     # Shared components (Header, Footer)
│   │   │   ├── gallery/    # Gallery components
│   │   │   └── hero/       # Hero section components
│   │   ├── stores/         # Svelte stores
│   │   └── utils/          # Utility functions and types
│   ├── routes/             # SvelteKit routes
│   │   ├── artwork/        # Artwork detail pages
│   │   └── about/          # About page
│   └── app.html            # HTML template
├── static/                 # Static assets
│   └── ...                 # Images, favicon, etc.
├── svelte.config.js        # SvelteKit configuration
├── tailwind.config.js      # TailwindCSS configuration
└── vite.config.ts          # Vite configuration
```

## Installation

1. Clone the repository
2. Install dependencies:

```bash
cd baab-svelte
npm install
```

## Development

To start the development server:

```bash
npm run dev
```

This will start the development server at [http://localhost:5173](http://localhost:5173)

## Building for Production

To build the project for production:

```bash
npm run build
```

This generates a static site in the `build` directory.

## Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Technology Stack

- [SvelteKit](https://kit.svelte.dev/) - Full-stack web framework
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Vite](https://vitejs.dev/) - Frontend build tool

## License

This project is private, all rights reserved. © Baab Studio 2025.
