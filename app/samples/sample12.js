//1 如何定义一个Model（直接调用Backbone.Model.extend,最多加一个defaults属性）
//2 如何根据一个Model定义一个实体，（直接用new，用collection的add，用collection的create）
//3 一个View最关键的属性是什么 （el,对应了一个dom对象，这个el可以通过extend时的el属性或者是tagName和className属性定义，也可以通过调用view实体的setElement方法定义）
//4 View中render函数的作用是什么，填充el所代表的dom对象并返回当前view对象
//5 View实体如何与一个Model实体相结合(在new时用model属性)
//6 如何定义一个Collection中model的类型（在extend时用model属性）
//7 如何向一个Collection实体中添加model实体（add方法）

import Backbone from 'backbone'
import $ from 'jquery'
import _ from 'underscore'

const Item=Backbone.Model.extend({
  defaults:{
    "title":"nothing specified!",
    "completed":"false"
  },
  idAttribute:"_id"
})

const ItemView=Backbone.View.extend({
  tagName:'li',
  template:_.template($('#item-template').html()),
  render:function(){
    this.$el.html(this.template(this.model.attributes))
    return this;
  }
})
const ItemArray=Backbone.Collection.extend({
  model:Item,
  url:'http://localhost:3034/todos'
})
const itemArray=new ItemArray([{title:"todo1"},{title:"todo2"},{title:"todo3"}])
const AppView=Backbone.View.extend({
  el:"#app",
  initialize: function(){
    this.$input=this.$("#newTitle")
    this.$list=this.$("#list")
    this.render();
    this.listenTo(itemArray,'add',this.addOne)
    this.listenTo(itemArray,'remove',this.removeOne)

  },
  events:{
    'click #addButton':'addItem',
    'click #refreshButton':'render'
  },
  render:function(){
    this.$list.html('')
    itemArray.fetch()
    itemArray.forEach((x)=>{this.$list.append(new ItemView({model:x}).render().el)})
    // const v=new ItemView({model:new Item({title:"new title"})})
    // this.$("#list").html(v.render().el)
    return this
  },
  addItem: function(){
    if(!this.$input.val().trim()) {
      return
    }
    itemArray.create({title:this.$input.val().trim()},{wait:true})
    this.$input.val('')
    //itemArray.fetch()
  },
  addOne:function(todo){
    console.log("add",todo)
    this.$list.append(new ItemView({model:todo}).render().el)
  },
  removeOne:function(todo){
    console.log("remove",todo)
  }
})
var Workspace = Backbone.Router.extend({

  routes: {
    "help":                 "help",    // #help
    "search/:query":        "search",  // #search/kiwis
    "search/:query/p:page": "search"   // #search/kiwis/p7
  },

  help: function() {
    console.log("this is help")
    System.import(/* webpackChunkName: "sample12_1" */'./sample12_1.js').then(m=>{console.log(m)})
  },

  search: function(query, page) {
    console.log('this is search')
  }

});
new Workspace();
new AppView();
Backbone.history.start({});
console.log("this is sample12.js")