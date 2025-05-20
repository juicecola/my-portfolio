// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Scans your main HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // Scans all JS, TS, JSX, TSX files in the src folder and its subfolders
  ],
  theme: {
    extend: {
      // You can extend the default theme here if needed
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Example
      },
    },
  },
  plugins: [],
}