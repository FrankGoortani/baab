<script lang="ts">
  import { onMount } from 'svelte';

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
  class="fixed top-0 left-0 w-full z-50 py-5 transition-all duration-300 border-b border-accent/10"
  style={scrolled ? 'background-color: rgba(247, 247, 242, 0.95); box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);' : ''}>
  <div class="container flex justify-between items-center">
    <div class="logo text-2xl font-bold tracking-wider text-accent py-1 relative">
      <a href="/" class="flex items-center text-accent whitespace-nowrap relative">
        <img src="/baab.png" alt="baab studio logo" class="h-[45px] w-auto mr-3" />
        <span class="logo-text">baab studio</span>
      </a>
    </div>

    <button
      class="nav-toggle block lg:hidden bg-transparent border-0 text-2xl text-accent cursor-pointer"
      on:click={toggleNav}
      aria-label="Toggle navigation"
      aria-expanded={navActive}>
      <i class="fas fa-bars"></i>
    </button>

    <nav class="nav-menu fixed lg:static top-0 left-0 w-full h-screen lg:h-auto bg-background flex flex-col lg:flex-row items-center justify-center transform {navActive ? 'translate-y-0' : '-translate-y-full'} lg:translate-y-0 transition-transform duration-300 z-[900]">
      <button
        class="nav-close absolute top-6 right-6 lg:hidden bg-transparent border-0 text-2xl text-accent cursor-pointer"
        on:click={closeNav}
        aria-label="Close navigation">
        <i class="fas fa-times"></i>
      </button>

      <ul class="list-none text-center lg:flex">
        <li class="my-6 lg:my-0 lg:mx-4">
          <a
            href="/"
            class="text-xl lg:text-base text-accent relative py-1 hover:text-[var(--gold-accent)]"
            on:click={closeNav}
            class:active={$page.url.pathname === '/'}>
            Home
          </a>
        </li>
        <li class="my-6 lg:my-0 lg:mx-4">
          <a
            href="/#gallery"
            class="text-xl lg:text-base text-accent relative py-1 hover:text-[var(--gold-accent)]"
            on:click={closeNav}>
            Gallery
          </a>
        </li>
        <li class="my-6 lg:my-0 lg:mx-4">
          <a
            href="/about"
            class="text-xl lg:text-base text-accent relative py-1 hover:text-[var(--gold-accent)]"
            on:click={closeNav}
            class:active={$page.url.pathname === '/about'}>
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
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--gold-accent);
  }

  /* Custom hover effects */
  a::after {
    content: "";
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
