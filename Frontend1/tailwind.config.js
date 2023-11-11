/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        m60: "-15rem",
      },
      transitionDuration: {
        1500: "1500ms",
        2000: "2000ms",
        2500: "2500ms",
        3000: "3000ms",
      },
      backgroundImage: {
        backroundhomesm:
          "url('https://res.cloudinary.com/dwucsx9ot/image/upload/v1699698294/Strongbody/cludrnkbporkcbqax9bs.jpg')",
        backroundPricingCard:
          "url('https://res.cloudinary.com/dwucsx9ot/image/upload/v1699698387/Strongbody/fkc9lc9wfrnp8viqgzhf.svg')",
        backroundAbout:
          "url('https://res.cloudinary.com/dwucsx9ot/image/upload/v1699698331/Strongbody/fggeq943di1tjshb68mq.jpg')",
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
        bebas: ["Bebas Neue"],
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
