/** @type {import('tailwindcss').Config} */
const { filterTokensByType } = require("./tokens/fns");
const tokens = require("./output/light.json");

const colors = filterTokensByType("color", tokens);

console.log(colors);

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'false',
  theme: {
    fontFamily: {
      sans: [
        "Jost, sans-serif",
        // , { fontFeatureSettings: "ss01" }
      ],
    },

    extend: {
      colors: {
        // "button-primary-hover": "red",
        button: {
          primary: {
            hover: "green.400",
          },
        },
        // "button-primary-hover": "var(--semantic-color-actions-primary-hover-background-color)",
        // "button-primary-default": "var(--semantic-primary-muted)",
      },
      backgroundImage: ({ theme }) => ({
        "button-primary-default": "var(--semantic-primary-default)",
      }),
    },
  },
  plugins: [],
};
