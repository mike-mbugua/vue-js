/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{vue,js,tsx,ts,jsx}'],
  theme: {
    extend: {
      fontFamily:{
        // sans:['Poppins','sans-serif']
      },
      gridTemplateColumns:{
        '70/30':'70% 28%'
      }
    },
  },
  plugins: [],
}

