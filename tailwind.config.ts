import type {Config} from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			gridTemplateColumns: {
				custom: "5% 15% 20% 10% 10% 15% 15% 5%",
				"custom-2": "15% 10% 30% 15% 20% 5%",
				"custom-3": "20% 20% 15% 20% 15% 5%",
				"custom-4": "20% 40% 25% 15%",
				"custom-5": "25% 50% 25%",
				"custom-6": "30% 20% 30% 20%",
				"custom-7": "10% 20% 20% 10% 15% 20%",
				"custom-8": "20% 20% 15% 25% 15%",
			},
			boxShadow: {
				card: "0px 16px 35px 0px rgba(0, 0, 0, 0.08)",
			},
			fontFamily: {
				manrope: ["Manrope", "sans-serif"],
				moonGet: ["MoonGet", "sans-serif"],
			},
			colors: {
				blueLight: "#E4F0FF",
				green: "#0FA958",
				"green-80%": "#1FA958",
				blue: "#70A6E8",
				greenLight: "#DDF9E4",
				brown: "#917155",
				"brown-40%": "#D7B697",
				"brown-60%": "#D7B697",
				"brown-80%": "#542E0E",
				whiteGray: "#FFFEFD",
				"gray-60%": "#979797",
				"white-10%": "#F1F1F1",
				"white-40%": "#F8F8F8",
				"black-40%": "#00000066",
				"black-60%": "#000000CC",
				"black-default": "#1E1E1E",
				bronze: "#ECA853",
				reddishBrown: "#C26143",
				saumon: "#FFEADA",
			},
			backgroundImage: {
				"bg-login":
					"linear-gradient(0deg, rgba(58, 33, 11, 0.67) 0%, rgba(58, 33, 11, 0.67) 100%), url('/images/bg-login.jpeg')",
				"bg-register":
					"linear-gradient(0deg, rgba(58, 33, 11, 0.67) 0%, rgba(58, 33, 11, 0.67) 100%), url('/images/baobab.jpeg')",
				"bg-accueil": "url('/images/bg1.jpg')",
				"bg-feedback":
					"linear-gradient(0deg, rgba(58, 33, 11, 0.60) 0%, rgba(58, 33, 11, 0.60) 100%), url('/images/bg-feedback.jpeg')",
				"bg-accueil-video": "url('/images/imgVideo.jpeg') ",
				// "url('/images/imgVideo.jpeg'), lightgray 50% / cover no-repeat",
			},
			maxWidth: {
				page: "1536px",
			},
			screens: {
				tablet: "481px",
				laptop: "769px",
				desktop: "1025px",
				"large-width": "1441px",
			},
		},
	},
	plugins: [require("daisyui")],
};
export default config;
