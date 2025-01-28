import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)'
			},
			fontFamily: {
				'last-shuriken': [
					'url("/public/the-last-shuriken.otf")'
				]
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			screens: {
				mobile: { max: "1080px" }, // Targets devices with width up to 1080px
				tall: { raw: "(min-height: 900px) and (max-width: 1080px)" }, // Your custom tall screen
			},
			
		},

	},
} satisfies Config;
