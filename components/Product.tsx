'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Product {
	id: number;
	title: string;
	src: string;
}

interface ProductSectionProps {
	products: Product[];
}

export const Product: React.FC<ProductSectionProps> = ({ products }) => {
	const [imagesLoaded, setImagesLoaded] = useState<{ [key: number]: boolean }>({});

	const handleImageLoad = (id: number) => {
		setImagesLoaded((prev) => ({ ...prev, [id]: true }));
	};

	return (
		<section id="products" className="py-16 bg-white dark:bg-slate-900">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-semibold text-blue-800 dark:text-blue-100 text-center mb-8">Our Products</h2>
				<Swiper
					spaceBetween={20}
					slidesPerView={1}
					breakpoints={{
						640: { slidesPerView: 2 },
						768: { slidesPerView: 3 },
						1024: { slidesPerView: 4 },
					}}
					navigation
					pagination={{ clickable: true }}
					modules={[Navigation, Pagination]}
					className="product-slider"
				>
					{products.map((product) => (
						<SwiperSlide key={product.id}>
							<motion.div
								className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg h-[300px] flex flex-col"
								whileHover={{ scale: 1.03 }}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: product.id * 0.1 }}
							>
								<div className="relative w-full h-[200px]">
									<Image
										src={product.src || '/placeholder.svg'}
										alt={product.title}
										fill
										sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
										className={`rounded-t-lg object-contain transition-opacity duration-300 ${
											imagesLoaded[product.id] ? 'opacity-100' : 'opacity-0'
										}`}
										onLoadingComplete={() => handleImageLoad(product.id)}
									/>
									{!imagesLoaded[product.id] && (
										<div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-t-lg" />
									)}
								</div>
								<div className="p-4 flex-grow flex items-center">
									<h3 className="text-sm font-medium text-blue-800 dark:text-blue-100 truncate">{product.title}</h3>
								</div>
							</motion.div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};
