/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-blue': '#000080',   // Deep Navy Blue
        'gold-yellow': '#FFD700', // Gold/Yellow
        'clean-white': '#FFFFFF', // Clean White
        'light-grey': '#F5F5F5',  // Light Grey
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Lora', 'serif'] // Keeping Lora for headings as previously defined
      }
    },
  },
  plugins: [],
}

