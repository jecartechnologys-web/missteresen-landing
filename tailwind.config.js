/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#2563EB',
          'blue-dark': '#1D4ED8',
          green: '#059669',
          'green-light': '#10B981',
          dark: '#0F172A',
          light: '#F8FAFC',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
          xl: "4rem",
          "2xl": "4rem",
          "3xl": "5rem",
        },
      },

      extend: {
        screens: {
          "4k": "1980px",
        },
      },
    },
  },
  plugins: [],
}
