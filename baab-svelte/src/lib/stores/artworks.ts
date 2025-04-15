import type { Artwork } from '$lib/utils/types';

// Extending the Artwork interface for our detailed implementation
export interface DetailedArtwork extends Artwork {
  style?: string;
  themes?: string[];
  notableElements?: { title: string; description: string }[];
  interpretation?: string;
  fullDescription?: string;
}

// Artwork data extracted from the original HTML pages
export const artworks: DetailedArtwork[] = [
  {
    title: 'Veil of the Self',
    year: '2023',
    medium: 'Acrylic on Canvas',
    image: '/veil-of-the-self.jpg',
    slug: 'veil-of-the-self',
    style: 'Abstract Minimalism',
    themes: ['Identity', 'Perception', 'Mystery', 'Human Form'],
    fullDescription: '"Veil of the Self" is a striking modern abstract piece that masterfully balances the human form with elements of abstraction, drawing the viewer into a contemplative space between identity and invisibility. The faceless figure at the center of the work is partially obscured by wide, horizontal brushstrokes that create an atmosphere of introspective ambiguity.\n\nThe muted palette, with shades of soft greens, browns, and whites, evokes a sense of serenity, while the absence of detail in the face suggests a meditation on the nature of identity—what is hidden, what is revealed, and what lies beyond surface appearances. The artist uses minimalism and subtle texture to invite viewers into a dialogue with their own sense of self, asking them to ponder the layers that define individual identity.',
    notableElements: [
      {
        title: 'Abstract Representation of the Human Form',
        description: 'The figure is devoid of facial details, encouraging universal interpretation and reflection on the collective human experience.'
      },
      {
        title: 'Textural Contrast',
        description: 'The juxtaposition of smooth, deliberate lines with rough, blurred edges reflects the dynamic tension between clarity and mystery.'
      },
      {
        title: 'Philosophical Undertones',
        description: 'The artwork\'s interplay of presence and absence serves as a visual metaphor for the internal and external aspects of human consciousness.'
      }
    ],
    interpretation: 'This painting can be seen as a reflection on the elusive nature of identity in the modern world. It captures the human desire to define oneself while acknowledging the inherent mystery and fluidity of personal identity. Ronak Bahador\'s use of abstraction invites the viewer to look beyond the physical form and engage with the deeper, more nuanced aspects of self-perception.'
  },
  {
    title: 'Ethereal Ascent',
    year: '2023',
    medium: 'Mixed Media on Canvas',
    image: '/ethereal-ascent.jpg',
    slug: 'ethereal-ascent',
    style: 'Abstract Figurative',
    themes: ['Identity', 'Human Condition', 'Spirituality', 'Isolation'],
    fullDescription: '"Ethereal Ascent" is a powerful abstract piece that captures the complexity of human existence. With its abstracted human figure seemingly in a state of transformation, this piece evokes the viewer\'s contemplation of life, identity, and spirituality. The muted golds and browns suggest a raw, grounded humanity, while the surrounding gray strokes hint at a universe of unknown forces and emotions.\n\nThe flowing, elongated central figure, both human and abstract, rises from a nebulous void, calling into question the nature of self and existence. Through its minimalist and raw form, Bahador has captured the balance between the earthly and the divine, isolation and connection.',
    notableElements: [
      {
        title: 'Minimalist Figure',
        description: 'The figure, both defined and abstract, draws the viewer into a deep contemplation of self and soul.'
      },
      {
        title: 'Emotional Contrast',
        description: 'The contrast between the figure\'s warm, organic tones and the cold, chaotic background creates a dynamic tension.'
      },
      {
        title: 'Textural Detail',
        description: 'The textured strokes and uneven application of color give the work a visceral, tactile quality that enhances its emotional impact.'
      }
    ],
    interpretation: '"Ethereal Ascent" delves into themes of transformation, spiritual growth, and the inner human struggle. It reflects the uncertain nature of identity, where form and meaning blur into the intangible forces of existence. This painting is a meditation on ascension—both in the metaphysical and existential sense—where the viewer is left to grapple with their own interpretation of life\'s ephemeral nature.'
  },
  {
    title: 'Shadows of Existence',
    year: '2023',
    medium: 'Mixed Media on Canvas',
    image: '/shadows-of-existence.jpg',
    slug: 'shadows-of-existence',
    style: 'Abstract Figurative',
    themes: ['Isolation', 'Human Identity', 'Spirituality', 'Alienation'],
    fullDescription: '"Shadows of Existence" is an evocative and enigmatic piece by Ronak Bahador that delves into the human condition through abstract representations of the human form. The shadowy figures, painted in ethereal tones and streaks, evoke feelings of isolation, detachment, and a yearning for connection.\n\nThe dark green background serves as a mysterious, almost otherworldly space, enveloping the figures in a dream-like haze. The central figure, with its fluid, undefined shape, hints at the fleeting nature of identity, while the red horizontal streak across the canvas disrupts the tranquility, suggesting conflict or separation.',
    notableElements: [
      {
        title: 'Abstract Figures',
        description: 'The shadowy, faceless forms are haunting yet captivating, allowing the viewer to project their own emotions and interpretations onto the figures.'
      },
      {
        title: 'Use of Color',
        description: 'The muted greens, purples, and reds create a somber, reflective mood, while the contrasting textures evoke a sense of depth and movement.'
      },
      {
        title: 'Textural Complexity',
        description: 'The thick layering of paint and use of dripping techniques give the painting a tactile, organic feel, adding to its emotional resonance.'
      }
    ],
    interpretation: '"Shadows of Existence" can be seen as a meditation on the complexities of human existence. The figures\' vague and shifting forms reflect the fluid nature of identity and the existential challenges we face as individuals. The painting invites contemplation on themes of alienation, spirituality, and the fragmented self in the modern world.'
  },
  {
    title: 'Pomegranate Reverie',
    year: '2023',
    medium: 'Mixed Media on Canvas',
    image: '/pomegranate-reverie.jpg',
    slug: 'pomegranate-reverie',
    style: 'Nature-Inspired, Contemporary',
    themes: ['Life', 'Abundance', 'Nature', 'Cultural Symbolism'],
    fullDescription: '"Pomegranate Reverie" is a mesmerizing depiction of nature\'s bounty and spiritual symbolism. The vibrant, luscious pomegranates, captured in stunning reds, symbolize life, fertility, and abundance. Set against a golden, intricately patterned background, the painting creates a dreamlike interplay between the natural and the ornamental.\n\nThe delicate balance between the organic forms of the pomegranates and the structured, ornate patterns suggests a meditation on the interconnectedness of nature and culture. The gold elements shimmer with light, creating a heavenly, ethereal atmosphere that invites contemplation of life\'s richness and beauty.',
    notableElements: [
      {
        title: 'Vibrant Pomegranates',
        description: 'The lush reds of the pomegranates are a vivid representation of life, fertility, and abundance.'
      },
      {
        title: 'Intricate Patterns',
        description: 'The golden geometric patterns evoke timeless cultural motifs, adding layers of meaning to the piece.'
      },
      {
        title: 'Textural Detail',
        description: 'The contrast between the natural, flowing branches and the structured background creates a dynamic and visually captivating composition.'
      }
    ],
    interpretation: '"Pomegranate Reverie" reflects the beauty of nature while also touching on themes of spirituality and abundance. The balance between the organic and the ornate invites viewers to reflect on the cycles of life and the deep-rooted cultural significance of nature\'s fruits.'
  },
  {
    title: 'Eclipse of the Soul',
    year: '2023',
    medium: 'Mixed Media on Canvas (Acrylic, Gold Leaf, Calligraphy)',
    image: '/eclipse-of-the-soul.jpg',
    slug: 'eclipse-of-the-soul',
    style: 'Abstract Figurative',
    themes: ['Spirituality', 'Identity', 'Reflection', 'Cultural Heritage'],
    fullDescription: '"Eclipse of the Soul" is a deeply introspective piece by Ronak Bahador that merges the abstract human form with elements of cultural symbolism and spiritual reflection. The central figure, painted in warm, earthy tones and adorned with gold leaf, sits with its back to the viewer in a posture that suggests contemplation and vulnerability. The textured surface and layered brushstrokes bring a dynamic quality to the work, creating a sense of movement and life beneath the stillness.\n\nThe presence of Arabic calligraphy subtly woven into the background adds a cultural and spiritual dimension to the piece. This text, merging with the figure, serves as a bridge between the material and the ethereal, speaking to the tension between the human experience and a higher spiritual reality. Bahador\'s use of gold leaf creates a striking contrast between light and shadow, symbolizing moments of transcendence and inner radiance — the "eclipse" where the soul seeks to rise above the limitations of the physical form.',
    notableElements: [
      {
        title: 'Abstract Human Form',
        description: 'The seated figure\'s introspective pose, combined with its back turned to the viewer, evokes a sense of quiet contemplation, inviting the viewer to project their own emotional state onto the image.'
      },
      {
        title: 'Integration of Calligraphy',
        description: 'The Arabic calligraphy adds cultural depth, suggesting an inner dialogue between the figure and its heritage or spirituality.'
      },
      {
        title: 'Textural Layers',
        description: 'The interplay of smooth and rough textures highlights the contrast between the material body and the ephemeral spirit, emphasizing the theme of transcendence.'
      },
      {
        title: 'Use of Gold Leaf',
        description: 'The application of gold introduces a divine, luminous quality to the figure, symbolizing spiritual enlightenment and purity.'
      }
    ],
    interpretation: '"Eclipse of the Soul" can be interpreted as a meditation on the balance between physical existence and spiritual transcendence. The figure\'s introspective posture suggests a moment of personal reflection, while the surrounding elements — calligraphy, gold leaf, and abstract textures — allude to the universality of the spiritual journey. Through this work, Ronak Bahador invites the viewer to contemplate their own spiritual path, the nature of identity, and the ways in which culture and heritage shape personal introspection.'
  }
];

/**
 * Get all artworks
 */
export function getAllArtworks(): DetailedArtwork[] {
  return artworks;
}

/**
 * Get a specific artwork by slug
 */
export function getArtworkBySlug(slug: string): DetailedArtwork | undefined {
  return artworks.find(artwork => artwork.slug === slug);
}
