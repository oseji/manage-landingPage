/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brightRed: "hsl(12, 88%, 59%)",
        darkBlue: "hsl(228, 39%, 23%)",
        darkGrayishBlue: " hsl(227, 12%, 61%)",
      },
      fontFamily: {
        veitnam: [" Be Vietnam Pro", "sans-serif"],
      },
      width: {
        120: "550px",
      },
      translate: {
        120: "450px",
      },
    },
  },
  plugins: [],
};
