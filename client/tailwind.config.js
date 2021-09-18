/* eslint-disable @typescript-eslint/no-var-requires, global-require */
const { teal } = require("tailwindcss/colors");

module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}"],
	mode: "jit",
	darkMode: false,
	theme: {
		extend: {
			colors: {
				...teal,
				600: "#0BA89A",
			},
			fontFamily: {
				sans: ["Inter var", ...require("tailwindcss/defaultTheme").fontFamily.sans],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("@tailwindcss/forms")],
};
