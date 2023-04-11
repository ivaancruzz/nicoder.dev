/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      primary: "#0A2342",
      light: "#FFFDF7",
      lightSmoke: "#F0F0F0",
      dark: "#474350",
      muted: "#9A9A9A",
      darkLight: "#121F30",
      darkActive: "#000A17",
      white: "#ffffff",
    },
    fontFamily: {
      sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
}
