/*
代码目标：用代码证明几个事实，进一步搞清楚react中的生命周期函数与setState以及reconciliation概念的瓜葛
1 每个组件的render发生在两种情况，一是组件初始加载时getDefaultProps->getInitialState->componentWillMount->render
->componentDidMount，二是组件内部state或外部props发生变化时(componentWillReceiveProps)->shouldComponentUpdate->componentWillUpdate
->render->componentDidUpdate
2 react在生成实际dom之前先会维护一个虚拟dom树，虚拟dom树的节点用组件名标记，如果新生成的虚拟dom树的某个节点发生变化时，该节点
以下的所有节点组件都需要重新创建，重新加载，比如ShowCase下的Parent1变为Parent2时，Parent1组件被卸载unmount，Parent2组件被创建
并加载mount
3 当新旧两棵虚拟dom树相比较，某个节点名称没变，只是其props（包括children）发生改变，那么该节点不会被卸载，但是仍旧会引发其重新render
4 组件被卸载时，其内部state数据被清除，但如果只是props发生改变，其state依旧保持，这就是为什么从按钮0到1计数会重置，但从1到2计数不会重置
5 每当一个组件的setState被调用时，它都会被再次render，除非在其shouldComponentUpdate中返回false，因此重复按同一个按钮不会有任何rerender
但从按钮0到按钮1则会发生rerender

*/
import React,{Component} from 'react'
class Parent1 extends Component {
	constructor(){
		super();
		this.state={timer:0};
	}
	componentDidMount(){
		this.untimer=setInterval(()=>this.setState({timer:this.state.timer+1}),1000)
	}
	componentWillUnmount(){
		console.log("Parent1 is leaving!")
		clearInterval(this.untimer);
	}
	render() {
		return <div><h2>this is Parent1 counting {this.state.timer}</h2>{this.props.children}</div>
	}
}
class Parent2 extends Component {
	constructor(){
		super();
		this.state={timer:0};
	}
	componentDidMount(){
		this.untimer=setInterval(()=>this.setState({timer:this.state.timer+1}),1000)
	}
	componentWillUnmount(){
		console.log("Parent2 is leaving!")
		clearInterval(this.untimer);
	}
	componentWillReceiveProps(nextProps){
		console.log("Parent2 is receiving new props ",nextProps)
	}
	render() {
		return <div><h2>this is Parent2 counting {this.state.timer}</h2>{this.props.children}</div>
	}
}
class Kid1 extends Component {
	componentWillUnmount(){
		console.log("Kid1 is leaving!")
	}
	render() {
		return <div>Hi I'm Kid1</div>
	}
}
class Kid2 extends Component {
	componentWillUnmount(){
		console.log("Kid2 is leaving!")
	}
	render() {
		return <div>Hi I'm Kid2</div>
	}
}
class ShowCase extends Component {
	constructor(props){
		super(props);
		//this.state={index:0}
	}
	render(){
		switch(this.props.index){
			case 0:
			return <Parent1><Kid1 /></Parent1>;
			case 1:
			return <Parent2><Kid1 /></Parent2>;
			case 2:
			return <Parent2><Kid2 /></Parent2>;
			default:
			return <div>nothing!</div>
		}

	}
}
class ShowCaseBox extends Component {
	constructor(props){
		super(props);
		this.state={index:0}
	}
	generateButtons(num){
		var arr=[];
		for(let i=0;i<num;i++) {
			arr.push(((x)=>(<button key={x} onClick={()=>this.setState({index:x})}> {x}</button>))(i))
		}
		return arr;
	}
	shouldComponentUpdate(nextProps,nextState){
		if(this.state.index===nextState.index){
			return false
		}
		return true;
	}
	render(){
		return <div><ShowCase index={this.state.index} />
		{this.generateButtons(5)}
		</div>
	}
}
export default ShowCaseBox