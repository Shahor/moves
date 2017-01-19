import { pushData } from '../store'

export const EVENT_NAME = 'click'
export const handler = (event) => {
	console.info(EVENT_NAME, event)

	const {
		clientX,
		clientY,
		button
	} = event

	pushData({
		type : EVENT_NAME,
		coords : {
			clientX,
			clientY,
			button
		}
	})
}
