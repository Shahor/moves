import { pushData } from '../store'
import debounce from '../utils/debounce'

const _handler = (event) => {
	console.log(event)
	pushData({
		type : EVENT_NAME,

	})
}

export const EVENT_NAME = 'mousemove'
export const handler = debounce(_handler, 200)
