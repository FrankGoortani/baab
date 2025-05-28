# AGENTS Guidelines

This repository contains static HTML pages and a SvelteKit app located in `baab-svelte`.

## Contribution Guidelines

* Use **Node.js 20** or later.
* Format all code with the project's Prettier configuration. Prettier uses tabs, single quotes and a print width of 100.
* Do not commit `node_modules`, `.svelte-kit` or `build` directories.
* Keep commit messages short and imperative (e.g. `fix: update header styles`).

## Required Checks

When you change any files under `baab-svelte/` run the following commands before committing:

```bash
cd baab-svelte
npm run lint
npm run check
```

These commands format and lint the code and run `svelte-check`. If dependencies are missing these commands may fail; run them anyway and include their output in your PR description.
