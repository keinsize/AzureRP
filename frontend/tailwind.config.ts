import type { Config } from 'tailwindcss'

const config: Config = {
	darkMode: ['class'],
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				theme: '#1B1B1B',
				white: '#FFFFFF',
				'light-gray': '#BBBBBB',
				black: '#000000',
				orange: '#FF7A2F'
			}
		}
	}
}
export default config
