import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A0B1E',
          900: '#07080F',
          800: '#0D0F26',
          700: '#12163A',
          600: '#1A1F4A',
        },
        teal: {
          DEFAULT: '#3ECFCF',
          400: '#5DD8D8',
          300: '#7EE3E3',
          dim: '#1E6E6E',
        },
        purple: {
          DEFAULT: '#7B5FCC',
          400: '#9478D8',
          300: '#AD98E3',
          dim: '#3D2D7A',
        },
        carbon: {
          DEFAULT: '#1A1B2E',
          800: '#22243A',
          700: '#2C2F4A',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
