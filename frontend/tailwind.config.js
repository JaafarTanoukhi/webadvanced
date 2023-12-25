/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'Rob':['Roboto','sans-serif']
      }
    },
  },
  plugins: [],
}

