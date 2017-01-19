const worker = new Worker('/lib/store_worker.js')

export const pushData = (data) => {
	worker.postMessage(data)
}
