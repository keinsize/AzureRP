'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import Field from '@/components/form/field/Field'

import styles from './AuthForm.module.scss'
import { AuthService } from '@/services/auth/auth.service'

interface IAuthForm {
	nickname: string
	password: string
}

export function AuthForm({ closeModal }: { closeModal: () => void }) {
	const queryClient = useQueryClient()
	const { push } = useRouter()
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<IAuthForm>()
	const [captchaToken, setCaptchaToken] = useState<string | null>(null)

	const { mutate } = useMutation({
		mutationKey: ['auth'],
		mutationFn: (data: IAuthForm) => AuthService.login(data),
		onSuccess() {
			closeModal()
			queryClient.invalidateQueries({ queryKey: ['profile'] })
			reset()
			push('/profile')
		},
		onError(error: unknown) {
			if (error instanceof AxiosError)
				if (error?.response?.data?.message)
					toast.error(error.response.data.message)
		}
	})

	const onSubmit: SubmitHandler<IAuthForm> = data => {
		if (!captchaToken) toast.error('Пожалуйста, подтвердите что вы не робот')
		mutate(data)
	}

	return (
		<form className={styles.form}>
			<Field
				{...register('nickname', {
					required: 'Указанный никнейм некорректен'
				})}
				title='Никнейм'
				placeholder='Введите никнейм  на сервере'
				error={errors.nickname}
			/>
			<Field
				{...register('password', {
					required: 'Указанные пароль некорректен'
				})}
				title='Пароль'
				placeholder='Введите пароль'
				error={errors.password}
			/>
			<ReCAPTCHA
				className={styles.captcha}
				sitekey={process.env.SITE_KEY_RECAPTCHA!}
				onChange={token => setCaptchaToken(token)}
			/>
			<button
				onClick={handleSubmit(onSubmit)}
				className={styles.login_button}
			>
				Войти в аккаунт
			</button>
		</form>
	)
}
