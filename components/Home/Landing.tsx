'use client';

import APP_PATHS, { COMMITMENT, FEATURES, HERO_PRODUCTS, PRODUCTS } from '@/config/path.config';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Button } from '../ui/button';
import { ArrowUp } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { useScroll } from '@/hooks/useScroll';

export default function LandingPage() {
	const [showScrollTopButton, setShowScrollTopButton] = useState(false);
	const { scrollY } = useScroll();

	useEffect(() => {
		if (scrollY > 1550) {
			setShowScrollTopButton(true);
		} else {
			setShowScrollTopButton(false);
		}
	}, [scrollY]);

	const scrollToTop = useCallback(() => {
		if (typeof window !== 'undefined' && typeof document !== 'undefined') {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		}
	}, []);

	return (
		<div className="bg-blue-50 dark:bg-slate-900 text-blue-800 dark:text-gray-300">
			{/* Hero Section */}
			<section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-blue-300 dark:from-slate-800 dark:to-slate-900 overflow-hidden">
				<div className="container mx-auto px-4 text-center z-10">
					<motion.h1
						className="text-4xl md:text-6xl font-bold mb-4"
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
					>
						Welcome to Skill Packers
					</motion.h1>
					<motion.p
						className="text-lg md:text-xl mb-8"
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.3 }}
					>
						Expert solutions for all your wooden packaging needs.
					</motion.p>
					<motion.div
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}
					>
						{HERO_PRODUCTS.map((item, index) => (
							<div
								key={index}
								className="flex items-center justify-center space-x-2 bg-white dark:bg-slate-700 p-4 rounded-lg shadow-md"
							>
								<item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
								<span className="font-semibold">{item.text}</span>
							</div>
						))}
					</motion.div>
					<motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, delay: 1 }}>
						<Link
							href="#products"
							className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full shadow-lg transition-all duration-300 text-lg font-semibold"
						>
							Explore Products
						</Link>
					</motion.div>
				</div>
				<div className="absolute inset-0 w-full h-full bg-blue-200 dark:bg-slate-800 opacity-20">
					<Image
						src="/placeholder.svg?height=1080&width=1920"
						alt="Hero Background"
						layout="fill"
						objectFit="cover"
						className="mix-blend-overlay"
					/>
				</div>
				<div className="absolute inset-0 bg-repeat opacity-5">
					<svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
						<path d="M0 0h80v80H0z" fill="none" />
						<path d="M15 15h50v50H15z" fill="currentColor" />
					</svg>
				</div>
			</section>

			{/* Products Section */}
			<section id="products" className="py-16 bg-white dark:bg-slate-900">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-semibold text-blue-800 dark:text-blue-100 text-center mb-8">Our Products</h2>
					<Swiper
						spaceBetween={20}
						slidesPerView={1}
						breakpoints={{
							640: { slidesPerView: 1 },
							768: { slidesPerView: 2 },
							1024: { slidesPerView: 3 },
						}}
						navigation
						pagination={{ clickable: true }}
						modules={[Navigation, Pagination]}
						className="product-slider"
					>
						{PRODUCTS.map((product) => (
							<SwiperSlide key={product.id}>
								<motion.div
									className="bg-white dark:bg-slate-700 rounded-lg overflow-hidden shadow-lg"
									whileHover={{ scale: 1.05 }}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.8, delay: product.id * 0.2 }}
								>
									<div className="w-full h-full overflow-hidden relative">
										<Image
											src={product.src || '/placeholder.svg'}
											alt={product.title}
											className="object-cover"
											width={300}
											height={300}
										/>
										<div className="p-4">
											<h3 className="text-lg font-medium">{product.title}</h3>
										</div>
									</div>
								</motion.div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-20 bg-gradient-to-b from-blue-100 to-blue-200 dark:from-slate-800 dark:to-slate-700">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Our Company at a Glance</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
						{FEATURES.slice(0, 3).map((item, index) => (
							<motion.div
								key={index}
								className="bg-white dark:bg-slate-600 p-6 rounded-lg shadow-lg flex items-center space-x-4"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
							>
								<item.icon className="w-12 h-12 text-blue-500 dark:text-blue-300" />
								<div>
									<h3 className="text-xl font-semibold">{item.title}</h3>
									<p className="text-gray-600 dark:text-gray-300">{item.value}</p>
								</div>
							</motion.div>
						))}
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
						{FEATURES.slice(3).map((item, index) => (
							<motion.div
								key={index}
								className="bg-white dark:bg-slate-600 p-6 rounded-lg shadow-lg flex items-center space-x-4"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
							>
								<item.icon className="w-12 h-12 text-blue-500 dark:text-blue-300" />
								<div>
									<h3 className="text-xl font-semibold">{item.title}</h3>
									<p className="text-gray-600 dark:text-gray-300">{item.value} </p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Our Commitment Section */}
			<section className="py-20 bg-white dark:bg-slate-800">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Our Commitment</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{COMMITMENT.map((item, index) => (
							<motion.div
								key={index}
								className="bg-blue-100 dark:bg-slate-700 p-6 rounded-lg shadow-lg text-center"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
							>
								<item.icon className="w-16 h-16 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
								<h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
								<p className="text-gray-700 dark:text-gray-300">{item.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Call to Action Section */}
			<section className="py-20 bg-blue-300 dark:bg-slate-700">
				<div className="container mx-auto px-4 text-center">
					<h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
					<p className="text-lg md:text-xl mb-8">Let us help you with your packaging needs. Reach out to us today!</p>
					<motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }}>
						<Link
							href={APP_PATHS.CONTACT}
							className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full shadow-lg transition-all duration-300 text-lg font-semibold"
						>
							Contact Us
						</Link>
					</motion.div>
				</div>
			</section>
			<AnimatePresence>
				{showScrollTopButton && (
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 20 }}
						className="fixed bottom-8 right-8 z-50"
					>
						<Button
							size="icon"
							variant="outline"
							onClick={scrollToTop}
							className="rounded-full shadow-md hover:shadow-lg transition-shadow"
						>
							<ArrowUp className="h-4 w-4" />
						</Button>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
