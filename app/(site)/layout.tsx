import { Footer } from '@/components/Home/Footer';
import { Navbar } from '@/components/Home/nav-bar';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex flex-col min-h-screen dark:bg-slate-800">
			<Navbar />
			<div className="pt-28">
				<main className="flex-grow bg-gray-300">{children}</main>
				<Footer />
			</div>
		</div>
	);
}
