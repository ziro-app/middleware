const allowedOrigin = allowed => ({
	before: ({ callback, event: { headers: { origin } } }, next) => {
		if (origin !== allowed) callback(null, {
			headers: { 'Access-Control-Allow-Origin': '*' },
			statusCode: 400,
			body: JSON.stringify('Origin not allowed') // only matters for browser requests
		})
		else next()
	}
})

module.exports = allowedOrigin