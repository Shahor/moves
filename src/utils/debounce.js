export default (fn, time, context = null) => {
	let timer = null

	return function (...args) {
		clearTimeout(timer)
		timer = setTimeout(
			fn.bind(context, ...args),
			time
		)
	} 
}