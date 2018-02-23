/*
代码目标：与server2中的server.js一起配合演示server-send event是怎么一回事情
使用方法：npm run nodeserver2,选中sample15的链接后，查看console中的打印内容
*/
import React, {Component} from 'react'

class ShowCase extends Component {
	constructor(){
		super();
		this.handleSend=this.handleSend.bind(this)
	}
	componentDidMount(){
		this.source=new EventSource('/update-stream')
		this.source.onmessage=function(e){
			console.log(e)
		}			
	}
	handleSend(){
		//System.import(/* webpackChunkName: "socket.io" */'socket.io-client').then(io=>{const socket=io(`http://127.0.0.1:3030`)})
		//const socket=socketIOClient()
		// this.socket.emit('chat message',this.input.value)
		// this.input.value=''
	}
	render(){
		return <div>
		this is case 15,look at the console please
		</div>
	}
}
export default ShowCase