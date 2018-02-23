/*
代码目标：写一个简单而又完整的react-redux app架构，从reducer到action到store到component到connect到Provider到最后export
使用方法：在index.js上加一条route
<Route path='/sample3' component={C3} />
*/
import React from 'react'
import {combineReducers,createStore} from 'redux'
import {Provider,connect} from 'react-redux'

const reducer1=(state=0,action)=>{
	switch(action.type){
		case 'Add':
		state=state+1;
		default:
	}
	return state
}
const reducer2=(state="",action)=>{
	switch(action.type){
		case 'Add':
		state=state+"a";
		default:
	}
	return state
}
const actionCreators={
	Add:()=>({type:'Add'})
}
const store=createStore(combineReducers({Num:reducer1,Word:reducer2}))

const Component=(props)=><div>Number:{props.num} <br/> Word:{props.word} <br/> <button onClick={()=>{props.Add()}}>Add</button></div>
const mapStateToProps=({Num,Word})=>({num:Num,word:Word})
const Com=connect(mapStateToProps,actionCreators)(Component)
export default ()=><Provider store={store}><Com/></Provider>
//export default Com
/*
写react-redux的基本思路与步骤
1 设计store的结构并写reducer，此时先不用在意switch以下代码应该怎么写，先关注reducer函数开头state的默认值应该是什么，函数内部甚至
可以直接用return state，使用combineReducers把写好的reducer拼接起来形成总reducer，当然在开发过程中，reducer的形态可能会发生改变
2 使用createStore创建store
3 根据应用需要写Component，使用的props中的数据来自store，props中的动作函数来自actionCreators，但是可以不是一对一匹配
4 根据store中的数据与组件props需求之间的差异，写选择器get函数，主要用在mapStateToProps函数中
5 完成mapStateToProps函数
6 完成actionCreators，使用connect将Component组装完成
7 接入Provider
*/