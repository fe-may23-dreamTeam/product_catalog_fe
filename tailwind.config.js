/* eslint-disable no-unused-vars */
/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
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
        primary: {
          light: '#0F0F11',
          dark: '#F1F2F9',
        },
        accent: {
          light: '#216CFF',
          dark: '#905BFF',
          hover: '#A378FF',
        },
        'secondary-accent': {
          light: '#F447AF',
          dark: '#EB5757',
        },
        white: {
          light: '#FFFFFF',
          dark: '#323542',
        },
        secondary: {
          light: '#89939A',
          dark: '#75767F',
        },
        icons: {
          light: '#B4BDC3',
          dark: '#4A4D58',
        },
        elements: {
          light: '#E2E6E9',
          dark: '#3B3E4A',
        },
        'hover-bg': {
          light: '#FAFBFC',
          dark: '#0F1121',
        },
        'gray-surface': '#161827',
        green: '#27AE60',
        red: '#EB5757',
      },
      boxShadow: {
        custom: '0px 3px 13px 0px rgba(23, 32, 49, 0.40)',
        'custom-dark': '0px 3px 13px 0px rgba(276, 276, 276, 0.40)',
        'lg-dark': '0 10px 15px -3px rgba(276, 276, 276, 0.40)',
        option: '0px 2px 15px 0px rgba(0, 0, 0, 0.05)',
        card: '0 2px 16px 0 rgba(0, 0, 0, 0.1)',
        'card-dark': '0 2px 16px 0 rgba(276, 276, 276, 0.40)',
      },
      gridTemplateColumns: {
        24: 'repeat(24, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-24': 'span 24 / span 24',
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
