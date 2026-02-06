<script lang="ts">
	const stampImagePath = '/ronak_stamp.png';
</script>

<svelte:head>
	<title>About | baab studio</title>
	<meta
		name="description"
		content="Learn about Ronak Bahador, the artist behind baab studio, and explore the vision and themes behind the artwork."
	/>
</svelte:head>

<div class="about-page pt-32 pb-16">
	<div class="container mx-auto max-w-[800px] px-4">
		<h1 class="mb-8 text-3xl text-[var(--heading-color)] md:text-4xl">About the Artist</h1>

		<div class="about-content">
			<div class="artist-stamp mb-10 flex justify-center">
				<img src={stampImagePath} alt="Ronak Bahador" class="h-auto w-32" />
			</div>

			<section class="mb-10">
				<h2 class="mb-4 text-2xl text-[var(--heading-color)]">Artistic Vision</h2>
				<p class="mb-6 text-lg">
					Ronak Bahador is an abstract figurative artist whose work explores the delicate balance
					between form and abstraction, the physical and the spiritual, the personal and the
					universal. Through a distinctive visual language that combines minimalist techniques with
					rich cultural symbolism, Ronak invites viewers to contemplate the deeper aspects of human
					experience.
				</p>
			</section>

			<section class="mb-10">
				<h2 class="mb-4 text-2xl text-[var(--heading-color)]">Themes & Inspiration</h2>
				<p class="mb-6 text-lg">Three core themes inform Ronak's artistic practice:</p>

				<div class="theme-section mb-6">
					<h3 class="mb-2 text-xl text-[var(--accent-color)]">Mindfulness</h3>
					<p class="mb-4 text-lg">
						Many of Ronak's pieces reflect a state of mindful contemplation, often depicting figures
						in introspective poses or moments of quiet reflection. The deliberate use of negative
						space and balanced composition creates an atmosphere that invites the viewer to slow
						down and engage in their own moment of mindfulness.
					</p>
				</div>

				<div class="theme-section mb-6">
					<h3 class="mb-2 text-xl text-[var(--accent-color)]">Cultural Identity</h3>
					<p class="mb-4 text-lg">
						Drawing from a rich heritage, Ronak incorporates elements of cultural significance into
						many works. Arabic and Persian calligraphy appears as both textual and decorative
						elements, creating a bridge between traditional art forms and contemporary expression.
						This exploration of cultural identity speaks to both personal history and broader
						questions of belonging in a global context.
					</p>
				</div>

				<div class="theme-section mb-6">
					<h3 class="mb-2 text-xl text-[var(--accent-color)]">Spiritual Exploration</h3>
					<p class="mb-4 text-lg">
						The spiritual dimension of human experience is a recurring theme in Ronak's work.
						Through the use of symbolic imagery, gold leaf accents, and compositions that suggest
						transformation or transcendence, the artwork invites contemplation of what lies beyond
						the material world. This is not tied to any specific religious tradition, but rather
						explores spirituality as a universal aspect of human consciousness.
					</p>
				</div>
			</section>

			<section class="mb-10">
				<h2 class="mb-4 text-2xl text-[var(--heading-color)]">Technique & Process</h2>
				<p class="mb-6 text-lg">
					Ronak works primarily with acrylic on canvas, often incorporating mixed media elements
					such as gold leaf and calligraphy. The artistic process typically begins with intuitive
					mark-making and gradually evolves through a dialogue between conscious intention and
					spontaneous expression. This approach allows each piece to develop its own identity while
					maintaining cohesion within the broader body of work.
				</p>
			</section>

			<section class="mb-10">
				<h2 class="mb-4 text-2xl text-[var(--heading-color)]">Artist Statement</h2>
				<div class="artist-statement rounded-md bg-[var(--light-accent)] p-6">
					<p class="mb-4 text-lg italic">
						"My work explores the spaces between—between abstract and figurative, between cultural
						traditions, between the seen and unseen aspects of human experience. I am fascinated by
						the way our inner worlds shape how we perceive reality, and how art can create a meeting
						point between diverse perspectives.
					</p>
					<p class="mb-4 text-lg italic">
						Through my practice, I seek to create visual experiences that invite pause and
						reflection. In a world that often moves too quickly, I believe there is value in
						creating moments of contemplation where we might recognize our shared humanity beyond
						the boundaries of language, culture, or belief.
					</p>
					<p class="text-lg italic">
						Each piece is an invitation to look both outward and inward, to consider not only what
						we see, but how we see it. In this way, I hope my work contributes to a more mindful and
						connected world."
					</p>
				</div>
			</section>

			<div class="button-container mt-12 flex justify-center">
				<a
					href="/#gallery"
					class="view-gallery-btn transition-calm-bg rounded-lg bg-[var(--accent-color)] px-8 py-3 text-white"
				>
					View Gallery
				</a>
			</div>
		</div>
	</div>
</div>

<style>
	.artist-statement {
		border-left: 4px solid var(--gold-accent-subtle);
	}

	.theme-section {
		border-left: 2px solid var(--gold-accent-subtle);
		padding-left: 1rem;
	}

	@media (max-width: 767px) {
		.theme-section {
			border-left: none;
			padding-left: 0;
		}
	}

	.view-gallery-btn:hover {
		background-color: var(--heading-color);
	}
</style>
