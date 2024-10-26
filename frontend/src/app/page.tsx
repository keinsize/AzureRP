import Image from 'next/image'

import { MainButton } from '@/components/mainButton/MainButton'

import { features, jobs } from '@/config/config'

import { cn } from '@/utils/utils'

import styles from './Main.module.scss'

export default async function Home() {
	return (
		<div className={styles.main}>
			<div className={styles.start_game_container}>
				<div className={cn(styles.start_game_content, 'fixed-size')}>
					<div className={styles.information_container}>
						<Image
							priority
							className={styles.azureonline}
							src={'/azureonline.png'}
							width={440}
							height={156}
							alt=''
						/>
						<div className={styles.information}>
							Атмосферная онлайн-игра про современную Россию с безграничными
							возможностями.
						</div>
						<MainButton className={styles.start_button}>
							Начать играть
						</MainButton>
					</div>
					<div className={styles.policeman_container}>
						<div className={styles.policeman}>
							<Image
								priority
								src={'/policeman.png'}
								width={450}
								height={810}
								alt=''
							/>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.choice_path_container}>
				<div className={cn(styles.choice_path_content, 'fixed-size')}>
					<div className={styles.title}>
						Здесь ты сам выбираешь, кем хочешь быть.
					</div>
					<div className={styles.cards}>
						{jobs.map(job => (
							<div
								className={styles.card}
								key={job.title}
								style={{
									backgroundImage: `url(/jobs/${job.background})`
								}}
							>
								<Image
									className={styles.people}
									src={`/jobs/${job.people}`}
									width={228}
									height={600}
									alt=''
								/>
								<div className={styles.info}>
									<div>Стань</div>
									<div>{job.title}</div>
								</div>
							</div>
						))}
					</div>
					<MainButton className={styles.download}>
						Установить лаунчер
					</MainButton>
				</div>
			</div>
			<div className={styles.features_container}>
				<div className={cn(styles.features_content, 'fixed-size')}>
					<div className={styles.features}>
						{features.map(feature => (
							<div
								className={styles.feature}
								key={feature.title}
							>
								<Image
									src={`/icons/${feature.icon}`}
									width={64}
									height={64}
									alt=''
								/>
								<h1>{feature.title}</h1>
								<div>{feature.text}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
