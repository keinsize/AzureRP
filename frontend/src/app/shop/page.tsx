import Image from 'next/image'

import { cn } from '@/utils/utils'

import styles from './Shop.module.scss'
import { DonateForm } from './donateForm/DonateForm'

export default function ShopPage() {
	return (
		<div className={styles.shop_container}>
			<div className={cn(styles.shop_content, 'fixed-size')}>
				<div className={styles.header}>
					<div className={styles.title}>Пополнение баланса аккаунта</div>
					<div className={styles.image_container}>
						<Image
							priority
							src={'/cars.png'}
							width={489}
							height={354}
							alt=''
						/>
					</div>
				</div>
				<div className={styles.donate_container}>
					<div className={styles.title}>Заполните данные</div>
					<DonateForm />
				</div>
			</div>

			<div className={styles.background}>
				<div className={styles.lines} />
				<div className={styles.texture} />
			</div>
		</div>
	)
}
