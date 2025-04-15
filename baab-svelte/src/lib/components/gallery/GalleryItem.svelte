<script lang="ts">
  import type { Artwork } from '$lib/utils/types';

  export let artwork: Artwork;
</script>

<a href="/artwork/{artwork.slug}" class="gallery-item relative overflow-hidden rounded shadow-lg transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl">
  <div
    class="gallery-image w-full h-0 pb-[100%] bg-center bg-cover transition-transform duration-[0.8s] saturate-95"
    style="background-image: url('{artwork.image}');">
  </div>
  <div class="gallery-overlay absolute bottom-0 left-0 w-full bg-gradient-to-t from-[rgba(46,74,70,0.95)] via-[rgba(46,74,70,0.3)] to-transparent p-6 transform translate-y-full transition-transform duration-400 flex flex-col items-center">
    <h3 class="gallery-title text-white text-xl mb-2 font-bold tracking-wide relative">{artwork.title}</h3>
    <p class="gallery-year text-white/90 text-sm mt-3">{artwork.year}</p>
  </div>
</a>

<style>
  /* Gallery hover effects */
  .gallery-item:hover .gallery-image {
    transform: scale(1.08);
    filter: saturate(1.1);
  }

  .gallery-item:hover .gallery-overlay {
    transform: translateY(0);
  }

  .gallery-title:after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 2px;
    background-color: var(--gold-accent);
  }
</style>
