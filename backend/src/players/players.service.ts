import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class PlayersService {
	constructor(private readonly prisma: PrismaService) {}
	async getProfile(id: number) {
		const player = await this.prisma.player.findUnique({
			where: { id: id },
			include: { business: true, car: true, house: true, server: true }
		})
		if (!player) throw new NotFoundException('Пользователь не найден')
		return player
	}

	async getByNickname(nickname: string) {
		const player = await this.prisma.player.findUnique({
			where: { nickname },
			include: { business: true, car: true, house: true, server: true }
		})
		if (!player) throw new NotFoundException('Пользователь не найден')
		return player
	}
}
