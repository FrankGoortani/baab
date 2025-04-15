<script lang="ts">
  import Hero from '$lib/components/hero/Hero.svelte';
  import Gallery from '$lib/components/gallery/Gallery.svelte';
  import { getAllArtworks } from '$lib/stores/artworks';

  // Get artwork data from the store
  const artworks = getAllArtworks();

  const heroImage = 'eclipse-of-the-soul.jpg';
  const heroTitle = 'baab studio';
  const heroSubtitle = 'A journey through abstraction and form, exploring identity, spirituality, and cultural heritage through mindful expression.';
</script>

<svelte:head>
  <title>baab studio</title>
  <meta name="description" content="baab studio - Explore the abstract and figurative artwork of Ronak Bahador, featuring themes of identity, spirituality, and cultural heritage." />
  <meta name="keywords" content="Ronak Bahador, baab studio, Abstract Art, Modern Art, Painting, Identity, Spirituality, Cultural Heritage" />

  <!-- Open Graph Meta Tags for Social Media Sharing -->
  <meta property="og:title" content="baab studio" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="veil-of-the-self.jpg" />
  <meta property="og:url" content="https://baab.studio" />
  <meta property="og:description" content="Explore the artwork of Ronak Bahador at baab studio, featuring abstract and figurative pieces that explore identity, spirituality, and cultural heritage." />

  <!-- Twitter Card Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="baab studio" />
  <meta name="twitter:description" content="Discover the themes of identity, spirituality, and cultural heritage in Ronak Bahador's artwork." />
  <meta name="twitter:image" content="veil-of-the-self.jpg" />
</svelte:head>

<!-- Hero Section -->
<Hero heroImage={heroImage} title={heroTitle} subtitle={heroSubtitle} />

<!-- Gallery Section -->
<Gallery {artworks} title="Featured Artwork" />

<!-- About Section Preview -->
<section id="about" class="about-section section bg-[var(--light-accent)] py-20 relative">
  <div class="container about-container flex flex-col md:flex-row items-center max-w-[1100px] mx-auto">
    <img src="ronak_bahador.jpg" alt="Ronak Bahador" class="about-image w-[280px] h-[280px] rounded-full object-cover mb-10 md:mb-0 md:mr-12 shadow-lg border-[6px] border-white/70 transition-all duration-300" />

    <div class="about-content text-center md:text-left max-w-[800px] relative">
      <h2 class="text-[var(--heading-color)] mb-6 text-3xl md:text-4xl tracking-wide relative inline-block pb-3">About Ronak Bahador</h2>

      <p class="mb-6 leading-[1.8] text-lg">
        Ronak Bahador is an abstract figurative artist whose work explores the intersections of identity, spirituality, and cultural heritage. Through a unique blend of minimalism and expression, Ronak's paintings invite viewers to reflect on the relationship between physical form and inner experience.
      </p>

      <p class="mb-6 leading-[1.8] text-lg">
        Drawing from a rich cultural background, Ronak's work often features elements of calligraphy, gold leaf, and symbolic color palettes that speak to both personal and universal themes, creating a visual language that bridges tradition and contemporary expression.
      </p>

      <a href="/about" class="about-link inline-block py-3 px-8 border-2 border-accent rounded text-accent font-bold tracking-wide relative overflow-hidden transition-all duration-300 mt-4 z-[1]">
        Read More
      </a>
    </div>
  </div>
</section>

<style>
  /* About section styling */
  .about-image:hover {
    transform: scale(1.02);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }

  .about-content h2:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background-color: var(--accent-color);
  }

  @media (min-width: 768px) {
    .about-content h2:after {
      left: 0;
      transform: none;
    }
  }

  /* About link hover effect */
  .about-link:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    background-color: var(--accent-color);
    transition: all var(--transition-time) ease;
    z-index: -1;
  }

  .about-link:hover {
    color: var(--light-accent);
  }

  .about-link:hover:after {
    height: 100%;
  }
</style>
