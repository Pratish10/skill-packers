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
		title: '100kg Pinewood Industrial Packaging Box',
		src: '/100kg Pinewood Industrial Packaging Box.webp',
	},
	{
		id: 2,
		title: '3 Ton Rectnauglar Pinewood Wooden Pallet',
		src: '/3 Ton Rectnauglar Pinewood Wooden Pallet.webp',
	},
	{
		id: 3,
		title: '300kg Industrial Plywood Packaging Box',
		src: '/300kg Industrial Plywood Packaging Box.webp',
	},
	{
		id: 4,
		title: '50kg Industrial Wooden Packing Cases',
		src: '/50kg Industrial Wooden Packing Cases.webp',
	},
	{
		id: 5,
		title: 'Ply wood box with partition',
		src: '/Ply wood box with partition.webp',
	},
	{
		id: 6,
		title: 'Ply wood export paller',
		src: '/Ply wood export paller.webp',
	},
	{
		id: 7,
		title: 'Ply wood pallets and box',
		src: '/Ply wood pallets and box.webp',
	},
	{
		id: 8,
		title: 'Plywood Reper Pallet',
		src: '/Plywood Reper Pallet.webp',
	},
	{
		id: 9,
		title: 'Big Wooden Packaging Box',
		src: '/Big Wooden Packaging Box.webp',
	},
	{
		id: 10,
		title: 'Wooden Plywood Pallet',
		src: '/Wooden Plywood Pallet.webp',
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
