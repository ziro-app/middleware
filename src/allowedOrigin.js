const allowedOrigin = allowed => ({
	before: ({ callback, event: { headers: { origin } } }, next) => {
		console.log(origin.startsWith('https://') && origin.endsWith('ziro.app'))
		if (origin.startsWith('https://') && origin.endsWith('ziro.app'))
			next()
		if (origin === allowed)
			next()
		else callback(null, {
				headers: { 'Access-Control-Allow-Origin': '*' },
				statusCode: 400,
				body: JSON.stringify('Origin not allowed') // only matters for browser requests
			})
	}
})

module.exports = allowedOrigin