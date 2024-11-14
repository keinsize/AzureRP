'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PropsWithChildren } from 'react'
import { toastTest } from './toast-test'

const queryClient = new QueryClient({
	defaultOptions: { queries: { refetchOnWindowFocus: false, retry: 0 } }
})

export function Providers({ children }: PropsWithChildren) {
	toastTest()

	return (
		<QueryClientProvider client={queryClient}>
			{children}
			{/* <ReactQueryDevtools /> */}
		</QueryClientProvider>
	)
}
