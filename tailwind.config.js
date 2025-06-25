/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bamboo: {
          50: '#f0f9f4',
          100: '#dcf2e3',
          200: '#bbe5cb',
          300: '#90d1a8',
          400: '#6b9b7a',
          500: '#4a7c59',
          600: '#3a6045',
          700: '#2d5235',
          800: '#25432c',
          900: '#1f3825',
        },
        primary: '#4a7c59',
        secondary: '#6b9b7a',
        accent: '#7fb069',
      },
      fontFamily: {
        sans: ['Noto Sans JP', 'system-ui', 'sans-serif'],
        display: ['Noto Sans JP', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
      backgroundImage: {
        'gradient-bamboo': 'linear-gradient(135deg, #4a7c59 0%, #6b9b7a 100%)',
        'gradient-overlay': 'linear-gradient(45deg, rgba(74, 124, 89, 0.3) 0%, rgba(45, 82, 53, 0.4) 50%, rgba(74, 124, 89, 0.3) 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      screens: {
        '3xl': '1600px',
      },
    },
  },
  plugins: [],
}