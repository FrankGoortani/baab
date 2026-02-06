<script lang="ts">
	import type { Artwork } from '$lib/utils/types';

	export let artwork: Artwork;
</script>

<a href="/artwork/{artwork.slug}" class="gallery-item group block overflow-hidden rounded-lg">
	<div
		class="gallery-image shadow-soft aspect-square w-full bg-cover bg-center transition-all duration-[var(--transition-medium)]"
		style="background-image: url('{artwork.image}');"
	></div>
	<div class="gallery-info px-1 pt-3 pb-1">
		<h3
			class="gallery-title text-base font-semibold tracking-wide text-[var(--heading-color)] transition-colors duration-[var(--transition-medium)]"
		>
			{artwork.title}
		</h3>
		<p class="mt-1 text-sm text-[var(--text-color)] opacity-70">{artwork.year}</p>
	</div>
</a>

<style>
	.gallery-item:hover .gallery-image {
		transform: scale(1.02);
		box-shadow: var(--shadow-hover);
	}

	.gallery-item:hover .gallery-title {
		color: var(--gold-accent);
	}
</style>
