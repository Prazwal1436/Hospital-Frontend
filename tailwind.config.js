/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./node_modules/flowbite/**/*.js"
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
    require('flowbite/plugin')
  ],
}
