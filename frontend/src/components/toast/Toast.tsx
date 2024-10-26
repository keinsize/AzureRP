'use client'

import { useEffect, useState } from 'react'
import { Bounce, Flip, ToastContainer } from 'react-toastify'

export function Toast() {
	const [windowWidth, setWindowWidth] = useState(0)

	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth)
		handleResize()
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return (
		<ToastContainer
			position={windowWidth > 640 ? 'bottom-right' : 'top-center'}
			limit={3}
			autoClose={1000}
			hideProgressBar
			closeOnClick
			rtl={false}
			newestOnTop
			pauseOnFocusLoss={false}
			draggable
			pauseOnHover
			theme='dark'
			transition={windowWidth > 640 ? Bounce : Flip}
		/>
	)
}
