// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': { // Electric Blue
          light: '#3b82f6',
          DEFAULT: '#2563eb',
          dark: '#1d4ed8',
        },
        'brand-secondary': { // Data-pipeline Cyan
          light: '#22d3ee',
          DEFAULT: '#06b6d4',
          dark: '#0891b2',
        },
        'brand-accent': { // Warm Amber (sparingly, for highlights)
          light: '#fbbf24',
          DEFAULT: '#f59e0b',
          dark: '#d97706',
        },
        // Core "data infrastructure" dark palette
        ink: {
          950: '#05070a',
          900: '#0b0f14',
          800: '#111823',
          700: '#1a2432',
          600: '#293548',
        },
        'neutral-light': '#f8fafc',
        'neutral-dark': '#1e293b',
        'text-main-light': '#334155',
        'text-main-dark': '#e2e8f0',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
  plugins: [],
}