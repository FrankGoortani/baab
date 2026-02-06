<script lang="ts">
	const currentYear = new Date().getFullYear();
</script>

<footer class="bg-[#3d5a56] py-16 text-white">
	<div class="border-t border-[var(--gold-accent-subtle)]/30"></div>

	<div class="container flex flex-col items-center gap-8">
		<div class="flex flex-col items-center">
			<img
				src="/baab.png"
				alt="baab studio logo"
				class="mb-3 h-[45px] w-auto brightness-0 invert"
			/>
			<div class="text-2xl tracking-wider">baab studio</div>
		</div>

		<nav>
			<ul class="flex list-none justify-center gap-8">
				<li><a href="/" class="footer-link">Home</a></li>
				<li><a href="/#gallery" class="footer-link">Gallery</a></li>
				<li><a href="/about" class="footer-link">About</a></li>
				<li><a href="mailto:contact@baab.studio" class="footer-link">Contact</a></li>
			</ul>
		</nav>

		<p class="text-sm opacity-60">
			&copy; {currentYear} baab studio. All rights reserved.
		</p>
	</div>
</footer>

<style>
	.footer-link {
		color: rgba(255, 255, 255, 0.8);
		text-decoration: none;
		transition: color var(--transition-medium) var(--ease-calm);
	}

	.footer-link:hover {
		color: var(--gold-accent);
	}
</style>
