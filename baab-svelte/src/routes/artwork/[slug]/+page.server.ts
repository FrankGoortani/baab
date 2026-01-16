import { artworks } from '$lib/stores/artworks';

// This function provides all possible slug values for prerendering
export function entries() {
	return artworks.map((artwork) => ({
		slug: artwork.slug
	}));
}

// Ensure server prerendering for these pages
export const prerender = true;
