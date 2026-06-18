export default {
  content: ["./index.html", "./src/**/*.{js,jsx,css}", "./scripts/wiki-shell.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        // Darkest base: #110808 — page background, deep surfaces
        night: {
          950: "#110808",
          900: "#1a0c0c",
          800: "#261212",
          700: "#331a1a",
          600: "#432222",
          500: "#552a2a",
        },
        // Lightest base: #f3e3d8 — primary text, highlights
        cream: {
          50: "#faf5f1",
          100: "#f3e3d8",
          200: "#e6cfc0",
          300: "#d4b5a2",
          400: "#b89580",
          500: "#967865",
          600: "#74604f",
        },
        // Accent base: #8b4192 — interactive states, focus, CTAs
        accent: {
          950: "#2a0e2e",
          900: "#3f1650",
          800: "#5c2270",
          700: "#723088",
          600: "#8b4192",
          500: "#a053ab",
          400: "#b86dc4",
          300: "#ce92d6",
          200: "#e2bce8",
          100: "#f2e0f5",
        },
      },
    },
  },
  plugins: [],
};
