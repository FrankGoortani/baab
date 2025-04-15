<script>
  export let heroImage = 'eclipse-of-the-soul.jpg';
  export let title = 'baab studio';
  export let subtitle = 'A journey through abstraction and form, exploring identity, spirituality, and cultural heritage through mindful expression.';
</script>

<section id="hero" class="hero h-screen flex items-center justify-center text-center relative overflow-hidden bg-[var(--light-accent)] mt-0">
  <div class="hero-image absolute top-0 left-0 w-full h-full object-cover opacity-85 z-[1] transition-transform duration-[20s]"
       style="background: url('{heroImage}') center/cover no-repeat;">
  </div>

  <div class="hero-content relative z-[2] p-8 bg-background/70 rounded backdrop-blur-sm max-w-[800px]">
    <h1 class="text-4xl md:text-5xl lg:text-6xl text-accent mb-4 tracking-wider lowercase font-bold">{title}</h1>
    <p class="text-xl text-[var(--text-color)] max-w-[600px] mx-auto mb-8 leading-relaxed opacity-90">
      {subtitle}
    </p>
    <div class="hero-divider w-[150px] h-[4px] bg-accent mx-auto my-8 opacity-80 relative"></div>
  </div>
</section>

<style>
  /* Enhanced zoom effect on hover */
  .hero:hover .hero-image {
    transform: scale(1.05);
  }

  /* Hero divider styling */
  .hero-divider:after {
    content: "";
    position: absolute;
    height: 1px;
    width: 100px;
    background-color: var(--gold-accent);
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
  }
</style>
