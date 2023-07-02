const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html"],
  theme: {
    colors: {
      gold: "#D5966C",
      white: "#FFFFFF",
      "almost-black": "#151515",
      "dark-grey": "#444444",
    },
    fontSize: {
      "heading-xl": [
        "6rem",
        {
          lineHeight: "5.5rem",
          fontWeight: "900",
        },
      ],
      "heading-l": [
        "4.375rem",
        {
          lineHeight: "4.375rem",
          fontWeight: "900",
        },
      ],
      "heading-m": [
        "3.75rem",
        {
          lineHeight: "3.125rem",
          fontWeight: "900",
        },
      ],
      "heading-s": [
        "2.25rem",
        {
          lineHeight: "2.25rem",
          fontWeight: "900",
        },
      ],
      "body-m": [
        "1.375rem",
        {
          lineHeight: "2rem",
          fontWeight: "300",
        },
      ],
      "body-s": [
        "1.125rem",
        {
          lineHeight: "1.75rem",
          fontWeight: "300",
        },
      ],
    },
    extend: {
      fontFamily: {
        sans: ["Big Shoulders Display", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
