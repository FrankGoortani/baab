<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	export let navActive = false;
	export let scrolled = false;

	function toggleNav() {
		navActive = !navActive;
	}

	function closeNav() {
		navActive = false;
	}

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
	class="site-header fixed top-0 left-0 z-50 w-full border-b border-[var(--gold-accent-subtle)]/30 py-5"
	class:scrolled
>
	<div class="container flex items-center justify-between">
		<div class="logo text-accent py-1 text-2xl font-semibold tracking-wider">
			<a href="/" class="text-accent flex items-center whitespace-nowrap">
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
			class="nav-menu bg-background fixed top-0 left-0 z-[900] flex h-screen w-full transform flex-col items-center justify-center lg:static lg:h-auto lg:translate-y-0 lg:flex-row"
			class:translate-y-0={navActive}
			class:-translate-y-full={!navActive}
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
						class="text-accent py-1 text-xl lg:text-base"
						on:click={closeNav}
						class:active={$page.url.pathname === '/'}
					>
						Home
					</a>
				</li>
				<li class="my-6 lg:mx-4 lg:my-0">
					<a href="/#gallery" class="text-accent py-1 text-xl lg:text-base" on:click={closeNav}>
						Gallery
					</a>
				</li>
				<li class="my-6 lg:mx-4 lg:my-0">
					<a
						href="/about"
						class="text-accent py-1 text-xl lg:text-base"
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
	.site-header {
		transition:
			background-color var(--transition-medium) var(--ease-calm),
			box-shadow var(--transition-medium) var(--ease-calm);
	}

	.site-header.scrolled {
		background-color: rgba(249, 248, 244, 0.9);
		backdrop-filter: blur(8px);
		box-shadow: var(--shadow-soft);
	}

	.nav-menu {
		transition: transform var(--transition-slow) var(--ease-calm);
	}

	.active {
		border-bottom: 2px solid var(--gold-accent);
	}

	@media (min-width: 1024px) {
		.nav-menu {
			transform: translateY(0);
		}
	}
</style>
