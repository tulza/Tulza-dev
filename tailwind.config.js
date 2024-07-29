/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,json}'],
  theme: {
    extend: {
      width: { desktop: '1024px' },
      colors: {
        background: 'hsl(var(--background))',
        secondary: 'hsl(var(--secondary))',
        foreground: 'hsl(var(--foreground))',
        revForeground: 'hsl(var(--reverse-foreground))',
        mutedBackground: 'hsl(var(--muted-background))',
      },
    },
  },
  plugins: [],
};
