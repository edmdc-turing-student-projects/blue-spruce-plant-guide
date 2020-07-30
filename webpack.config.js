const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.js'
	},
	plugins: [
		new htmlWebpackPlugin({
			template: './src/index.html'
		}),
		new MiniCssExtractPlugin()
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'eslint-loader']
			}, {
				test: /\.(scss|css)$/,
				use: [
				MiniCssExtractPlugin.loader,
				{
					loader:'css-loader',
					options: {
						modules: true,
						importLoaders: 1,
						sourceMap: true
					}
				}, {
					loader: 'postcss-loader',
					options: {
						sourceMap: true,
						ident: 'postcss',
						plugins: (loader) => [
							require('postcss-preset-env')
						]
					}
				}, {
					loader: 'sass-loader',
					options: {
						sourceMap: true,
						implementation: require('node-sass')
					}
				}
				]
			}
		]
	}
}
