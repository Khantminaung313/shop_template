/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'd_blue': '#33acf7',
        'd_yellow': '#aeaf8b',
        'd_gray': '#898589',
        'd_white': '#ffffff',
        'd_black': '#000000'
      }
    },
  },
  plugins: [],
}