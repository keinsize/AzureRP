'use client'

import { MutableRefObject, useEffect, useRef, useState } from 'react'

import {
	addOverflowHiddenToBody,
	removeOverflowHiddenFromBody
} from '@/utils/utils'

export const useClickOutside = () => {
	const ref = useRef() as MutableRefObject<HTMLDivElement>
	const [open, setOpen] = useState(false)

	const toggle = () => setOpen(!open)

	useEffect(() => {
		if (open) {
			addOverflowHiddenToBody()
		} else {
			removeOverflowHiddenFromBody()
		}

		return () => {
			removeOverflowHiddenFromBody()
		}
	}, [open])

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (ref.current && !ref.current.contains(e.target as Node)) {
				setOpen(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)

		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [ref])

	return { open, setOpen, toggle, ref }
}
