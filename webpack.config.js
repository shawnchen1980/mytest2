var path=require('path')
var webpack=require('webpack')
var HtmlPlugin=require('html-webpack-plugin')
var ExtractPlugin=require('extract-text-webpack-plugin')
var outputOptions = {
	path: path.join(__dirname, "js"),
	filename: "[name].bundle.js",
	chunkFilename: "[id].chunk.js"
};
module.exports=[{
	entry:{
			hallo:path.resolve(__dirname,'app','react'),
			//a:path.resolve(__dirname,'app','a.js'),
			//vendor:['react','react-dom'],
			vendor2:['backbone','jquery'],
			sample12:path.resolve(__dirname,'app/samples/sample12.js'),
			//index:path.resolve(__dirname,'app','index.html'),
			//test:path.resolve(__dirname,'app','test.html')
			
			},
	output:{
		path:path.resolve(__dirname,"build"),
		filename:"[name].bundle.js",
		publicPath:"/"
	},
	module:{
		rules:[
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
			use:ExtractPlugin.extract({use:[
				{
					loader:"css-loader",
					options:{
						modules:true
					} 
				}
				]})

		},
		//{ test: /\.jpg$/, use: [ "file-loader" ] }, 
		{
			test:/\.(jpg|png)$/,
			exclude:/node_modules/,
			loader:'url-loader?limit=10000000000'
		},
		// {
		// 	test:/sample12new\.html$/,
		// 	exclude:/node_modules/,
		// 	loader:'underscore-template-loader'
		// },
		{
	        test: /sample12\.html$/,
	        use: [ 
	        // {
         //                loader: "file-loader",
         //                options: {
         //                    name: "[name]-dist.[ext]",
         //                },
         //            },
         //            {
         //                loader: "extract-loader",
         //            },
                    {
                        loader: "html-loader",
                        // options: {
                        //     attrs: ["img:src", "link:href"],
                        //     //interpolate: true,
                        // },
                    }
                ]
	     }
		]
	},
	plugins:[
		new ExtractPlugin('[name].css'),
		new webpack.optimize.CommonsChunkPlugin({
			name:'vendor',
			chunks:['hallo'],
			minChunks: ({ resource,chunks },count) => {/*console.log(resource,chunks.length,count,chunks.map(x=>x.name));*/
				return /node_modules/.test(resource)}
			// minChunks:Infinity
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name:'vendor2',
			chunks:['sample12']
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name:'manifest',
			minChunks:Infinity
		}),
		new HtmlPlugin({
			filename:'sample12.html',
			template:path.resolve(__dirname,'./app/samples/sample12.html'),
			chunks:['sample12','vendor2','manifest']
			//excludeChunks:['vendor','hallo']
		})
		,		
		new HtmlPlugin({
			template:path.resolve(__dirname,'./app/index.html'),
			chunks:['hallo','vendor','manifest']
		})
		, 
		// new HtmlPlugin({
		// 	filename:'sample12.html',
		// 	template:path.resolve(__dirname,'./app/samples/sample12.html'),
		// 	chunks:['sample12','vendor2','manifest']
		// 	//excludeChunks:['vendor','hallo']
		// })

		
	],
	devServer:{
		contentBase:path.resolve(__dirname,"build"),
		inline:true,
		port:8888,

		historyApiFallback:true
	}
}
/*
,
{
	name: "page",
	entry: {
		page: path.resolve(__dirname,"./js/src/page"),
		a:path.resolve(__dirname,"./js/src/a"),
		b:path.resolve(__dirname,"./js/src/b"),
		c:path.resolve(__dirname,"./js/src/c"),
		d:path.resolve(__dirname,"./js/src/d")
	},
	output: outputOptions,
	plugins: [
		//check for common modules in children of pageA and move them to the parent
		new webpack.optimize.CommonsChunkPlugin({
			names: ["page","manifest"]//,
			//filename: "xx.js",
			//children:true,
			//async:true,
			// minChunks:function(module, count) {
			// 	// move only module "b"
			// 	return !/b\.js/.test(module.identifier());
			// }
			//chunks:["a","b","c","d"],
			//minChunks:2
			//minChunks:({ resource,chunks,rawRequest },count) => {console.log(resource,chunks.length,count,rawRequest); return false;
			//	return /node_modules/.test(resource)}
		})
	]
}
*/
]