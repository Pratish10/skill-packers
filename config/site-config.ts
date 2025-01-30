import { type Metadata } from 'next';

const TITLE = 'Skill Packers | Premium Wooden Pallets & Packaging Solutions';
const DESCRIPTION =
	'Skill Packers, established in 2017 in Bengaluru, specializes in manufacturing high-quality wooden pallets, packaging boxes, and custom wooden packaging solutions. We serve diverse industries with innovative, sustainable, and reliable packaging products.';

const BASE_URL = 'https://skill-packers.vercel.app';

export const siteConfig: Metadata = {
	title: {
		default: TITLE,
		template: '%s | Skill Packers',
	},
	description: DESCRIPTION,
	metadataBase: new URL(BASE_URL),
	alternates: {
		canonical: '/',
	},
	applicationName: 'Skill Packers',
	authors: [{ name: 'Krishnappa Malathesha', url: BASE_URL }],
	creator: 'Pratish',
	publisher: 'Skill Packers',
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	icons: {
		icon: 'https://5.imimg.com/data5/SELLER/Logo/2025/1/480209498/ZX/NL/FN/31685456/logo-skill-packers-120x120.jpeg',
	},
	keywords: [
		'wooden pallets',
		'wooden packaging boxes',
		'industrial packaging solutions',
		'custom wooden crates',
		'sustainable packaging',
		'supply chain packaging',
		'Bengaluru packaging manufacturer',
		'export packaging',
		'plywood boxes',
		'pinewood pallets',
	],
	category: 'Manufacturing',
	classification: 'Business & Industrial > Industrial Supplies > Packaging',
	openGraph: {
		type: 'website',
		locale: 'en_IN',
		url: BASE_URL,
		siteName: 'Skill Packers',
		title: TITLE,
		description: DESCRIPTION,
		images: [
			{
				url: 'https://5.imimg.com/data5/SELLER/Logo/2025/1/480209498/ZX/NL/FN/31685456/logo-skill-packers-120x120.jpeg',
				width: 1200,
				height: 630,
				alt: 'Skill Packers - Wooden Pallets and Packaging Solutions',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		creator: '@Pratish1086241',
		title: 'Pratish Ninawe',
		description:
			'Frontend Engineer specializing in React & TypeScript. Passionate about creating user-centered, scalable web apps and staying current with industry trends.',
		images: ['https://5.imimg.com/data5/SELLER/Logo/2025/1/480209498/ZX/NL/FN/31685456/logo-skill-packers-120x120.jpeg'],
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
	verification: {
		google: 'your-google-site-verification-code',
		yandex: 'your-yandex-verification-code',
		yahoo: 'your-yahoo-verification-code',
	},
};
