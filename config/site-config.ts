import { type Metadata } from 'next';

const TITLE = 'Skill Packers | Wooden Pallets & Packaging Solutions';
const DESCRIPTION =
	'Skill Packers, based in Bengaluru, manufactures wooden pallets, wooden packaging boxes, and more. We provide high-quality, reliable packaging solutions for your business needs. Established in 2017, we aim to lead the industry with innovation and commitment.';

const BASE_URL = 'https://skill-packers.vercel.app';

export const siteConfig: Metadata = {
	title: TITLE,
	description: DESCRIPTION,
	icons: {
		icon: '../app/favicon.ico',
	},
	applicationName: 'Skill Packers',
	creator: 'Pratish',
	twitter: {
		creator: '@Pratish1086241',
		title: TITLE,
		description: DESCRIPTION,
		card: 'summary_large_image',
	},
	openGraph: {
		title: TITLE,
		description: DESCRIPTION,
		siteName: 'Skill Packers',
		url: BASE_URL,
		locale: 'en_US',
		type: 'website',
	},
	category: 'Manufacturing',
	alternates: {
		canonical: BASE_URL,
	},
	keywords: ['wooden pallets', 'wooden packaging boxes', 'packaging solutions', 'industrial packaging', 'supply chain packaging'],
	metadataBase: new URL(BASE_URL),
};
