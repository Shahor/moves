module.exports = {
	entry : {
		bundle : './src/index.js',
		store_worker : './src/workers/store.js'
	},
	output : {
		path : './lib',
		filename : '[name].js'
	},
	devtool : 'source-map',
	module : {
		loaders : [{
			test : /\.js$/,
			exclude : /node_modules/,
			loader : 'babel-loader'
		}]
	}
}
