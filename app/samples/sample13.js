/*
代码目标：用react制作一个基于jwt验证的前端小组件，包含用户名、密码两个文本框和注册、登录两个按钮以及一个密码出错提示标签
*/
import React,{Component} from 'react'
import axios from 'axios'
const Login=({userEmail,errText,iat,onSignIn,onSignUp,onSignOut,onGetIat})=>{
	let email=null;
	let pass=null;
	return (userEmail?
		<div>
		<label>Hello {userEmail} {iat}</label>
		<button onClick={()=>{onGetIat()}}>GetIat</button>
		<button onClick={()=>{onSignOut()}}>SignOut</button>
		</div>:
		<div>
		<label>userEmail:<input ref={el=>{email=el}} /></label>
		<label>password:<input ref={el=>{pass=el}} /></label>
		<button onClick={()=>{onSignIn(email.value,pass.value)}}>SignIn</button>
		<button onClick={()=>{onSignUp(email.value,pass.value)}}>SignUp</button>
		{errText?<label>{errText}</label>:null}
		</div>)
}

class ShowCase extends Component {
	constructor(){
		super();
		this.handleSignIn=this.handleSignIn.bind(this)
		this.handleSignUp=this.handleSignUp.bind(this)
		this.handleSignOut=this.handleSignOut.bind(this)
		this.handleGetIat=this.handleGetIat.bind(this)
		this.state={userEmail:"",errText:"",iat:""}
	}
	componentDidMount(){
		const data=JSON.parse(localStorage.getItem("data"))
		if(data){
			this.setState({userEmail:data.email})
		}
	}
	handleGetIat(){
		const data=JSON.parse(localStorage.getItem("data"))
		if(!data){
			this.setState({iat:"unknown!"})
			return
		}
		axios({
		    url: 'http://localhost:3030/',
		    method: 'get',
		    headers: {
		        'authorization': data.token,
		        'Content-Type': 'application/json'
		    }
		 })
		 .then(response => {
		    console.log(response)
		    this.setState({iat:response.data.iat})
		 }) 
		 .catch(err => {
		    console.log(err);
		 });

	}
	handleSignIn(email,password){
		axios.post("http://localhost:3030/signin",{email,password}).then(res=>{localStorage.setItem("data",JSON.stringify(res.data)); this.setState({userEmail:res.data.email,iat:""})},err=>{console.log(err);this.setState({userEmail:"",errText:"something is wrong"})})
	}
	handleSignUp(email,password){
		axios.post("http://localhost:3030/signup",{email,password}).then(res=>{localStorage.setItem("data",JSON.stringify(res.data)); this.setState({userEmail:res.data.email},iat:"")},err=>{console.log(err);this.setState({userEmail:"",errText:"something is wrong"})})
	}
	handleSignOut(){
		localStorage.removeItem("data")
		this.setState({userEmail:"",errText:""})
	}
	render(){
		return <Login userEmail={this.state.userEmail} errText={this.state.errText} iat={this.state.iat} onSignIn={this.handleSignIn} onSignUp={this.handleSignUp} onSignOut={this.handleSignOut} onGetIat={this.handleGetIat}/>
	}
}
export default ShowCase