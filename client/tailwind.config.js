// eslint-disable-next-line @typescript-eslint/no-var-requires
const { teal } = require("tailwindcss/colors");

module.exports = {
	purge: [],
	mode: "jit",
	darkMode: false,
	theme: {
		extend: {
			colors: {
				...teal,
				600: "#0BA89A",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
