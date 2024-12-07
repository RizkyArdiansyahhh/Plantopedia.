/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./pages/**/*.{html,js}"],
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
        lightSecondary: "#FFB22C",
      },
      fontFamily: {
        Inter: ["Poppins"],
      },
    },
  },
  plugins: [],
};
