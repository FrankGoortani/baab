<script lang="ts">
	// Get current year for copyright
	const currentYear = new Date().getFullYear();
</script>

<footer class="relative bg-[#2E4A46] py-12 pb-8 text-white">
	<div
		class="absolute top-0 right-0 left-0 h-[5px] bg-gradient-to-r from-[var(--gold-accent)] via-[var(--heading-color)] to-[var(--gold-accent)] opacity-60"
	></div>

	<div class="container flex flex-col items-center">
		<div class="footer-logo relative mb-6 flex flex-col items-center">
			<img
				src="/baab.png"
				alt="baab studio logo"
				class="mb-3 h-[45px] w-auto brightness-0 invert"
			/>
			<div class="text-2xl font-bold tracking-wider">baab studio</div>
		</div>

		<nav class="footer-nav my-6">
			<ul class="flex list-none justify-center">
				<li class="mx-4">
					<a
						href="/"
						class="relative py-1 text-lg text-white no-underline transition-all duration-300 hover:text-[var(--gold-accent)]"
					>
						Home
					</a>
				</li>
				<li class="mx-4">
					<a
						href="/#gallery"
						class="relative py-1 text-lg text-white no-underline transition-all duration-300 hover:text-[var(--gold-accent)]"
					>
						Gallery
					</a>
				</li>
				<li class="mx-4">
					<a
						href="/about"
						class="relative py-1 text-lg text-white no-underline transition-all duration-300 hover:text-[var(--gold-accent)]"
					>
						About
					</a>
				</li>
				<li class="mx-4">
					<a
						href="mailto:contact@baab.studio"
						class="relative py-1 text-lg text-white no-underline transition-all duration-300 hover:text-[var(--gold-accent)]"
					>
						Contact
					</a>
				</li>
			</ul>
		</nav>

		<p class="footer-copyright mt-6 text-sm opacity-80">
			&copy; {currentYear} baab studio. All rights reserved.
		</p>
	</div>
</footer>

<style>
	/* Custom hover effects for footer links */
	a::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 0;
		height: 1px;
		background-color: var(--gold-accent);
		transition: width var(--transition-time) ease;
	}

	a:hover::after {
		width: 100%;
	}

	/* Footer logo decoration */
	.footer-logo::after {
		content: '';
		position: absolute;
		bottom: -10px;
		left: 50%;
		transform: translateX(-50%);
		width: 40px;
		height: 2px;
		background-color: var(--light-accent);
		opacity: 0.5;
	}
</style>
