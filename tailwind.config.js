/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,tsx}'],
  theme: {
    screens: {
      'tablet': '640px',
      'desktop': '1200px',
    },
    extend: {
      fontFamily: {
        sans: ['Mont', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      white: '#FFFFFF',
      accent: '#216CFF',
      grey: '#E2E6E9',
      grey_primary: '#0F0F11',
      grey_secondary: '#89939A',
      grey_icons: '#B4BDC3',
    },
    container: {
      center: true,
    },
    boxShadow: {
      custom: '0px 3px 13px 0px rgba(23, 32, 49, 0.40)',
    },
  },
  plugins: [],
};
