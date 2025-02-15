import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { OpenGraph } from '@/lib'
// import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
	...OpenGraph,
}
const editorialItalic = localFont({
	src: './fonts/Editorial_Italic.woff2',
	variable: '--font-ei',
})

const editorial = localFont({
	src: './fonts/Editorial.woff2',
	variable: '--font-e',
})

const montrealBold = localFont({
	src: './fonts/Montreal_Bold.woff2',
	variable: '--font-mb',
})

const montreal = localFont({
	src: './fonts/Montreal.woff2',
	variable: '--font-m',
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${montreal.className} ${editorial.variable} ${editorialItalic.variable} ${montrealBold.variable} antialiased`}>
				{children}
			</body>
		</html>
	)
}
