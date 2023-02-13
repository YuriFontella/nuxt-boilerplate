const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: [
    "./src/pages/**/*.{vue,js,jsx}",
    "./src/components/**/*.{vue,js,jsx}",
    "./src/layouts/**/*.{vue,js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Roboto Slab', 'serif'],
        body: ['Roboto', 'sans-serif']
      },
      colors: {
        teal: colors.teal,
        rose: colors.rose
      }
    }
  },
  plugins: [require('@tailwindcss/forms')],
}
