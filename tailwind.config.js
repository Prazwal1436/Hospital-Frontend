/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./node_modules/flowbite/**/*.js",
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
   
    extend: {
      colors: {
        "dark-purple": "#3F505F",
        "light-white": "rgba(255,255,255,0.17)",
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('tw-elements/dist/plugin')
  ],
}
