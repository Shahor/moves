import Handlers from './handlers'
import Store from './store'

const doIt = (method, element = window) => {
	Object.keys(Handlers).forEach((key) => {
		let eventHandler = Handlers[key]

		window[method](eventHandler.EVENT_NAME, eventHandler.handler)
	})
}

export const start = (params) => {
	doIt('addEventListener')
}

export const stop = () => {
	doIt('removeEventListener')
}
