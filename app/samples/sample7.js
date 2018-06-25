/*
代码目标：写一个极简单的react组件，访问web api获取当前时间并显示，具有按钮刷新功能，并且能显示加载中，获取成功，获取失败三种状态信息

*/

import React,{Component} from 'react'
import axios from 'axios'
class ShowCase extends Component {
	constructor(){
		super()
		this.state={status:"still loading..."}
	}
	componentDidMount(){
		var p=new Promise(resolve=>setTimeout(resolve,1000))
		fetch(`http://localhost:3033`).then((res)=>{return res.text()}).then(console.log);
		p.then(()=>{return axios.get(`http://localhost:3033`)}).then(res=>{this.setState({status:res.data.time})})
	}
	componentDidUpdate(){
		//axios.get(`http://localhost:3033`).then(res=>{this.setState({status:res.data.time})})
	
	}
	render(){
		return <div>{this.state.status}<button onClick={()=>{axios.get(`http://localhost:3033`).then(res=>{this.setState({status:res.data.time})})}}>refresh</button></div>
	}
}
export default ShowCase