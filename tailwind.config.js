const { hasSelectionSupport } = require('@testing-library/user-event/dist/utils');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'calzate-100': 'hsl(22, 80%, 18%)',
        'calzate-200': 'hsl(22, 80%, 36%)',
        'calzate-300': 'hsl(22, 100%, 48%)',
        'calzate-400': 'hsl(22, 100%, 56%)',
        'calzate-500': 'hsl(22, 100%, 68%)',
        'calzate-600': 'hsl(22, 100%, 76%)',
        'calzate-700': 'hsl(22, 100%, 84%)',        
        'calzate-800': 'hsl(22, 100%, 92%)',
        'calzate-900': 'hsl(22, 100%, 98%)',
      }
    },
  },
  plugins: [],
}
