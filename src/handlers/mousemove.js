import debounce from '../utils/debounce'
const _handler = (event) => {
	console.log(event)
}

export const EVENT_NAME = 'mousemove'
export const handler = debounce(_handler, 200)
