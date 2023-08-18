/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        'white-default': '#FEFEFE',
        'yellow-default': '#FFCC81',
        'dark-default': '#364655',
      },
      fontFamily: {},
      height: {
        '90p': '90%',
      },
      zIndex: {
        'to-front': '999',
      }
    },
  },
  plugins: [],
}

