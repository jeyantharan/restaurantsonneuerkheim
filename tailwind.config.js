/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        body:['Poppins'],
        home:['Mukta']
      },
      backgroundImage:{
        "bg-banner":"url('/Users/jeyanth/Desktop/tailwindReact/frontend/hotel/images/5.jpeg')"
      },
      colors: {
        my:'#EEF7FF'
      },
    },
    screens: {
      
      md: '900px',
    
    }
  },
  plugins: [],
}

