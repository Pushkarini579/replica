/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rhetorica-black': '#000000',
        'rhetorica-gold': '#c5a059',
        'rhetorica-cream': '#f4ebd0', // Cream background for events
        'rhetorica-white': '#ffffff',
      },
      fontFamily: {
        pirata: ['"Pirata One"', 'system-ui'],
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
