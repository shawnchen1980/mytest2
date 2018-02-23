import Backbone from 'backbone'
import $ from 'jquery'
import _ from 'underscore'
import axios from 'axios'
const LoginData=Backbone.Model.extend({
	defaults:{
		"email":"",
		"token":""
	}
})
const LoginView=Backbone.View.extend({
	el:"#app",
	initialize:function(){
		this.render();
		this.$email=this.$('#email')
		this.$pass=this.$('#pass')
		
		this.listenTo(this.model,"change",this.render)
	},
	template:_.template($('#login-box').html()),
	render:function(){
		this.$el.html(this.template(this.model.attributes))
		return this
	},
	events:{
		'click #signin':'signin'
	},
	signin:function(){
		//this.model.set({email:"hahaha"})
		console.log(this.$email.val().trim())
		console.log(this.$pass.val().trim())
		axios.post("http://localhost:3030/signin",{email:this.$email.val().trim(),password:this.$pass.val().trim()})
		.then(res=>{localStorage.setItem("data",JSON.stringify(res.data)); this.model.set({email:res.data.email,iat:""})},err=>{console.log(err);})

	}
})
const login=new LoginView({model:new LoginData()})
export default login;