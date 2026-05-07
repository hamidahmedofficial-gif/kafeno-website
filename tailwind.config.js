/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#d0833d',
        dark: '#1d1d1d',
        background: '#ffffff',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        ui: ['Outfit', 'sans-serif'],
        label: ['Metrophobic', 'sans-serif'],
        sans: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
