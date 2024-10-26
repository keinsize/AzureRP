import { IUser } from './players.types'

export interface IAuthForm {
	nickname: string
	password: string
}

export interface IAuthResponse {
	accessToken: string
	user: IUser
}
