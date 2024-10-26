import { useUnit } from 'effector-react'

import styles from './Burger.module.scss'
import { $changeMenuState } from '@/context/modals'

export function Burger() {
	const changeMenuState = useUnit($changeMenuState)

	return (
		<div className={styles.burger_container}>
			<div className={styles.burger}>
				<input
					className={styles.menu_toggle}
					type='checkbox'
					id='menu-toggle'
					onChange={e => changeMenuState(e.target.checked)}
				/>
				<label
					className={styles.button_container}
					htmlFor='menu-toggle'
				>
					<div className={styles.menu_button} />
				</label>
			</div>
		</div>
	)
}
