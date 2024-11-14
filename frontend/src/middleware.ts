import { NextRequest, NextResponse } from 'next/server'

import { EnumTokens } from './services/auth/auth-token.service'

export async function middleware(request: NextRequest, response: NextResponse) {
	const { url, cookies } = request
	const accessToken = cookies.get(EnumTokens.ACCESS_TOKEN)?.value

	if (!accessToken) {
		return NextResponse.redirect(new URL('/', request.url))
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/profile']
}
