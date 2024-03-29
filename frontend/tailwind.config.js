/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', 
  './public/index.html'],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'),],
}

