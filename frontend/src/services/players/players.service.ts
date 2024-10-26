import { IPlayer } from '@/types/players.types'

import { axiosWithAuth } from '@/api/interceptors'

export const PlayersService = {
	async getProfile() {
		return axiosWithAuth.get<IPlayer>('/players/profile')
	}
}
