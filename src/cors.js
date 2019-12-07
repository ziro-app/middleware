// this middleware won't be invoked if an error happens during lambda execution
// it also won't be invoked if allowedOrigin middleware returns early

const cors = {
	after: ({ response }, next) => {
		response.headers = { 'Access-Control-Allow-Origin': '*' }
		next()
	}
}

module.exports = cors