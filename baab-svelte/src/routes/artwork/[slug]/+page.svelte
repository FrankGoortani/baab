<script lang="ts">
	import type { DetailedArtwork } from '$lib/stores/artworks';

	// Data passed from +page.ts
	export let data;

	// Get the artwork from the data
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

	<!-- Artwork Image -->
	<div class="artwork-image-container mb-12">
		<img
			src={artwork.image}
			alt="{artwork.title} by Ronak Bahador"
			class="mx-auto h-auto max-h-[70vh] max-w-full rounded-sm object-contain shadow-lg"
		/>
	</div>

	<!-- Artwork Info -->
	<div class="artwork-info-container mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
		<div class="md:col-span-1">
			<ul class="artwork-info space-y-3 rounded bg-[var(--card-bg)] p-6 shadow-sm">
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
				<h3
					class="mb-4 inline-block border-b border-[var(--gold-accent)] pb-2 text-xl font-semibold text-[var(--heading-color)]"
				>
					Description:
				</h3>
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

	<!-- Notable Elements -->
	{#if artwork.notableElements && artwork.notableElements.length > 0}
		<div class="artwork-section mb-12">
			<h3
				class="mb-4 inline-block border-b border-[var(--gold-accent)] pb-2 text-xl font-semibold text-[var(--heading-color)]"
			>
				Notable Elements:
			</h3>
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

	<!-- Interpretation -->
	{#if artwork.interpretation}
		<div class="artwork-section mb-12">
			<h3
				class="mb-4 inline-block border-b border-[var(--gold-accent)] pb-2 text-xl font-semibold text-[var(--heading-color)]"
			>
				Interpretation:
			</h3>
			<p class="text-[var(--text-color)]">{artwork.interpretation}</p>
		</div>
	{/if}

	<!-- Back to Gallery Button -->
	<div class="mt-12 text-center">
		<a
			href="/"
			class="inline-block rounded border border-[var(--gold-accent)] px-8 py-3 font-medium text-[var(--gold-accent)] transition-all duration-300 hover:bg-[var(--gold-accent)] hover:text-white"
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

	:global(body) {
		--gold-accent: #c2a66b;
		--card-bg: rgba(247, 247, 242, 0.5);
	}

	/* Responsive adjustments */
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
