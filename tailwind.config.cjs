const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
   darkMode: 'class',
   theme: {
      extend: {
         colors: {
            background: '#F3F7F0',
            'background-dark': "#C04ABC",
            'rose-taupe': '#8C5E58',
            primary: '#A93F55',
            secondary: '#F2545B',
            accent: '#19323C'

         },
         fontFamily: {
            sans: ['Inter', 'sans-serif', ...defaultTheme.fontFamily.sans],
         },
      },
   },
   plugins: [],
}
