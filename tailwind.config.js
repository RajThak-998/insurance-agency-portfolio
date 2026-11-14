/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060B14', // Obsidian Night
          900: '#0A1220', // Executive Midnight
          850: '#0F1A2D', // Deep Slate Navy
          800: '#14233C', // Royal Dark Navy
          750: '#1A2C4A', // Mid Slate
          700: '#233A60',
          600: '#325285',
          500: '#4770B0',
          400: '#7195CE',
          300: '#A4BEE5',
          200: '#D2E1F5',
          100: '#EBF2FB',
          50: '#F6F9FD',
        },
        bronze: {
          900: '#642605',
          800: '#833407',
          700: '#9C410A',
          600: '#B45309', // Deep Amber
          500: '#D97706', // Burnished Gold
          400: '#F59E0B', // Warm Honey
          300: '#FBBF24',
          200: '#FDE68A',
          100: '#FEF3C7',
          50: '#FFFDF5',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'Outfit', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'luxury': '0 25px 60px -15px rgba(6, 11, 20, 0.08), 0 0 0 1px rgba(6, 11, 20, 0.04)',
        'luxury-dark': '0 25px 60px -15px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.08)',
        'inner-glow': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)',
        'card-subtle': '0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.03)',
      },
      backgroundImage: {
        'radial-radial': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
