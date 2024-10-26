import type { Metadata, Viewport } from 'next'
import { Roboto } from 'next/font/google'
import 'react-toastify/dist/ReactToastify.min.css'

import { Footer } from '@/components/footer/Footer'
import { Header } from '@/components/header/Header'
import { Toast } from '@/components/toast/Toast'

import { SITE_NAME } from '@/config/config'

import { cn } from '@/utils/utils'

import './globals.scss'
import { Providers } from './providers'

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['100', '300', '400', '500', '700', '900']
})

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	description:
		'Everyday goods, electronics and thousands of other products with discounts and promotions.',
	icons: {
		shortcut: '/favicons/favicon.ico',
		apple: [{ url: '/favicons/apple-touch-icon.png', type: 'image/png' }]
	}
}

export const viewport: Viewport = {
	initialScale: 1,
	width: 'device-width',
	themeColor: '#1B1B1B'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body className={cn(roboto.className, 'relative')}>
				<Providers>
					<Header />
					{children}
					<Toast />
				</Providers>
				<Footer />
			</body>
		</html>
	)
}
