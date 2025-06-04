// Imports:
import withMT from '@material-tailwind/react/utils/withMT';
import type { Config } from 'tailwindcss';

const config = withMT({
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--dm-sans)', 'sans-serif'],
        'dm-sans': ['var(--dm-sans)', 'sans-serif'],
      },
      colors: {
        core: {
          black: 'var(--core-black)',
          white: 'var(--core-white)',
        },
        primary: 'var(--primary-red)',
        background: 'var(--background)',
        stroke: 'var(--stroke)',
        input: 'var(--input-field)',
        action: {
          one: 'var(--action-one)',
          two: 'var(--action-two)',
          three: 'var(--action-three)',
          four: 'var(--action-four)',
        },
        red: {
          50: 'var(--red-50)',
          100: 'var(--red-100)',
          200: 'var(--red-200)',
          300: 'var(--red-300)',
          400: 'var(--red-400)',
          500: 'var(--red-500)',
          600: 'var(--red-600)',
          700: 'var(--red-700)',
          800: 'var(--red-800)',
          900: 'var(--red-900)',
        },
        neutral: {
          50: 'var(--neutral-50)',
          100: 'var(--neutral-100)',
          200: 'var(--neutral-200)',
          300: 'var(--neutral-300)',
          400: 'var(--neutral-400)',
          500: 'var(--neutral-500)',
          600: 'var(--neutral-600)',
          700: 'var(--neutral-700)',
          800: 'var(--neutral-800)',
          900: 'var(--neutral-900)',
        },
      },

      keyframes: {
        'bell-ring': {
          '0%': { transform: 'rotate(0deg)' },
          '15%': { transform: 'rotate(15deg)' },
          '30%': { transform: 'rotate(-10deg)' },
          '45%': { transform: 'rotate(15deg)' },
          '60%': { transform: 'rotate(-10deg)' },
          '75%': { transform: 'rotate(15deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        'bell-ring': 'bell-ring 1s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}) as Config;

export default config;
