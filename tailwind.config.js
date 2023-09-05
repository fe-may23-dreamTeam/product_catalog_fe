/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,tsx}'],
  theme: {
    screens: {
      tablet: '640px',
      desktop: '1200px',
    },
    extend: {
      fontFamily: {
        sans: ['Mont', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        accent: '#216CFF',
        'secondary-accent': '#F447AF',
        primary: '#0F0F11',
        secondary: '#89939A',
        icons: '#B4BDC3',
        elements: '#E2E6E9',
        'hover-bg': '#FAFBFC',
        green: '#27AE60',
        red: '#EB5757',
      },
      boxShadow: {
        custom: '0px 3px 13px 0px rgba(23, 32, 49, 0.40)',
        option: '0px 2px 15px 0px rgba(0, 0, 0, 0.05)',
      },
      gridTemplateColumns: {
        3: 'repeat(3, minmax(0, 10px))',
        4: 'repeat(4, minmax(60px, 1fr))',
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
