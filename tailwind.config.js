/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        green: {
          bg: "#F0F6F4",
          inactive: "#70CCAC",
          minst: "#00E092",
          hover: "#00A96E",
        },
        black: {
          20: "#191819",
        },
        gray: {
          10: "#333",
          20:"#4F4F4F",
          40:"#BDBDBD",
          50:"#FAFAFA",
        },
      },
      fontFamily: {
        bebas: ['Bebas Neue','sans-serif'],
      },
    },
  },
  plugins: [
  ],
};
