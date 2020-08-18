const allowedOrigin = allowed => ({
	before: ({ callback, event: { headers: { origin } } }, next) => {
		try {
			if (allowed.includes(origin))
				next()
			else callback(null, {
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE'
				},
				statusCode: 400,
				body: JSON.stringify('Origin not allowed') // only matters for browser requests
			})
		} catch (error) {
			console.log(error)
			callback(null, {
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE'
				},
				statusCode: 400,
				body: JSON.stringify('Origin header not present')
			})
		}
	}
})

module.exports = allowedOrigin