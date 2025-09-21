/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ← fixed missing slash too
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#A34A28',    // terracotta
        'secondary': '#E5BB8F',  // aged cream
        'dark': '#4F4A45',       // charcoal brown
        'light': '#F5F0E1',      // parchment
        'accent': '#6B8E23',     // olive green
        'primary-hover': '#8B3F22',
        'secondary-hover': '#D1A77B',
        'accent-hover': '#5A7A1E',
      },
      fontFamily: {
        'vintage': ['"DM Serif Display"', 'serif'],
        'art': ['"Pacifico"', 'cursive'],
        'sans': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'vintage': '0 4px 24px 0 rgba(124, 94, 60, 0.15)',
        'vintage-inner': 'inset 0 2px 8px 0 rgba(124, 94, 60, 0.10)',
      },
      transitionProperty: {
        'colors': 'color, background-color, border-color',
        'spacing': 'margin, padding',
        'transform': 'transform',
        'shadow': 'box-shadow',
      },
      backgroundImage: {
        'grain': "url('https://www.transparenttextures.com/patterns/wood-pattern.png')",
        'paper': "url('https://www.transparenttextures.com/patterns/paper-fibers.png')",
      },
    },
  },
  plugins: [],
}


