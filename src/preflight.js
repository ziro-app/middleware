const preflight = {
	before: ({ callback, event: { httpMethod } }, next) => {
		if (httpMethod === 'OPTIONS') callback(null, {
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Headers': 'Authorization, Content-Type',
				'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE'
			},
			statusCode: 200,
			body: JSON.stringify('')
		})
		else next()
	}
}

module.exports = preflight