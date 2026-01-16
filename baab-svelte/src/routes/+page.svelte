<script lang="ts">
	import Hero from '$lib/components/hero/Hero.svelte';
	import Gallery from '$lib/components/gallery/Gallery.svelte';
	import { getAllArtworks } from '$lib/stores/artworks';

	// Get artwork data from the store
	const artworks = getAllArtworks();

	const heroImage = 'eclipse-of-the-soul.jpg';
	const heroTitle = 'baab studio';
	const heroSubtitle =
		'A journey through abstraction and form, exploring identity, spirituality, and cultural heritage through mindful expression.';
</script>

<svelte:head>
	<title>baab studio</title>
	<meta
		name="description"
		content="baab studio - Explore the abstract and figurative artwork of Ronak Bahador, featuring themes of identity, spirituality, and cultural heritage."
	/>
	<meta
		name="keywords"
		content="Ronak Bahador, baab studio, Abstract Art, Modern Art, Painting, Identity, Spirituality, Cultural Heritage"
	/>

	<!-- Open Graph Meta Tags for Social Media Sharing -->
	<meta property="og:title" content="baab studio" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="veil-of-the-self.jpg" />
	<meta property="og:url" content="https://baab.studio" />
	<meta
		property="og:description"
		content="Explore the artwork of Ronak Bahador at baab studio, featuring abstract and figurative pieces that explore identity, spirituality, and cultural heritage."
	/>

	<!-- Twitter Card Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="baab studio" />
	<meta
		name="twitter:description"
		content="Discover the themes of identity, spirituality, and cultural heritage in Ronak Bahador's artwork."
	/>
	<meta name="twitter:image" content="veil-of-the-self.jpg" />
</svelte:head>

<!-- Hero Section -->
<Hero {heroImage} title={heroTitle} subtitle={heroSubtitle} />

<!-- Gallery Section -->
<Gallery {artworks} title="Featured Artwork" />

<!-- About Section Preview -->
<section id="about" class="about-section section relative bg-[var(--light-accent)] py-20">
	<div
		class="about-container container mx-auto flex max-w-[1100px] flex-col items-center md:flex-row"
	>
		<img
			src="ronak_bahador.jpg"
			alt="Ronak Bahador"
			class="about-image mb-10 h-[280px] w-[280px] rounded-full border-[6px] border-white/70 object-cover shadow-lg transition-all duration-300 md:mr-12 md:mb-0"
		/>

		<div class="about-content relative max-w-[800px] text-center md:text-left">
			<h2
				class="relative mb-6 inline-block pb-3 text-3xl tracking-wide text-[var(--heading-color)] md:text-4xl"
			>
				About Ronak Bahador
			</h2>

			<p class="mb-6 text-lg leading-[1.8]">
				Ronak Bahador is an abstract figurative artist whose work explores the intersections of
				identity, spirituality, and cultural heritage. Through a unique blend of minimalism and
				expression, Ronak's paintings invite viewers to reflect on the relationship between physical
				form and inner experience.
			</p>

			<p class="mb-6 text-lg leading-[1.8]">
				Drawing from a rich cultural background, Ronak's work often features elements of
				calligraphy, gold leaf, and symbolic color palettes that speak to both personal and
				universal themes, creating a visual language that bridges tradition and contemporary
				expression.
			</p>

			<a
				href="/about"
				class="about-link border-accent text-accent relative z-[1] mt-4 inline-block overflow-hidden rounded border-2 px-8 py-3 font-bold tracking-wide transition-all duration-300"
			>
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
		content: '';
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
		content: '';
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
