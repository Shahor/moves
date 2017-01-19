let Config = {
	endpoint : '/',
	method : 'GET'
}

export const assign = (custom) => {
	Config = Object.assign({}, Config, custom)

	return Config
}

export const set = (name, value) => {
	return assign({
		[name] : value
	})
}

export default Config
