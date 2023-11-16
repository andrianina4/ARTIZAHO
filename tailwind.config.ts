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
      colors : {
        brown : '#917155',
        whiteGray : "#FFFEFD",
      },
      backgroundImage: {
        'bg-login' : "linear-gradient(0deg, rgba(58, 33, 11, 0.67) 0%, rgba(58, 33, 11, 0.67) 100%), url('/images/bg-login.jpeg')"
        // 'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // 'gradient-conic':
        //   'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
