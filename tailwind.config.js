/** @type {import('tailwindcss').Config} */

const tailwindConfig = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        title: 'clamp(2.5rem, 5.5vw, 4.5rem)',
        subtitle: 'clamp(1.5rem, 3.5vw, 3rem)',
      },
      screens: {
        hd: '1280px',
        'full-hd': '1920px',
      },
    },
  },
  plugins: [],
};

module.exports = tailwindConfig;
