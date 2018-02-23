webpackJsonp([5,0,2,3,4,8,9],[
/* 0 */
/***/ (function(module, exports) {

module.exports = "a";

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = "b";

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//module.exports = "c";
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0),__webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function(a,b){
	return function ab(){console.log("the output is "+a+b)}
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ })
],[2]);