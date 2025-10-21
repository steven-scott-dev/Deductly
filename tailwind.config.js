/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#027373",
        accent: "#0FCC75",
        sunshine: "#FFB347",
      },
    },
  },
  plugins: [],
};
