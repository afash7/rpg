const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      boxShadow:{
        glass: 'inset 0 2px 22px 0 rgba(255, 255, 255, 0.6);',
      },
      colors:{
        'gray': colors.gray
      }
    },
  },
  plugins: [],
}
