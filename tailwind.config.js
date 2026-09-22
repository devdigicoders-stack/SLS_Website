/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pharma: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        navy: {
          800: '#1e293b',
          850: '#141e33',
          900: '#0f172a',
          950: '#090d16',
        },
        medblue: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Manrope"', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Outfit"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Outfit"', 'system-ui', 'sans-serif'],
        body: ['"Manrope"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px 0 rgba(15, 23, 42, 0.04)',
        'soft-md': '0 8px 24px -4px rgba(15, 23, 42, 0.06)',
        'soft-lg': '0 16px 36px -6px rgba(15, 23, 42, 0.08)',
        'glow-teal': '0 0 30px -5px rgba(20, 184, 166, 0.35)',
        'glow-blue': '0 0 30px -5px rgba(14, 165, 233, 0.35)',
        'card-soft': '0 6px 24px -4px rgba(15, 23, 42, 0.05)',
        'card-hover': '0 20px 35px -8px rgba(13, 148, 136, 0.16)',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
