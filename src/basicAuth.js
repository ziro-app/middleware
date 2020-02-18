const basicAuth = {
	before: ({ callback, event: { headers: { authorization } } }, next) => {
		if (authorization !== process.env.TOKEN) callback(null, {
			statusCode: 401,
			body: JSON.stringify('Authentication is required')
		})
		else next()
	}
}

module.exports = basicAuth