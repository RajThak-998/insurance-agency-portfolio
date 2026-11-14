/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep Sovereign Navy - Signature Brand Color
        brand: {
          950: '#060E1A', // Deepest Obsidian
          900: '#0B1E36', // Primary Sovereign Navy
          850: '#0F2644', // Rich Ink Navy
          800: '#143156', // Slate Navy
          750: '#1B3D6B',
          700: '#234C82',
          600: '#2F61A3',
          500: '#437DC7',
          400: '#689BE0',
          300: '#9BBFF2',
          200: '#C7DCF8',
          100: '#E6EFFB',
          50: '#F3F7FD',
        },
        // Burnished Cognac Amber - Warm Trust Accent
        accent: {
          900: '#542605',
          800: '#7A380A',
          700: '#9F4D10',
          600: '#C56517',
          500: '#E07E24', // Burnished Cognac
          400: '#F09A43', // Warm Amber
          300: '#F7B76F',
          200: '#FBD6A5',
          100: '#FDEBD4',
          50: '#FEF6ED',
        },
        // Institutional Neutrals
        surface: {
          dark: '#081526',
          card: '#0D213B',
          light: '#F8FAFC',
          border: '#E2E8F0',
          darkborder: '#1B3150',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'Outfit', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'executive': '0 20px 45px -10px rgba(11, 30, 54, 0.1), 0 0 0 1px rgba(11, 30, 54, 0.05)',
        'executive-dark': '0 25px 60px -15px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.1)',
        'card-clean': '0 2px 8px -2px rgba(15, 23, 42, 0.06), 0 1px 3px -1px rgba(15, 23, 42, 0.04)',
      }
    },
  },
  plugins: [],
}
