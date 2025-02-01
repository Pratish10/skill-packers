'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Menu, Moon, Sun } from 'lucide-react';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import APP_PATHS, { NAV_BAR_OPTIONS } from '@/config/path.config';
import APP_LOGO from '../../public/Skill-packers-logo.webp';
import Image from 'next/image';
import { useScroll } from '@/hooks/useScroll';
import { Button } from '@/components/ui/button';
import clsx from 'clsx';
import { InfoBanner } from './InfoBanner';
import { useResize } from '@/hooks/useResize';

const NavLink = ({ href, label, ...rest }: { href: string; label: string; [key: string]: unknown }) => (
	<Link href={href} {...rest} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-300 transition-colors">
		{label}
	</Link>
);

const NavLinkMobile = ({
	href,
	label,
	onClick,
	delay = 0.1,
	className,
}: {
	href: string;
	label: string;
	className?: string;
	onClick?: () => void;
	delay?: number;
}) => (
	<motion.div
		initial="initial"
		animate="animate"
		exit="exit"
		transition={{ duration: 0.3, delay }}
		className={clsx('hover:underline transition-all duration-200 hover:text-blue-600 cursor-pointer text-3xl ', className)}
	>
		<Link href={href} onClick={onClick}>
			{label}
		</Link>
	</motion.div>
);

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [scrolled, setScrolled] = useState(false);
	const { theme, setTheme } = useTheme();
	const { scrollY } = useScroll();
	const { width } = useResize();

	useEffect(() => {
		setScrolled(scrollY > 20);
	}, [scrollY]);

	return (
		<motion.nav
			className={clsx(
				scrolled ? 'bg-white dark:bg-gray-900 shadow-lg' : 'bg-transparent',
				'fixed w-full z-50 transition-all duration-300 pb-4'
			)}
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ type: 'spring', stiffness: 300, damping: 30 }}
		>
			{width > 792 && <InfoBanner />}
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16 pt-4">
					<Link href={APP_PATHS.HOME} className="flex items-center space-x-2">
						<Image src={APP_LOGO || '/placeholder.svg'} alt="skill-packers" width={50} height={50} className="rounded-full" />
						<div className="flex-col">
							<span className="font-bold text-2xl text-blue-800 dark:text-gray-300">Skill Packers</span>
							<p className="text-xs text-gray-600 dark:text-gray-400">Packaging company in Bommasandra</p>
						</div>
					</Link>

					<div className="hidden md:flex items-center space-x-8">
						{NAV_BAR_OPTIONS.map((item) => (
							<NavLink key={item.id} label={item.name} {...item} />
						))}

						<motion.button
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
							onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
							className="p-2 rounded-full bg-blue-200 dark:bg-blue-800"
						>
							{theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
						</motion.button>
					</div>

					<Sheet
						onOpenChange={() => {
							setIsOpen(!isOpen);
						}}
						open={isOpen}
					>
						<SheetTrigger asChild>
							<motion.button
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.95 }}
								className="md:hidden text-blue-800 dark:text-gray-300"
							>
								<Menu />
							</motion.button>
						</SheetTrigger>
						<SheetContent>
							<SheetTitle className="my-4">
								<Link href={APP_PATHS.HOME} className="flex items-center space-x-2">
									<Image src={APP_LOGO || '/placeholder.svg'} alt="skill-packers" width={40} height={40} className="rounded-full" />
									<div className="flex-col">
										<span className="font-bold text-2xl text-blue-800 dark:text-gray-300">Skill Packers</span>
										<p className="text-xs text-gray-600 dark:text-gray-400">Packaging company in Bommasandra</p>
									</div>
								</Link>
							</SheetTitle>
							<nav className="flex flex-col space-y-4">
								{NAV_BAR_OPTIONS.map((item) => (
									<div key={item.id}>
										<NavLinkMobile
											href={item.href}
											label={item.name}
											onClick={() => {
												setIsOpen(!isOpen);
											}}
										/>
									</div>
								))}
								<Button
									onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
									className="flex items-center space-x-2 dark:text-blue-800 text-gray-300"
								>
									{theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
									<span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
								</Button>
							</nav>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</motion.nav>
	);
};
