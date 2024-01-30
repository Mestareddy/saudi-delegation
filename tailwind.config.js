/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        transparent:"transparent",
        green: {
          bg: "#F0F6F4",
          inactive: "#70CCAC",
          minst: "#00E092",
          hover: "#00A96E",
          10:"#DCF5EC"
        },
        black: {
          20: "#191819",
          30:'#1212121A',
          40:'#11142D'
        },
        red:{
          100:'red',
        },
        gray: {
          10: "#333",
          20:"#4F4F4F",
          30: "#828282",
          40:"#BDBDBD",
          50:"#FAFAFA",
          60:"#E6E6E6",
          70:"#E0E0E0",
          80:"#808191"
        },
      },
    },
  },
  plugins: [
  ],
};
