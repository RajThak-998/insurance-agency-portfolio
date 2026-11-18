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
        // Deep Sovereign Navy & Slate
        brand: {
          950: '#090D16', // Deep Obsidian Canvas
          900: '#0F2942', // Deep Oxford / Prussian Navy
          850: '#13283E',
          800: '#1E293B', // Slate Charcoal
          700: '#334155',
          600: '#475569',
          500: '#64748B',
          400: '#94A3B8',
          300: '#CBD5E1',
          200: '#E2E8F0',
          100: '#F1F5F9',
          50: '#F8FAFC',
        },
        // Refined Authoritative Amber/Bronze (Swiss Legal & Risk Accent)
        accent: {
          900: '#78350F',
          800: '#92400E',
          700: '#B45309', // Primary Muted Bronze / Amber in Light Mode
          600: '#D97706', // High-contrast Accent in Dark Mode
          500: '#F59E0B',
          400: '#FBBF24',
          300: '#FCD34D',
          200: '#FDE68A',
          100: '#FEF3C7',
          50: '#FFFBEB',
        },
        // Institutional Neutrals
        surface: {
          light: '#FFFFFF',
          canvas: '#F8F9FA',
          subtle: '#F1F5F9',
          border: '#E2E8F0',
          dark: '#090D16',
          darkcard: '#111827',
          darksubtle: '#0D1522',
          darkborder: '#1E293B',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'card': '0 1px 3px 0 rgba(15, 23, 42, 0.08), 0 1px 2px -1px rgba(15, 23, 42, 0.08)',
        'card-dark': '0 4px 12px -2px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.08)',
        'modal': '0 20px 25px -5px rgba(0, 0, 0, 0.25), 0 8px 10px -6px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
}
