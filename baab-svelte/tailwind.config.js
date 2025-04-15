/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background-color)',
        text: 'var(--text-color)',
        heading: 'var(--heading-color)',
        accent: 'var(--accent-color)',
        'light-accent': 'var(--light-accent)',
        'gold-accent': 'var(--gold-accent)',
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
      },
      transitionDuration: {
        DEFAULT: 'var(--transition-time)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
