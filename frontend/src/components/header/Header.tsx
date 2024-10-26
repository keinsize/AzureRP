'use client'

import { useUnit } from 'effector-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

import { headerLinks } from '@/config/config'

import {
	addOverflowHiddenToBody,
	cn,
	removeOverflowHiddenFromBody
} from '@/utils/utils'

import { Burger } from '../burger/Burger'

import styles from './Header.module.scss'
import { Profile } from './profile/Profile'
import { $menuIsOpen } from '@/context/modals'

export function Header() {
	const pathname = usePathname()
	const menuIsOpen = useUnit($menuIsOpen)

	useEffect(() => {
		if (menuIsOpen) {
			addOverflowHiddenToBody()
		} else {
			removeOverflowHiddenFromBody()
		}

		return () => {
			removeOverflowHiddenFromBody()
		}
	}, [menuIsOpen])

	return (
		<header className={cn(styles.header, 'fixed-size')}>
			<div
				className={cn(styles.content, { [styles.mobile_opened]: menuIsOpen })}
			>
				<div className={styles.links}>
					{headerLinks.map(link => (
						<Link
							href={link.href}
							className={cn(styles.link, {
								[styles.active]: pathname === link.href
							})}
							key={link.title}
						>
							{link.title}
						</Link>
					))}
				</div>
				<Profile />
			</div>
			<Burger />
		</header>
	)
}
