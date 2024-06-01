/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			backgroundColor: {
				lightColPrimary: "#ffffff",
				lightColrSecondary: "#f5f1f1",
				darkColPrimary: "#101720",
				darkColSecondary: "#0B1215",
			},
		},
	},
	plugins: [],
};

