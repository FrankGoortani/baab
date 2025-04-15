<script lang="ts">
  import type { DetailedArtwork } from '$lib/stores/artworks';

  // Data passed from +page.ts
  export let data;

  // Get the artwork from the data
  $: artwork = data.artwork as DetailedArtwork;
</script>

<svelte:head>
  <title>{artwork.title} by Ronak Bahador | baab studio</title>
  <meta name="description" content="View '{artwork.title}', a {artwork.year} artwork by Ronak Bahador." />
</svelte:head>

<div class="artwork-detail-page pt-32 pb-20 container max-w-[1000px] mx-auto px-4">
  <h1 class="text-center text-3xl md:text-4xl text-[var(--heading-color)] mb-8 font-semibold">
    "{artwork.title}" by Ronak Bahador ({artwork.year})
  </h1>

  <!-- Artwork Image -->
  <div class="artwork-image-container mb-12">
    <img
      src={artwork.image}
      alt="{artwork.title} by Ronak Bahador"
      class="mx-auto max-w-full h-auto shadow-lg rounded-sm max-h-[70vh] object-contain"
    />
  </div>

  <!-- Artwork Info -->
  <div class="artwork-info-container grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
    <div class="md:col-span-1">
      <ul class="artwork-info space-y-3 p-6 bg-[var(--card-bg)] rounded shadow-sm">
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
            <strong class="font-semibold">Themes:</strong> {artwork.themes.join(', ')}
          </li>
        {/if}
      </ul>
    </div>

    <div class="md:col-span-2">
      <div class="artwork-section">
        <h3 class="text-xl mb-4 text-[var(--heading-color)] font-semibold border-b border-[var(--gold-accent)] pb-2 inline-block">Description:</h3>
        {#if artwork.fullDescription}
          <div class="space-y-4">
            {#each artwork.fullDescription.split('\n\n') as paragraph}
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
      <h3 class="text-xl mb-4 text-[var(--heading-color)] font-semibold border-b border-[var(--gold-accent)] pb-2 inline-block">Notable Elements:</h3>
      <ul class="space-y-4">
        {#each artwork.notableElements as element}
          <li>
            <strong class="font-semibold">{element.title}:</strong> {element.description}
          </li>
        {/each}
      </ul>
    </div>
  {/if}

  <!-- Interpretation -->
  {#if artwork.interpretation}
    <div class="artwork-section mb-12">
      <h3 class="text-xl mb-4 text-[var(--heading-color)] font-semibold border-b border-[var(--gold-accent)] pb-2 inline-block">Interpretation:</h3>
      <p class="text-[var(--text-color)]">{artwork.interpretation}</p>
    </div>
  {/if}

  <!-- Back to Gallery Button -->
  <div class="text-center mt-12">
    <a
      href="/"
      class="inline-block py-3 px-8 border border-[var(--gold-accent)] rounded text-[var(--gold-accent)] hover:bg-[var(--gold-accent)] hover:text-white transition-all duration-300 font-medium"
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
