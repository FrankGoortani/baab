import { error } from '@sveltejs/kit';
import { getArtworkBySlug } from '$lib/stores/artworks';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
  const artwork = getArtworkBySlug(params.slug);

  if (!artwork) {
    throw error(404, {
      message: 'Artwork not found'
    });
  }

  return { artwork };
};
