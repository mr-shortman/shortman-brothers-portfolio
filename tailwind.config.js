/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#7d8597",
        tertiary: "#181823",
        "black-100": "#0b0b0b",
        "black-200": "#fec046",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      keyframes: {
        shake: {
          "0%": {
            transform: "translate(1px, 1px) rotate(0deg)",
          },
          "10%": {
            transform: "translate(-1px, -2px) rotate(-1deg)",
          },
          "20%": {
            transform: "translate(-3px, 0px) rotate(1deg)",
          },
          "30%": {
            transform: "translate(3px, 2px) rotate(0deg)",
          },
          "40%": {
            transform: "translate(1px, -1px) rotate(1deg)",
          },
          "50%": {
            transform: "translate(-1px, 2px) rotate(-1deg)",
          },
          "60%": {
            transform: "translate(-3px, 1px) rotate(0deg)",
          },
          "70%": {
            transform: "translate(3px, 1px) rotate(-1deg)",
          },
          "80%": {
            transform: "translate(-1px, -1px) rotate(1deg)",
          },
          "90%": {
            transform: "translate(1px, 2px) rotate(0deg)",
          },
          "100%": {
            transform: "translate(1px, -2px) rotate(-1deg)",
          },
        },
      },
      animation: {
        shake: "shake 0.5s infinite",
      },
    },
  },
  plugins: [],
};
