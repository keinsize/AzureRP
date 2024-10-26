import styles from './Modal.module.scss'

export default function Modal({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return <div className={styles.modal}>{children}</div>
}
