<script lang="ts">
	export let heroImage: string = 'eclipse-of-the-soul.jpg';
	export let title: string = 'baab studio';
	export let subtitle: string =
		'A journey through abstraction and form, exploring identity, spirituality, and cultural heritage through mindful expression.';
</script>

<section
	id="hero"
	class="hero relative mt-0 flex h-screen items-center justify-center overflow-hidden bg-[var(--light-accent)] text-center"
>
	<div
		class="hero-image absolute top-0 left-0 z-[1] h-full w-full object-cover opacity-85 transition-transform duration-[20s]"
		style="background: url('{heroImage}') center/cover no-repeat;"
	></div>

	<div
		class="hero-content bg-background/70 relative z-[2] max-w-[800px] rounded p-8 backdrop-blur-sm"
	>
		<h1
			class="text-accent mb-4 text-4xl font-bold tracking-wider lowercase md:text-5xl lg:text-6xl"
		>
			{title}
		</h1>
		<p
			class="mx-auto mb-8 max-w-[600px] text-xl leading-relaxed text-[var(--text-color)] opacity-90"
		>
			{subtitle}
		</p>
		<div class="hero-divider bg-accent relative mx-auto my-8 h-[4px] w-[150px] opacity-80"></div>
	</div>
</section>

<style>
	/* Enhanced zoom effect on hover */
	.hero:hover .hero-image {
		transform: scale(1.05);
	}

	/* Hero divider styling */
	.hero-divider:after {
		content: '';
		position: absolute;
		height: 1px;
		width: 100px;
		background-color: var(--gold-accent);
		bottom: -8px;
		left: 50%;
		transform: translateX(-50%);
	}
</style>
