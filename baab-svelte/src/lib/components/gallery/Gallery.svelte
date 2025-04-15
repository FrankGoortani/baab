<script lang="ts">
  import GalleryItem from './GalleryItem.svelte';
  import type { Artwork } from '$lib/utils/types';

  export let artworks: Artwork[] = [];
  export let title = 'Featured Artwork';
</script>

<section id="gallery" class="gallery-section section bg-background py-20 relative">
  <div class="container text-center relative">
    <h2 class="section-title text-3xl md:text-4xl text-[var(--heading-color)] text-center mb-12 tracking-wide relative inline-block pb-4">
      {title}
    </h2>

    <div class="gallery-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each artworks as artwork}
        <GalleryItem {artwork} />
      {/each}
    </div>
  </div>
</section>

<style>
  /* Section title styling */
  .section-title:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: var(--accent-color);
  }
</style>
