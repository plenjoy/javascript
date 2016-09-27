webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store, $) {/**
	 * Created by dev on 2016/9/22.
	 */
	var Vue = __webpack_require__(3);

	var container = Vue.extend(__webpack_require__(5));
	Vue.component('container', container);

	var view1 = Vue.extend(__webpack_require__(12));
	Vue.component('view1', view1);

	var view2 = Vue.extend(__webpack_require__(17));
	Vue.component('view2', view2);

	var element = Vue.extend(__webpack_require__(22));
	Vue.component('element', element);

	Store.element=element;
	var vm = new Vue({
	    el: '#app',
	    mixins: [
	        __webpack_require__(27)
	    ],
	    data: {
	        privateStore: {},
	        sharedStore: Store
	    },
	    computed: {},
	    methods: {

	    },
	    events: {},
	    created: function () {

	    },
	    ready: function () {
	        console.log($('#app'));
	    }
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(2)))

/***/ },
/* 1 */
/***/ function(module, exports) {

	/**
	 * Created by dev on 2016/9/23.
	 */
	module.exports = {
	    label:"Label Text",
	    showViewIndex:1,
	    serviceText:""

	}

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(6)
	__vue_script__ = __webpack_require__(10)
	__vue_template__ = __webpack_require__(11)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\workspace\\js\\workspace\\vue\\vuejs&webpack\\src\\containers\\Container.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-4a215df6&file=Container.vue!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Container.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-4a215df6&file=Container.vue!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Container.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "\r\n\r\n\r\n", ""]);

	// exports


/***/ },
/* 8 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store) {"use strict";

	// <template>
	//     <div style="width: 100%;height: 100%">
	//
	//         <h3>main container</h3>
	//
	//         <span>
	//             <input type="button" value="broadcast" v-on:click="broadcastText">
	//             <input type="button" value="addComponent" v-on:click="addELement">
	//             <input type="button" value="deleteComponent" v-on:click="deleteELement">
	//             <input type="button" value="requestService" v-on:click="dispatchService">
	//         </span>
	//         <view1 v-show="showView1"></view1>
	//         <view2 v-show="showView2"></view2>
	//     </div>
	// </template>
	//
	// <script>
	module.exports = {
	    data: function data() {
	        return {
	            privateStore: {
	                currentSelectTitle: ''
	            },
	            sharedStore: Store
	        };
	    },
	    computed: {
	        showView1: function showView1() {
	            if (this.sharedStore.showViewIndex == 1) {
	                return true;
	            }
	            return false;
	        },
	        showView2: function showView2() {
	            if (this.sharedStore.showViewIndex == 2) {
	                return true;
	            }
	            return false;
	        }

	    },
	    methods: {
	        broadcastText: function broadcastText() {
	            this.$dispatch("broadcastText");
	        },
	        dispatchService: function dispatchService() {
	            this.$dispatch("dispatchService");
	        },
	        addELement: function addELement() {
	            this.$dispatch("dispatchAdd");
	        },
	        deleteELement: function deleteELement() {
	            this.$dispatch("dispatchDelete");
	        }

	    },
	    ready: function ready() {
	        console.log(this.sharedStore.label);
	    },
	    events: {}

	};
	// </script>
	//
	// <style>
	//
	//
	// </style>
	//
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "\r\n    <div style=\"width: 100%;height: 100%\">\r\n\r\n        <h3>main container</h3>\r\n\r\n        <span>\r\n            <input type=\"button\" value=\"broadcast\" v-on:click=\"broadcastText\">\r\n            <input type=\"button\" value=\"addComponent\" v-on:click=\"addELement\">\r\n            <input type=\"button\" value=\"deleteComponent\" v-on:click=\"deleteELement\">\r\n            <input type=\"button\" value=\"requestService\" v-on:click=\"dispatchService\">\r\n        </span>\r\n        <view1 v-show=\"showView1\"></view1>\r\n        <view2 v-show=\"showView2\"></view2>\r\n    </div>\r\n";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(13)
	__vue_script__ = __webpack_require__(15)
	__vue_template__ = __webpack_require__(16)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\workspace\\js\\workspace\\vue\\vuejs&webpack\\src\\components\\view01.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(14);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-a5e55b24&file=view01.vue!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./view01.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-a5e55b24&file=view01.vue!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./view01.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "\r\n\r\n\r\n", ""]);

	// exports


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store) {'use strict';

	// <template>
	//     <div style="width: 100%;height: 400px;background-color: aquamarine" v-on:click="handleViewClick">
	//         <h4>view 1</h4>
	//         <h4>{{privateStore.receiveText}}</h4>
	//         <textarea style="width: 300px;height: 200px">{{sharedStore.serviceText}}</textarea>
	//     </div>
	// </template>
	//
	// <script>
	module.exports = {
	    data: function data() {
	        return {
	            privateStore: {
	                receiveText: ''
	            },
	            sharedStore: Store
	        };
	    },
	    computed: {},
	    methods: {
	        handleViewClick: function handleViewClick() {
	            this.$dispatch('receiveChangeView', 2);
	        }

	    },
	    ready: function ready() {},
	    events: {
	        broadcastText: function broadcastText(text) {
	            this.privateStore.receiveText = text;
	        }
	    }

	};
	// </script>
	//
	// <style>
	//
	//
	// </style>
	//
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "\r\n    <div style=\"width: 100%;height: 400px;background-color: aquamarine\" v-on:click=\"handleViewClick\">\r\n        <h4>view 1</h4>\r\n        <h4>{{privateStore.receiveText}}</h4>\r\n        <textarea style=\"width: 300px;height: 200px\">{{sharedStore.serviceText}}</textarea>\r\n    </div>\r\n";

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(18)
	__vue_script__ = __webpack_require__(20)
	__vue_template__ = __webpack_require__(21)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\workspace\\js\\workspace\\vue\\vuejs&webpack\\src\\components\\view02.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(19);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-a5c92c22&file=view02.vue!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./view02.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-a5c92c22&file=view02.vue!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./view02.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "\r\n\r\n\r\n", ""]);

	// exports


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store) {'use strict';

	// <template>
	//     <div style="width: 100%;height: 400px;background-color: bisque" v-on:click="handleViewClick">
	//         <h4>view 2</h4>
	//         <h4>{{privateStore.receiveText}}</h4>
	//         <div style="width: 100%;height: 200px;" id="elementContainer"></div>
	//     </div>
	// </template>
	//
	// <script>
	module.exports = {
	    data: function data() {
	        return {
	            privateStore: {
	                receiveText: '',
	                elements: []
	            },
	            sharedStore: Store
	        };
	    },
	    computed: {},
	    methods: {
	        handleViewClick: function handleViewClick() {
	            this.$dispatch('receiveChangeView', 1);
	        }

	    },
	    ready: function ready() {},
	    events: {
	        broadcastText: function broadcastText(text) {
	            this.privateStore.receiveText = text;
	        },
	        broadcastAdd: function broadcastAdd() {
	            var Vue = __webpack_require__(3);
	            var Element = Vue.component('element');
	            //var el=new Store.element();
	            var el = new Element();
	            el.$mount().$appendTo("#elementContainer");
	            this.privateStore.elements.push(el);
	        },
	        broadcastDelete: function broadcastDelete() {
	            var el = this.privateStore.elements.pop();
	            if (el) {
	                el.$destroy(true);
	            }
	        }
	    }

	};
	// </script>
	//
	// <style>
	//
	//
	// </style>
	//
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "\r\n    <div style=\"width: 100%;height: 400px;background-color: bisque\" v-on:click=\"handleViewClick\">\r\n        <h4>view 2</h4>\r\n        <h4>{{privateStore.receiveText}}</h4>\r\n        <div style=\"width: 100%;height: 200px;\" id=\"elementContainer\"></div>\r\n    </div>\r\n";

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(23)
	__vue_script__ = __webpack_require__(25)
	__vue_template__ = __webpack_require__(26)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\workspace\\js\\workspace\\vue\\vuejs&webpack\\src\\components\\element.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(24);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-3ef94a24&file=element.vue!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./element.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-3ef94a24&file=element.vue!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./element.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "\r\n\r\n\r\n", ""]);

	// exports


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store) {"use strict";

	// <template>
	//     <div style="width: 100%;height: 30px;background-color: crimson;margin: 0;padding: 0" >
	//         <h4>add element</h4>
	//     </div>
	// </template>
	//
	// <script>
	module.exports = {
	    data: function data() {
	        return {
	            privateStore: {},
	            sharedStore: Store
	        };
	    },
	    computed: {},
	    methods: {},
	    ready: function ready() {},
	    events: {
	        broadcastText: function broadcastText(text) {
	            console.log(text);
	        }
	    }

	};
	// </script>
	//
	// <style>
	//
	//
	// </style>
	//
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "\r\n    <div style=\"width: 100%;height: 30px;background-color: crimson;margin: 0;padding: 0\" >\r\n        <h4>add element</h4>\r\n    </div>\r\n";

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by dev on 2016/9/21.
	 */
	module.exports = {
	    events: {
	        receiveChangeView: function (index) {
	            __webpack_require__(28).execute(index);
	        },
	        broadcastText: function () {
	            this.$broadcast("broadcastText", "receive");

	        },
	        dispatchService: function () {
	            var envService = __webpack_require__(29);
	            envService.loadDomainUrls();
	        },
	        dispatchAdd:function () {
	            this.$broadcast("broadcastAdd");
	        },
	        dispatchDelete:function () {
	            this.$broadcast("broadcastDelete");
	        }
	    }

	}


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store) {/**
	 * Created by dev on 2016/9/23.
	 */
	module.exports={
	    execute:function (index) {
	        Store.showViewIndex=index;
	    }

	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($, Store) {/**
	 * Created by dev on 2016/9/23.
	 */
	module.exports = {
	    loadDomainUrls: function() {
	        $.ajax({
	            url: 'http://www.zno.com/userid/getEnv?webClientId=1',
	            type: 'get'
	        }).done(function(dResult) {
	            if (dResult) {

	                Store.serviceText = $(dResult).text();

	            };
	        });
	    }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), __webpack_require__(1)))

/***/ }
]);