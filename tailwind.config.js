/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        paddinhg: "16px",
      },
      colors: {
        primary: "#3A9842",
        secondary: "#005B4C",
        light: "#DFF392",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
