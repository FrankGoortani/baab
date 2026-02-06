<script lang="ts">
	import Hero from '$lib/components/hero/Hero.svelte';
	import Gallery from '$lib/components/gallery/Gallery.svelte';
	import { getAllArtworks } from '$lib/stores/artworks';

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

	<meta property="og:title" content="baab studio" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="veil-of-the-self.jpg" />
	<meta property="og:url" content="https://baab.studio" />
	<meta
		property="og:description"
		content="Explore the artwork of Ronak Bahador at baab studio, featuring abstract and figurative pieces that explore identity, spirituality, and cultural heritage."
	/>

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="baab studio" />
	<meta
		name="twitter:description"
		content="Discover the themes of identity, spirituality, and cultural heritage in Ronak Bahador's artwork."
	/>
	<meta name="twitter:image" content="veil-of-the-self.jpg" />
</svelte:head>

<Hero {heroImage} title={heroTitle} subtitle={heroSubtitle} />

<Gallery {artworks} title="Featured Artwork" />

<section id="about" class="section bg-[var(--light-accent)] py-24">
	<div class="container mx-auto flex max-w-[1100px] flex-col items-center md:flex-row">
		<img
			src="ronak_bahador.jpg"
			alt="Ronak Bahador"
			class="about-image shadow-soft transition-calm mb-10 h-[280px] w-[280px] rounded-full border-[6px] border-white/70 object-cover md:mr-12 md:mb-0"
		/>

		<div class="max-w-[800px] text-center md:text-left">
			<h2 class="mb-6 inline-block text-3xl tracking-wide text-[var(--heading-color)] md:text-4xl">
				About Ronak Bahador
			</h2>

			<p class="mb-6 text-lg">
				Ronak Bahador is an abstract figurative artist whose work explores the intersections of
				identity, spirituality, and cultural heritage. Through a unique blend of minimalism and
				expression, Ronak's paintings invite viewers to reflect on the relationship between physical
				form and inner experience.
			</p>

			<p class="mb-6 text-lg">
				Drawing from a rich cultural background, Ronak's work often features elements of
				calligraphy, gold leaf, and symbolic color palettes that speak to both personal and
				universal themes, creating a visual language that bridges tradition and contemporary
				expression.
			</p>

			<a
				href="/about"
				class="about-link transition-calm-bg-color mt-4 inline-block rounded-lg border-2 border-[var(--accent-color)] px-8 py-3 font-normal tracking-wide text-[var(--accent-color)]"
			>
				Read More
			</a>
		</div>
	</div>
</section>

<style>
	.about-image:hover {
		box-shadow: var(--shadow-hover);
	}

	.about-link:hover {
		background-color: var(--accent-color);
		color: var(--light-accent);
	}
</style>
