/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      'LeagueSpartan': ['"League Spartan"', 'sans-serif'],
      'body': ['"Roboto"', '"Open Sans"', 'sans-serif'],

    },
    screens: {
      'xsd': '415px',
      'desktop': '400px',
      'phone': { raw: '(max-width:481px)' },
      'xsm': '500px',
      ...defaultTheme.screens,
    },
    extend: {
      screens: {
        'tinyPhone': { raw: '(max-height:865px) and (max-width:375px)' },
      },
      colors: {

        'stiletto': {
          50: '#FFE0E0',
          100: '#FFC2C2',
          200: '#FF8585',
          300: '#FF4747',
          400: '#F31616',
          500: '#CC0000',
          600: '#AD0000',
          700: '#8F0000',
          800: '#700000',
          900: '#520000'
        },

        'rhino': {

          '50': '#f5f5f8',

          '100': '#ebecf0',

          '200': '#cccfda',

          '300': '#adb2c3',

          '400': '#707996',

          '500': '#323f69',

          '600': '#2d395f',

          '700': '#262f4f',

          '800': '#1e263f',

          '900': '#191f33'

        },

        'outer-space': {

          '50': '#f5f5f5',

          '100': '#ebebeb',

          '200': '#cccdce',

          '300': '#adafb1',

          '400': '#707476',

          '500': '#33383b',

          '600': '#2e3235',

          '700': '#262a2c',

          '800': '#1f2223',

          '900': '#191b1d'

        },

        'eud-yellow': '#FDED1F',

      },
    },
  },
  plugins: [],
}



