'use client'

import Image from 'next/image'
import Link from 'next/link'
import { toast } from 'react-toastify'

import Modal from '@/components/modal/Modal'

import { useClickOutside } from '@/hooks/useClickOutside'
import { useProfile } from '@/hooks/useProfile'

import styles from './Profile.module.scss'
import { AuthForm } from './authForm/AuthForm'

export function Profile() {
	const { profile, isLoading } = useProfile()
	const authModal = useClickOutside()
	return isLoading ? null : profile ? (
		<Link
			href={'/profile'}
			className={styles.profile}
		>
			<div className={styles.nickname}>
				{profile.nickname.replace(/_/gi, ' ')}
			</div>
			<div className={styles.image_container}>
				<Image
					width={124}
					height={400}
					src={`/skins/${profile.skin}.png`}
					alt=''
				/>
			</div>
		</Link>
	) : (
		<div className={styles.account}>
			<button
				onClick={() => {
					authModal.setOpen(true)
					toast.info(
		<p className='whitespace-pre-wrap ml-4 mr-2 cursor-text'>
			{
				'Тестовые данные для входа в аккаунт:\nНикнейм: Mark_Keinsize\nПароль: 12345678'
			}
		</p>,
		{
			autoClose: 10000,
			hideProgressBar: false,
			closeOnClick: false,
			draggable: false,
			toastId: 'greeting'
		}
	)
				     }
				}
				className={styles.account_link}
			>
				Личный кабинет
			</button>
			{authModal.open && (
				<Modal>
					<div
						ref={authModal.ref}
						className={styles.auth_modal_container}
					>
						<button
							className={styles.close_button}
							onClick={() => authModal.setOpen(false)}
						/>
						<div className={styles.auth_modal_content}>
							<h1 className={styles.title}>Вход в аккаунт</h1>
							<AuthForm closeModal={() => authModal.setOpen(false)} />
						</div>
					</div>
				</Modal>
			)}
		</div>
	)
}
