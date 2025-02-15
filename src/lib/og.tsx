import type { Metadata } from 'next/types'

export const OpenGraph: Metadata = {
	title: {
		default: 'Nana Kofi Mantey',
		template: '%s · Mantey',
	},
	description:
		'Nana Kofi Mantey is a software engineer based in Ghana, who is passionate about building solutions and contributing to open source communities',
	openGraph: {
		title: 'Nana Kofi Mantey',
		description:
			'Nana Kofi Mantey is a software engineer based in Ghana, who is passionate about building solutions and contributing to open source communities.',
		url: 'https://nklmantey.com',
		siteName: 'Nana Kofi Mantey',
		images: [
			{
				url: 'https://nklmantey.com/og.png',
				width: 1200,
				height: 630,
			},
		],
		locale: 'en-US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	twitter: {
		title: 'Nana Kofi Mantey',
		card: 'summary_large_image',
		description:
			'Nana Kofi Mantey is a software engineer based in Ghana, who is passionate about building solutions and contributing to open source communities',
		images: [
			{
				url: 'https://www.nklmantey.com/og.png',
				width: 1200,
				height: 630,
			},
		],
	},
	icons: {
		apple: '/apple-icon.png',
		icon: '/icon1.png',
	},
	verification: {
		google: 'dAJ6pt6sgqyDlQZwEQyhM6_imxSoSi_J2dNFMI0N0pc',
	},
}
