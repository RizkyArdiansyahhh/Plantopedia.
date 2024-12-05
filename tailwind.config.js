/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        paddinhg: "16px",
      },
    },
  },
  plugins: [],
};
