/*
代码目标：1.演示如何使用代码的方式而非命令行的方式运行webpack-dev-server以及加载webpack.config.js的配置
2.演示historyApiFallback的功能，通过这个配置，当devserver遇到看不懂的url时将不会返回404而是直接返回index.html
使用方法：命令行node sample2.js即可，注意要配合当前文件夹中的webpack.config.js使用
*/
import React from 'react'
// var webpack = require('webpack');
// var WebpackDevServer = require('webpack-dev-server');

// var config = require('./webpack.config');


// var port = 4000;
// var ip = '127.0.0.1';
// new WebpackDevServer(webpack(config), {
//     publicPath: config.output.publicPath,
//     historyApiFallback: true,
// }).listen(port, ip, function (err) {
//     if(err) {
//         return console.log(err);
//     }

//     console.log('Listening at ' + ip + ':' + port);
// });
export default ()=><div>dull</div>