const errorHandler = {
	onError: ({ callback, error: { statusCode, body } }) =>
		callback(null, {
			headers: { 'Access-Control-Allow-Origin': '*' },
			statusCode: statusCode,
			body: JSON.stringify(body, null, 4)
		})
}

module.exports = errorHandler