import type { Config } from 'tailwindcss'

const config: Config = {
	content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				tertiary: 'rgb(38 38 38 / <alpha-value>)',
				secondary: '#aaa',
				green: 'rgb(34 197 94 / <alpha-value>)',
			},
			fontFamily: {
				montreal: 'var(--font-m)',
				mb: 'var(--font-mb)',
				editorial: 'var(--font-e)',
				ei: 'var(--font-ei)',
			},
			animation: {
				line: 'expandLine 0.3s ease-in-out forwards',
			},
			keyframes: {
				expandLine: {
					'0%': { width: '0%' },
					'100%': { width: '100%' },
				},
			},
		},
	},
	plugins: [],
}
export default config
