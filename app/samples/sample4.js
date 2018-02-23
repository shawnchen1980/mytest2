/*
代码目标：演示setState在什么情况下以同步或异步方式执行，从以下代码可以看出，通过react定义的事件onClick调用时，setState的调用
为异步，当在setTimeout，addEventListener的回调函数中调用时，setState变为同步
*/

import React from 'react';
import {Component} from 'react'
const initState={score:0,score1:0}

class Test extends Component {
	constructor(props){
		console.log("Test Started!")
		super(props);
		this.state=initState;
		this.increment.bind(this)
	}
	componentDidMount(){
		console.log(this.but)
		this.but.addEventListener('click',()=>{this.increment1()})
	}
	increment(){
		this.setState({score:this.state.score+1})
		
		//此时this.state.score的值并没有增加，所以下一句的调用跟前一句的效果是一样的
		this.setState({score:this.state.score+1})
	}
	increment1(){
		this.setState({score1:this.state.score1+1})
		this.setState({score1:this.state.score1+1})
	}
	render(){
		return [<button key={1} onClick={()=>{this.increment()}}>{this.state.score}</button>
		,<button key={2} ref={but=>{this.but=but}}>{this.state.score1}</button>]
	}
}


export default Test