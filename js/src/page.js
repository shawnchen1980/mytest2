import("./a").then(m=>{console.log("hello");console.log(m)});
import("./b").then(m=>{console.log("hellob");console.log(m)});
require(["./a"],function(a){console.log("this is "+ a)});
require(["./a", "./b"],function(a,b){console.log("hi "+a);console.log("hello "+b)});
require(["./a", "./b", "./c"],function(a,b,c){c()});
require(["./a", "./b", "./c", "./d"]);