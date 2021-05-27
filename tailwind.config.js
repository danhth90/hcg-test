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
      }
    },
    variants: {
      extend: {},
    },
    plugins: [],
};
