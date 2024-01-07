/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif']
      },
      backgroundColor: {
        primary: '#060f0e',
        secondary: '#1a2020',
        ternary: '#252a2f',
        accent: '#7b2de0'
      },
      textColor: {
        primary: '#d0d3d4',
        secondary: '#c9cdd6',
        accent: '#7b2de0'
      },
    },
  },
  plugins: [],
};
