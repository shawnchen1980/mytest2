/*
代码目标：对比controlled与uncontrolled控件，从以下input的props中可以看出controlled控件的最大特点是其value值与组件的state相绑定
因此其输入内容必须依靠setState改变，而setState的调用受代码控制，因此controlled控件对用户输入的控制是实时，在代码的控制下，
用户有可能遇到输入受阻的情况
相比较，uncontrolled控件的值不与state相绑定，输入完全不受代码控制
*/
import React,{Component} from 'react'

class MyInputTest1 extends Component {
	constructor(){
		super();
		this.state={text:""}
		this.handleChange=this.handleChange.bind(this)
	}
	handleChange(e){
		if(!/\d+$/.test(e.target.value)) return;
		this.setState({text:e.target.value})
	}
	render(){
		return <div>
			<span>{this.state.text}</span>
			<input value={this.state.text} onChange={this.handleChange} />
		</div>
	}
}

class MyInputTest2 extends Component {
	constructor(){
		super();
		this.state={text:""}
		this.handleChange=this.handleChange.bind(this)
	}
	handleChange(e){
		if(!/\d+$/.test(e.target.value)) return;
		this.setState({text:e.target.value})
	}
	render(){
		return <div>
			<span>{this.state.text}</span>
			<input ref={el=>this.input=el} onChange={this.handleChange} />
		</div>
	}
}

export default ()=><div><MyInputTest1/><MyInputTest2/></div>