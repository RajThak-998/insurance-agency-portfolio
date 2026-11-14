/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f5fa',
          100: '#e1ecf5',
          200: '#c3daec',
          300: '#95bede',
          400: '#609dcd',
          500: '#3b82f6',
          600: '#1d4ed8',
          700: '#1e3e62',
          800: '#12263f',
          900: '#0b192c',
          950: '#070f1b',
        },
        accent: {
          gold: '#f59e0b',
          goldDark: '#d97706',
          goldLight: '#fef3c7',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(11, 25, 44, 0.06), 0 2px 6px -1px rgba(11, 25, 44, 0.04)',
        'card': '0 10px 30px -5px rgba(11, 25, 44, 0.08), 0 4px 10px -2px rgba(11, 25, 44, 0.03)',
        'elevated': '0 20px 40px -10px rgba(11, 25, 44, 0.12), 0 8px 16px -4px rgba(11, 25, 44, 0.06)',
      }
    },
  },
  plugins: [],
}
