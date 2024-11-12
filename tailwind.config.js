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
        'height-md': { 'raw': '(min-height: 700px)' },
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
