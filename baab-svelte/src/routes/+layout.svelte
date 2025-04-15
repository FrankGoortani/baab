<script>
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import '../app.css';
  import Header from '$lib/components/common/Header.svelte';
  import Footer from '$lib/components/common/Footer.svelte';

  let navActive = false;
  let scrolled = false;

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

<Header {navActive} {scrolled} />

<main>
  <slot />
</main>

<Footer />

<svelte:head>
  <!-- Font Awesome for icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
</svelte:head>
