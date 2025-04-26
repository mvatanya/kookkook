/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(202, 54, 37)',
        secondary: 'rgb(244, 178, 35)',
        'primary-dark': 'rgb(172, 44, 27)',
        'primary-light': 'rgb(232, 84, 67)',
        'secondary-dark': 'rgb(214, 148, 5)',
        'secondary-light': 'rgb(254, 218, 115)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
}