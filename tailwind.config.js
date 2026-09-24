/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#050505',
          surface: '#0D0D0D',
          elevated: '#141416',
          muted: '#18181B',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(255, 255, 255, 0.18)',
        },
        light: {
          bg: '#F8F9FA',
          surface: '#FFFFFF',
          elevated: '#F1F3F5',
          muted: '#E9ECEF',
          border: 'rgba(0, 0, 0, 0.08)',
          'border-hover': 'rgba(0, 0, 0, 0.16)',
        },
        accent: {
          DEFAULT: '#00F0FF',
          hover: '#38F8FF',
          dark: '#00B8C8',
          blue: '#3B82F6',
          violet: '#8B5CF6',
          glow: 'rgba(0, 240, 255, 0.12)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'grid-scroll': 'gridScroll 25s linear infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.02)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gridScroll: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(40px)' },
        }
      },
      boxShadow: {
        'glow-accent': '0 0 25px rgba(0, 240, 255, 0.25)',
        'glow-accent-lg': '0 0 45px rgba(0, 240, 255, 0.35)',
        'glow-card': '0 8px 32px -4px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.06)',
      }
    },
  },
  plugins: [
    function({ addVariant }) {
      addVariant('light', ':is(.light &, html.light &)');
    },
  ],
}
