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
          950: 'var(--brand-950)',
          900: 'var(--brand-900)',
          850: 'var(--brand-850)',
          800: 'var(--brand-800)',
          750: 'var(--brand-750)',
          700: 'var(--brand-700)',
          600: 'var(--brand-700)',
          500: 'var(--brand-700)',
          400: 'var(--brand-200)',
          300: 'var(--brand-200)',
          200: 'var(--brand-200)',
          100: 'var(--brand-100)',
          50: 'var(--brand-50)',
        },
        accent: {
          900: 'var(--accent-600)',
          800: 'var(--accent-600)',
          700: 'var(--accent-600)',
          600: 'var(--accent-600)',
          500: 'var(--accent-500)',
          400: 'var(--accent-400)',
          300: 'var(--accent-300)',
          200: 'var(--accent-200)',
          100: 'var(--accent-100)',
          50: 'var(--accent-50)',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'Outfit', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'executive': '0 20px 45px -10px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05)',
        'executive-dark': '0 25px 60px -15px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.1)',
      }
    },
  },
  plugins: [],
}
