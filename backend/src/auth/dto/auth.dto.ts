import { IsString, MinLength } from 'class-validator'

export class AuthDto {
	@IsString({ message: 'Invalid email' })
	nickname: string

	@IsString({ message: 'Invalid password' })
	@MinLength(8, { message: 'The password must contain at least 8 characters' })
	password: string
}
