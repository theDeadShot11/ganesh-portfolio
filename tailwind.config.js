/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-deep':      '#080C0A',
        'surface':      '#101510',
        'surface-2':    '#181F18',
        'border-green': '#1F2E1F',
        'green-primary':'#22C55E',
        'green-mid':    '#16A34A',
        'green-dim':    '#14532D',
        'text-primary': '#F0F4F0',
        'text-secondary':'#8A9E8A',
        'text-muted':   '#4A5E4A',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'green-glow':  '0 0 24px rgba(34,197,94,0.12)',
        'green-glow-lg':'0 0 48px rgba(34,197,94,0.18)',
        'card':        '0 4px 24px rgba(0,0,0,0.4)',
      },
      animation: {
        'float':       'float 6s ease-in-out infinite',
        'float-slow':  'float 9s ease-in-out infinite',
        'pulse-green': 'pulseGreen 2s ease-in-out infinite',
        'shimmer':     'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-10px)' },
        },
        pulseGreen: {
          '0%, 100%': { opacity: '1' },
          '50%':       { opacity: '0.5' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition:  '200% 0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'shimmer-gradient': 'linear-gradient(90deg, transparent 0%, rgba(34,197,94,0.08) 50%, transparent 100%)',
      },
    },
  },
  plugins: [],
}
