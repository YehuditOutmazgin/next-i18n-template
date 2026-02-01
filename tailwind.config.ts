import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary - Navy
        primary: {
          50: '#f0f4f8',
          100: '#d9e2ed',
          200: '#b3c5db',
          300: '#8ca8c9',
          400: '#658bb7',
          500: '#0A2342',
          600: '#081d35',
          700: '#061828',
          800: '#04121a',
          900: '#020c0d',
        },
        // Secondary - Gold
        secondary: {
          50: '#fffbf0',
          100: '#fef3d9',
          200: '#fde5b3',
          300: '#fcd78c',
          400: '#fac965',
          500: '#D4AF37',
          600: '#B8960C',
          700: '#9a7a0a',
          800: '#7c6208',
          900: '#5e4a06',
        },
        // Neutral - Grays
        neutral: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#9EA5B0',
          500: '#6B7280',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        marble: '#F5F5F5',
        // Semantic
        success: '#25D366',
        error: '#EF4444',
        warning: '#F59E0B',
        info: '#3B82F6',
      },
      fontFamily: {
        sans: ["'Heebo'", 'system-ui', 'sans-serif'],
        en: ["'Heebo'", 'system-ui', 'sans-serif'],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
      },
      spacing: {
        0: '0',
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        6: '1.5rem',
        8: '2rem',
        12: '3rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        128: '32rem',
        144: '36rem',
      },
      boxShadow: {
        none: 'none',
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        gold: '0 0 30px rgba(212, 175, 55, 0.4)',
      },
      borderRadius: {
        none: '0',
        sm: '0.125rem',
        base: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        full: '9999px',
      },
      transitionDuration: {
        fast: '150ms',
        base: '300ms',
        slow: '500ms',
      },
      screens: {
        xs: '475px',
      },
    },
  },
  plugins: [],
};

export default config;
