<script>
  import { onMount } from 'svelte';

  // Get image path for the artist stamp
  const stampImagePath = '/ronak_stamp.png';

  // Add any animations or interactions when page loads
  onMount(() => {
    // Animation or other onMount functionality can be added here
  });
</script>

<svelte:head>
  <title>About | baab studio</title>
  <meta name="description" content="Learn about Ronak Bahador, the artist behind baab studio, and explore the vision and themes behind the artwork." />
</svelte:head>

<div class="about-page pt-32 pb-16">
  <div class="container max-w-[800px] mx-auto px-4">
    <h1 class="text-3xl md:text-4xl text-[var(--heading-color)] mb-8 font-bold">About the Artist</h1>

    <div class="about-content">
      <div class="artist-stamp flex justify-center mb-10">
        <img src={stampImagePath} alt="Ronak Bahador" class="w-32 h-auto" />
      </div>

      <section class="mb-10">
        <h2 class="text-2xl text-[var(--heading-color)] mb-4 font-bold">Artistic Vision</h2>
        <p class="text-lg mb-6 leading-relaxed">
          Ronak Bahador is an abstract figurative artist whose work explores the delicate balance between form and abstraction,
          the physical and the spiritual, the personal and the universal. Through a distinctive visual language that combines
          minimalist techniques with rich cultural symbolism, Ronak invites viewers to contemplate the deeper aspects of human experience.
        </p>
      </section>

      <section class="mb-10">
        <h2 class="text-2xl text-[var(--heading-color)] mb-4 font-bold">Themes & Inspiration</h2>
        <p class="text-lg mb-6 leading-relaxed">Three core themes inform Ronak's artistic practice:</p>

        <div class="theme-section pl-0 md:pl-4 mb-6">
          <h3 class="text-xl text-[var(--accent-color)] mb-2 font-bold">Mindfulness</h3>
          <p class="text-lg mb-4 leading-relaxed">
            Many of Ronak's pieces reflect a state of mindful contemplation, often depicting figures in introspective poses
            or moments of quiet reflection. The deliberate use of negative space and balanced composition creates an atmosphere
            that invites the viewer to slow down and engage in their own moment of mindfulness.
          </p>
        </div>

        <div class="theme-section pl-0 md:pl-4 mb-6">
          <h3 class="text-xl text-[var(--accent-color)] mb-2 font-bold">Cultural Identity</h3>
          <p class="text-lg mb-4 leading-relaxed">
            Drawing from a rich heritage, Ronak incorporates elements of cultural significance into many works.
            Arabic and Persian calligraphy appears as both textual and decorative elements, creating a bridge between
            traditional art forms and contemporary expression. This exploration of cultural identity speaks to both
            personal history and broader questions of belonging in a global context.
          </p>
        </div>

        <div class="theme-section pl-0 md:pl-4 mb-6">
          <h3 class="text-xl text-[var(--accent-color)] mb-2 font-bold">Spiritual Exploration</h3>
          <p class="text-lg mb-4 leading-relaxed">
            The spiritual dimension of human experience is a recurring theme in Ronak's work. Through the use of symbolic imagery,
            gold leaf accents, and compositions that suggest transformation or transcendence, the artwork invites contemplation
            of what lies beyond the material world. This is not tied to any specific religious tradition, but rather explores
            spirituality as a universal aspect of human consciousness.
          </p>
        </div>
      </section>

      <section class="mb-10">
        <h2 class="text-2xl text-[var(--heading-color)] mb-4 font-bold">Technique & Process</h2>
        <p class="text-lg mb-6 leading-relaxed">
          Ronak works primarily with acrylic on canvas, often incorporating mixed media elements such as gold leaf and calligraphy.
          The artistic process typically begins with intuitive mark-making and gradually evolves through a dialogue between
          conscious intention and spontaneous expression. This approach allows each piece to develop its own identity while
          maintaining cohesion within the broader body of work.
        </p>
      </section>

      <section class="mb-10">
        <h2 class="text-2xl text-[var(--heading-color)] mb-4 font-bold">Artist Statement</h2>
        <div class="artist-statement bg-[var(--light-accent)] p-6 rounded-md">
          <p class="text-lg mb-4 leading-relaxed italic">
            "My work explores the spaces between—between abstract and figurative, between cultural traditions,
            between the seen and unseen aspects of human experience. I am fascinated by the way our inner worlds
            shape how we perceive reality, and how art can create a meeting point between diverse perspectives.
          </p>
          <p class="text-lg mb-4 leading-relaxed italic">
            Through my practice, I seek to create visual experiences that invite pause and reflection.
            In a world that often moves too quickly, I believe there is value in creating moments of contemplation
            where we might recognize our shared humanity beyond the boundaries of language, culture, or belief.
          </p>
          <p class="text-lg leading-relaxed italic">
            Each piece is an invitation to look both outward and inward, to consider not only what we see,
            but how we see it. In this way, I hope my work contributes to a more mindful and connected world."
          </p>
        </div>
      </section>

      <div class="button-container flex justify-center mt-12">
        <a href="/#gallery" class="bg-[var(--accent-color)] text-white px-8 py-3 rounded-md hover:bg-[var(--gold-accent)] transition-all duration-300">
          View Gallery
        </a>
      </div>
    </div>
  </div>
</div>

<style>
  /* Custom styles specific to the About page */
  .artist-statement {
    border-left: 4px solid var(--gold-accent);
  }

  /* Add a subtle decoration to section headings */
  section h2::after {
    content: "";
    display: block;
    width: 50px;
    height: 2px;
    background-color: var(--gold-accent);
    margin-top: 8px;
  }

  /* Enhance theme sections on hover */
  .theme-section {
    border-left: 0px solid var(--gold-accent);
    padding-left: 0;
    transition: all 0.3s ease;
  }

  @media (min-width: 768px) {
    .theme-section {
      border-left-width: 2px;
      padding-left: 1rem;
    }

    .theme-section:hover {
      border-left-width: 4px;
      padding-left: 1.25rem;
    }
  }
</style>
