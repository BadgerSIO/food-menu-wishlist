/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{html,js}",
  ],
  theme: {
    container: {
      center: true,
    },

    extend: {
      fontFamily: {
        mulish: "'Mulish', sans-serif",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
