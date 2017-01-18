// import {
// 	MouseMove
// } from './handlers'

import Handlers from './handlers'
import Session from './session'

const { 
	MouseMove,
	MouseClick,
	MouseWheel
} = Handlers

window.addEventListener('DOMContentLoaded', () => {
	Session.start()
	window.addEventListener('mousemove', MouseMove)
	window.addEventListener('click', MouseClick)
	window.addEventListener('mousewheel', MouseWheel)
})
