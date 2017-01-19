const worker = new Worker('/lib/store_worker.js')

	worker.postMessage({
		type : 'mouse_move',
		data : {
			coords : { x : Math.random(), y : Math.random() }
		}
	})


export const pushData = (data) => {
	worker.postMessage(data)
}

export default {

}
