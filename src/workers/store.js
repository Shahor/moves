import uuid from 'uuid/v4'
import config from '../config'

const POST_SIZE = 10

const Stack = []

const dealWithResponse = ({ target }) => {
	if (target.readyState === XMLHttpRequest.DONE) {
		console.info(`xhr query status : ${target.status}`)
	}
}

const sendData = (data) => {
	const { method, endpoint } = config

	let request = new XMLHttpRequest()
	request.addEventListener("load", dealWithResponse)
	request.open(method, endpoint)
	request.send(
		JSON.stringify(data)
	)
}

let timer = setInterval(() => { // eslint-disable-line
	if (Stack.length) {
		sendData(Stack.splice(0, POST_SIZE))
	}
}, 1000)


onmessage = (e) => { // eslint-disable-line
	let data = Object.assign({}, e.data, { id : uuid() })
	Stack.push(data)
}
