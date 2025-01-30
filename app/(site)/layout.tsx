'use client';
import { Footer } from '@/components/Home/Footer';
import { Navbar } from '@/components/Home/nav-bar';
import { useResize } from '@/hooks/useResize';
import clsx from 'clsx';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
	const { width } = useResize();

	return (
		<div className="flex flex-col min-h-screen dark:bg-slate-800">
			<Navbar />
			<div className={clsx(width > 792 ? 'pt-28' : 'pt-20')}>
				<main className="flex-grow bg-gray-300">{children}</main>
				<Footer />
			</div>
		</div>
	);
}
