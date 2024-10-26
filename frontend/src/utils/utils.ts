import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function removeOverflowHiddenFromBody() {
	const body = document.querySelector('body') as HTMLBodyElement
	body.style.overflow = 'auto'
}

export function addOverflowHiddenToBody() {
	const body = document.querySelector('body') as HTMLBodyElement
	body.style.overflow = 'hidden'
}
