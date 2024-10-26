import Link from 'next/link'
import { PropsWithChildren } from 'react'

import { cn } from '@/utils/utils'

import styles from './MainButton.module.scss'

export function MainButton({
	children,
	className
}: PropsWithChildren<{ className?: string }>) {
	return (
		<Link
			href={'/AZURE RP.exe'}
			className={cn(styles.start_game_button, className)}
		>
			{children}
		</Link>
	)
}
