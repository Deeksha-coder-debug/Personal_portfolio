/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: { DEFAULT: '#050816', secondary: '#0f172a', card: '#0b1025' },
        accent: { cyan: '#22d3ee', purple: '#8b5cf6', soft: '#1e293b' },
        slate: { 950: '#050816', 900: '#0f172a', 850: '#0b1221', 800: '#1e293b' }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 10s ease infinite',
        'float': 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-24px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(34,211,238,0.1)' },
          '100%': { boxShadow: '0 0 40px rgba(34,211,238,0.2)' },
        }
      }
    },
  },
  plugins: [],
}
