import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/header';
import { ThemeProvider } from 'next-themes';

const Inter = Geist({
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
			<body className={`${Inter.className}`}>
				<ThemeProvider
					attribute='class'
					defaultTheme='dark'
					enableSystem
					disableTransitionOnChange
				>
					<Header></Header>
					<main>{children}</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
