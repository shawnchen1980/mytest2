import React from 'react'
//import {ComponentFactory} from './HOC.js'
/*
代码目标：演示HOC的使用
需要注意的是，ComponentFactory是一个HOC，它把myH1变为了RedH1，但仍旧需要myH1配合才可以，myH1需要把来自ComponentFactory的style参数
施加到h1上面去，否则仍旧无法看到字体变为红色，另外，定义myH1时所用的参数rest与参数spread的用法也值得注意
一般而言参数rest用在等号的左边，参数spread用在等号的右边
var a={c:2,d:3}
var e={b:1,d:4}
var {...rest}={...a,...e}
assert(rest==={b:1,c:2,d:4})
使用方法：在index.js上加一条route
<Route path='/sample1' component={C1} />
*/
const ComponentFactory=(Com,style)=>({children})=>(<Com style={style}>{children}</Com>)
const myH1=({children, ...props})=>(<h1 {...props}>{children}</h1>)

export const RedH1=ComponentFactory(myH1,{color:'red'})
const Component=()=>(<RedH1>hi,this is red h1</RedH1>)
export default Component;