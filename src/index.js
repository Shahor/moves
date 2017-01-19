// import {
// 	MouseMove
// } from './handlers'

import Handlers from './handlers'
import Store from './store'

const { 
	MouseMove,
	MouseClick,
	Scroll
} = Handlers

window.addEventListener('DOMContentLoaded', () => {
	window.addEventListener(MouseMove.EVENT_NAME, MouseMove.handler)
	window.addEventListener(MouseClick.EVENT_NAME, MouseClick.handler)
	window.addEventListener(Scroll.EVENT_NAME, Scroll.handler)
})
