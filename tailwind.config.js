module.exports = {
  content: [
    "./assets/**/*.{vue,js,css}",
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./server/**/*.{js,ts}",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/windplus/styles/**/*.{vue,js,css}",
    "./node_modules/windplus/styles/*.{vue,js,css}",
    "./node_modules/windplus/styles/main.css",
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"],
        gsans: ['"Open Sans"', "sans-serif"],
        fira: ['"fira Code", "monospace"'],
      },
      colors: {
        mycyan: "#00FFE1",
      },
      animation: {
        fadeInImage: "fadeIn .4s ease-in-out",
      },
      keyframes: () => ({
        fadeIn: {
          "0%": { opacity: 0 },
          "50%": { opacity: 0 },
          "60%": { opacity: 0.2 },
          "70%": { opacity: 0.4 },
          "80%": { opacity: 0.6 },
          "90%": { opacity: 0.8 },
          "100%": { opacity: 1 },
        },
      }),
    },
  },
};
