/* eslint-disable import/no-extraneous-dependencies, global-require */
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      ...colors,
      transparent: "transparent",
      gray: {
        100: "#f7f7f7",
        200: "#e6e9ee",
        300: "#dde0e4",
        400: "#818890",
        500: "#535661",
        600: "#4b4c53",
        700: "#3a3d4a",
        800: "#2e3039",
        900: "#1f2028",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};
