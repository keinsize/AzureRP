import Image from 'next/image'
import Link from 'next/link'

import { footerLinks } from '@/config/config'

import { cn } from '@/utils/utils'

import styles from './Footer.module.scss'

export function Footer() {
	return (
		<footer className={cn(styles.footer, 'fixed-size')}>
			<div className={styles.azure}>
				<Image
					src={'/favicons/azure.svg'}
					width={32}
					height={32}
					alt=''
				/>
				<div className={styles.text}>
					<b>Azure</b> Games © 2024
				</div>
			</div>
			<div className={styles.links}>
				{footerLinks.map(link => (
					<Link
						href={link.href}
						className={styles.link}
						key={link.title}
					>
						{link.title}
					</Link>
				))}
			</div>
		</footer>
	)
}
