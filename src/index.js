// import {
// 	MouseMove
// } from './handlers'

import Handlers from './handlers'
import Session from './session'

const { 
	MouseMove,
	MouseClick
} = Handlers

window.addEventListener('DOMContentLoaded', () => {
	Session.start()
	window.addEventListener('mousemove', MouseMove)
	window.addEventListener('click', MouseClick)
})
