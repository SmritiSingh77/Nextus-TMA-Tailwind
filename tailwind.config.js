/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
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
      },
    },
  },
  plugins: [
  ]

}
