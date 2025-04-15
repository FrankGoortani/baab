import { error } from '@sveltejs/kit';
import { getArtworkBySlug } from '$lib/stores/artworks';
import type { LoadEvent } from '@sveltejs/kit';

export const load = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const artwork = getArtworkBySlug(slug);

  if (!artwork) {
    throw error(404, {
      message: 'Artwork not found'
    });
  }

  return {
    artwork
  };
};
