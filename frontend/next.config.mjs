/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		SERVER_URL: process.env.SERVER_URL,
		SITE_KEY_RECAPTCHA: process.env.SITE_KEY_RECAPTCHA,
		RESEND_API_KEY: process.env.RESEND_API_KEY
	},
	typescript: {
		ignoreBuildErrors: true
	},
	reactStrictMode: false,
	poweredByHeader: false,
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: `http://localhost:4200/api/:path*`
			}
		]
	}
}

export default nextConfig
