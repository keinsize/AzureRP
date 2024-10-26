import { IAuthForm, IAuthResponse } from '@/types/auth.types'

import { axiosClassic } from '@/api/interceptors'

import { removeFromStorage, saveTokenStorage } from './auth-token.service'

export const AuthService = {
	async login(data: IAuthForm) {
		const response = await axiosClassic.post<IAuthResponse>(
			`/auth/login`,
			data
		)
		if (response.data.accessToken) saveTokenStorage(response.data.accessToken)
		return response
	},

	async getNewTokens() {
		const response = await axiosClassic.post<
			Pick<IAuthResponse, 'accessToken'>
		>('/auth/login/access-token')
		if (response.data.accessToken) saveTokenStorage(response.data.accessToken)
		return response
	},

	async logout() {
		removeFromStorage()
		const response = await axiosClassic.post<boolean>('/auth/logout')
		return response
	}
}
