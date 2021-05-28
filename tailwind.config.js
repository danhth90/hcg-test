const { guessProductionMode } = require("@ngneat/tailwind");

module.exports = {
    prefix: '',
    purge: {
      enabled: guessProductionMode(),
      content: [
        './src/**/*.{html,ts}',
      ]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
      colors: {
        white: '#FFF',
        primary: '#4B0F0A',
        'red-light':'#b24c50'
      },
      fontSize: {
        1: '27pt',
        2: '23pt',
        3: '18pt',
        4: '14pt',
        5: '11pt',
        6: '9pt',
        7: '7pt'
      }
    },
    variants: {
      extend: {},
    },
    plugins: [],
};
