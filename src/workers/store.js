const POST_SIZE = 10

let data = []

const sendData = (data) => {
	function reqListener() {
		console.log(this.responseText)
	}

	let request = new XMLHttpRequest()
	request.addEventListener("load", reqListener)
	request.open("POST", "localhost")
	// request.send()
}

let timer = setInterval(() => { // eslint-disable-line
	console.log("AWPDOK")
	if (data.length) {
		sendData(data.splice(0, POST_SIZE))
	}
}, 1000)


onmessage = (e) => {
	data.push(e.data)
}
