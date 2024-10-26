// import { NextRequest, NextResponse } from 'next/server'

// import { EnumTokens } from './services/auth/auth-token.service'

// export async function middleware(request: NextRequest, response: NextResponse) {
// 	const { cookies } = request
// 	const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value

// 	if (!refreshToken) {
// 		return NextResponse.redirect(new URL('/', request.url))
// 	}

// 	return NextResponse.next()
// }

// export const config = {
// 	matcher: ['/profile']
// }
