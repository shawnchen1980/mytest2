/*
代码目标：与sample14配合，演示群发实时聊天信息的server-client对
代码要点：1 注意定义app server io三个变量以及server.listen的顺序
		  2 client代码使用webpack-dev-middleware，server代码用nodemon
		  这样可以保证无论改哪块代码，都会被自动监视到，不需要手动调用
		  build命令
		  3 设置server端app.get('*')发送index.html,避免404
*/
const path=require('path')
const express=require('express')
const app=express()
//const server=app.listen(3030,()=>console.log("listening on 3030!"))
const server=require('http').createServer(app)
const io=require('socket.io').listen(server)
server.listen(3030,()=>{console.log("listening on 3030")})
io.on('connection',function(socket){
	console.log('a user connected')
	socket.on('chat message',(msg)=>{
		console.log('message:'+msg)
		io.emit('chat message',msg)
	})
})
const webpackMiddleware=require('webpack-dev-middleware')
const webpack=require('webpack')
const webpackConifg=require('../../webpack.config.js')
app.use(webpackMiddleware(webpack(webpackConifg)))
app.use(express.static(path.resolve(__dirname,'../../build')))
app.get("*",(req,res)=>{
	res.sendFile(path.resolve(__dirname,"../../build/index.html"))
})