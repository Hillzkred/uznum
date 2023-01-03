/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Dosis', 'sans-pro'],
    },
    extend: {
      colors: {
        primary: '#172847',
        secondary: '#FA9044',
      },
    },
  },
  plugins: [],
};
