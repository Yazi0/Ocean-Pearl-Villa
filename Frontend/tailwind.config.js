/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ocean: '#123c3a',
        sand: '#eadbc8',
        accent: '#d4a373',
        coconut: '#3b2f2f',
        cream: '#f8f4ee',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 60px rgba(18, 60, 58, 0.12)',
      },
      backgroundImage: {
        'wave-pattern': "radial-gradient(circle at top left, rgba(234,219,200,0.9), transparent 35%), radial-gradient(circle at bottom right, rgba(212,163,115,0.18), transparent 28%)",
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        fadeUp: 'fadeUp 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
