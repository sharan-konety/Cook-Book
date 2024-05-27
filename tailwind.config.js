/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./node_modules/rizzui/dist/*.{js,ts,jsx,tsx}", // Required this line to compile RizzUI style.
    // configure your components, and any other source files path that contain Tailwind class names.
  ],
  theme: {
    extend: {
      colors: {
        background: colors.white,
        foreground: colors.gray[600],
        muted: colors.gray[200],
        primary: {
          lighter: colors.gray[200],
          DEFAULT: colors.gray[800],
          dark: colors.gray[950],
          foreground: colors.white,
        },
        secondary: {
          lighter: colors.indigo[200],
          DEFAULT: colors.indigo[500],
          dark: colors.indigo[700],
          foreground: colors.white,
        },
        red: {
          lighter: colors.rose[200],
          DEFAULT: colors.rose[500],
          dark: colors.rose[700],
        },
        orange: {
          lighter: colors.amber[200],
          DEFAULT: colors.amber[500],
          dark: colors.amber[700],
        },
        blue: {
          lighter: colors.sky[200],
          DEFAULT: colors.sky[500],
          dark: colors.sky[700],
        },
        green: {
          lighter: colors.emerald[200],
          DEFAULT: colors.emerald[500],
          dark: colors.emerald[700],
        },
      },
      // here goes your additional configuration
    },
  },
  plugins: [require("@tailwindcss/forms")], // Required @tailwindcss/forms plugin.
};