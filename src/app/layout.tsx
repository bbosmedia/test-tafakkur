import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { ThemeProvider } from 'next-themes';
import GetLocalStorageProducts from '@/components/layout/get-localstorage-products';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header'

const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
	title: 'Taffakkur Products CRUD',
	description: 'The web application for Taffakkur products CRUD.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			suppressHydrationWarning
		>
			<body className={`${inter.className}`}>
				<ThemeProvider
					attribute='class'
					defaultTheme='dark'
					enableSystem
					disableTransitionOnChange
				>
					<Header></Header>
					{children}
					<GetLocalStorageProducts />
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
