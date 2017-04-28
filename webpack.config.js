const webpack = require('webpack');

module.exports = {
	devtool : 'sourece-map',
	entry: {
		filename: './app/app.js'
	},
	output: {
		path: __dirname,
		filename: 'boundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ["es2015"]
				}
			}
		]
	}
}