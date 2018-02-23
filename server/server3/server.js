const express=require('express')
const path=require('path')
const app=express();
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

const webpackMiddleware=require('webpack-dev-middleware')
const webpack=require('webpack')
const webpackConifg=require('../../webpack.config.js')
app.use(webpackMiddleware(webpack(webpackConifg)))
app.use(express.static(path.resolve(__dirname,'../../build')))
app.get('/',function(req,res){
	res.end("hello world!")
})
app.post('/profile', upload.single('avatar'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
})
app.listen(3033,()=>{console.log("yes,hello world")})