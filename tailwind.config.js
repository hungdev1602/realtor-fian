/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
      'avenir': ['Avenir Next Cyr', 'sans-serif'],
    },
    screens: {
      "xs": "350px",
      "sm": "576px",
      "md": "768px",
      "lg": "992px",
      "xl": "1160px",
      "2xl": "1620px"
    },
    extend: {
      backgroundImage: {
        'bg1': "url('/images/bg-1.png')",
      },
    },
  },
  plugins: [],
}