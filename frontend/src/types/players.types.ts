import { IBusiness } from './business.types'
import { ICar } from './car.types'
import { IHouse } from './house.types'
import { IServer } from './server.types'

export interface IPlayer {
	id: number
	nickname: string
	password: string

	level: number
	vip: number
	money: number
	donate: number
	wanted: number
	skin: number
	houseId?: number
	businessId?: number

	house?: IHouse
	business?: IBusiness
	car: ICar[]

	server: IServer
	serverId: number

	createdAt: string
	updatedAt: string
}
