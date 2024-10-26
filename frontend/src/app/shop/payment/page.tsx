'use client'

// Допустим что это страница успешного платежа
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

import { formatToCurrency } from '@/utils/format-to-currency'
import { sendEmail } from '@/utils/send-email'

import styles from './Payment.module.scss'

export default function Payment() {
	const params = useSearchParams()
	const { back } = useRouter()

	useEffect(() => {
		if (params.get('email'))
			sendEmail(
				params.get('email')!,
				'Успешный платеж',
				`<div
			style="
				width: 400px;
				background-color: #1f1f1f;
				border-radius: 1.5rem;
				position: relative;
				padding-bottom: 25px;
				overflow: hidden;
			"
		>
			<div
				style="
					background-color: #16a34a;
					padding: 8px 0;
					text-align: center;
					font-size: 1.25rem;
					color: white;
				"
			>
				Успешная оплата
			</div>
			<div style="margin: 30px 25px 0px">
				<div style="color: white">
					Вы успешно пополнили донат-счет игрока
					<b style="font-weight: bold">${params.get('nickname')}</b> на сумму
					<b style="font-weight: bold"
						>${
							params.get('amount')
								? formatToCurrency(parseInt(params.get('amount')!))
								: 'неизвестно'
						}</b
					>
				</div>
			</div>
		</div>`
			)
	}, [])

	return (
		<div className={styles.payment_container}>
			<div className={styles.payment_content}>
				<div className={styles.title}>Успешная оплата</div>
				<div className={styles.text}>
					Вы успешно пополнили донат-счет игрока <b>{params.get('nickname')}</b>{' '}
					на сумму{' '}
					<b>
						{params.get('amount')
							? formatToCurrency(parseInt(params.get('amount')!))
							: 'неизвестно'}
					</b>
				</div>
				<button
					onClick={back}
					className={styles.go_back}
				>
					Вернуться
				</button>
			</div>
		</div>
	)
}
