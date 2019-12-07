const auth = {
	before: ({ callback, event: { headers: { authorization } } }, next) => {
		if (authorization !== process.env.TOKEN) callback(null, {
			headers: { 'Access-Control-Allow-Origin': '*' },
			statusCode: 401,
			body: JSON.stringify('Authentication is required')
		})
		else next()
	}
}

module.exports = auth