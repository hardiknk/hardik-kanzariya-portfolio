/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#07101f",
        secondary: "#aebbd0",
        tertiary: "#111a32",
        accent: "#62e8bd",
        "black-100": "#0a1428",
        "black-200": "#081126",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern":
          "radial-gradient(circle at 84% 20%, rgba(98, 232, 189, 0.16), transparent 34%), radial-gradient(circle at 12% 18%, rgba(83, 116, 255, 0.18), transparent 28%), linear-gradient(180deg, #07101f 0%, #081328 100%)",
      },
    },
  },
  plugins: [],
};
