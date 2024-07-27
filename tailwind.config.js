/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,json}'],
  theme: {
    extend: {
      width: { desktop: '1200px' },
      colors: {
        background: 'hsl(var(--background))',
        secondary: 'hsl(var(--secondary))',
        foreground: 'hsl(var(--foreground))',
      },
    },
  },
  plugins: [],
};
