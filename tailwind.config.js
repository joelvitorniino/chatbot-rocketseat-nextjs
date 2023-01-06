/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'blackOpaque': '#333'
      },
      borderColor: {
        'blackLight': '#111'
      }
    }
  },
  plugins: [],
}
