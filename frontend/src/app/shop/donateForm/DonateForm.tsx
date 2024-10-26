'use client'

import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import Field from '@/components/form/field/Field'

import { validEmail } from '@/utils/regex'

import styles from './DonateForm.module.scss'

interface IDonateForm {
	nickname: string
	amount: string
	email: string
}

export function DonateForm() {
	const { push } = useRouter()
	const {
		register,
		handleSubmit,
		formState: { errors },
		clearErrors,
		reset
	} = useForm<IDonateForm>()

	const onSubmit: SubmitHandler<IDonateForm> = data => {
		if (!data.nickname) toast.error('Указанный никнейм некорректен')
		else if (!data.amount) toast.error('Указанная сумма некорректна')
		else if (!data.email) toast.error('Указанная почта некорректна')
		else if (!validEmail.test(data.email))
			toast.error('Указанная почта некорректна')
		else {
			const query = new URLSearchParams({
				nickname: data.nickname,
				amount: data.amount,
				email: data.email
			})
			push(`/shop/payment?${query.toString()}`)
		}
	}

	return (
		<form
			className={styles.form}
			onSubmit={handleSubmit(onSubmit)}
		>
			<Field
				{...register('nickname')}
				placeholder='Ваш ник  на сервере'
			/>
			<Field
				{...register('amount')}
				placeholder='Сумма пополнения'
				isNumber
			/>
			<Field
				{...register('email')}
				placeholder='Введите почтовый ящик'
			/>
			<button
				onClick={handleSubmit(onSubmit)}
				className={styles.pay_button}
			>
				Продолжить
			</button>
		</form>
	)
}
