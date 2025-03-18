/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'text-foreground:[color] dark:bg-[] dark:text-foreground:[color]': {
          50: '#f9f9f9',
          100: '#f3f3f3',
          200: '#e0e0e0'
        }
      }
    },
    plugins: []
  }
};
