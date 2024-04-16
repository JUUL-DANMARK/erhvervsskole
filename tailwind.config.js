/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      'LeagueSpartan': ['"League Spartan"', 'sans-serif']
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

          '50': '#E8B1B3',

          '100': '#E3A1A4',

          '200': '#DA8185',

          '300': '#D16266',

          '400': '#C84248',

          '500': '#AE3338',

          '600': '#8E2A2E',

          '700': '#6F2124',

          '800': '#4F171A',

          '900': '#300E0F'

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



