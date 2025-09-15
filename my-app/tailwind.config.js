/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ← fixed missing slash too
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


