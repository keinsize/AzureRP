import { Controller, Get } from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { Player } from './decorators/user.decorator'
import { PlayersService } from './players.service'

@Controller('players')
export class PlayersController {
	constructor(private readonly playersService: PlayersService) {}

	@Get('profile')
	@Auth()
	async getProfile(@Player('id') id: number) {
		return this.playersService.getProfile(id)
	}
}
