/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // === MH CONSTRUCTION BRAND COLORS ===
        'mh-hunter-green': '#386851',
        'mh-leather-tan': '#BD9264',
        
        // === DARK MODE COLORS ===
        'dark-surface': '#1A1A1A',
        'dark-surface-2': '#2D2D2D',
        'dark-surface-3': '#3A3A3A',
        'dark-text': '#E5E5E5',
        'dark-text-secondary': '#B8B8B8',
        'dark-border': '#404040',
        
        // === LEGACY COLORS (for compatibility) ===
        // Note: These map to standard colors and MH colors for backwards compatibility
        'army-black': '#000000',
        'army-gold': '#BD9264', // Maps to mh-leather-tan
        'army-red': '#C60C38',
        'army-green': '#386851', // Maps to mh-hunter-green
        'field-tan': '#967117',
        'field-gray': '#6B7280', // Maps to gray-500 for better consistency
        'light-gray': '#F8F9FA',
        'dark-gray': '#343A40',
      },
      fontFamily: {
        'heading': ['Tactic Sans', 'Saira', 'sans-serif'],
        'subheading': ['Tactic Sans', 'Saira', 'sans-serif'],
        'body': ['Adobe Garamond Pro', 'Saira', 'serif'],
        'saira': ['Saira', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

