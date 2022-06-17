const { hasSelectionSupport } = require('@testing-library/user-event/dist/utils');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'calzate-bg-primary': 'hsl(22, 100%, 56%)',
        'calzate-bg-secondary': 'hsl(22, 100%, 48%)',
        'calzate-bg-tertiary': 'hsl(22, 100%, 92%)',
        'calzate-clr-primary': 'hsl(22, 100%, 98%)',
        'calzate-clr-secondary': 'hsl(22, 80%, 36%)',
        'calzate-clr-tertiary': 'hsl(22, 80%, 18%)',
      }
    },
  },
  plugins: [],
}
