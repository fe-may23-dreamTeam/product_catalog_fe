/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'],
      },
      colors: {
        custom: {
          gray: '#89939A',
          onhover: '#313237',
          border: '#E2E6E9',
        },
      },
    },
  },
  plugins: [],
};
