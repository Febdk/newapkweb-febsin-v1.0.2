/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Pastikan dark mode menggunakan class
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
