import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { verify } from 'argon2'
import { Response } from 'express'
import { PlayersService } from 'src/players/players.service'
import { AuthDto } from './dto/auth.dto'

@Injectable()
export class AuthService {
	constructor(
		private playersService: PlayersService,
		private jwt: JwtService
	) {}

	async login(data: AuthDto) {
		const { password, ...player } = await this.validatePlayer(data)
		const tokens = this.issueTokens(player.id)

		return {
			player,
			...tokens
		}
	}

	async getNewTokens(refreshToken: string) {
		const result = await this.jwt.verifyAsync(refreshToken)
		if (!result) throw new UnauthorizedException()

		return this.issueTokens(result.id)
	}

	addRefreshTokenToResponse(res: Response, refreshToken: string) {
		const expiresIn = new Date()
		expiresIn.setDate(expiresIn.getDate() + 7)

		res.cookie('refreshToken', refreshToken, {
			httpOnly: true,
			domain: 'localhost',
			expires: expiresIn,
			secure: true,
			sameSite: 'strict'
		})
	}

	removeRefreshTokenFromResponse(res: Response) {
		res.cookie('refreshToken', '', {
			httpOnly: true,
			domain: 'localhost',
			expires: new Date(0),
			secure: true,
			sameSite: 'strict'
		})
	}

	private async validatePlayer(data: AuthDto) {
		const player = await this.playersService.getByNickname(data.nickname)
		if (!player)
			throw new UnauthorizedException('Никнейм или пароль введены неверно')

		const isValid = await verify(player.password, data.password)
		if (!isValid)
			throw new UnauthorizedException('Никнейм или пароль введены неверно')

		return player
	}

	private issueTokens(userId: number) {
		const data = { id: userId }
		const accessToken = this.jwt.sign(data, {
			expiresIn: '1h'
		})
		const refreshToken = this.jwt.sign(data, {
			expiresIn: '7d'
		})
		return { accessToken, refreshToken }
	}
}
