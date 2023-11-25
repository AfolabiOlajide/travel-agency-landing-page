import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./modules/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                main: "#e79310",
				myGreen: "#5dad1f",
				whitishPurple: "#f9f7fe",
				myOrange: "#ff8d6c",
				lightOrange: "#fff9ee",
                grey: "#181e4b"
            },
        },
    },
    plugins: [],
};
export default config;
