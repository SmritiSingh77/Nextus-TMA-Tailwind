/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"

  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'serif'], 
      },
      screens: {
        'height-sm': { 'raw': '(min-height: 650px)' },
        'height-md': { 'raw': '(min-height: 700px)' },
        'height-lg': { 'raw': '(min-height: 850px)' },
        'width-xs': { 'raw': '(max-width: 320px)' },
      },
      colors: {
        brand: '#F37021',
        nextusGray : '#A0A0A0',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]

}
