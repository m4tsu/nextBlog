const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.tsx", "./src/pages/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // extend: {},
    extend: {
      colors: {
        primary: "#28385E",
        secondary: "#516C8D",
        tertiary: "#6A91C1",
        neutral: "#CCCCCC",
        emerald: colors.emerald,
        teal: colors.teal,
        lime: colors.lime,
        indigo: colors.indigo,
        twitter: "#00acee",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
