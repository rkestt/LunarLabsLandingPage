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
        },
        'cloud-dancer': '#f0eee9',
        'github-black': '#010409',
        'github-gray': '#0d1117',
        'github-border': '#30363d',
        'muted-gray': '#94a3b8',
        success: '#238636',
        error: '#da3633',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space)', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-lunar': 'linear-gradient(135deg, #010409 0%, #0d1117 100%)',
        'gradient-purple': 'linear-gradient(135deg, #8b5cf6 0%, #f0eee9 100%)',
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2330363d' fill-opacity='0.2' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 40V39L1 39V0H0V40z'/%3E%3C/g%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'purple-glow': '0 0 30px rgba(139, 92, 246, 0.15)',
        'glass': 'inset 0 0 0 1px rgba(240, 238, 233, 0.05)',
      },
    },
  },
  plugins: [],
}
