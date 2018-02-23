const path=require('path')
const express=require('express')
const app=express()
//const server=app.listen(3030,()=>console.log("listening on 3030!"))
const server=require('http').createServer(app)
// const io=require('socket.io').listen(server)
server.listen(3032,()=>{console.log("listening on 3032")})

const webpackMiddleware=require('webpack-dev-middleware')
const webpack=require('webpack')
const webpackConifg=require('../../webpack.config.js')
app.use(webpackMiddleware(webpack(webpackConifg)))
app.use(express.static(path.resolve(__dirname,'../../build')))
app.get('/update-stream', function(req, res) {
  // let request last as long as possible
  //req.socket.setTimeout(Infinity);

  

  //send headers for event-stream connection
  // res.set({
  //   'Content-Type': 'text/event-stream',
  //   'Cache-Control': 'no-cache',
  //   'Connection': 'keep-alive'
  // });
  // setInterval(function(){res.json({date:new Date().getTime()});},1000)
  res.writeHead(200, {
        'Connection': 'keep-alive',
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache'
      });
  const id=setInterval(function(){
      //console.log('writing ' + testdata);
      res.write('data:helloworld! \n\n');
      res.write('data1:helloworld2 \n\n');
    }, 1000);
  console.log("to begin:interval id is ",id)
  // The 'close' event is fired when a user closes their browser window.
  // In that situation we want to make sure our redis channel subscription
  // is properly shut down to prevent memory leaks...and incorrect subscriber
  // counts to the channel.
  req.on("close",function(){
    console.log("to end:interval id is ",id)
    clearInterval(id)
  })
 
});
app.get("*",(req,res)=>{
  res.sendFile(path.resolve(__dirname,"../../build/index.html"))
})
