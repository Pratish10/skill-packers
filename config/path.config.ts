import { Award, Briefcase, Building2, CalendarDays, Clock, HeartHandshake, Leaf, Package, Recycle, ShieldCheck, Truck, Users } from 'lucide-react';

const APP_PATHS = {
	HOME: '/',
	ABOUT: '/about',
	SERVICES: '/services',
	CONTACT: '/contact',
	SITE_MAP: 'https://www.indiamart.com/skill-packers/sitenavigation.html',
};
export default APP_PATHS;

export const COMPANY_INFO = {
	gstNumber: '29CTSPM1187K1ZT',
	location: 'Bengaluru, Karnataka',
	phone: '+91-8045205647',
	email: 'info@skillpackers.com',
};

export const NAV_BAR_OPTIONS = [
	{ id: 1, name: 'Home', href: APP_PATHS.HOME },
	{ id: 2, name: 'About Us', href: APP_PATHS.ABOUT },
	{ id: 3, name: 'Services', href: APP_PATHS.SERVICES },
	{ id: 4, name: 'Contact Us', href: APP_PATHS.CONTACT },
];

export const FEATURES = [
	{ icon: Building2, title: 'Legal Status', value: 'Proprietorship' },
	{ icon: Briefcase, title: 'Annual Turnover', value: '40 L - 1.5 Cr' },
	{ icon: CalendarDays, title: 'GST Registration', value: '01-07-2017' },
	{ icon: Users, title: 'Team Size', value: 'Up to 10 People' },
	{ icon: ShieldCheck, title: 'GST Number', value: COMPANY_INFO.gstNumber },
];

export const COMMITMENT = [
	{
		icon: Leaf,
		title: 'Sustainability',
		description: 'We prioritize eco-friendly practices to minimize our environmental impact.',
	},
	{
		icon: Award,
		title: 'Quality',
		description: 'Our experienced team ensures every product meets the highest standards of excellence.',
	},
	{
		icon: HeartHandshake,
		title: 'Customer Satisfaction',
		description: "We're dedicated to delivering top-notch solutions that exceed client expectations.",
	},
];

export const PRODUCTS = [
	{
		id: 1,
		title: 'Ply wood box with partetion',
		src: 'https://5.imimg.com/data5/ANDROID/Default/2025/1/480281158/JU/VB/VR/31685456/product-jpeg-500x500.jpeg',
	},
	{
		id: 2,
		title: 'Wooden Plywood Pallet',
		src: 'https://5.imimg.com/data5/ANDROID/Default/2025/1/480205992/GE/UI/ER/31685456/product-jpeg-500x500.jpeg',
	},
	{
		id: 3,
		title: '70 kg Industrial Wooden Packaging Boxes',
		src: 'https://5.imimg.com/data5/SELLER/Default/2024/12/476747974/YN/DP/CG/31685456/wooden-packaging-box-500x500.jpg',
	},
	{
		id: 4,
		title: '10 Kg Wooden Ply Board Box',
		src: 'https://5.imimg.com/data5/SELLER/Default/2024/12/476756024/JL/JO/BB/31685456/wooden-ply-board-box-500x500.jpg',
	},
	{
		id: 5,
		title: 'Ply wood pallets and box',
		src: 'https://5.imimg.com/data5/ANDROID/Default/2025/1/480280393/WM/OT/RD/31685456/product-jpeg-500x500.jpeg',
	},
];

export const HERO_PRODUCTS = [
	{ icon: Package, text: 'Custom Packaging' },
	{ icon: Truck, text: 'Fast Delivery' },
	{ icon: Recycle, text: 'Eco-Friendly' },
	{ icon: Clock, text: '24/7 Support' },
];
