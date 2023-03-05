/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {

      keyframes: {
        cycle_move: {
          '50%': {  transform: 'translateX(10rem)'},
        },
      },
      animation: {
        'cycle_move': 'cycle_move 3s linear infinite',
      },
      height: {
        'screen-75': '90vh',
        'screen-50': '50vh'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}
