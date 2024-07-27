/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,json}'],
  theme: {
    extend: {
      width: { desktop: '1200px' },
      backgroundColor: { secondary: 'hsl(var(--secondary))' },
    },
  },
  plugins: [],
};
