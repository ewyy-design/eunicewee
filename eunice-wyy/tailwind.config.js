/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,html}"],
  theme: {
    extend: {},
    colors: {
      prussianblue: "#023047",
      bittersweet: "#ED6A5A",
      white: "#F4F1E8",
      persiangreen: "#1B998B"
    },
    screens: {
      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      tablet: "600px"
      // => @media (min-width: 600px) { ... }
    }
  },
  plugins: []
}
