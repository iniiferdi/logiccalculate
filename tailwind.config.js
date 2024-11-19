/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(144.5deg, #1F1F1F -19.23%, #121212 100%)',
      },
      colors:{
        'primary' : '#0F0F0F'
      },
      fontFamily:{
        "Inter" : ["Inter", 'serif']
      }
    }
  },
  plugins: [],
}

