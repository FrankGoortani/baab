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
		class="absolute top-0 left-0 z-[1] h-full w-full object-cover opacity-40"
		style="background: url('{heroImage}') center/cover no-repeat; filter: blur(1px);"
	></div>

	<div class="relative z-[2] max-w-[800px] p-8">
		<h1 class="text-accent mb-4 text-4xl tracking-wider lowercase md:text-5xl lg:text-6xl">
			{title}
		</h1>
		<p class="mx-auto mb-8 max-w-[600px] text-xl text-[var(--text-color)] opacity-90">
			{subtitle}
		</p>
		<div class="mx-auto my-8 h-[2px] w-[120px] bg-[var(--gold-accent-subtle)]"></div>
	</div>
</section>
