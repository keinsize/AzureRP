import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { Player as PlayerModel } from '@prisma/client'

type TypeData = keyof PlayerModel

export const Player = createParamDecorator(
	(data: TypeData, ctx: ExecutionContext) => {
		const { user: player } = ctx
			.switchToHttp()
			.getRequest<{ user: PlayerModel }>()
		return data ? player?.[data] : player
	}
)
