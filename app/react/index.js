import React from 'react'
import {render} from 'react-dom'
import css from '../style/style.css'

import {BrowserRouter, Route,Link} from 'react-router-dom'
import B from './b'
import C1 from '../samples/sample1'
import C3 from '../samples/sample3'
import C4 from '../samples/sample4'
import C5 from '../samples/sample5'
import C6 from '../samples/sample6'
import C7 from '../samples/sample7'
import C8 from '../samples/sample8'
import C9 from '../samples/sample9'
import C10 from '../samples/sample10'
import C11 from '../samples/sample11'
import C13 from '../samples/sample13'
import C14 from '../samples/sample14'
import C15 from '../samples/sample15'
import C16 from '../samples/sample16'
import C17 from '../samples/sample17'
import C18 from '../samples/sample18'
const noArray=[1,3,4,5,6,7,8,9,10,11,13,14,15,16,17,18]
const linkArray=noArray.map((i)=>(<Link key={i} to={`/sample${i}`}>{`this is sample${i}`}</Link>))
const routeArray=[
<Route key={1} path={'/sample1'} component={C1}/>,
<Route key={3} path={'/sample3'} component={C3}/>,
<Route key={4} path={'/sample4'} component={C4}/>,
<Route key={5} path={'/sample5'} component={C5}/>,
<Route key={6} path={'/sample6'} component={C6}/>,
<Route key={7} path={'/sample7'} component={C7}/>,
<Route key={8} path={'/sample8'} component={C8}/>,
<Route key={9} path={'/sample9'} component={C9}/>,
<Route key={10} path={'/sample10'} component={C10}/>,
<Route key={11} path={'/sample11'} component={C11}/>,
<Route key={13} path={'/sample13'} component={C13}/>,
<Route key={14} path={'/sample14'} component={C14}/>,
<Route key={15} path={'/sample15'} component={C15}/>,
<Route key={16} path={'/sample16'} component={C16}/>,
<Route key={17} path={'/sample17'} component={C17}/>,
<Route key={18} path={'/sample18'} component={C18}/>
]
//以下代码可以解决C1到C11一个一个的import问题
// const routes = [1,3,4,5,6,7,8,9,10,11]
//   .map((c, i) => (
//     <Route key={c}
//       path={`/sample${c}`}
//       component={require(`../samples/sample${c}`).default}
//     />
//   ))
//import h from '../test.html'
//console.log(h)
const App=()=>(<div className={css.app}>this is my Apphahaha
	<a href="sample12.html">this is sample12</a>
	<a href="../test.html">this is a test</a>
	{linkArray}

	<br/>
	{routeArray}
	

	<br/>
		<button onClick={()=>{System.import('../a').then(mod=>{mod.default()})}}>click</button>
	
	</div>)

render(<BrowserRouter><Route path='/' component={App} /></BrowserRouter>,document.getElementById("app"))