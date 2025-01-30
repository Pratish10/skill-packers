'use client';

import { COMPANY_ALBUM, COMPANY_INFO, HSN_CODES } from '@/config/path.config';
import { motion } from 'framer-motion';

const About = () => {
	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
			<div className="container mx-auto px-4 py-12">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="grid md:grid-cols-2 gap-12 items-center mb-16"
				>
					<div className="space-y-6">
						<p className="text-lg leading-relaxed">
							Established in {COMPANY_INFO.established} in {COMPANY_INFO.location}, <strong>{COMPANY_INFO.name}</strong> is a leading
							manufacturer of high-quality wooden pallets, wooden packaging boxes, and other wooden packing solutions.
						</p>
						<p className="text-lg leading-relaxed">
							As a proprietorship firm led by CEO {COMPANY_INFO.ceo}, we pride ourselves on delivering robust, reliable, and sustainable
							packaging solutions tailored to meet diverse industry needs.
						</p>
					</div>
					<motion.img
						src={COMPANY_ALBUM[0].src}
						alt={COMPANY_ALBUM[0].alt}
						className="rounded-2xl shadow-lg w-full h-auto object-cover"
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ duration: 0.6 }}
					/>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="mb-16"
				>
					<h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-6">Company Album</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{COMPANY_ALBUM.map((image, index) => (
							<motion.div
								key={index}
								className="relative overflow-hidden rounded-2xl shadow-lg"
								whileHover={{ scale: 1.05 }}
								transition={{ duration: 0.3 }}
							>
								<img src={image.src || '/placeholder.svg'} alt={image.alt} className="w-full h-64 object-cover" />
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
									<p className="text-white text-lg font-semibold">{image.alt}</p>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>

				<motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
					<h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-6">HSN Codes We Deal In</h2>
					<div className="grid md:grid-cols-2 gap-6">
						{HSN_CODES.map((code, index) => (
							<motion.div
								key={index}
								className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
								whileHover={{ scale: 1.03 }}
								transition={{ duration: 0.3 }}
							>
								<h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">{code.code}</h3>
								<p>{code.description}</p>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default About;
