const path=require('path')
const express=require('express')
const app=express()
const http=require('http')
app.use(express.static(__dirname+'/build'))
app.get("*",(req,res)=>{
	res.sendFile(path.resolve(__dirname,"build/index.html"))
})

const server=http.createServer(app)

server.listen(3000)
console.log("now start listening at port 3000!")