import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        card: "0px 16px 35px 0px rgba(0, 0, 0, 0.08)",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        moonGet: ["MoonGet", "sans-serif"],
      },
      colors: {
        brown: "#917155",
        whiteGray: "#FFFEFD",
        "white-40%": "#F8F8F8",
        "black-40%": "#00000066",
        "black-60%": "#000000CC",
        "black-default" : "#1E1E1E",
        bronze: "#ECA853",
        reddishBrown : '#C26143'
      },
      backgroundImage: {
        "bg-login":
          "linear-gradient(0deg, rgba(58, 33, 11, 0.67) 0%, rgba(58, 33, 11, 0.67) 100%), url('/images/bg-login.jpeg')",
        "bg-register":
          "linear-gradient(0deg, rgba(58, 33, 11, 0.67) 0%, rgba(58, 33, 11, 0.67) 100%), url('/images/baobab.jpeg')",
        "bg-accueil": "url('/images/bg1.jpg')",
        "bg-feedback" : "linear-gradient(0deg, rgba(58, 33, 11, 0.60) 0%, rgba(58, 33, 11, 0.60) 100%), url('/images/bg-feedback.jpeg'), lightgray 50% / cover no-repeat"
      },
      maxWidth: {
        page: "1536px",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
