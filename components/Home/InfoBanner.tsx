'use client';
import { COMPANY_INFO } from '@/config/path.config';
import { useScroll } from '@/hooks/useScroll';
import clsx from 'clsx';
import { CheckCircle, Mail, MapPin, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';

export const InfoBanner = () => {
	const [scrolled, setScrolled] = useState(false);
	const { scrollY } = useScroll();

	useEffect(() => {
		setScrolled(scrollY > 20);
	}, [scrollY]);
	return (
		<div
			className={clsx(
				scrolled
					? 'bg-gradient-to-b from-blue-100 to-blue-200 dark:bg-gradient-to-b dark:from-blue-800 dark:to-blue-900'
					: 'bg-white dark:bg-gray-800',
				'py-2 text-sm'
			)}
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center text-blue-800 dark:text-gray-300">
				<div className="flex items-center space-x-2">
					<span>GST: {COMPANY_INFO.gstNumber}</span>
					<CheckCircle className="w-4 h-4 text-green-500" />
					<span className="text-green-600 dark:text-green-400">Verified</span>
				</div>
				<div className="flex items-center space-x-4">
					<div className="flex items-center">
						<MapPin className="w-4 h-4 mr-1" />
						<span>{COMPANY_INFO.location}</span>
					</div>
					<div className="flex items-center">
						<Phone className="w-4 h-4 mr-1" />
						<span>{COMPANY_INFO.phone}</span>
					</div>
					<div className="flex items-center">
						<Mail className="w-4 h-4 mr-1" />
						<span>{COMPANY_INFO.email}</span>
					</div>
				</div>
			</div>
		</div>
	);
};
