const allowedOrigin = allowed => ({
	before: ({ callback, event: { headers: { origin } } }, next) => {
		try {
			if (origin.startsWith('https://') && origin.endsWith('ziro.app'))
				next()
			else if (origin === allowed)
				next()
			else callback(null, {
				headers: { 'Access-Control-Allow-Origin': '*' },
				statusCode: 400,
				body: JSON.stringify('Origin not allowed') // only matters for browser requests
			})
		} catch (error) {
			console.log(error)
			callback(null, {
				headers: { 'Access-Control-Allow-Origin': '*' },
				statusCode: 400,
				body: JSON.stringify('Origin header not present')
			})
		}
	}
})

module.exports = allowedOrigin