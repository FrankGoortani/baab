import { error } from '@sveltejs/kit';
import { getArtworkBySlug } from '#lib/stores/artworks.js';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const artwork = getArtworkBySlug(params.slug);

	if (!artwork) {
		error(404, 'Artwork not found');
	}

	return { artwork };
};
