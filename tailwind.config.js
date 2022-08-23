/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#ff2a70'
      },
      letterSpacing: {
        wider: '.3em',
        widest: '.6em'
      }
    },
  },
  plugins: [],
}
