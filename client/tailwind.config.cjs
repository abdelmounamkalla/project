/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        purple:'#7721D6',
        yellow:'#FDC93A', 
        white:'#F6EDFF',
        black:'#2C2531',
        pink:'#E317D8',
      },
    },
  },
  plugins: [],
}
