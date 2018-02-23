webpackJsonp([5],{

/***/ 113:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"RichEditor-root":"_3Yqtc-KAJACTeALwxisgI9","RichEditor-editor":"_33SAe_WdsY3nuEBRvlCyck","app":"_3O7TvFZY4ib97FoQPuZO5k","public-DraftEditorPlaceholder-root":"_1X8lzdfBoz6XTSlKXa2oAs","public-DraftEditor-content":"_1IeleRIwn8EP7kReX6WVYO","RichEditor-hidePlaceholder":"_2fkvDsz8kTc5g1gBvAAiPG","RichEditor-blockquote":"ZIzIYYN1unvUMSjvSk2u6","public-DraftStyleDefault-pre":"_1XRo4E_SahJLx2g3Kyd7Hv","RichEditor-controls":"ISk70MCkKk_ykRBqUIgjz","RichEditor-styleButton":"_1h8RRZz6TfnRxyVtEes7H-","RichEditor-activeButton":"_2NQ1Qe4GehYof1CyFwNXKT","invented":"_3gxmZQsfy34YH1RWGnosoT _132GaShc660XP_FJA0YxWE"};

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(20);

var _style = __webpack_require__(166);

var _style2 = _interopRequireDefault(_style);

var _reactRouterDom = __webpack_require__(47);

var _b = __webpack_require__(194);

var _b2 = _interopRequireDefault(_b);

var _sample = __webpack_require__(195);

var _sample2 = _interopRequireDefault(_sample);

var _sample3 = __webpack_require__(196);

var _sample4 = _interopRequireDefault(_sample3);

var _sample5 = __webpack_require__(220);

var _sample6 = _interopRequireDefault(_sample5);

var _sample7 = __webpack_require__(221);

var _sample8 = _interopRequireDefault(_sample7);

var _sample9 = __webpack_require__(222);

var _sample10 = _interopRequireDefault(_sample9);

var _sample11 = __webpack_require__(223);

var _sample12 = _interopRequireDefault(_sample11);

var _sample13 = __webpack_require__(224);

var _sample14 = _interopRequireDefault(_sample13);

var _sample15 = __webpack_require__(225);

var _sample16 = _interopRequireDefault(_sample15);

var _sample17 = __webpack_require__(227);

var _sample18 = _interopRequireDefault(_sample17);

var _sample19 = __webpack_require__(228);

var _sample20 = _interopRequireDefault(_sample19);

var _sample21 = __webpack_require__(229);

var _sample22 = _interopRequireDefault(_sample21);

var _sample23 = __webpack_require__(230);

var _sample24 = _interopRequireDefault(_sample23);

var _sample25 = __webpack_require__(253);

var _sample26 = _interopRequireDefault(_sample25);

var _sample27 = __webpack_require__(254);

var _sample28 = _interopRequireDefault(_sample27);

var _sample29 = __webpack_require__(256);

var _sample30 = _interopRequireDefault(_sample29);

var _sample31 = __webpack_require__(350);

var _sample32 = _interopRequireDefault(_sample31);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noArray = [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18];
var linkArray = noArray.map(function (i) {
	return _react2.default.createElement(
		_reactRouterDom.Link,
		{ key: i, to: '/sample' + i },
		'this is sample' + i
	);
});
var routeArray = [_react2.default.createElement(_reactRouterDom.Route, { key: 1, path: '/sample1', component: _sample2.default }), _react2.default.createElement(_reactRouterDom.Route, { key: 3, path: '/sample3', component: _sample4.default }), _react2.default.createElement(_reactRouterDom.Route, { key: 4, path: '/sample4', component: _sample6.default }), _react2.default.createElement(_reactRouterDom.Route, { key: 5, path: '/sample5', component: _sample8.default }), _react2.default.createElement(_reactRouterDom.Route, { key: 6, path: '/sample6', component: _sample10.default }), _react2.default.createElement(_reactRouterDom.Route, { key: 7, path: '/sample7', component: _sample12.default }), _react2.default.createElement(_reactRouterDom.Route, { key: 8, path: '/sample8', component: _sample14.default }), _react2.default.createElement(_reactRouterDom.Route, { key: 9, path: '/sample9', component: _sample16.default }), _react2.default.createElement(_reactRouterDom.Route, { key: 10, path: '/sample10', component: _sample18.default }), _react2.default.createElement(_reactRouterDom.Route, { key: 11, path: '/sample11', component: _sample20.default }), _react2.default.createElement(_reactRouterDom.Route, { key: 13, path: '/sample13', component: _sample22.default }), _react2.default.createElement(_reactRouterDom.Route, { key: 14, path: '/sample14', component: _sample24.default }), _react2.default.createElement(_reactRouterDom.Route, { key: 15, path: '/sample15', component: _sample26.default }), _react2.default.createElement(_reactRouterDom.Route, { key: 16, path: '/sample16', component: _sample28.default }), _react2.default.createElement(_reactRouterDom.Route, { key: 17, path: '/sample17', component: _sample30.default }), _react2.default.createElement(_reactRouterDom.Route, { key: 18, path: '/sample18', component: _sample32.default })];
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
var App = function App() {
	return _react2.default.createElement(
		'div',
		{ className: _style2.default.app },
		'this is my Apphahaha',
		_react2.default.createElement(
			'a',
			{ href: 'sample12.html' },
			'this is sample12'
		),
		_react2.default.createElement(
			'a',
			{ href: '../test.html' },
			'this is a test'
		),
		linkArray,
		_react2.default.createElement('br', null),
		routeArray,
		_react2.default.createElement('br', null),
		_react2.default.createElement(
			'button',
			{ onClick: function onClick() {
					__webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, 355)).then(function (mod) {
						mod.default();
					});
				} },
			'click'
		)
	);
};

(0, _reactDom.render)(_react2.default.createElement(
	_reactRouterDom.BrowserRouter,
	null,
	_react2.default.createElement(_reactRouterDom.Route, { path: '/', component: App })
), document.getElementById("app"));

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"app":"_1qW-C8dKgSfwD_KlKdI5oc","small":"_1cGsQ2rVqvY_1lXMGFFK4S"};

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(47);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Component = function Component(_ref) {
  var match = _ref.match;
  console.log(match);return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: '/' },
      'back to home'
    )
  );
};
exports.default = Component;

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RedH1 = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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
var ComponentFactory = function ComponentFactory(Com, style) {
  return function (_ref) {
    var children = _ref.children;
    return _react2.default.createElement(
      Com,
      { style: style },
      children
    );
  };
};
var myH1 = function myH1(_ref2) {
  var children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ['children']);

  return _react2.default.createElement(
    'h1',
    props,
    children
  );
};

var RedH1 = exports.RedH1 = ComponentFactory(myH1, { color: 'red' });
var Component = function Component() {
  return _react2.default.createElement(
    RedH1,
    null,
    'hi,this is red h1'
  );
};
exports.default = Component;

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(54);

var _reactRedux = __webpack_require__(97);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer1 = function reducer1() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	var action = arguments[1];

	switch (action.type) {
		case 'Add':
			state = state + 1;
		default:
	}
	return state;
}; /*
   代码目标：写一个简单而又完整的react-redux app架构，从reducer到action到store到component到connect到Provider到最后export
   使用方法：在index.js上加一条route
   <Route path='/sample3' component={C3} />
   */

var reducer2 = function reducer2() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
	var action = arguments[1];

	switch (action.type) {
		case 'Add':
			state = state + "a";
		default:
	}
	return state;
};
var actionCreators = {
	Add: function Add() {
		return { type: 'Add' };
	}
};
var store = (0, _redux.createStore)((0, _redux.combineReducers)({ Num: reducer1, Word: reducer2 }));

var Component = function Component(props) {
	return _react2.default.createElement(
		'div',
		null,
		'Number:',
		props.num,
		' ',
		_react2.default.createElement('br', null),
		' Word:',
		props.word,
		' ',
		_react2.default.createElement('br', null),
		' ',
		_react2.default.createElement(
			'button',
			{ onClick: function onClick() {
					props.Add();
				} },
			'Add'
		)
	);
};
var mapStateToProps = function mapStateToProps(_ref) {
	var Num = _ref.Num,
	    Word = _ref.Word;
	return { num: Num, word: Word };
};
var Com = (0, _reactRedux.connect)(mapStateToProps, actionCreators)(Component);

exports.default = function () {
	return _react2.default.createElement(
		_reactRedux.Provider,
		{ store: store },
		_react2.default.createElement(Com, null)
	);
};
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

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               代码目标：演示setState在什么情况下以同步或异步方式执行，从以下代码可以看出，通过react定义的事件onClick调用时，setState的调用
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               为异步，当在setTimeout，addEventListener的回调函数中调用时，setState变为同步
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var initState = { score: 0, score1: 0 };

var Test = function (_Component) {
	_inherits(Test, _Component);

	function Test(props) {
		_classCallCheck(this, Test);

		console.log("Test Started!");

		var _this = _possibleConstructorReturn(this, (Test.__proto__ || Object.getPrototypeOf(Test)).call(this, props));

		_this.state = initState;
		_this.increment.bind(_this);
		return _this;
	}

	_createClass(Test, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			console.log(this.but);
			this.but.addEventListener('click', function () {
				_this2.increment1();
			});
		}
	}, {
		key: 'increment',
		value: function increment() {
			this.setState({ score: this.state.score + 1 });

			//此时this.state.score的值并没有增加，所以下一句的调用跟前一句的效果是一样的
			this.setState({ score: this.state.score + 1 });
		}
	}, {
		key: 'increment1',
		value: function increment1() {
			this.setState({ score1: this.state.score1 + 1 });
			this.setState({ score1: this.state.score1 + 1 });
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			return [_react2.default.createElement(
				'button',
				{ key: 1, onClick: function onClick() {
						_this3.increment();
					} },
				this.state.score
			), _react2.default.createElement(
				'button',
				{ key: 2, ref: function ref(but) {
						_this3.but = but;
					} },
				this.state.score1
			)];
		}
	}]);

	return Test;
}(_react.Component);

exports.default = Test;

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               代码目标：对比controlled与uncontrolled控件，从以下input的props中可以看出controlled控件的最大特点是其value值与组件的state相绑定
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               因此其输入内容必须依靠setState改变，而setState的调用受代码控制，因此controlled控件对用户输入的控制是实时，在代码的控制下，
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               用户有可能遇到输入受阻的情况
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               相比较，uncontrolled控件的值不与state相绑定，输入完全不受代码控制
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var MyInputTest1 = function (_Component) {
	_inherits(MyInputTest1, _Component);

	function MyInputTest1() {
		_classCallCheck(this, MyInputTest1);

		var _this = _possibleConstructorReturn(this, (MyInputTest1.__proto__ || Object.getPrototypeOf(MyInputTest1)).call(this));

		_this.state = { text: "" };
		_this.handleChange = _this.handleChange.bind(_this);
		return _this;
	}

	_createClass(MyInputTest1, [{
		key: "handleChange",
		value: function handleChange(e) {
			if (!/\d+$/.test(e.target.value)) return;
			this.setState({ text: e.target.value });
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					"span",
					null,
					this.state.text
				),
				_react2.default.createElement("input", { value: this.state.text, onChange: this.handleChange })
			);
		}
	}]);

	return MyInputTest1;
}(_react.Component);

var MyInputTest2 = function (_Component2) {
	_inherits(MyInputTest2, _Component2);

	function MyInputTest2() {
		_classCallCheck(this, MyInputTest2);

		var _this2 = _possibleConstructorReturn(this, (MyInputTest2.__proto__ || Object.getPrototypeOf(MyInputTest2)).call(this));

		_this2.state = { text: "" };
		_this2.handleChange = _this2.handleChange.bind(_this2);
		return _this2;
	}

	_createClass(MyInputTest2, [{
		key: "handleChange",
		value: function handleChange(e) {
			if (!/\d+$/.test(e.target.value)) return;
			this.setState({ text: e.target.value });
		}
	}, {
		key: "render",
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					"span",
					null,
					this.state.text
				),
				_react2.default.createElement("input", { ref: function ref(el) {
						return _this3.input = el;
					}, onChange: this.handleChange })
			);
		}
	}]);

	return MyInputTest2;
}(_react.Component);

exports.default = function () {
	return _react2.default.createElement(
		"div",
		null,
		_react2.default.createElement(MyInputTest1, null),
		_react2.default.createElement(MyInputTest2, null)
	);
};

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               代码目标：用代码证明几个事实，进一步搞清楚react中的生命周期函数与setState以及reconciliation概念的瓜葛
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               1 每个组件的render发生在两种情况，一是组件初始加载时getDefaultProps->getInitialState->componentWillMount->render
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ->componentDidMount，二是组件内部state或外部props发生变化时(componentWillReceiveProps)->shouldComponentUpdate->componentWillUpdate
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ->render->componentDidUpdate
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               2 react在生成实际dom之前先会维护一个虚拟dom树，虚拟dom树的节点用组件名标记，如果新生成的虚拟dom树的某个节点发生变化时，该节点
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               以下的所有节点组件都需要重新创建，重新加载，比如ShowCase下的Parent1变为Parent2时，Parent1组件被卸载unmount，Parent2组件被创建
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               并加载mount
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               3 当新旧两棵虚拟dom树相比较，某个节点名称没变，只是其props（包括children）发生改变，那么该节点不会被卸载，但是仍旧会引发其重新render
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               4 组件被卸载时，其内部state数据被清除，但如果只是props发生改变，其state依旧保持，这就是为什么从按钮0到1计数会重置，但从1到2计数不会重置
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               5 每当一个组件的setState被调用时，它都会被再次render，除非在其shouldComponentUpdate中返回false，因此重复按同一个按钮不会有任何rerender
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               但从按钮0到按钮1则会发生rerender
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Parent1 = function (_Component) {
	_inherits(Parent1, _Component);

	function Parent1() {
		_classCallCheck(this, Parent1);

		var _this = _possibleConstructorReturn(this, (Parent1.__proto__ || Object.getPrototypeOf(Parent1)).call(this));

		_this.state = { timer: 0 };
		return _this;
	}

	_createClass(Parent1, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			var _this2 = this;

			this.untimer = setInterval(function () {
				return _this2.setState({ timer: _this2.state.timer + 1 });
			}, 1000);
		}
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			console.log("Parent1 is leaving!");
			clearInterval(this.untimer);
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					"h2",
					null,
					"this is Parent1 counting ",
					this.state.timer
				),
				this.props.children
			);
		}
	}]);

	return Parent1;
}(_react.Component);

var Parent2 = function (_Component2) {
	_inherits(Parent2, _Component2);

	function Parent2() {
		_classCallCheck(this, Parent2);

		var _this3 = _possibleConstructorReturn(this, (Parent2.__proto__ || Object.getPrototypeOf(Parent2)).call(this));

		_this3.state = { timer: 0 };
		return _this3;
	}

	_createClass(Parent2, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			var _this4 = this;

			this.untimer = setInterval(function () {
				return _this4.setState({ timer: _this4.state.timer + 1 });
			}, 1000);
		}
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			console.log("Parent2 is leaving!");
			clearInterval(this.untimer);
		}
	}, {
		key: "componentWillReceiveProps",
		value: function componentWillReceiveProps(nextProps) {
			console.log("Parent2 is receiving new props ", nextProps);
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					"h2",
					null,
					"this is Parent2 counting ",
					this.state.timer
				),
				this.props.children
			);
		}
	}]);

	return Parent2;
}(_react.Component);

var Kid1 = function (_Component3) {
	_inherits(Kid1, _Component3);

	function Kid1() {
		_classCallCheck(this, Kid1);

		return _possibleConstructorReturn(this, (Kid1.__proto__ || Object.getPrototypeOf(Kid1)).apply(this, arguments));
	}

	_createClass(Kid1, [{
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			console.log("Kid1 is leaving!");
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				null,
				"Hi I'm Kid1"
			);
		}
	}]);

	return Kid1;
}(_react.Component);

var Kid2 = function (_Component4) {
	_inherits(Kid2, _Component4);

	function Kid2() {
		_classCallCheck(this, Kid2);

		return _possibleConstructorReturn(this, (Kid2.__proto__ || Object.getPrototypeOf(Kid2)).apply(this, arguments));
	}

	_createClass(Kid2, [{
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			console.log("Kid2 is leaving!");
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				null,
				"Hi I'm Kid2"
			);
		}
	}]);

	return Kid2;
}(_react.Component);

var ShowCase = function (_Component5) {
	_inherits(ShowCase, _Component5);

	function ShowCase(props) {
		_classCallCheck(this, ShowCase);

		return _possibleConstructorReturn(this, (ShowCase.__proto__ || Object.getPrototypeOf(ShowCase)).call(this, props));
		//this.state={index:0}
	}

	_createClass(ShowCase, [{
		key: "render",
		value: function render() {
			switch (this.props.index) {
				case 0:
					return _react2.default.createElement(
						Parent1,
						null,
						_react2.default.createElement(Kid1, null)
					);
				case 1:
					return _react2.default.createElement(
						Parent2,
						null,
						_react2.default.createElement(Kid1, null)
					);
				case 2:
					return _react2.default.createElement(
						Parent2,
						null,
						_react2.default.createElement(Kid2, null)
					);
				default:
					return _react2.default.createElement(
						"div",
						null,
						"nothing!"
					);
			}
		}
	}]);

	return ShowCase;
}(_react.Component);

var ShowCaseBox = function (_Component6) {
	_inherits(ShowCaseBox, _Component6);

	function ShowCaseBox(props) {
		_classCallCheck(this, ShowCaseBox);

		var _this8 = _possibleConstructorReturn(this, (ShowCaseBox.__proto__ || Object.getPrototypeOf(ShowCaseBox)).call(this, props));

		_this8.state = { index: 0 };
		return _this8;
	}

	_createClass(ShowCaseBox, [{
		key: "generateButtons",
		value: function generateButtons(num) {
			var _this9 = this;

			var arr = [];
			for (var i = 0; i < num; i++) {
				arr.push(function (x) {
					return _react2.default.createElement(
						"button",
						{ key: x, onClick: function onClick() {
								return _this9.setState({ index: x });
							} },
						" ",
						x
					);
				}(i));
			}
			return arr;
		}
	}, {
		key: "shouldComponentUpdate",
		value: function shouldComponentUpdate(nextProps, nextState) {
			if (this.state.index === nextState.index) {
				return false;
			}
			return true;
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(ShowCase, { index: this.state.index }),
				this.generateButtons(5)
			);
		}
	}]);

	return ShowCaseBox;
}(_react.Component);

exports.default = ShowCaseBox;

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(77);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               代码目标：写一个极简单的react组件，访问web api获取当前时间并显示，具有按钮刷新功能，并且能显示加载中，获取成功，获取失败三种状态信息
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var ShowCase = function (_Component) {
	_inherits(ShowCase, _Component);

	function ShowCase() {
		_classCallCheck(this, ShowCase);

		var _this = _possibleConstructorReturn(this, (ShowCase.__proto__ || Object.getPrototypeOf(ShowCase)).call(this));

		_this.state = { status: "still loading..." };
		return _this;
	}

	_createClass(ShowCase, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			var p = new Promise(function (resolve) {
				return setTimeout(resolve, 1000);
			});
			p.then(function () {
				return _axios2.default.get('http://localhost:3033');
			}).then(function (res) {
				_this2.setState({ status: res.data.time });
			});
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			//axios.get(`http://localhost:3033`).then(res=>{this.setState({status:res.data.time})})

		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement(
				'div',
				null,
				this.state.status,
				_react2.default.createElement(
					'button',
					{ onClick: function onClick() {
							_axios2.default.get('http://localhost:3033').then(function (res) {
								_this3.setState({ status: res.data.time });
							});
						} },
					'refresh'
				)
			);
		}
	}]);

	return ShowCase;
}(_react.Component);

exports.default = ShowCase;

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /*
                                                                                                                                                                                                                                                                  代码目标：用代码的方式演示一个react组件（Kid）的props被修改的三种方式：父组件调用setState，任何组件通过dispatch改变redux状态，
                                                                                                                                                                                                                                                                  url变化导致路由参数变化，根据以下代码的运行结果可以看出，只有通过dispatch改变redux状态才可以在不导致父组件不需要update的情况下
                                                                                                                                                                                                                                                                  改变子组件的参数
                                                                                                                                                                                                                                                                  */

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(54);

var _reactRedux = __webpack_require__(97);

var _reactRouterDom = __webpack_require__(47);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var reducer = function reducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	var action = arguments[1];

	switch (action.type) {
		case 'Add':
			state = state + 1;
		default:
	}
	return state;
};

var actionCreators = {
	Add: function Add() {
		return { type: 'Add' };
	}
};
var store = (0, _redux.createStore)(reducer);

var ComponentKid = function ComponentKid(props) {
	return _react2.default.createElement(
		'div',
		null,
		'Number:',
		props.num,
		' Word:',
		props.word,
		' UrlParam:',
		props.match.params.id,
		' '
	);
};
var mapStateToProps = function mapStateToProps(state, ownProps) {
	return _extends({ num: state }, ownProps);
};
var Com = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, null)(ComponentKid));

var MyComponent = function (_Component) {
	_inherits(MyComponent, _Component);

	function MyComponent(props) {
		_classCallCheck(this, MyComponent);

		var _this = _possibleConstructorReturn(this, (MyComponent.__proto__ || Object.getPrototypeOf(MyComponent)).call(this, props));

		_this.state = { word: "" };
		return _this;
	}

	_createClass(MyComponent, [{
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			console.log("MyComponent updated!");
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			console.log(this.props.match.url);
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_reactRouterDom.Link,
					{ to: this.props.match.url + '/' + this.state.word },
					'this is sample8 with haha'
				),
				_react2.default.createElement('input', { ref: function ref(x) {
						return _this2.input = x;
					} }),
				_react2.default.createElement(
					'button',
					{ onClick: function onClick() {
							return _this2.setState({ word: _this2.input.value });
						} },
					'setState'
				),
				_react2.default.createElement(
					'button',
					{ onClick: function onClick() {
							return _this2.props.Add();
						} },
					'actionDispatcher'
				),
				_react2.default.createElement(Com, { word: this.state.word }),
				_react2.default.createElement(_reactRouterDom.Route, { path: this.props.match.url + '/:id', component: Com })
			);
		}
	}]);

	return MyComponent;
}(_react.Component);

var MyCom = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(null, actionCreators)(MyComponent));

exports.default = function () {
	return _react2.default.createElement(
		_reactRedux.Provider,
		{ store: store },
		_react2.default.createElement(MyCom, null)
	);
};

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _a = __webpack_require__(226);

var _a2 = _interopRequireDefault(_a);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               代码目标：实现dynamic code splitting,以下代码使用了两种不同的方式实现动态代码加载，一是bundle-loader,二是System.import,从使用效果上看
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               以下代码中的System.import('./a').then(m=>{m.default()})与loadA(m=>{m.default()})的效果一样，但是在实际代码中，这两种做法还是有区别的：
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               区别主要在于bundler-loader对外部代码的宣称与实际加载变成了两段代码，首先是import loadA from 'bundle-loader?lazy!./a',此时外部代码a
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               并没有真正加载进来，但是从import语句的角度来看，代码读者可以很清楚地知道将来a有可能会被加载进来，而当<Bundler load={loadA}>组件被加载
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               时，代码才真正被动态加载，这种做法要比System.import更加可读！
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var Bundle = function (_Component) {
  _inherits(Bundle, _Component);

  function Bundle(props) {
    _classCallCheck(this, Bundle);

    var _this = _possibleConstructorReturn(this, (Bundle.__proto__ || Object.getPrototypeOf(Bundle)).call(this, props));

    _this.state = {
      // short for "module" but that's a keyword in js, so "mod"
      mod: null
    };
    return _this;
  }

  _createClass(Bundle, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.load(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.load !== this.props.load) {
        this.load(nextProps);
      }
    }
  }, {
    key: 'load',
    value: function load(props) {
      var _this2 = this;

      this.setState({
        mod: null
      });
      props.load(function (mod) {
        _this2.setState({
          // handle both es imports and cjs
          mod: mod.default ? mod.default : mod
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return this.state.mod ? this.props.children(this.state.mod) : null;
    }
  }]);

  return Bundle;
}(_react.Component);

var About = function About(props) {
  return _react2.default.createElement(
    Bundle,
    { load: _a2.default },
    function (About) {
      return _react2.default.createElement(About, props);
    }
  );
};

var ShowCase = function (_Component2) {
  _inherits(ShowCase, _Component2);

  function ShowCase(props) {
    _classCallCheck(this, ShowCase);

    var _this3 = _possibleConstructorReturn(this, (ShowCase.__proto__ || Object.getPrototypeOf(ShowCase)).call(this, props));

    _this3.state = { mod: null };
    _this3.LoadMod = _this3.LoadMod.bind(_this3);
    return _this3;
  }

  _createClass(ShowCase, [{
    key: 'LoadMod',
    value: function LoadMod() {
      var _this4 = this;

      __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 354)).then(function (m) {
        _this4.setState({ mod: m.default });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var Tag = this.state.mod;
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          Bundle,
          { load: _a2.default },
          function (About) {
            return _react2.default.createElement(About, _this5.props);
          }
        ),
        Tag ? _react2.default.createElement(Tag, null) : _react2.default.createElement(
          'div',
          null,
          'To be loaded'
        ),
        _react2.default.createElement(
          'button',
          { onClick: function onClick() {
              return _this5.LoadMod();
            } },
          'press to load'
        )
      );
    }
  }]);

  return ShowCase;
}(_react.Component);

exports.default = ShowCase;

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(1).then((function(require) {
		cb(__webpack_require__(353));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               代码目标：用mvc模式搭建一个最简单的todolist应用，只包含显示全部todo项和新增todo项两个功能，主要为了演示mvc模式的含义：
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               1 所有与dom相关的底层操作代码全部留在v中，包括新建删除dom节点，包括调用addEventListener
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               2 所有与数据相关的底层操作，包括数据库的操作，都留在m中
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               3 所有与应用上层逻辑相关的抽象操作都定义成c中的代码，比如c中的addTodo就要m中的create和v中的addTodo的支持才能完成，c中的addTodo
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               要解决如何往todolist这个应用里插入一个抽象的todo项，m中的create只关心如何在内存里或数据库里插入一条数据，v中的addTodo只关心如何
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               在页面dom中插入一个li节点
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               4 mvc的好处在于应用逻辑通过代码分区更加清晰，mv分别处理与数据相关或dom相关的底层逻辑，c处理上层逻辑，另外代码的重用性也得到加强
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

function Model() {
	//this.data=JSON.parse(localStorage.getItem("db")) || []
	this.data = [{ title: "todo1", completed: false, id: 1 }, { title: "todo2", completed: false, id: 2 }];
}
Model.prototype.create = function (title, handler) {
	var todo = { title: title, completed: false, id: new Date().getTime() };
	this.data.push(todo);
	//localStorage.setItem("db",JSON.stringify(this.data))
	handler(todo.title, todo.id);
};
Model.prototype.read = function (handler) {
	handler(this.data);
};
function View() {
	this.$newTodo = document.getElementById("newTodo");
	this.$todoList = document.getElementById("todoList");
}
View.prototype.addTodo = function (title, id) {
	var el = document.createElement("li");
	el.id = id;
	el.innerHTML = title;
	this.$todoList.appendChild(el);
};
View.prototype.showTodos = function (todos) {
	var content = todos.reduce(function (res, item) {
		res = res + ("<li id='" + item.id + "'>" + item.title + "</li>");
		return res;
	}, "");
	this.$todoList.innerHTML = content;
};
View.prototype.addTodoHandler = function (handler) {
	this.$newTodo.addEventListener('change', function (e) {
		handler(e.target.value);
	});
};
function Controller(model, view) {
	this.model = model;
	this.view = view;
	this.view.addTodoHandler(this.addTodo.bind(this));
	console.log("constructor", this.view);
}
Controller.prototype.addTodo = function (title) {
	console.log(title);
	this.model.create(title, this.view.addTodo.bind(this.view));
};
Controller.prototype.showTodos = function () {
	this.model.read(this.view.showTodos.bind(this.view));
};
Controller.prototype.init = function () {
	console.log("init", this);
	this.showTodos();
	//this.view.addTodoHandler(this.addTodo)
};

var ShowCase = function (_Component) {
	_inherits(ShowCase, _Component);

	function ShowCase() {
		_classCallCheck(this, ShowCase);

		return _possibleConstructorReturn(this, (ShowCase.__proto__ || Object.getPrototypeOf(ShowCase)).apply(this, arguments));
	}

	_createClass(ShowCase, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			var controller = new Controller(new Model(), new View());
			controller.init();
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ id: "container" },
				_react2.default.createElement("input", { id: "newTodo" }),
				_react2.default.createElement("ul", { id: "todoList" })
			);
		}
	}]);

	return ShowCase;
}(_react.Component);

exports.default = ShowCase;

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _backbone = __webpack_require__(31);

var _backbone2 = _interopRequireDefault(_backbone);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyModel = _backbone2.default.Model.extend({ title: "" });
var MyCollection = _backbone2.default.Collection.extend({ model: MyModel });

var ShowCase = function (_Component) {
	_inherits(ShowCase, _Component);

	function ShowCase() {
		_classCallCheck(this, ShowCase);

		var _this = _possibleConstructorReturn(this, (ShowCase.__proto__ || Object.getPrototypeOf(ShowCase)).call(this));

		_this.state = { title: "" };
		_this.collection = new MyCollection([{ title: "todo1" }, { title: "todo2" }, { title: "todo3" }]);
		_this.state = { todos: _this.collection.models };
		_this.collection.on("add remove", function () {
			_this.setState({ todos: _this.collection.models });
		}, _this);
		//this.collection.on("remove",()=>{this.setState({todos:this.collection.models})},this)
		return _this;
	}

	_createClass(ShowCase, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			console.log(this.collection);
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement('input', { type: 'text', ref: function ref(input) {
						_this2.input = input;
					} }),
				_react2.default.createElement(
					'button',
					{ onClick: function onClick() {
							_this2.collection.add(new MyModel({ title: _this2.input.value }));
						} },
					'add'
				),
				_react2.default.createElement(
					'ul',
					null,
					this.state.todos.map(function (x, i) {
						return _react2.default.createElement(
							'li',
							{ key: x.cid, id: x.cid },
							x.attributes.title + "," + x.id + "," + x.cid,
							_react2.default.createElement(
								'button',
								{ onClick: function onClick() {
										return _this2.collection.remove(_this2.collection.get(x.cid));
									} },
								'delete'
							)
						);
					})
				)
			);
		}
	}]);

	return ShowCase;
}(_react.Component);

exports.default = ShowCase;

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(77);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               代码目标：用react制作一个基于jwt验证的前端小组件，包含用户名、密码两个文本框和注册、登录两个按钮以及一个密码出错提示标签
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Login = function Login(_ref) {
	var userEmail = _ref.userEmail,
	    errText = _ref.errText,
	    iat = _ref.iat,
	    onSignIn = _ref.onSignIn,
	    onSignUp = _ref.onSignUp,
	    onSignOut = _ref.onSignOut,
	    onGetIat = _ref.onGetIat;

	var email = null;
	var pass = null;
	return userEmail ? _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			'label',
			null,
			'Hello ',
			userEmail,
			' ',
			iat
		),
		_react2.default.createElement(
			'button',
			{ onClick: function onClick() {
					onGetIat();
				} },
			'GetIat'
		),
		_react2.default.createElement(
			'button',
			{ onClick: function onClick() {
					onSignOut();
				} },
			'SignOut'
		)
	) : _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			'label',
			null,
			'userEmail:',
			_react2.default.createElement('input', { ref: function ref(el) {
					email = el;
				} })
		),
		_react2.default.createElement(
			'label',
			null,
			'password:',
			_react2.default.createElement('input', { ref: function ref(el) {
					pass = el;
				} })
		),
		_react2.default.createElement(
			'button',
			{ onClick: function onClick() {
					onSignIn(email.value, pass.value);
				} },
			'SignIn'
		),
		_react2.default.createElement(
			'button',
			{ onClick: function onClick() {
					onSignUp(email.value, pass.value);
				} },
			'SignUp'
		),
		errText ? _react2.default.createElement(
			'label',
			null,
			errText
		) : null
	);
};

var ShowCase = function (_Component) {
	_inherits(ShowCase, _Component);

	function ShowCase() {
		_classCallCheck(this, ShowCase);

		var _this = _possibleConstructorReturn(this, (ShowCase.__proto__ || Object.getPrototypeOf(ShowCase)).call(this));

		_this.handleSignIn = _this.handleSignIn.bind(_this);
		_this.handleSignUp = _this.handleSignUp.bind(_this);
		_this.handleSignOut = _this.handleSignOut.bind(_this);
		_this.handleGetIat = _this.handleGetIat.bind(_this);
		_this.state = { userEmail: "", errText: "", iat: "" };
		return _this;
	}

	_createClass(ShowCase, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var data = JSON.parse(localStorage.getItem("data"));
			if (data) {
				this.setState({ userEmail: data.email });
			}
		}
	}, {
		key: 'handleGetIat',
		value: function handleGetIat() {
			var _this2 = this;

			var data = JSON.parse(localStorage.getItem("data"));
			if (!data) {
				this.setState({ iat: "unknown!" });
				return;
			}
			(0, _axios2.default)({
				url: 'http://localhost:3030/',
				method: 'get',
				headers: {
					'authorization': data.token,
					'Content-Type': 'application/json'
				}
			}).then(function (response) {
				console.log(response);
				_this2.setState({ iat: response.data.iat });
			}).catch(function (err) {
				console.log(err);
			});
		}
	}, {
		key: 'handleSignIn',
		value: function handleSignIn(email, password) {
			var _this3 = this;

			_axios2.default.post("http://localhost:3030/signin", { email: email, password: password }).then(function (res) {
				localStorage.setItem("data", JSON.stringify(res.data));_this3.setState({ userEmail: res.data.email, iat: "" });
			}, function (err) {
				console.log(err);_this3.setState({ userEmail: "", errText: "something is wrong" });
			});
		}
	}, {
		key: 'handleSignUp',
		value: function handleSignUp(email, password) {
			var _this4 = this;

			_axios2.default.post("http://localhost:3030/signup", { email: email, password: password }).then(function (res) {
				localStorage.setItem("data", JSON.stringify(res.data));_this4.setState({ userEmail: res.data.email }, iat);
			}, function (err) {
				console.log(err);_this4.setState({ userEmail: "", errText: "something is wrong" });
			});
		}
	}, {
		key: 'handleSignOut',
		value: function handleSignOut() {
			localStorage.removeItem("data");
			this.setState({ userEmail: "", errText: "" });
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(Login, { userEmail: this.state.userEmail, errText: this.state.errText, iat: this.state.iat, onSignIn: this.handleSignIn, onSignUp: this.handleSignUp, onSignOut: this.handleSignOut, onGetIat: this.handleGetIat });
		}
	}]);

	return ShowCase;
}(_react.Component);

exports.default = ShowCase;

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _socket = __webpack_require__(231);

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               代码目标：与本地server1配合，形成一个广播实时聊天信息的server-client对
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var ShowCase = function (_Component) {
	_inherits(ShowCase, _Component);

	function ShowCase() {
		_classCallCheck(this, ShowCase);

		var _this = _possibleConstructorReturn(this, (ShowCase.__proto__ || Object.getPrototypeOf(ShowCase)).call(this));

		_this.handleSend = _this.handleSend.bind(_this);
		return _this;
	}

	_createClass(ShowCase, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			this.socket = (0, _socket2.default)();
			this.socket.on('chat message', function (msg) {
				_this2.output.value = _this2.output.value + msg + '\n';
			});
		}
	}, {
		key: 'handleSend',
		value: function handleSend() {
			//System.import(/* webpackChunkName: "socket.io" */'socket.io-client').then(io=>{const socket=io(`http://127.0.0.1:3030`)})
			//const socket=socketIOClient()
			this.socket.emit('chat message', this.input.value);
			this.input.value = '';
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement('textarea', { ref: function ref(el) {
						return _this3.output = el;
					} }),
				_react2.default.createElement('input', { ref: function ref(input) {
						return _this3.input = input;
					} }),
				_react2.default.createElement(
					'button',
					{ onClick: this.handleSend },
					'Socket Send'
				)
			);
		}
	}]);

	return ShowCase;
}(_react.Component);

exports.default = ShowCase;

/***/ }),

/***/ 250:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               代码目标：与server2中的server.js一起配合演示server-send event是怎么一回事情
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               使用方法：npm run nodeserver2,选中sample15的链接后，查看console中的打印内容
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var ShowCase = function (_Component) {
	_inherits(ShowCase, _Component);

	function ShowCase() {
		_classCallCheck(this, ShowCase);

		var _this = _possibleConstructorReturn(this, (ShowCase.__proto__ || Object.getPrototypeOf(ShowCase)).call(this));

		_this.handleSend = _this.handleSend.bind(_this);
		return _this;
	}

	_createClass(ShowCase, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.source = new EventSource('/update-stream');
			this.source.onmessage = function (e) {
				console.log(e);
			};
		}
	}, {
		key: 'handleSend',
		value: function handleSend() {
			//System.import(/* webpackChunkName: "socket.io" */'socket.io-client').then(io=>{const socket=io(`http://127.0.0.1:3030`)})
			//const socket=socketIOClient()
			// this.socket.emit('chat message',this.input.value)
			// this.input.value=''
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				'this is case 15,look at the console please'
			);
		}
	}]);

	return ShowCase;
}(_react.Component);

exports.default = ShowCase;

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _sample = __webpack_require__(255);

var _sample2 = _interopRequireDefault(_sample);

var _sample3 = __webpack_require__(113);

var _sample4 = _interopRequireDefault(_sample3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShowCase = function (_Component) {
	_inherits(ShowCase, _Component);

	function ShowCase() {
		_classCallCheck(this, ShowCase);

		return _possibleConstructorReturn(this, (ShowCase.__proto__ || Object.getPrototypeOf(ShowCase)).apply(this, arguments));
	}

	_createClass(ShowCase, [{
		key: 'render',
		value: function render() {
			console.log(_sample4.default);
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'nav',
					null,
					_react2.default.createElement(
						'ul',
						null,
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								'a',
								{ href: '#' },
								'title 1'
							),
							_react2.default.createElement(
								'ul',
								null,
								_react2.default.createElement(
									'li',
									null,
									_react2.default.createElement(
										'a',
										{ href: '#' },
										'subtitle 1'
									)
								),
								_react2.default.createElement(
									'li',
									null,
									_react2.default.createElement(
										'a',
										{ href: '#' },
										'subtitle 1'
									)
								),
								_react2.default.createElement(
									'li',
									null,
									_react2.default.createElement(
										'a',
										{ href: '#' },
										'subtitle 1'
									)
								),
								_react2.default.createElement(
									'li',
									null,
									_react2.default.createElement(
										'a',
										{ href: '#' },
										'subtitle 1'
									)
								)
							)
						),
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								'a',
								{ href: '#' },
								'title 2'
							),
							_react2.default.createElement(
								'ul',
								null,
								_react2.default.createElement(
									'li',
									null,
									_react2.default.createElement(
										'a',
										{ href: '#' },
										'subtitle 1'
									)
								),
								_react2.default.createElement(
									'li',
									null,
									_react2.default.createElement(
										'a',
										{ href: '#' },
										'subtitle 1'
									)
								),
								_react2.default.createElement(
									'li',
									null,
									_react2.default.createElement(
										'a',
										{ href: '#' },
										'subtitle 1'
									)
								),
								_react2.default.createElement(
									'li',
									null,
									_react2.default.createElement(
										'a',
										{ href: '#' },
										'subtitle 1'
									)
								)
							)
						),
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								'a',
								{ href: '#' },
								'title 3'
							)
						),
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								'a',
								{ href: '#' },
								'title 4'
							)
						),
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								'a',
								{ href: '#' },
								'title 5'
							)
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: _sample2.default.col },
					'abc'
				),
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement('div', { className: _sample2.default.box0 })
				),
				_react2.default.createElement(
					'div',
					{ className: _sample2.default.container1 },
					_react2.default.createElement('div', { className: _sample2.default.box1 })
				),
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement('div', { className: _sample2.default.box2 })
				),
				_react2.default.createElement(
					'div',
					{ className: _sample2.default.container3 },
					_react2.default.createElement('div', { className: _sample2.default.box3 })
				),
				_react2.default.createElement(
					'div',
					{ className: _sample2.default.container4 },
					_react2.default.createElement('div', { className: _sample2.default.box4 })
				),
				_react2.default.createElement('div', { className: _sample2.default.container5 }),
				'     ',
				_react2.default.createElement('div', { className: _sample2.default.box5 }),
				_react2.default.createElement(
					'div',
					{ className: _sample2.default.action },
					_react2.default.createElement(
						'label',
						null,
						'Name Your Mores'
					),
					_react2.default.createElement('input', null),
					_react2.default.createElement(
						'button',
						null,
						'build it'
					)
				)
			);
		}
	}]);

	return ShowCase;
}(_react.Component);

exports.default = ShowCase;

/***/ }),

/***/ 255:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"box0":"_132GaShc660XP_FJA0YxWE","container1":"_1ca36t9CbER19n6bAEKFeQ","box1":"_3_A1A1XG-ZI-ZrvaOki8mx","box2":"_1iGfMiSOuZmgx9gE7-ZYTK","container3":"_36-p1_yRTW4_nX8z6C2xF_","box3":"_3P3sTMBrYXeng94JZbL6XL","container4":"_3699wnRgaqrMC8Uwhh8P1Y","box4":"_2Bwfenft-TOb1Aey9llb2j","container5":"urRNVXpp6NkQ4NiOHKvPP","box5":"_11owBBk1VLF_HKFkAB1pCG","grid":"-P3kjcdwC23URUd1w0KAC","griditem":"_3h3eG6TR-nRzYsWTgsAx3f","action":"u6eQg0y_2YTEYijdxSXsf"};

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyleButton = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _draftJs = __webpack_require__(114);

var _draftJsExportHtml = __webpack_require__(340);

var _sample = __webpack_require__(113);

var _sample2 = _interopRequireDefault(_sample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               代码目标：测试draft-js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var RichEditorExample = function (_React$Component) {
  _inherits(RichEditorExample, _React$Component);

  function RichEditorExample(props) {
    _classCallCheck(this, RichEditorExample);

    var _this = _possibleConstructorReturn(this, (RichEditorExample.__proto__ || Object.getPrototypeOf(RichEditorExample)).call(this, props));

    _this.state = { editorState: _draftJs.EditorState.createEmpty(), htmlState: "" };
    _this.focus = function () {
      return _this.refs.editor.focus();
    };
    _this.onChange = function (editorState) {
      var htmlState = (0, _draftJsExportHtml.stateToHTML)(editorState.getCurrentContent());_this.refs.showPanel.innerHTML = htmlState;_this.setState({ editorState: editorState, htmlState: htmlState });console.log((0, _draftJs.convertToRaw)(editorState.getCurrentContent()));
    };
    _this.handleKeyCommand = _this._handleKeyCommand.bind(_this);
    _this.onTab = _this._onTab.bind(_this);
    _this.toggleBlockType = _this._toggleBlockType.bind(_this);
    _this.toggleInlineStyle = _this._toggleInlineStyle.bind(_this);
    return _this;
  }

  _createClass(RichEditorExample, [{
    key: '_handleKeyCommand',
    value: function _handleKeyCommand(command, editorState) {
      var newState = _draftJs.RichUtils.handleKeyCommand(editorState, command);
      if (newState) {
        this.onChange(newState);
        return true;
      }
      return false;
    }
  }, {
    key: '_onTab',
    value: function _onTab(e) {
      var maxDepth = 4;
      this.onChange(_draftJs.RichUtils.onTab(e, this.state.editorState, maxDepth));
    }
  }, {
    key: '_toggleBlockType',
    value: function _toggleBlockType(blockType) {
      this.onChange(_draftJs.RichUtils.toggleBlockType(this.state.editorState, blockType));
    }
  }, {
    key: '_toggleInlineStyle',
    value: function _toggleInlineStyle(inlineStyle) {
      this.onChange(_draftJs.RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle));
    }
  }, {
    key: 'render',
    value: function render() {
      var editorState = this.state.editorState;
      // If the user changes block type before entering any text, we can
      // either style the placeholder or hide it. Let's just hide it now.

      var className = _sample2.default['RichEditor-editor'];
      var contentState = editorState.getCurrentContent();
      if (!contentState.hasText()) {
        if (contentState.getBlockMap().first().getType() !== 'unstyled') {
          className += ' ' + _sample2.default['RichEditor-hidePlaceholder'];
        }
      }
      return _react2.default.createElement(
        'div',
        { className: _sample2.default["RichEditor-root"] },
        _react2.default.createElement('div', { ref: 'showPanel' }),
        _react2.default.createElement(BlockStyleControls, {
          editorState: editorState,
          onToggle: this.toggleBlockType
        }),
        _react2.default.createElement(InlineStyleControls, {
          editorState: editorState,
          onToggle: this.toggleInlineStyle
        }),
        _react2.default.createElement(
          'div',
          { className: className, onClick: this.focus },
          _react2.default.createElement(_draftJs.Editor, {
            blockStyleFn: getBlockStyle,
            customStyleMap: styleMap,
            editorState: editorState,
            handleKeyCommand: this.handleKeyCommand,
            onChange: this.onChange,
            onTab: this.onTab,
            placeholder: 'Tell a story...',
            ref: 'editor',
            spellCheck: true
          })
        )
      );
    }
  }]);

  return RichEditorExample;
}(_react2.default.Component);
// Custom overrides for "code" style.


exports.default = RichEditorExample;
var styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2
  }
};
function getBlockStyle(block) {
  switch (block.getType()) {
    case 'blockquote':
      return _sample2.default['RichEditor-blockquote'];
    default:
      return null;
  }
}

var StyleButton = exports.StyleButton = function (_React$Component2) {
  _inherits(StyleButton, _React$Component2);

  function StyleButton() {
    _classCallCheck(this, StyleButton);

    var _this2 = _possibleConstructorReturn(this, (StyleButton.__proto__ || Object.getPrototypeOf(StyleButton)).call(this));

    _this2.onToggle = function (e) {
      e.preventDefault();
      _this2.props.onToggle(_this2.props.style);
    };
    return _this2;
  }

  _createClass(StyleButton, [{
    key: 'render',
    value: function render() {
      var className = _sample2.default['RichEditor-styleButton'];
      if (this.props.active) {
        className += ' ' + _sample2.default['RichEditor-activeButton'];
      }
      return _react2.default.createElement(
        'span',
        { className: className, onMouseDown: this.onToggle },
        this.props.label
      );
    }
  }]);

  return StyleButton;
}(_react2.default.Component);

var BLOCK_TYPES = [{ label: 'H1', style: 'header-one' }, { label: 'H2', style: 'header-two' }, { label: 'H3', style: 'header-three' }, { label: 'H4', style: 'header-four' }, { label: 'H5', style: 'header-five' }, { label: 'H6', style: 'header-six' }, { label: 'Blockquote', style: 'blockquote' }, { label: 'UL', style: 'unordered-list-item' }, { label: 'OL', style: 'ordered-list-item' }, { label: 'Code Block', style: 'code-block' }];
var BlockStyleControls = function BlockStyleControls(props) {
  var editorState = props.editorState;

  var selection = editorState.getSelection();
  var blockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();
  return _react2.default.createElement(
    'div',
    { className: _sample2.default['RichEditor-controls'] },
    BLOCK_TYPES.map(function (type) {
      return _react2.default.createElement(StyleButton, {
        key: type.label,
        active: type.style === blockType,
        label: type.label,
        onToggle: props.onToggle,
        style: type.style
      });
    })
  );
};
var INLINE_STYLES = [{ label: 'Bold', style: 'BOLD' }, { label: 'Italic', style: 'ITALIC' }, { label: 'Underline', style: 'UNDERLINE' }, { label: 'Monospace', style: 'CODE' }];
var InlineStyleControls = function InlineStyleControls(props) {
  var currentStyle = props.editorState.getCurrentInlineStyle();
  return _react2.default.createElement(
    'div',
    { className: _sample2.default["RichEditor-controls"] },
    INLINE_STYLES.map(function (type) {
      return _react2.default.createElement(StyleButton, {
        key: type.label,
        active: currentStyle.has(type.style),
        label: type.label,
        onToggle: props.onToggle,
        style: type.style
      });
    })
  );
};

/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShowCase = function (_Component) {
	_inherits(ShowCase, _Component);

	function ShowCase() {
		_classCallCheck(this, ShowCase);

		return _possibleConstructorReturn(this, (ShowCase.__proto__ || Object.getPrototypeOf(ShowCase)).apply(this, arguments));
	}

	_createClass(ShowCase, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"form",
				{ action: "/profile", method: "POST", encType: "multipart/form-data" },
				_react2.default.createElement("input", { type: "file", name: "avatar", accept: "application/x-zip-compressed,image/*" }),
				_react2.default.createElement("input", { "class": "form-control", type: "text", name: "description", placeholder: "Description or Message" }),
				_react2.default.createElement("input", { "class": "btn btn-primary", type: "submit", value: "submit" })
			);
		}
	}]);

	return ShowCase;
}(_react.Component);

exports.default = ShowCase;

/***/ })

},[157]);