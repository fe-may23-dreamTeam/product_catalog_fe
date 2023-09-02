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
        white: '#FFFFFF',
        green: '#27AE60',
        red: '#EB5757',
      },
      boxShadow: {
        custom: '0px 3px 13px 0px rgba(23, 32, 49, 0.40)',
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
