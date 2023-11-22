import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"], // ITO zavatra ito ao am index.html no misintona azy
        moonGet: ["MoonGet", "sans-serif"], // ITO zavatra ito ao am index.html no misintona azy
      },
      colors: {
        brown: "#917155",
        whiteGray: "#FFFEFD",
        "white-40%" : "#F8F8F8",
        "black-40%": "#00000066",
        "black-60%" : "#000000CC",
        bronze: "#ECA853",
      },
      backgroundImage: {
        "bg-login":
          "linear-gradient(0deg, rgba(58, 33, 11, 0.67) 0%, rgba(58, 33, 11, 0.67) 100%), url('/images/bg-login.jpeg')",
        "bg-register":
          "linear-gradient(0deg, rgba(58, 33, 11, 0.67) 0%, rgba(58, 33, 11, 0.67) 100%), url('/images/baobab.jpeg')",
        "bg-accueil": "url('/images/bg1.jpg')",
      },
      maxWidth : {
        "page" : "1440px"
      }
    },
  },
  plugins: [require("daisyui")],
};
export default config;
