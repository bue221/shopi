/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#000000",
        },
        genoa: {
          50: "#f3faf8",
          100: "#d5f2e9",
          200: "#abe4d3",
          300: "#79cfb8",
          400: "#4db49c",
          500: "#349882",
          600: "#247061",
          700: "#236256",
          800: "#204f47",
          900: "#1e433c",
          950: "#0c2723",
        },
      },
    },
  },
  plugins: [],
};
