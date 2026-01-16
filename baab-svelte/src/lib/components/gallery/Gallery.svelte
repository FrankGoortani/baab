<script lang="ts">
	import GalleryItem from './GalleryItem.svelte';
	import type { Artwork } from '$lib/utils/types';

	export let artworks: Artwork[] = [];
	export let title = 'Featured Artwork';
</script>

<section id="gallery" class="gallery-section section bg-background relative py-20">
	<div class="relative container text-center">
		<h2
			class="section-title relative mb-12 inline-block pb-4 text-center text-3xl tracking-wide text-[var(--heading-color)] md:text-4xl"
		>
			{title}
		</h2>

		<div class="gallery-grid grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each artworks as artwork (artwork.slug)}
				<GalleryItem {artwork} />
			{/each}
		</div>
	</div>
</section>

<style>
	/* Section title styling */
	.section-title:after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 80px;
		height: 3px;
		background-color: var(--accent-color);
	}
</style>
