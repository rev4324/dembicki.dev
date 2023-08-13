const colors = require("@radix-ui/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      fontFamily: {
        sans: [
          "Manrope Variable",
          ...require("tailwindcss/defaultTheme").fontFamily.sans,
        ],
        mono: [
          "IBM Plex Mono",
          ...require("tailwindcss/defaultTheme").fontFamily.mono,
        ],
      },
      animation: {
        blink: "blink 2s step-end infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
