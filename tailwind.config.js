/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Roboto' : ['Roboto', 'sans-serif'],
        'Kanit' : ['Kanit', 'sans-serif'],  
        'SegoeUI' : ['SegoeUI-Semibold', 'sans-serif'],  
        'QatarBold' : ['QatarBold', 'sans-serif'],     
        'QatarHeavy' : ['QatarHeavy', 'sans-serif']  
      },
    },
  },
  plugins: [],
}

