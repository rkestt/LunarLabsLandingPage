/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
        secondary: {
          50: '#f6f7f5',
          100: '#e9ede7',
          200: '#d3dbc9',
          300: '#b3c2a4',
          400: '#8fa27a',
          500: '#69995d',
          600: '#527948',
          700: '#43603b',
          800: '#394d32',
          900: '#32402c',
        },
        highlight: {
          DEFAULT: '#f1dac4',
          50: '#fdfcfa',
          100: '#faf6f0',
          200: '#f5ede1',
          300: '#f1dac4',
          400: '#e8c4a1',
          500: '#dfae7e',
        },
        'dark-charcoal': '#24292e',
        'near-black': '#0a0a0a',
        'light-gray': '#f1f1f1',
        'muted-gray': '#a1a1aa',
        'border-gray': '#27272a',
        success: '#10b981',
        error: '#ef4444',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['var(--font-syne)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-bg': 'linear-gradient(135deg, rgba(36, 41, 46, 0.95) 0%, rgba(10, 10, 10, 0.95) 100%)',
        'gradient-primary': 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
        'gradient-glow': 'linear-gradient(135deg, rgba(139, 92, 246, 0.3) 0%, rgba(105, 153, 93, 0.3) 100%)',
      },
      boxShadow: {
        'glow': '0 0 40px rgba(139, 92, 246, 0.3)',
        'glow-lg': '0 0 60px rgba(139, 92, 246, 0.4)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
