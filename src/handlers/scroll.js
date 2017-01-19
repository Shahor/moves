import { pushData } from '../store'
import debounce from '../utils/debounce'

const _handler = (event) => {
	console.info(EVENT_NAME, event)

	const {
		scrollY
	} = event

	pushData({
		type : EVENT_NAME,
		coords : {
			scrollY
		}
	})
}

export const EVENT_NAME = 'scroll'
export const handler = debounce(_handler, 200)
