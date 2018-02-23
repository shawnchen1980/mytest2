/*
代码目标：实现dynamic code splitting,以下代码使用了两种不同的方式实现动态代码加载，一是bundle-loader,二是System.import,从使用效果上看
以下代码中的System.import('./a').then(m=>{m.default()})与loadA(m=>{m.default()})的效果一样，但是在实际代码中，这两种做法还是有区别的：
区别主要在于bundler-loader对外部代码的宣称与实际加载变成了两段代码，首先是import loadA from 'bundle-loader?lazy!./a',此时外部代码a
并没有真正加载进来，但是从import语句的角度来看，代码读者可以很清楚地知道将来a有可能会被加载进来，而当<Bundler load={loadA}>组件被加载
时，代码才真正被动态加载，这种做法要比System.import更加可读！
*/

import React, { Component } from 'react'
import loadA from 'bundle-loader?lazy!./a'
class Bundle extends Component {
  	constructor(props){
	  super(props)
	  this.state = {
	    // short for "module" but that's a keyword in js, so "mod"
	    mod: null
	  }
	}

  componentWillMount() {
    this.load(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps)
    }
  }

  load(props) {
    this.setState({
      mod: null
    })
    props.load((mod) => {
      this.setState({
        // handle both es imports and cjs
        mod: mod.default ? mod.default : mod
      })
    })
  }

  render() {
    return this.state.mod ? this.props.children(this.state.mod) : null
  }
}
const About = (props) => (
  <Bundle load={loadA}>
    {(About) => <About {...props}/>}
  </Bundle>
)
class ShowCase extends Component {
	constructor(props) {
		super(props)
		this.state={mod:null}
		this.LoadMod=this.LoadMod.bind(this)
	}
	LoadMod(){
		System.import('./b').then(m=>{
			this.setState({mod:m.default})
		})
	}
	render(){
		const Tag=this.state.mod
		return <div>
		 <Bundle load={loadA}>
		    {(About) => <About {...this.props}/>}
		  </Bundle>

		{Tag?<Tag/>:<div>To be loaded</div>}
				<button onClick={()=>this.LoadMod()}>press to load</button>
		</div>
	}
}

export default ShowCase