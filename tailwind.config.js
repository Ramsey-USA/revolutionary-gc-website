/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'mh-forest-green': '#396851',
        'mh-warm-tan': '#BD9264',
        'army-black': '#000000',
        'army-gold': '#FFD700',
        'army-green': '#4B5320',
        'field-tan': '#967117',
        'field-gray': '#6C6C6C',
        'light-gray': '#F8F9FA',
        'dark-gray': '#343A40',
      },
      fontFamily: {
        'saira': ['Saira', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

