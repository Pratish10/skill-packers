'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, CircleUserRound } from 'lucide-react';
import APP_PATHS, { COMPANY_INFO } from '@/config/path.config';

export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-gray-300">
			<div className="w-full h-64">
				<iframe src={COMPANY_INFO.googleMap} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
			</div>
			<div className="container mx-auto px-4 py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					<div>
						<h3 className="text-lg font-semibold mb-4">About Us</h3>
						<p className="text-sm">
							Established in the year 2017 at Bengaluru and Karnataka,
							<br />
							We <strong>Skill Packers</strong> are a Proprietorship based firm, Engaged as the foremost Manufacturer of Wooden Pallets,
							Wooden Packaging Box And Many More.
						</p>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4">Our Company</h3>
						<ul className="space-y-2">
							<li>
								<Link href={APP_PATHS.ABOUT} className="text-sm hover:text-blue-600 dark:hover:text-blue-400">
									About Us
								</Link>
							</li>
							<li>
								<Link href={APP_PATHS.CONTACT} className="text-sm hover:text-blue-600 dark:hover:text-blue-400" target="_blank">
									Contact Us
								</Link>
							</li>
							<li>
								<Link href={APP_PATHS.SITE_MAP} className="text-sm hover:text-blue-600 dark:hover:text-blue-400" target="_blank">
									Site Map
								</Link>
							</li>
							<li>
								<Link
									href="https://www.indiamart.com/skill-packers/skill-packers.pdf"
									className="text-sm hover:text-blue-600 dark:hover:text-blue-400"
									target="_blank"
								>
									Download Brochure
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4">Contact Us</h3>
						<ul className="space-y-2">
							<li className="flex items-center">
								<CircleUserRound className="w-4 h-4 mr-2" /> {COMPANY_INFO.owner}
							</li>
							<li className="flex items-center">
								<Mail className="w-4 h-4 mr-2" /> {COMPANY_INFO.email}
							</li>
							<li className="flex items-center">
								<Phone className="w-4 h-4 mr-2" /> {COMPANY_INFO.phone}
							</li>
							<li className="flex items-start">
								<MapPin className="w-4 h-4 mr-2 flex-shrink-0 mt-6" />
								<span>
									Ground Floor, No 14, Girish B Building, Raghava Nagar, Neralur, Rural Bengaluru, Karnataka, India <br />
									Pin - 562107
								</span>
							</li>
						</ul>
					</div>
				</div>
				<div className="mt-8 pt-8 border-t border-blue-200 dark:border-blue-700">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<p className="text-sm">&copy; {currentYear} Skill Packers. All rights reserved.</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
