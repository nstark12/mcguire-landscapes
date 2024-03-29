/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#58705b",
        primaryHov: "#344236",
        secondary: "#604d2a",
        tertiary: "#858585",
        neutral: "#faf8f5",
      },
    },
  },
  plugins: [],
};
