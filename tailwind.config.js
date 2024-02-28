/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        apocrypha: {
          100: "#f6611f",
          200: "#cc5c19"
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")
  ],
}

