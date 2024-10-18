/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': {
          400: '#0A61F5',
          100: '#46B2FF',
          50: '#BBE0F0',
        },
        'neutral': {
          700: '#30343B',
          400: '#778599',
          100: '#B9C4CD',
          50: '#E9EDF0',
          20: '#F7F7F7',
          0: '#FFFFFF',
        },
        'default': '#30343B',
      },
      fontFamily: {
        sans: ['Manrope','Helvetica', 'Arial', 'sans-serif']
      },
      padding: {
        "12": "48px",
        "18": "72px",
        "25": "100px",
        "30": "120px",
        "50": "200px",
        "64": "256px"
      },
      width: {
        "680-px": "680px",
      },
      height: {
        "100": "400px",
      },
      maxWidth: {
        "660-px": "660px",
        "screen-3xl": "1680px",
        "screen-4xl": "1920px",
      },
      minHeight: {
        "768-px": "768px",
      },
    },
  },
  plugins: [
    plugin(function({ addBase, config, theme }) {
      addBase({
        'html': { color: theme('colors.neutral.700')}, // 調整預設字體顏色
        'h1': { fontSize: config('theme.fontSize.7xl')},
        'h2': { fontSize: config('theme.fontSize.6xl')},
        'h3': { fontSize: config('theme.fontSize.3xl')},
        'h4': { fontSize: config('theme.fontSize.2xl')},
      });
      
    })
  ],
}

