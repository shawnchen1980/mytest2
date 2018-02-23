import Backbone from 'backbone'
import React,{Component} from 'react'
const MyModel=Backbone.Model.extend({title:""})
const MyCollection=Backbone.Collection.extend({model:MyModel})
class ShowCase extends Component {
	constructor(){
		super()
		this.state={title:""}
		this.collection=new MyCollection([{title:"todo1"},{title:"todo2"},{title:"todo3"}])
		this.state={todos:this.collection.models}
		this.collection.on("add remove",()=>{this.setState({todos:this.collection.models})},this)
		//this.collection.on("remove",()=>{this.setState({todos:this.collection.models})},this)
	}
	render(){
		console.log(this.collection)
		return <div>
			<input type="text" ref={input=>{this.input=input}}/>
			<button onClick={()=>{this.collection.add(new MyModel({title:this.input.value}))}}>add</button>
			<ul>{this.state.todos.map((x,i)=>(<li key={x.cid} id={x.cid}>
				{x.attributes.title+","+x.id+","+x.cid}
				<button onClick={()=>this.collection.remove(this.collection.get(x.cid))}>delete</button>
				</li>))}</ul>
		</div>
	}
}
export default ShowCase