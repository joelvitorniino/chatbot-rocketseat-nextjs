/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
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
        '1.5': '5px'
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
