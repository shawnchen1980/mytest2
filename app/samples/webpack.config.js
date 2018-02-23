var path=require('path')
var webpack=require('webpack')
var HtmlPlugin=require('html-webpack-plugin')
var ExtractPlugin=require('extract-text-webpack-plugin')
module.exports={
	entry:{
			hallo:path.resolve(__dirname,'..','react'),
			//a:path.resolve(__dirname,'app','a.js'),
			vendor:['react','react-dom']
			
			},
	output:{
		path:path.resolve(__dirname,"build"),
		filename:"[name].bundle.js"
	},
	module:{
		loaders:[
		{
			test:/\.js$/,
			exclude:/node_modules/,
			loader:"babel-loader",
			query:{
				presets:["env","es2015","react","stage-3"]
			}

		},
		{
			test:/\.css$/,
			exclude:/node_modules/,
			loader:ExtractPlugin.extract({use:"css-loader"}),

		},
		{
			test:/\.(jpg|png)$/,
			exclude:/node_modules/,
			loader:'url-loader?limit=100000'
		}
		]
	},
	plugins:[
		new ExtractPlugin('[name].css'),
		new webpack.optimize.CommonsChunkPlugin({
			names:['common1','vendor','common2'] 
		}),
		new HtmlPlugin({
			template:path.resolve(__dirname,"../index.html")//'../index.html'
		})
	],
	devServer:{
		contentBase:path.resolve(__dirname,"../../build"),
		inline:true,
		port:8887
	}
}