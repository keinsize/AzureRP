import { useQuery } from '@tanstack/react-query'

import { PlayersService } from '@/services/players/players.service'

export const useProfile = () => {
	const { data: profile, isLoading } = useQuery({
		queryKey: ['profile'],
		queryFn: () => PlayersService.getProfile(),
		select: ({ data }) => data
	})

	return { profile, isLoading }
}
