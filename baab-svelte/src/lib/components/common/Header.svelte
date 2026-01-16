<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	export let navActive = false;
	export let scrolled = false;

	// Toggle mobile navigation
	function toggleNav() {
		navActive = !navActive;
	}

	// Close navigation when clicking on a link
	function closeNav() {
		navActive = false;
	}

	// Handle header scroll effect
	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 50;
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<header
	class="border-accent/10 fixed top-0 left-0 z-50 w-full border-b py-5 transition-all duration-300"
	style={scrolled
		? 'background-color: rgba(247, 247, 242, 0.95); box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);'
		: ''}
>
	<div class="container flex items-center justify-between">
		<div class="logo text-accent relative py-1 text-2xl font-bold tracking-wider">
			<a href="/" class="text-accent relative flex items-center whitespace-nowrap">
				<img src="/baab.png" alt="baab studio logo" class="mr-3 h-[45px] w-auto" />
				<span class="logo-text">baab studio</span>
			</a>
		</div>

		<button
			class="nav-toggle text-accent block cursor-pointer border-0 bg-transparent text-2xl lg:hidden"
			on:click={toggleNav}
			aria-label="Toggle navigation"
			aria-expanded={navActive}
		>
			<i class="fas fa-bars"></i>
		</button>

		<nav
			class="nav-menu bg-background fixed top-0 left-0 flex h-screen w-full transform flex-col items-center justify-center lg:static lg:h-auto lg:flex-row {navActive
				? 'translate-y-0'
				: '-translate-y-full'} z-[900] transition-transform duration-300 lg:translate-y-0"
		>
			<button
				class="nav-close text-accent absolute top-6 right-6 cursor-pointer border-0 bg-transparent text-2xl lg:hidden"
				on:click={closeNav}
				aria-label="Close navigation"
			>
				<i class="fas fa-times"></i>
			</button>

			<ul class="list-none text-center lg:flex">
				<li class="my-6 lg:mx-4 lg:my-0">
					<a
						href="/"
						class="text-accent relative py-1 text-xl hover:text-[var(--gold-accent)] lg:text-base"
						on:click={closeNav}
						class:active={$page.url.pathname === '/'}
					>
						Home
					</a>
				</li>
				<li class="my-6 lg:mx-4 lg:my-0">
					<a
						href="/#gallery"
						class="text-accent relative py-1 text-xl hover:text-[var(--gold-accent)] lg:text-base"
						on:click={closeNav}
					>
						Gallery
					</a>
				</li>
				<li class="my-6 lg:mx-4 lg:my-0">
					<a
						href="/about"
						class="text-accent relative py-1 text-xl hover:text-[var(--gold-accent)] lg:text-base"
						on:click={closeNav}
						class:active={$page.url.pathname === '/about'}
					>
						About
					</a>
				</li>
			</ul>
		</nav>
	</div>
</header>

<style>
	/* Style for active navigation links */
	.active::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 2px;
		background-color: var(--gold-accent);
	}

	/* Custom hover effects */
	a::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 0;
		height: 2px;
		background-color: var(--gold-accent);
		transition: width var(--transition-time) ease;
	}

	a:hover::after {
		width: 100%;
	}

	/* Responsive adjustments */
	@media (min-width: 1024px) {
		.nav-menu {
			transform: translateY(0);
		}
	}
</style>
