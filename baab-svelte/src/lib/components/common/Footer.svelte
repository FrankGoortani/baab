<script lang="ts">
  // Get current year for copyright
  const currentYear = new Date().getFullYear();
</script>

<footer class="bg-accent text-[var(--light-accent)] py-12 pb-8 relative">
  <div class="absolute top-0 left-0 right-0 h-[5px] bg-gradient-to-r from-[var(--gold-accent)] via-[var(--heading-color)] to-[var(--gold-accent)] opacity-60"></div>

  <div class="container flex flex-col items-center">
    <div class="footer-logo flex flex-col items-center mb-6 relative">
      <img src="/baab.png" alt="baab studio logo" class="h-[45px] w-auto mb-3 brightness-0 invert" />
      <div class="text-2xl font-bold tracking-wider">baab studio</div>
    </div>

    <nav class="footer-nav my-6">
      <ul class="list-none flex justify-center">
        <li class="mx-4">
          <a
            href="/"
            class="text-[var(--light-accent)] no-underline transition-all duration-300 text-lg relative py-1 hover:text-white">
            Home
          </a>
        </li>
        <li class="mx-4">
          <a
            href="/#gallery"
            class="text-[var(--light-accent)] no-underline transition-all duration-300 text-lg relative py-1 hover:text-white">
            Gallery
          </a>
        </li>
        <li class="mx-4">
          <a
            href="/about"
            class="text-[var(--light-accent)] no-underline transition-all duration-300 text-lg relative py-1 hover:text-white">
            About
          </a>
        </li>
        <li class="mx-4">
          <a
            href="mailto:contact@baab.studio"
            class="text-[var(--light-accent)] no-underline transition-all duration-300 text-lg relative py-1 hover:text-white">
            Contact
          </a>
        </li>
      </ul>
    </nav>

    <p class="footer-copyright text-sm opacity-80 mt-6">
      &copy; {currentYear} baab studio. All rights reserved.
    </p>
  </div>
</footer>

<style>
  /* Custom hover effects for footer links */
  a::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background-color: white;
    transition: width var(--transition-time) ease;
  }

  a:hover::after {
    width: 100%;
  }

  /* Footer logo decoration */
  .footer-logo::after {
    content: "";
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
