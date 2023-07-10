const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html","./location.html"],
  theme: {
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
          lineHeight: "3.75rem",
          fontWeight: "900",
        },
      ],
      "heading-s": [
        "2rem",
        {
          lineHeight: "2rem",
          fontWeight: "900",
        },
      ],
      // tablet size
      "heading-md-xl": [
        "4.375rem",
        {
          lineHeight: "4.063rem",
          fontWeight: "900",
        },
      ],
      "heading-md-l": [
        "3.438rem",
        {
          lineHeight: "3.125rem",
          fontWeight: "900",
        },
      ],
      // mobile size
      "heading-sm-l": [
        "3.75rem",
        {
          lineHeight: "3.438rem",
          fontWeight: "900",
        },
      ],
      "heading-sm-m": [
        "3.125rem",
        {
          lineHeight: "2.813rem",
          fontWeight: "900",
        },
      ],
      "heading-sm-s": [
        "2rem",
        {
          lineHeight: "2rem",
          fontWeight: "900",
        },
      ],
      // body text size
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
      "body-sm-m": [
        "1.125rem",
        {
          lineHeight: "1.75rem",
          fontWeight: "300",
        },
      ],
      "body-sm-s": [
        "1rem",
        {
          lineHeight: "1.625rem",
          fontWeight: "300",
        },
      ],
      // button text size
      "btn-size": [
        "1.25rem",
        {
          fontWeight: "800",
          letterSpacing: "3.63px",
        },
      ],
    },
    extend: {
      fontFamily: {
        cursive: ["Big Shoulders Display", "cursive"],
        sans: ["Outfit", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gold: "#D5966C",
        white: "#FFFFFF",
        "almost-black": "#151515",
        "dark-grey": "#444444",
      },
      backgroundImage: {
        'gradient-white-to-black': "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 55.6420%, rgba(21,21,21,1) 55.6421%, rgba(21,21,21,1) 100%)",
        'gradient-btn-black-to-gold' : "linear-gradient(90deg, rgba(21,21,21,1) 0%, rgba(21,21,21,1) 78.2021%, rgba(213,150,108,1) 78.2022%, rgba(213,150,108,1) 100%)",
        'gradient-btn-gold-to-black' : "linear-gradient(90deg, rgba(213,150,108,1) 0%, rgba(213,150,108,1) 78.2021%, rgba(21,21,21,1) 78.2022%, rgba(21,21,21,1) 100%)",
        'gradient-btn-back-gold-to-black' : "linear-gradient(90deg, rgba(213,150,108,1) 0%, rgba(213,150,108,1) 21.4588%, rgba(21,21,21,1) 21.4589%, rgba(21,21,21,1) 100%)",
        'gradient-btn-back-black-to-gold' : "linear-gradient(90deg, rgba(21,21,21,1) 0%, rgba(21,21,21,1) 21.4588%, rgba(213,150,108,1) 21.4589%, rgba(213,150,108,1) 100%)",
      },
    },
  },
  plugins: [],
};
