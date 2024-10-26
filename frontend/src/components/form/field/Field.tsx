'use client'

import cn from 'clsx'
import { InputHTMLAttributes, forwardRef } from 'react'
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'

import styles from './Field.module.scss'

export interface IField extends InputHTMLAttributes<HTMLInputElement> {
	placeholder?: string
	isNumber?: boolean
	error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
}

const Field = forwardRef<HTMLInputElement, IField>(
	(
		{ placeholder, title, error, isNumber, type = 'text', className, ...rest },
		ref
	) => {
		return (
			<div className={cn(styles.field_container, className)}>
				<div className={styles.title}>{title && <span>{title}</span>}</div>
				<div className={styles.input_container}>
					<input
						ref={ref}
						placeholder={placeholder}
						type={type}
						onKeyDown={event => {
							if (
								isNumber &&
								!/[0-9]/.test(event.key) &&
								event.key !== 'Backspace' &&
								event.key !== 'Tab' &&
								event.key !== 'Enter' &&
								event.key !== 'ArrowLeft' &&
								event.key !== 'ArrowRight'
							) {
								event.preventDefault()
							}
						}}
						{...rest}
					/>
				</div>
			</div>
		)
	}
)

export default Field
