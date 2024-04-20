/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*.js"],
  theme: {
    extend: {
      screens: {
        'widescreen': { 'raw': '(min-aspect-ratio: 3/2)' },
        'tallscreen': { 'raw': '(max-aspect-ratio: 13/20)' },
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '50%': { transform: 'scaleY(1.2)' },
          '70%': { transform: 'scaleY(1)' },
          '85%': { transform: 'scaleY(1.1)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.8s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}
