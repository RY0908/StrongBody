/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        1500: "1500ms",
        2000: "2000ms",
        2500: "2500ms",
        3000: "3000ms",
      },
      backgroundImage: {
        backroundhomesm: "url('./src/Assets/pxfuel (1).jpg')",
        backroundPricingCard: "url('./src/Assets/liquid-cheese.svg')",
        backroundAbout: "url('./src/Assets/1682963929882.jpg')",
      },
      screens: {
        xs: "400px",
      },
      fontFamily: {
        // Add your custom font name here
        lexend: ["Lexend exa"],
        Roboto: ["Roboto"],
        Poppins: ["Poppins"],
        Raleway: ["Raleway"],
        Rubik: ["Rubik"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "main-color": "rgba(22, 22, 22, 1)",
        "secondary-color": "#F4CE14",
        "btn-color": "rgba(233, 223, 135, 0.2)",
      },
    },
  },
  plugins: [],
};
