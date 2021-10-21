module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1440px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        purp: "#3E2D67",
        ylw: "#F8C844",
        grn: "#A1C56F",
        lghtGray: "#DBDBDB",
      },
      maxWidth: {
        864: "864px",
        1080: "1080px",
        1440: "1440px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
