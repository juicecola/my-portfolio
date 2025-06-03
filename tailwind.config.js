// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode if you want (optional)
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': { // Electric Blue
          light: '#3b82f6', // blue-500
          DEFAULT: '#2563eb', // blue-600
          dark: '#1d4ed8',   // blue-700
        },
        'brand-secondary': { // Vibrant Teal
          light: '#2dd4bf', // teal-400
          DEFAULT: '#14b8a6', // teal-500
          dark: '#0d9488',   // teal-600
        },
        'brand-accent': { // Warm Orange
          light: '#fb923c', // orange-400
          DEFAULT: '#f97316', // orange-500
          dark: '#ea580c',   // orange-600
        },
        'neutral-light': '#f8fafc', // slate-50 (example for light bg)
        'neutral-dark': '#1e293b',  // slate-800 (example for dark bg)
        'text-main-light': '#334155', // slate-700 (text on light bg)
        'text-main-dark': '#e2e8f0',   // slate-200 (text on dark bg)
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Keep or change
        // Add a more engaging display font if desired
        // display: ['Poppins', 'sans-serif'], // Example
      },
    },
  },
  plugins: [],
}