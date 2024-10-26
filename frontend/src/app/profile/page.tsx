'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { useProfile } from '@/hooks/useProfile'

import { formatToCurrency } from '@/utils/format-to-currency'
import { cn } from '@/utils/utils'

import styles from './Profile.module.scss'
import { AuthService } from '@/services/auth/auth.service'

export default function ProfilePage() {
	const queryClient = useQueryClient()
	const { push } = useRouter()
	const { profile, isLoading } = useProfile()
	const { mutate: logout } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => AuthService.logout(),
		onSuccess: () => {
			queryClient.resetQueries({ queryKey: ['profile'] })
			push('/')
		}
	})

	return (
		profile && (
			<div className={styles.profile_container}>
				<div className={styles.header_container}>
					<div className={cn(styles.header, 'fixed-size')}>
						<div className={styles.header_text}>Мой аккаунт</div>
					</div>
				</div>
				<div className={cn(styles.content_container, 'fixed-size')}>
					<div className={styles.skin_container}>
						<Image
							width={124}
							height={400}
							src={`/skins/${profile.skin}.png`}
							alt=''
						/>
						<button
							className={styles.logout}
							onClick={() => logout()}
						>
							Выйти
						</button>
					</div>
					<div className={styles.information_container}>
						<div className={styles.header}>
							<div className={styles.nickname}>
								{profile.nickname.replace(/_/gi, ' ')}
							</div>
							<div
								className={styles.server}
								style={{ backgroundColor: profile.server.color }}
							>
								{profile.serverId} сервер
							</div>
						</div>
						<div className={styles.statistics_container}>
							<div className={styles.header}>ОБЩАЯ СТАТИСТИКА</div>
							<div className={styles.statistics}>
								<div className={styles.item}>
									<div className={styles.header}>
										<div className={styles.icon}>
											<Image
												src={`/icons/star.svg`}
												width={32}
												height={32}
												alt=''
											/>
										</div>
										<div className={styles.title}>Игровой уровень</div>
									</div>
									<div className={styles.value}>{profile.level}</div>
								</div>
								<div className={styles.item}>
									<div className={styles.header}>
										<div className={styles.icon}>
											<Image
												src={`/icons/ruble.svg`}
												width={32}
												height={32}
												alt=''
											/>
										</div>
										<div className={styles.title}>Общее состояние</div>
									</div>
									<div className={styles.value}>
										{formatToCurrency(profile.money)}
									</div>
								</div>
								<div className={styles.item}>
									<div className={styles.header}>
										<div className={styles.icon}>
											<Image
												src={`/icons/ruble.svg`}
												width={32}
												height={32}
												alt=''
											/>
										</div>
										<div className={styles.title}>Донат</div>
									</div>
									<div className={styles.value}>
										{formatToCurrency(profile.donate)}
									</div>
								</div>
								<div className={styles.item}>
									<div className={styles.header}>
										<div className={styles.icon}>
											<Image
												src={`/icons/star.svg`}
												width={32}
												height={32}
												alt=''
											/>
										</div>
										<div className={styles.title}>Уровень розыска</div>
									</div>
									<div className={styles.value}>{profile.wanted}</div>
								</div>
								<div className={styles.item}>
									<div className={styles.header}>
										<div className={styles.icon}>
											<Image
												src={`/icons/house.svg`}
												width={32}
												height={32}
												alt=''
											/>
										</div>
										<div className={styles.title}>Личное жилье</div>
									</div>
									<div className={styles.value}>
										{profile.house
											? `${profile.house?.type} №${profile.house?.id}`
											: 'Нет'}
									</div>
								</div>
								<div className={styles.item}>
									<div className={styles.header}>
										<div className={styles.icon}>
											<Image
												src={`/icons/vehicle.svg`}
												width={32}
												height={32}
												alt=''
											/>
										</div>
										<div className={styles.title}>Личный транспорт</div>
									</div>
									<div className={styles.value}>
										{profile.car
											? profile.car.map(car => car.name).join(', ')
											: 'Нет'}
									</div>
								</div>
								<div className={styles.item}>
									<div className={styles.header}>
										<div className={styles.icon}>
											<Image
												src={`/icons/house.svg`}
												width={32}
												height={32}
												alt=''
											/>
										</div>
										<div className={styles.title}>Бизнес</div>
									</div>
									<div className={styles.value}>
										{profile.business
											? `${profile.business?.name} №${profile.business?.id}`
											: 'Нет'}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	)
}
