/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'blackOpaque': '#333',
        'blueLight': '#006699'
      },
      borderColor: {
        'blackLight': '#111',
        'whiteLight': '#dddddd'
      },
      padding: {
        '5p': '5px'
      },
      width: {
        '600': '600px'
      },
      height: {
        '400': '400px'
      },
      lineHeight: {
        'md': '50px'
      }
    }
  },
  plugins: [],
}
