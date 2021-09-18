module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"plugin:react/recommended",
		"airbnb",
		"airbnb-typescript",
		"plugin:@typescript-eslint/recommended",
		"prettier",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: "module",
		tsconfigRootDir: __dirname,
		project: "./tsconfig.eslint.json",
	},
	plugins: ["react", "@typescript-eslint", "prettier"],
	rules: {
		quotes: [2, "double", { avoidEscape: true }],
		"prettier/prettier": 2,
		"react/jsx-props-no-spreading": 0,
		"react/jsx-filename-extension": [2, { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
		"import/no-extraneous-dependencies": 0,
	},
};
