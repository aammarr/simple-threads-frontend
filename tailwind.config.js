/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "t-",
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: "0.625rem", // Extra extra small text size
        xs: "0.75rem", // Small text size
        base: "1rem", // Default text size
        lg: "1.125rem", // Large text size
        xl: "1.25rem", // Extra large text size
        "2xl": "1.5rem", // 2x extra large text size
        "3xl": "1.875rem", // 3x extra large text size
        "4xl": "2.25rem", // 4x extra large text size
        "5xl": "3rem", // 5x extra large text size
        "6xl": "4rem", // 6x extra large text size
      },
    },
  },
  plugins: [],
};
