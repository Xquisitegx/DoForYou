/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2b2d42',
        'secondary': '#8d99ae',
        'accent': '#edf2f4',
      }
    },
  },
  plugins: [],
}

