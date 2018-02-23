/*
代码目标：用mvc模式搭建一个最简单的todolist应用，只包含显示全部todo项和新增todo项两个功能，主要为了演示mvc模式的含义：
1 所有与dom相关的底层操作代码全部留在v中，包括新建删除dom节点，包括调用addEventListener
2 所有与数据相关的底层操作，包括数据库的操作，都留在m中
3 所有与应用上层逻辑相关的抽象操作都定义成c中的代码，比如c中的addTodo就要m中的create和v中的addTodo的支持才能完成，c中的addTodo
要解决如何往todolist这个应用里插入一个抽象的todo项，m中的create只关心如何在内存里或数据库里插入一条数据，v中的addTodo只关心如何
在页面dom中插入一个li节点
4 mvc的好处在于应用逻辑通过代码分区更加清晰，mv分别处理与数据相关或dom相关的底层逻辑，c处理上层逻辑，另外代码的重用性也得到加强
*/

import React,{Component} from 'react'
function Model(){
	//this.data=JSON.parse(localStorage.getItem("db")) || []
	this.data=[{title:"todo1",completed:false,id:1},{title:"todo2",completed:false,id:2}]
}
Model.prototype.create=function(title,handler){
	const todo={title,completed:false,id:new Date().getTime()}
	this.data.push(todo)
	//localStorage.setItem("db",JSON.stringify(this.data))
	handler(todo.title,todo.id)
}
Model.prototype.read=function(handler){
	handler(this.data)
}
function View(){
	this.$newTodo=document.getElementById("newTodo")
	this.$todoList=document.getElementById("todoList")
}
View.prototype.addTodo=function(title,id){
	const el=document.createElement("li")
	el.id=id
	el.innerHTML=title
	this.$todoList.appendChild(el)
}
View.prototype.showTodos=function(todos){
	const content=todos.reduce((res,item)=>{
		res=res+`<li id='${item.id}'>${item.title}</li>`
		return res
	},"")
	this.$todoList.innerHTML=content
}
View.prototype.addTodoHandler=function(handler){
	this.$newTodo.addEventListener('change',(e)=>{handler(e.target.value)})
}
function Controller(model,view){
	this.model=model
	this.view=view
	this.view.addTodoHandler(this.addTodo.bind(this))
	console.log("constructor",this.view)
}
Controller.prototype.addTodo=function(title){
	console.log(title)
	this.model.create(title,this.view.addTodo.bind(this.view))
}
Controller.prototype.showTodos=function(){
	this.model.read(this.view.showTodos.bind(this.view))
}
Controller.prototype.init=function(){
	console.log("init",this)
	this.showTodos()
	//this.view.addTodoHandler(this.addTodo)
}

class ShowCase extends Component {
	componentDidMount(){
		const controller=new Controller(new Model(),new View())
		controller.init()
	}
	render(){
		return <div id="container"><input id="newTodo" /><ul id="todoList"></ul></div>
	}
}
export default ShowCase