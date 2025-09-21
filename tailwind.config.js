/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  safelist: [
    // Ensure MH color classes are always included
    'text-mh-hunter-green',
    'text-mh-leather-tan',
    'hover:text-mh-hunter-green',
    'hover:text-mh-leather-tan',
    'dark:text-mh-hunter-green',
    'dark:text-mh-leather-tan',
    'dark:hover:text-mh-hunter-green',
    'dark:hover:text-mh-leather-tan',
    'bg-mh-hunter-green',
    'bg-mh-leather-tan',
    'hover:bg-mh-hunter-green',
    'hover:bg-mh-leather-tan',
    'dark:bg-mh-hunter-green',
    'dark:bg-mh-leather-tan',
    'dark:hover:bg-mh-hunter-green',
    'dark:hover:bg-mh-leather-tan',
    {
      pattern: /^(text|bg|border|hover:text|hover:bg|dark:text|dark:bg|dark:hover:text|dark:hover:bg)-mh-(hunter-green|leather-tan)(-[0-9]+)?$/,
    },
  ],
  theme: {
    extend: {
      colors: {
        // === MH CONSTRUCTION BRAND COLORS ===
        'mh-hunter-green': {
          DEFAULT: '#386851', // This creates the base text-mh-hunter-green class
          50: '#f0f4f2',
          100: '#d1e3d9',
          200: '#a3c7b3',
          300: '#75ab8d',
          400: '#478f67',
          500: '#386851',
          600: '#2a4d3a',
          700: '#1a3126',
          800: '#0d1813',
          900: '#000000'
        },
        'mh-leather-tan': {
          DEFAULT: '#BD9264', // This creates the base text-mh-leather-tan class
          50: '#faf7f3',
          100: '#f2e8d8',
          200: '#e5d1b1',
          300: '#d8ba8a',
          400: '#cba363',
          500: '#BD9264',
          600: '#a67c50',
          700: '#8b6842',
          800: '#705434',
          900: '#544026'
        },
        
        // === SUPPORTING BRAND COLORS ===
        'mh-steel-blue': '#4A6B7C',
        'mh-concrete-gray': '#8A9BA8',
        'mh-safety-orange': '#FF6B35',
        'mh-blueprint-blue': '#2C5F7A',
        'mh-earth-brown': '#8B4513',
        
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

