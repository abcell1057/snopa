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
        sans: ['Manrope', 'Helvetica', 'Arial', 'sans-serif'],
      },
      padding: {
        "12": "48px",
        "18": "72px",
        "20": "80px",
        "25": "100px",
        "30": "120px",
        "50": "200px",
        "64": "256px",
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
    plugin(function({ addBase, theme }) { // 直接使用 theme
      addBase({
        'html': { color: theme('colors.neutral.700') }, // 預設字體顏色
        'h1': { fontSize: theme('fontSize.7xl') }, 
        'h2': { fontSize: theme('fontSize.6xl') }, 
        'h3': { fontSize: theme('fontSize.3xl') }, 
        'h4': { fontSize: theme('fontSize.2xl') }, 
        'body': { fontSize: theme('fontSize.basefont') }, 

        '@media (max-width: 640px)': {
          'h1': { fontSize: theme('fontSize.6xl') }, 
          'h2': { fontSize: theme('fontSize.5xl') }, 
          'h3': { fontSize: theme('fontSize.2xl') }, 
          'h4': { fontSize: theme('fontSize.xl') }, 
          'body': { fontSize: theme('fontSize.smfont') }, 
        },
        
        ':root': {
          '--primary-400': theme('colors.primary.400'), // 定義顏色變數後可在 CSS 中使用
          '--primary-100': theme('colors.primary.100'), 
          '--primary-50': theme('colors.primary.50'), 
          '--neutral-700': theme('colors.neutral.700'), 
          '--neutral-400': theme('colors.neutral.400'), 
          '--neutral-100': theme('colors.neutral.100'), 
          '--neutral-50': theme('colors.neutral.50'), 
          '--neutral-20': theme('colors.neutral.20'), 
          '--neutral-0': theme('colors.neutral.0'), 
        },
      });
    }),
  ],
};
