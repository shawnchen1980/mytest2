/*
代码目标：演示跨域访问，


*/
const path=require('path')
const express=require('express')
const app=express()
const http=require('http')
app.use(express.static(__dirname))
app.get("*",(req,res)=>{
	res.sendFile(path.resolve(__dirname,"b.html"))
})

const server=http.createServer(app)

server.listen(3001)
console.log("now start listening at port 3001!")