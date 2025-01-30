import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/app/theme-provider';
import NextTopLoader from 'nextjs-toploader';
import { siteConfig } from '@/config/site-config';

const openSans = Open_Sans({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = siteConfig;

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${openSans.className} antialiased`}>
				<NextTopLoader color="#1e40af" height={3} showSpinner={false} />
				<ThemeProvider attribute="class" defaultTheme="light">
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
