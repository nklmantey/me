import type { Config } from 'tailwindcss'

const config: Config = {
	content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
			},
			fontFamily: {
				montreal: 'var(--font-m)',
				mb: 'var(--font-mb)',
				editorial: 'var(--font-e)',
				ei: 'var(--font-ei)',
			},
		},
	},
	plugins: [],
}
export default config
