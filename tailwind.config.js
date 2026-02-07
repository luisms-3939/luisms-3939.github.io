/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cyan: {
          50: '#e6ffff',
          100: '#ccffff',
          200: '#99ffff',
          300: '#66ffff',
          400: '#00F2FF',
          500: '#00D9E6',
          600: '#00BFC9',
          700: '#00A6AD',
          800: '#008C90',
          900: '#007374',
        },
      },
    },
  },
  plugins: [],
};
