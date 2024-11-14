import Cookies from 'js-cookie'

export enum EnumTokens {
	'ACCESS_TOKEN' = 'accessToken',
	'REFRESH_TOKEN' = 'refreshToken'
}

export const getAccessToken = () => {
	const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)
	return accessToken || null
}

export const saveTokenStorage = (accessToken: string) => {
	Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
		domain: 'azure-rp.vercel.app',
		sameSite: 'strict',
		expires: 1 / 24
	})
}

export const removeFromStorage = () => {
	Cookies.set(EnumTokens.ACCESS_TOKEN, '', {
		domain: 'azure-rp.vercel.app',
		sameSite: 'strict',
		expires: 0
	})
}
