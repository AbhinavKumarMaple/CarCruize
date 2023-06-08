
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
          
          "bg":"#4C4C4C",
          "prime":"#1A1C22",
          "second":"#2C2C2C",
          "sideNav":"#242424",
          "highLight":"#0C0C0C",
          "pureWhite":"#FFFFFF",
          "pila":"#FCEE21",
          "TextWhite":"#EDEDED",
        },
        fontFamily: {
          
          'lato': ['Lato', 'sans-serif','italic'],
          'Montserrat': ['Montserrat', 'sans-serif'],
          'Poppins' : ['Poppins']
        },
        fontWeight: {
          'light': 200,
          'regular': 400,
          'bold': 700,
          'extrabold':900,
        },
    },

  },
  plugins: [require('tailwind-scrollbar-hide')],
  }