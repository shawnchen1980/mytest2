/*
代码目标：用代码的方式演示一个react组件（Kid）的props被修改的三种方式：父组件调用setState，任何组件通过dispatch改变redux状态，
url变化导致路由参数变化，根据以下代码的运行结果可以看出，只有通过dispatch改变redux状态才可以在不导致父组件不需要update的情况下
改变子组件的参数
*/

import React,{Component} from 'react'
import {combineReducers,createStore} from 'redux'
import {Provider,connect} from 'react-redux'
import {Route,Link,withRouter} from 'react-router-dom'
const reducer=(state=0,action)=>{
	switch(action.type){
		case 'Add':
		state=state+1;
		default:
	}
	return state
}

const actionCreators={
	Add:()=>({type:'Add'})
}
const store=createStore(reducer)

const ComponentKid=(props)=><div>Number:{props.num} Word:{props.word} UrlParam:{props.match.params.id} </div>
const mapStateToProps=(state,ownProps)=>({num:state,...ownProps})
const Com=withRouter(connect(mapStateToProps,null)(ComponentKid))

class MyComponent extends Component {
	constructor(props){
		super(props)
		this.state={word:""}
	}
	componentDidUpdate(){
		console.log("MyComponent updated!")
	}
	render(){
		console.log(this.props.match.url)
		return <div>
		<Link to={`${this.props.match.url}/${this.state.word}`}>this is sample8 with haha</Link>
		<input ref={x=>this.input=x}/>
		<button onClick={()=>this.setState({word:this.input.value})}>setState</button>
		<button onClick={()=>this.props.Add()}>actionDispatcher</button>
		<Com word={this.state.word}/> 
		<Route path={`${this.props.match.url}/:id`} component={Com} />
		</div>
	}
}
const MyCom=withRouter(connect(null,actionCreators)(MyComponent))
export default ()=><Provider store={store}><MyCom/></Provider>