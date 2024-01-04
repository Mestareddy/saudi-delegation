/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        green: {
          bg: "#F0F6F4",
          inactive: "#70CCAC",
          minst: "#00A36A",
          hover: "#008053",
        },
        gray: {
          "mist-body": "#808191",
          10: "#585A69",
          "minst-main": "#11142D",
          20: "#F2F2F2",
          30:'#f0f6f4',
          40: "#F2F2F2",
          60: "#DEDEDE",
          70: "#BDBDBD",
          80: "#FAFAFA",
        },
      },
    },
  },
  plugins: [],
};
