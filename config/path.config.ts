import { Award, Briefcase, Building2, CalendarDays, Clock, HeartHandshake, Leaf, Package, Recycle, ShieldCheck, Truck, Users } from 'lucide-react';

const APP_PATHS = {
	HOME: '/',
	ABOUT: '/about',
	SERVICES: 'https://www.indiamart.com/skill-packers/products-and-services.html',
	CONTACT: 'https://www.indiamart.com/skill-packers/enquiry.html',
	SITE_MAP: 'https://www.indiamart.com/skill-packers/sitenavigation.html',
};
export default APP_PATHS;

export const COMPANY_INFO = {
	gstNumber: '29CTSPM1187K1ZT',
	location: 'Bengaluru, Karnataka',
	phone: '+91-7760640572',
	email: 'skillpackers2017@gmail.com',
	owner: 'Malthesh .K (Owner)',
	name: 'Skill Packers',
	established: 2017,
	ceo: 'Krishnappa Malathesha',
	employees: 'Upto 10 People',
	turnover: '40 L - 1.5 Cr',
	googleMap:
		'https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d288.44135620256213!2d77.73112045736194!3d12.80226627645106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d12.802318!2d77.73119!5e1!3m2!1sen!2sin!4v1738212086607!5m2!1sen!2sin',
};

export const COMPANY_ALBUM = [
	{
		src: 'https://5.imimg.com/data5/SELLER/Default/2024/12/476790998/TG/EF/BT/31685456/sshs-1000x1000.jpg',
		alt: 'Warehouse Facilities',
	},
	{
		src: 'https://5.imimg.com/data5/SELLER/Default/2024/12/476790827/RQ/CX/ST/31685456/ddhd-1000x1000.jpg',
		alt: 'Our Warehouse',
	},
	{
		src: 'https://5.imimg.com/data5/SELLER/Default/2024/12/476854303/VP/WU/LF/31685456/manugaga-1000x1000.jpg',
		alt: 'Manufacturing Unit',
	},
];

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
		title: 'Wooden Plywood Pallet',
		src: 'https://5.imimg.com/data5/ANDROID/Default/2025/1/480205992/GE/UI/ER/31685456/product-jpeg-250x250.jpeg',
	},
	{
		id: 2,
		title: '3 Ton Rectnauglar Pinewood Wooden Pallet',
		src: 'https://5.imimg.com/data5/SELLER/Default/2024/12/476748346/HX/BD/KO/31685456/pinewood-wooden-pallet-250x250.png',
	},
	{
		id: 3,
		title: 'Ply wood box with partetion',
		src: 'https://5.imimg.com/data5/ANDROID/Default/2025/1/480281158/JU/VB/VR/31685456/product-jpeg-250x250.jpeg',
	},
	{
		id: 4,
		title: 'Ply wood box with partition',
		src: 'https://5.imimg.com/data5/ANDROID/Default/2025/1/480281158/JU/VB/VR/31685456/product-jpeg-250x250.jpeg',
	},
	{
		id: 5,
		title: 'Ply wood pallets and box',
		src: 'https://5.imimg.com/data5/ANDROID/Default/2025/1/480280393/WM/OT/RD/31685456/product-jpeg-1000x1000.jpeg',
	},
	{
		id: 6,
		title: 'Big Wooden Packaging Box',
		src: 'https://5.imimg.com/data5/SELLER/Default/2024/12/476752177/CO/MJ/EP/31685456/ea12302b-58dd-4b82-8c49-f90f9cb6f59a-250x250.jpeg',
	},
	{
		id: 7,
		title: 'Pinewood Pallet',
		src: 'https://5.imimg.com/data5/ANDROID/Default/2024/12/477407071/QB/OB/HC/31685456/product-jpeg-250x250.jpg',
	},
	{
		id: 8,
		title: '70 kg Industrial Wooden Packaging Boxes',
		src: 'https://5.imimg.com/data5/SELLER/Default/2024/12/476747974/YN/DP/CG/31685456/wooden-packaging-box-250x250.jpg',
	},
	{
		id: 9,
		title: '5 Ton Industrial Plywood Wooden Pallet',
		src: 'https://5.imimg.com/data5/SELLER/Default/2024/12/476753922/QE/PK/LQ/31685456/wooden-plywood-pallets-250x250.jpg',
	},
	{
		id: 10,
		title: 'Pine wood colesabel box',
		src: 'https://5.imimg.com/data5/ANDROID/Default/2025/1/480280105/FD/XE/RZ/31685456/product-jpeg-500x500.jpeg',
	},
];

export const HERO_PRODUCTS = [
	{ icon: Package, text: 'Custom Packaging' },
	{ icon: Truck, text: 'Fast Delivery' },
	{ icon: Recycle, text: 'Eco-Friendly' },
	{ icon: Clock, text: '24/7 Support' },
];

export const HSN_CODES = [
	{
		code: '32131000',
		description: 'Artists, students, or signboard painter colours, modifying tints, amusement colours, and the like in various forms.',
	},
	{ code: '32139000', description: 'Other artists, students, or signboard painters colours and modifying tints.' },
	{ code: '44151000', description: 'Wooden packaging materials like cases, crates, drums, pallets, and cable-drums.' },
	{ code: '44152000', description: 'Pallets, box pallets, and other wooden load boards.' },
];
