/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          dark: "#1E6F9F",
          light: "#4EA8DE",
        },
        purple: {
          dark: '#5E60CE',
          light: '#8284FA',
        },
        gray: {
          700: '#0D0D0D',
          600: '#1A1A1A',
          500: '#262626',
          400: '#333333',
          300: '#808080',
          200: '#D9D9D9',
          100: '#F2F2F2',
        },
        red: {
          danger: '#E25858',
        },
      },
    },
  },
}