<script lang="ts">
	import type { DetailedArtwork } from '$lib/stores/artworks';

	export let data;

	$: artwork = data.artwork as DetailedArtwork;
</script>

<svelte:head>
	<title>{artwork.title} by Ronak Bahador | baab studio</title>
	<meta
		name="description"
		content="View '{artwork.title}', a {artwork.year} artwork by Ronak Bahador."
	/>
</svelte:head>

<div class="artwork-detail-page container mx-auto max-w-[1000px] px-4 pt-32 pb-20">
	<h1 class="mb-8 text-center text-3xl font-semibold text-[var(--heading-color)] md:text-4xl">
		"{artwork.title}" by Ronak Bahador ({artwork.year})
	</h1>

	<div class="artwork-image-container mb-12">
		<img
			src={artwork.image}
			alt="{artwork.title} by Ronak Bahador"
			class="shadow-soft mx-auto h-auto max-h-[70vh] max-w-full rounded-lg object-contain"
		/>
	</div>

	<div class="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
		<div class="md:col-span-1">
			<ul class="artwork-info shadow-soft space-y-3 rounded-lg bg-[var(--card-bg)] p-6">
				<li><strong class="font-semibold">Artist:</strong> Ronak Bahador</li>
				<li><strong class="font-semibold">Title:</strong> {artwork.title}</li>
				<li><strong class="font-semibold">Year:</strong> {artwork.year}</li>
				{#if artwork.medium}
					<li><strong class="font-semibold">Medium:</strong> {artwork.medium}</li>
				{/if}
				{#if artwork.style}
					<li><strong class="font-semibold">Style:</strong> {artwork.style}</li>
				{/if}
				{#if artwork.themes && artwork.themes.length > 0}
					<li>
						<strong class="font-semibold">Themes:</strong>
						{artwork.themes.join(', ')}
					</li>
				{/if}
			</ul>
		</div>

		<div class="md:col-span-2">
			<div class="artwork-section">
				<h3 class="section-heading">Description:</h3>
				{#if artwork.fullDescription}
					<div class="space-y-4">
						{#each artwork.fullDescription.split('\n\n') as paragraph, i (i)}
							<p class="text-[var(--text-color)]">{paragraph}</p>
						{/each}
					</div>
				{/if}
			</div>
		</div>
	</div>

	{#if artwork.notableElements && artwork.notableElements.length > 0}
		<div class="artwork-section mb-12">
			<h3 class="section-heading">Notable Elements:</h3>
			<ul class="space-y-4">
				{#each artwork.notableElements as element (element.title)}
					<li>
						<strong class="font-semibold">{element.title}:</strong>
						{element.description}
					</li>
				{/each}
			</ul>
		</div>
	{/if}

	{#if artwork.interpretation}
		<div class="artwork-section mb-12">
			<h3 class="section-heading">Interpretation:</h3>
			<p class="text-[var(--text-color)]">{artwork.interpretation}</p>
		</div>
	{/if}

	<div class="mt-12 text-center">
		<a
			href="/"
			class="back-btn transition-calm-bg-color inline-block rounded-lg border border-[var(--gold-accent-subtle)] px-8 py-3 font-medium text-[var(--heading-color)]"
		>
			Back to Gallery
		</a>
	</div>
</div>

<style>
	.artwork-section {
		margin-bottom: 2rem;
	}

	.artwork-info li {
		padding-bottom: 0.5rem;
	}

	.back-btn:hover {
		background-color: var(--gold-accent-subtle);
		color: var(--heading-color);
	}

	@media (max-width: 768px) {
		.artwork-image-container {
			margin-left: -1rem;
			margin-right: -1rem;
		}

		.artwork-image-container img {
			border-radius: 0;
		}
	}
</style>
