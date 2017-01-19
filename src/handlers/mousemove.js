import { pushData } from '../store'
import debounce from '../utils/debounce'


let lastMove = {}

const isWantedMove = (event) => {
	const isMove = lastMove.x !== event.x && lastMove.y !== event.y
	const firstMoveMade = lastMove instanceof Event

	return !firstMoveMade || firstMoveMade && isMove
}

const _handler = (event) => {
	if (!isWantedMove(event)) {
		console.debug('unwanted move')
		return
	}

	lastMove = event
	console.info(EVENT_NAME, event)

	const { clientX, clientY } = event

	pushData({
		type : EVENT_NAME,
		coords : {
			clientX,
			clientY
		}
	})
}

export const EVENT_NAME = 'mousemove'
export const handler = debounce(_handler, 200)
