/*
代码目标：与本地server1配合，形成一个广播实时聊天信息的server-client对
*/
import React, {Component} from 'react'
import socketIOClient  from 'socket.io-client' 
class ShowCase extends Component {
	constructor(){
		super();
		this.handleSend=this.handleSend.bind(this)
	}
	componentDidMount(){
		this.socket=socketIOClient()
		this.socket.on('chat message',(msg)=>{this.output.value=this.output.value+msg+'\n'})
	}
	handleSend(){
		//System.import(/* webpackChunkName: "socket.io" */'socket.io-client').then(io=>{const socket=io(`http://127.0.0.1:3030`)})
		//const socket=socketIOClient()
		this.socket.emit('chat message',this.input.value)
		this.input.value=''
	}
	render(){
		return <div>
		<textarea ref={el=>this.output=el} />
		<input ref={input=>this.input=input} />
		<button onClick={this.handleSend}>Socket Send</button>
		</div>
	}
}
export default ShowCase