/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/*global app, $on */
	__webpack_require__(1);
	__webpack_require__(5);
	__webpack_require__(7);
	__webpack_require__(8);
	__webpack_require__(9);
	__webpack_require__(10);
	__webpack_require__(11);
	__webpack_require__(12);
	__webpack_require__(13);
	(function () {
		'use strict';

		/**
		 * Sets up a brand new Todo list.
		 *
		 * @param {string} name The name of your new to do list.
		 */
		function Todo(name) {
			this.storage = new app.Store(name);
			this.model = new app.Model(this.storage);
			this.template = new app.Template();
			this.view = new app.View(this.template);
			this.controller = new app.Controller(this.model, this.view);
		}

		var todo = new Todo('todos-vanillajs');

		function setView() {
			todo.controller.setView(document.location.hash);
		}
		$on(window, 'load', setView);
		$on(window, 'hashchange', setView);
	})();


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../css-loader/index.js!./base.css", function() {
				var newContent = require("!!./../css-loader/index.js!./base.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "hr {\n\tmargin: 20px 0;\n\tborder: 0;\n\tborder-top: 1px dashed #c5c5c5;\n\tborder-bottom: 1px dashed #f7f7f7;\n}\n\n.learn a {\n\tfont-weight: normal;\n\ttext-decoration: none;\n\tcolor: #b83f45;\n}\n\n.learn a:hover {\n\ttext-decoration: underline;\n\tcolor: #787e7e;\n}\n\n.learn h3,\n.learn h4,\n.learn h5 {\n\tmargin: 10px 0;\n\tfont-weight: 500;\n\tline-height: 1.2;\n\tcolor: #000;\n}\n\n.learn h3 {\n\tfont-size: 24px;\n}\n\n.learn h4 {\n\tfont-size: 18px;\n}\n\n.learn h5 {\n\tmargin-bottom: 0;\n\tfont-size: 14px;\n}\n\n.learn ul {\n\tpadding: 0;\n\tmargin: 0 0 30px 25px;\n}\n\n.learn li {\n\tline-height: 20px;\n}\n\n.learn p {\n\tfont-size: 15px;\n\tfont-weight: 300;\n\tline-height: 1.3;\n\tmargin-top: 0;\n\tmargin-bottom: 0;\n}\n\n#issue-count {\n\tdisplay: none;\n}\n\n.quote {\n\tborder: none;\n\tmargin: 20px 0 60px 0;\n}\n\n.quote p {\n\tfont-style: italic;\n}\n\n.quote p:before {\n\tcontent: '\\201C';\n\tfont-size: 50px;\n\topacity: .15;\n\tposition: absolute;\n\ttop: -20px;\n\tleft: 3px;\n}\n\n.quote p:after {\n\tcontent: '\\201D';\n\tfont-size: 50px;\n\topacity: .15;\n\tposition: absolute;\n\tbottom: -42px;\n\tright: 3px;\n}\n\n.quote footer {\n\tposition: absolute;\n\tbottom: -40px;\n\tright: 0;\n}\n\n.quote footer img {\n\tborder-radius: 3px;\n}\n\n.quote footer a {\n\tmargin-left: 5px;\n\tvertical-align: middle;\n}\n\n.speech-bubble {\n\tposition: relative;\n\tpadding: 10px;\n\tbackground: rgba(0, 0, 0, .04);\n\tborder-radius: 5px;\n}\n\n.speech-bubble:after {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 100%;\n\tright: 30px;\n\tborder: 13px solid transparent;\n\tborder-top-color: rgba(0, 0, 0, .04);\n}\n\n.learn-bar > .learn {\n\tposition: absolute;\n\twidth: 272px;\n\ttop: 8px;\n\tleft: -300px;\n\tpadding: 10px;\n\tborder-radius: 5px;\n\tbackground-color: rgba(255, 255, 255, .6);\n\ttransition-property: left;\n\ttransition-duration: 500ms;\n}\n\n@media (min-width: 899px) {\n\t.learn-bar {\n\t\twidth: auto;\n\t\tpadding-left: 300px;\n\t}\n\n\t.learn-bar > .learn {\n\t\tleft: 8px;\n\t}\n}\n", ""]);

	// exports


/***/ },
/* 3 */
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
/* 4 */
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
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

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

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
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
		var sourceMap = obj.sourceMap;

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
		var media = obj.media;
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../css-loader/index.js!./index.css", function() {
				var newContent = require("!!./../css-loader/index.js!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "html,\nbody {\n\tmargin: 0;\n\tpadding: 0;\n}\n\nbutton {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tbackground: none;\n\tfont-size: 100%;\n\tvertical-align: baseline;\n\tfont-family: inherit;\n\tfont-weight: inherit;\n\tcolor: inherit;\n\t-webkit-appearance: none;\n\tappearance: none;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-font-smoothing: antialiased;\n\tfont-smoothing: antialiased;\n}\n\nbody {\n\tfont: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\n\tline-height: 1.4em;\n\tbackground: #f5f5f5;\n\tcolor: #4d4d4d;\n\tmin-width: 230px;\n\tmax-width: 550px;\n\tmargin: 0 auto;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-font-smoothing: antialiased;\n\tfont-smoothing: antialiased;\n\tfont-weight: 300;\n}\n\nbutton,\ninput[type=\"checkbox\"] {\n\toutline: none;\n}\n\n.hidden {\n\tdisplay: none;\n}\n\n.todoapp {\n\tbackground: #fff;\n\tmargin: 130px 0 40px 0;\n\tposition: relative;\n\tbox-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),\n\t            0 25px 50px 0 rgba(0, 0, 0, 0.1);\n}\n\n.todoapp input::-webkit-input-placeholder {\n\tfont-style: italic;\n\tfont-weight: 300;\n\tcolor: #e6e6e6;\n}\n\n.todoapp input::-moz-placeholder {\n\tfont-style: italic;\n\tfont-weight: 300;\n\tcolor: #e6e6e6;\n}\n\n.todoapp input::input-placeholder {\n\tfont-style: italic;\n\tfont-weight: 300;\n\tcolor: #e6e6e6;\n}\n\n.todoapp h1 {\n\tposition: absolute;\n\ttop: -155px;\n\twidth: 100%;\n\tfont-size: 100px;\n\tfont-weight: 100;\n\ttext-align: center;\n\tcolor: rgba(175, 47, 47, 0.15);\n\t-webkit-text-rendering: optimizeLegibility;\n\t-moz-text-rendering: optimizeLegibility;\n\ttext-rendering: optimizeLegibility;\n}\n\n.new-todo,\n.edit {\n\tposition: relative;\n\tmargin: 0;\n\twidth: 100%;\n\tfont-size: 24px;\n\tfont-family: inherit;\n\tfont-weight: inherit;\n\tline-height: 1.4em;\n\tborder: 0;\n\toutline: none;\n\tcolor: inherit;\n\tpadding: 6px;\n\tborder: 1px solid #999;\n\tbox-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\n\tbox-sizing: border-box;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-font-smoothing: antialiased;\n\tfont-smoothing: antialiased;\n}\n\n.new-todo {\n\tpadding: 16px 16px 16px 60px;\n\tborder: none;\n\tbackground: rgba(0, 0, 0, 0.003);\n\tbox-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);\n}\n\n.main {\n\tposition: relative;\n\tz-index: 2;\n\tborder-top: 1px solid #e6e6e6;\n}\n\nlabel[for='toggle-all'] {\n\tdisplay: none;\n}\n\n.toggle-all {\n\tposition: absolute;\n\ttop: -55px;\n\tleft: -12px;\n\twidth: 60px;\n\theight: 34px;\n\ttext-align: center;\n\tborder: none; /* Mobile Safari */\n}\n\n.toggle-all:before {\n\tcontent: '\\276F';\n\tfont-size: 22px;\n\tcolor: #e6e6e6;\n\tpadding: 10px 27px 10px 27px;\n}\n\n.toggle-all:checked:before {\n\tcolor: #737373;\n}\n\n.todo-list {\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n}\n\n.todo-list li {\n\tposition: relative;\n\tfont-size: 24px;\n\tborder-bottom: 1px solid #ededed;\n}\n\n.todo-list li:last-child {\n\tborder-bottom: none;\n}\n\n.todo-list li.editing {\n\tborder-bottom: none;\n\tpadding: 0;\n}\n\n.todo-list li.editing .edit {\n\tdisplay: block;\n\twidth: 506px;\n\tpadding: 13px 17px 12px 17px;\n\tmargin: 0 0 0 43px;\n}\n\n.todo-list li.editing .view {\n\tdisplay: none;\n}\n\n.todo-list li .toggle {\n\ttext-align: center;\n\twidth: 40px;\n\t/* auto, since non-WebKit browsers doesn't support input styling */\n\theight: auto;\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\tmargin: auto 0;\n\tborder: none; /* Mobile Safari */\n\t-webkit-appearance: none;\n\tappearance: none;\n}\n\n.todo-list li .toggle:after {\n\tcontent: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#ededed\" stroke-width=\"3\"/></svg>');\n}\n\n.todo-list li .toggle:checked:after {\n\tcontent: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#bddad5\" stroke-width=\"3\"/><path fill=\"#5dc2af\" d=\"M72 25L42 71 27 56l-4 4 20 20 34-52z\"/></svg>');\n}\n\n.todo-list li label {\n\twhite-space: pre;\n\tword-break: break-word;\n\tpadding: 15px 60px 15px 15px;\n\tmargin-left: 45px;\n\tdisplay: block;\n\tline-height: 1.2;\n\ttransition: color 0.4s;\n}\n\n.todo-list li.completed label {\n\tcolor: #d9d9d9;\n\ttext-decoration: line-through;\n}\n\n.todo-list li .destroy {\n\tdisplay: none;\n\tposition: absolute;\n\ttop: 0;\n\tright: 10px;\n\tbottom: 0;\n\twidth: 40px;\n\theight: 40px;\n\tmargin: auto 0;\n\tfont-size: 30px;\n\tcolor: #cc9a9a;\n\tmargin-bottom: 11px;\n\ttransition: color 0.2s ease-out;\n}\n\n.todo-list li .destroy:hover {\n\tcolor: #af5b5e;\n}\n\n.todo-list li .destroy:after {\n\tcontent: '\\D7';\n}\n\n.todo-list li:hover .destroy {\n\tdisplay: block;\n}\n\n.todo-list li .edit {\n\tdisplay: none;\n}\n\n.todo-list li.editing:last-child {\n\tmargin-bottom: -1px;\n}\n\n.footer {\n\tcolor: #777;\n\tpadding: 10px 15px;\n\theight: 20px;\n\ttext-align: center;\n\tborder-top: 1px solid #e6e6e6;\n}\n\n.footer:before {\n\tcontent: '';\n\tposition: absolute;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\theight: 50px;\n\toverflow: hidden;\n\tbox-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),\n\t            0 8px 0 -3px #f6f6f6,\n\t            0 9px 1px -3px rgba(0, 0, 0, 0.2),\n\t            0 16px 0 -6px #f6f6f6,\n\t            0 17px 2px -6px rgba(0, 0, 0, 0.2);\n}\n\n.todo-count {\n\tfloat: left;\n\ttext-align: left;\n}\n\n.todo-count strong {\n\tfont-weight: 300;\n}\n\n.filters {\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n\tposition: absolute;\n\tright: 0;\n\tleft: 0;\n}\n\n.filters li {\n\tdisplay: inline;\n}\n\n.filters li a {\n\tcolor: inherit;\n\tmargin: 3px;\n\tpadding: 3px 7px;\n\ttext-decoration: none;\n\tborder: 1px solid transparent;\n\tborder-radius: 3px;\n}\n\n.filters li a.selected,\n.filters li a:hover {\n\tborder-color: rgba(175, 47, 47, 0.1);\n}\n\n.filters li a.selected {\n\tborder-color: rgba(175, 47, 47, 0.2);\n}\n\n.clear-completed,\nhtml .clear-completed:active {\n\tfloat: right;\n\tposition: relative;\n\tline-height: 20px;\n\ttext-decoration: none;\n\tcursor: pointer;\n\tposition: relative;\n}\n\n.clear-completed:hover {\n\ttext-decoration: underline;\n}\n\n.info {\n\tmargin: 65px auto 0;\n\tcolor: #bfbfbf;\n\tfont-size: 10px;\n\ttext-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n\ttext-align: center;\n}\n\n.info p {\n\tline-height: 1;\n}\n\n.info a {\n\tcolor: inherit;\n\ttext-decoration: none;\n\tfont-weight: 400;\n}\n\n.info a:hover {\n\ttext-decoration: underline;\n}\n\n/*\n\tHack to remove background from Mobile Safari.\n\tCan't use it globally since it destroys checkboxes in Firefox\n*/\n@media screen and (-webkit-min-device-pixel-ratio:0) {\n\t.toggle-all,\n\t.todo-list li .toggle {\n\t\tbackground: none;\n\t}\n\n\t.todo-list li .toggle {\n\t\theight: 40px;\n\t}\n\n\t.toggle-all {\n\t\t-webkit-transform: rotate(90deg);\n\t\ttransform: rotate(90deg);\n\t\t-webkit-appearance: none;\n\t\tappearance: none;\n\t}\n}\n\n@media (max-width: 430px) {\n\t.footer {\n\t\theight: 50px;\n\t}\n\n\t.filters {\n\t\tbottom: 10px;\n\t}\n}\n", ""]);

	// exports


/***/ },
/* 7 */
/***/ function(module, exports) {

	/* global _ */
	(function () {
		'use strict';

		/* jshint ignore:start */
		// Underscore's Template Module
		// Courtesy of underscorejs.org
		var _ = (function (_) {
			_.defaults = function (object) {
				if (!object) {
					return object;
				}
				for (var argsIndex = 1, argsLength = arguments.length; argsIndex < argsLength; argsIndex++) {
					var iterable = arguments[argsIndex];
					if (iterable) {
						for (var key in iterable) {
							if (object[key] == null) {
								object[key] = iterable[key];
							}
						}
					}
				}
				return object;
			}

			// By default, Underscore uses ERB-style template delimiters, change the
			// following template settings to use alternative delimiters.
			_.templateSettings = {
				evaluate    : /<%([\s\S]+?)%>/g,
				interpolate : /<%=([\s\S]+?)%>/g,
				escape      : /<%-([\s\S]+?)%>/g
			};

			// When customizing `templateSettings`, if you don't want to define an
			// interpolation, evaluation or escaping regex, we need one that is
			// guaranteed not to match.
			var noMatch = /(.)^/;

			// Certain characters need to be escaped so that they can be put into a
			// string literal.
			var escapes = {
				"'":      "'",
				'\\':     '\\',
				'\r':     'r',
				'\n':     'n',
				'\t':     't',
				'\u2028': 'u2028',
				'\u2029': 'u2029'
			};

			var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;

			// JavaScript micro-templating, similar to John Resig's implementation.
			// Underscore templating handles arbitrary delimiters, preserves whitespace,
			// and correctly escapes quotes within interpolated code.
			_.template = function(text, data, settings) {
				var render;
				settings = _.defaults({}, settings, _.templateSettings);

				// Combine delimiters into one regular expression via alternation.
				var matcher = new RegExp([
					(settings.escape || noMatch).source,
					(settings.interpolate || noMatch).source,
					(settings.evaluate || noMatch).source
				].join('|') + '|$', 'g');

				// Compile the template source, escaping string literals appropriately.
				var index = 0;
				var source = "__p+='";
				text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
					source += text.slice(index, offset)
						.replace(escaper, function(match) { return '\\' + escapes[match]; });

					if (escape) {
						source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
					}
					if (interpolate) {
						source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
					}
					if (evaluate) {
						source += "';\n" + evaluate + "\n__p+='";
					}
					index = offset + match.length;
					return match;
				});
				source += "';\n";

				// If a variable is not specified, place data values in local scope.
				if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

				source = "var __t,__p='',__j=Array.prototype.join," +
					"print=function(){__p+=__j.call(arguments,'');};\n" +
					source + "return __p;\n";

				try {
					render = new Function(settings.variable || 'obj', '_', source);
				} catch (e) {
					e.source = source;
					throw e;
				}

				if (data) return render(data, _);
				var template = function(data) {
					return render.call(this, data, _);
				};

				// Provide the compiled function source as a convenience for precompilation.
				template.source = 'function(' + (settings.variable || 'obj') + '){\n' + source + '}';

				return template;
			};

			return _;
		})({});

		if (location.hostname === 'todomvc.com') {
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
			ga('create', 'UA-31081062-1', 'auto');
			ga('send', 'pageview');
		}
		/* jshint ignore:end */

		function redirect() {
			if (location.hostname === 'tastejs.github.io') {
				location.href = location.href.replace('tastejs.github.io/todomvc', 'todomvc.com');
			}
		}

		function findRoot() {
			var base = location.href.indexOf('examples/');
			return location.href.substr(0, base);
		}

		function getFile(file, callback) {
			if (!location.host) {
				return console.info('Miss the info bar? Run TodoMVC from a server to avoid a cross-origin error.');
			}

			var xhr = new XMLHttpRequest();

			xhr.open('GET', findRoot() + file, true);
			xhr.send();

			xhr.onload = function () {
				if (xhr.status === 200 && callback) {
					callback(xhr.responseText);
				}
			};
		}

		function Learn(learnJSON, config) {
			if (!(this instanceof Learn)) {
				return new Learn(learnJSON, config);
			}

			var template, framework;

			if (typeof learnJSON !== 'object') {
				try {
					learnJSON = JSON.parse(learnJSON);
				} catch (e) {
					return;
				}
			}

			if (config) {
				template = config.template;
				framework = config.framework;
			}

			if (!template && learnJSON.templates) {
				template = learnJSON.templates.todomvc;
			}

			if (!framework && document.querySelector('[data-framework]')) {
				framework = document.querySelector('[data-framework]').dataset.framework;
			}

			this.template = template;

			if (learnJSON.backend) {
				this.frameworkJSON = learnJSON.backend;
				this.frameworkJSON.issueLabel = framework;
				this.append({
					backend: true
				});
			} else if (learnJSON[framework]) {
				this.frameworkJSON = learnJSON[framework];
				this.frameworkJSON.issueLabel = framework;
				this.append();
			}

			this.fetchIssueCount();
		}

		Learn.prototype.append = function (opts) {
			var aside = document.createElement('aside');
			aside.innerHTML = _.template(this.template, this.frameworkJSON);
			aside.className = 'learn';

			if (opts && opts.backend) {
				// Remove demo link
				var sourceLinks = aside.querySelector('.source-links');
				var heading = sourceLinks.firstElementChild;
				var sourceLink = sourceLinks.lastElementChild;
				// Correct link path
				var href = sourceLink.getAttribute('href');
				sourceLink.setAttribute('href', href.substr(href.lastIndexOf('http')));
				sourceLinks.innerHTML = heading.outerHTML + sourceLink.outerHTML;
			} else {
				// Localize demo links
				var demoLinks = aside.querySelectorAll('.demo-link');
				Array.prototype.forEach.call(demoLinks, function (demoLink) {
					if (demoLink.getAttribute('href').substr(0, 4) !== 'http') {
						demoLink.setAttribute('href', findRoot() + demoLink.getAttribute('href'));
					}
				});
			}

			document.body.className = (document.body.className + ' learn-bar').trim();
			document.body.insertAdjacentHTML('afterBegin', aside.outerHTML);
		};

		Learn.prototype.fetchIssueCount = function () {
			var issueLink = document.getElementById('issue-count-link');
			if (issueLink) {
				var url = issueLink.href.replace('https://github.com', 'https://api.github.com/repos');
				var xhr = new XMLHttpRequest();
				xhr.open('GET', url, true);
				xhr.onload = function (e) {
					var parsedResponse = JSON.parse(e.target.responseText);
					if (parsedResponse instanceof Array) {
						var count = parsedResponse.length;
						if (count !== 0) {
							issueLink.innerHTML = 'This app has ' + count + ' open issues';
							document.getElementById('issue-count').style.display = 'inline';
						}
					}
				};
				xhr.send();
			}
		};

		redirect();
		getFile('learn.json', Learn);
	})();


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/*global qs, qsa, $on, $parent, $delegate */
	__webpack_require__(9);
	(function (window) {
	    'use strict';

	    /**
	     * View that abstracts away the browser's DOM completely.
	     * It has two simple entry points:
	     *
	     *   - bind(eventName, handler)
	     *     Takes a todo application event and registers the handler
	     *   - render(command, parameterObject)
	     *     Renders the given command with the options
	     */
	    function View(template) {
	        this.template = template;

	        this.ENTER_KEY = 13;
	        this.ESCAPE_KEY = 27;

	        this.$todoList = qs('.todo-list');
	        this.$todoItemCounter = qs('.todo-count');
	        this.$clearCompleted = qs('.clear-completed');
	        this.$main = qs('.main');
	        this.$footer = qs('.footer');
	        this.$toggleAll = qs('.toggle-all');
	        this.$newTodo = qs('.new-todo');
	    }

	    View.prototype._removeItem = function (id) {
	        var elem = qs('[data-id="' + id + '"]');

	        if (elem) {
	            this.$todoList.removeChild(elem);
	        }
	    };

	    View.prototype._clearCompletedButton = function (completedCount, visible) {
	        this.$clearCompleted.innerHTML = this.template.clearCompletedButton(completedCount);
	        this.$clearCompleted.style.display = visible ? 'block' : 'none';
	    };

	    View.prototype._setFilter = function (currentPage) {
	        qs('.filters .selected').className = '';
	        qs('.filters [href="#/' + currentPage + '"]').className = 'selected';
	    };

	    View.prototype._elementComplete = function (id, completed) {
	        var listItem = qs('[data-id="' + id + '"]');

	        if (!listItem) {
	            return;
	        }

	        listItem.className = completed ? 'completed' : '';

	        // In case it was toggled from an event and not by clicking the checkbox
	        qs('input', listItem).checked = completed;
	    };

	    View.prototype._editItem = function (id, title) {
	        var listItem = qs('[data-id="' + id + '"]');

	        if (!listItem) {
	            return;
	        }

	        listItem.className = listItem.className + ' editing';

	        var input = document.createElement('input');
	        input.className = 'edit';

	        listItem.appendChild(input);
	        input.focus();
	        input.value = title;
	    };

	    View.prototype._editItemDone = function (id, title) {
	        var listItem = qs('[data-id="' + id + '"]');

	        if (!listItem) {
	            return;
	        }

	        var input = qs('input.edit', listItem);
	        listItem.removeChild(input);

	        listItem.className = listItem.className.replace('editing', '');

	        qsa('label', listItem).forEach(function (label) {
	            label.textContent = title;
	        });
	    };

	    View.prototype.render = function (viewCmd, parameter) {
	        var that = this;
	        var viewCommands = {
	            showEntries: function () {
	                that.$todoList.innerHTML = that.template.show(parameter);
	            },
	            removeItem: function () {
	                that._removeItem(parameter);
	            },
	            updateElementCount: function () {
	                that.$todoItemCounter.innerHTML = that.template.itemCounter(parameter);
	            },
	            clearCompletedButton: function () {
	                that._clearCompletedButton(parameter.completed, parameter.visible);
	            },
	            contentBlockVisibility: function () {
	                that.$main.style.display = that.$footer.style.display = parameter.visible ? 'block' : 'none';
	            },
	            toggleAll: function () {
	                that.$toggleAll.checked = parameter.checked;
	            },
	            setFilter: function () {
	                that._setFilter(parameter);
	            },
	            clearNewTodo: function () {
	                that.$newTodo.value = '';
	            },
	            elementComplete: function () {
	                that._elementComplete(parameter.id, parameter.completed);
	            },
	            editItem: function () {
	                that._editItem(parameter.id, parameter.title);
	            },
	            editItemDone: function () {
	                that._editItemDone(parameter.id, parameter.title);
	            }
	        };

	        viewCommands[viewCmd]();
	    };

	    View.prototype._itemId = function (element) {
	        var li = $parent(element, 'li');
	        return parseInt(li.dataset.id, 10);
	    };

	    View.prototype._bindItemEditDone = function (handler) {
	        var that = this;
	        $delegate(that.$todoList, 'li .edit', 'blur', function () {
	            if (!this.dataset.iscanceled) {
	                handler({
	                    id: that._itemId(this),
	                    title: this.value
	                });
	            }
	        });

	        $delegate(that.$todoList, 'li .edit', 'keypress', function (event) {
	            if (event.keyCode === that.ENTER_KEY) {
	                // Remove the cursor from the input when you hit enter just like if it
	                // were a real form
	                this.blur();
	            }
	        });
	    };

	    View.prototype._bindItemEditCancel = function (handler) {
	        var that = this;
	        $delegate(that.$todoList, 'li .edit', 'keyup', function (event) {
	            if (event.keyCode === that.ESCAPE_KEY) {
	                this.dataset.iscanceled = true;
	                this.blur();

	                handler({id: that._itemId(this)});
	            }
	        });
	    };

	    View.prototype.bind = function (event, handler) {
	        var that = this;
	        if (event === 'newTodo') {
	            $on(that.$newTodo, 'change', function () {
	                handler(that.$newTodo.value);
	            });

	        } else if (event === 'removeCompleted') {
	            $on(that.$clearCompleted, 'click', function () {
	                handler();
	            });

	        } else if (event === 'toggleAll') {
	            $on(that.$toggleAll, 'click', function () {
	                handler({completed: this.checked});
	            });

	        } else if (event === 'itemEdit') {
	            $delegate(that.$todoList, 'li label', 'dblclick', function () {
	                handler({id: that._itemId(this)});
	            });

	        } else if (event === 'itemRemove') {
	            $delegate(that.$todoList, '.destroy', 'click', function () {
	                handler({id: that._itemId(this)});
	            });

	        } else if (event === 'itemToggle') {
	            $delegate(that.$todoList, '.toggle', 'click', function () {
	                handler({
	                    id: that._itemId(this),
	                    completed: this.checked
	                });
	            });

	        } else if (event === 'itemEditDone') {
	            that._bindItemEditDone(handler);

	        } else if (event === 'itemEditCancel') {
	            that._bindItemEditCancel(handler);
	        }
	    };

	    // Export to window
	    window.app = window.app || {};
	    window.app.View = View;
	}(window));


/***/ },
/* 9 */
/***/ function(module, exports) {

	/*global NodeList */
	(function (window) {
		'use strict';

		// Get element(s) by CSS selector:
		window.qs = function (selector, scope) {
			return (scope || document).querySelector(selector);
		};
		window.qsa = function (selector, scope) {
			return (scope || document).querySelectorAll(selector);
		};

		// addEventListener wrapper:
		window.$on = function (target, type, callback, useCapture) {
			target.addEventListener(type, callback, !!useCapture);
		};

		// Attach a handler to event for all elements that match the selector,
		// now or in the future, based on a root element
		window.$delegate = function (target, selector, type, handler) {
			function dispatchEvent(event) {
				var targetElement = event.target;
				var potentialElements = window.qsa(selector, target);
				var hasMatch = Array.prototype.indexOf.call(potentialElements, targetElement) >= 0;

				if (hasMatch) {
					handler.call(targetElement, event);
				}
			}

			// https://developer.mozilla.org/en-US/docs/Web/Events/blur
			var useCapture = type === 'blur' || type === 'focus';

			window.$on(target, type, dispatchEvent, useCapture);
		};

		// Find the element's parent with the given tag name:
		// $parent(qs('a'), 'div');
		window.$parent = function (element, tagName) {
			if (!element.parentNode) {
				return;
			}
			if (element.parentNode.tagName.toLowerCase() === tagName.toLowerCase()) {
				return element.parentNode;
			}
			return window.$parent(element.parentNode, tagName);
		};

		// Allow for looping on nodes by chaining:
		// qsa('.foo').forEach(function () {})
		NodeList.prototype.forEach = Array.prototype.forEach;
	})(window);


/***/ },
/* 10 */
/***/ function(module, exports) {

	(function (window) {
		'use strict';

		/**
		 * Takes a model and view and acts as the controller between them
		 *
		 * @constructor
		 * @param {object} model The model instance
		 * @param {object} view The view instance
		 */
		function Controller(model, view) {
			var that = this;
			that.model = model;
			that.view = view;

			that.view.bind('newTodo', function (title) {
				that.addItem(title);
			});

			that.view.bind('itemEdit', function (item) {
				that.editItem(item.id);
			});

			that.view.bind('itemEditDone', function (item) {
				that.editItemSave(item.id, item.title);
			});

			that.view.bind('itemEditCancel', function (item) {
				that.editItemCancel(item.id);
			});

			that.view.bind('itemRemove', function (item) {
				that.removeItem(item.id);
			});

			that.view.bind('itemToggle', function (item) {
				that.toggleComplete(item.id, item.completed);
			});

			that.view.bind('removeCompleted', function () {
				that.removeCompletedItems();
			});

			that.view.bind('toggleAll', function (status) {
				that.toggleAll(status.completed);
			});
		}

		/**
		 * Loads and initialises the view
		 *
		 * @param {string} '' | 'active' | 'completed'
		 */
		Controller.prototype.setView = function (locationHash) {
			var route = locationHash.split('/')[1];
			var page = route || '';
			this._updateFilterState(page);
		};

		/**
		 * An event to fire on load. Will get all items and display them in the
		 * todo-list
		 */
		Controller.prototype.showAll = function () {
			var that = this;
			that.model.read(function (data) {
				that.view.render('showEntries', data);
			});
		};

		/**
		 * Renders all active tasks
		 */
		Controller.prototype.showActive = function () {
			var that = this;
			that.model.read({ completed: false }, function (data) {
				that.view.render('showEntries', data);
			});
		};

		/**
		 * Renders all completed tasks
		 */
		Controller.prototype.showCompleted = function () {
			var that = this;
			that.model.read({ completed: true }, function (data) {
				that.view.render('showEntries', data);
			});
		};

		/**
		 * An event to fire whenever you want to add an item. Simply pass in the event
		 * object and it'll handle the DOM insertion and saving of the new item.
		 */
		Controller.prototype.addItem = function (title) {
			var that = this;

			if (title.trim() === '') {
				return;
			}

			that.model.create(title, function () {
				that.view.render('clearNewTodo');
				that._filter(true);
			});
		};

		/*
		 * Triggers the item editing mode.
		 */
		Controller.prototype.editItem = function (id) {
			var that = this;
			that.model.read(id, function (data) {
				that.view.render('editItem', {id: id, title: data[0].title});
			});
		};

		/*
		 * Finishes the item editing mode successfully.
		 */
		Controller.prototype.editItemSave = function (id, title) {
			var that = this;
			if (title.trim()) {
				that.model.update(id, {title: title}, function () {
					that.view.render('editItemDone', {id: id, title: title});
				});
			} else {
				that.removeItem(id);
			}
		};

		/*
		 * Cancels the item editing mode.
		 */
		Controller.prototype.editItemCancel = function (id) {
			var that = this;
			that.model.read(id, function (data) {
				that.view.render('editItemDone', {id: id, title: data[0].title});
			});
		};

		/**
		 * By giving it an ID it'll find the DOM element matching that ID,
		 * remove it from the DOM and also remove it from storage.
		 *
		 * @param {number} id The ID of the item to remove from the DOM and
		 * storage
		 */
		Controller.prototype.removeItem = function (id) {
			var that = this;
			that.model.remove(id, function () {
				that.view.render('removeItem', id);
			});

			that._filter();
		};

		/**
		 * Will remove all completed items from the DOM and storage.
		 */
		Controller.prototype.removeCompletedItems = function () {
			var that = this;
			that.model.read({ completed: true }, function (data) {
				data.forEach(function (item) {
					that.removeItem(item.id);
				});
			});

			that._filter();
		};

		/**
		 * Give it an ID of a model and a checkbox and it will update the item
		 * in storage based on the checkbox's state.
		 *
		 * @param {number} id The ID of the element to complete or uncomplete
		 * @param {object} checkbox The checkbox to check the state of complete
		 *                          or not
		 * @param {boolean|undefined} silent Prevent re-filtering the todo items
		 */
		Controller.prototype.toggleComplete = function (id, completed, silent) {
			var that = this;
			that.model.update(id, { completed: completed }, function () {
				that.view.render('elementComplete', {
					id: id,
					completed: completed
				});
			});

			if (!silent) {
				that._filter();
			}
		};

		/**
		 * Will toggle ALL checkboxes' on/off state and completeness of models.
		 * Just pass in the event object.
		 */
		Controller.prototype.toggleAll = function (completed) {
			var that = this;
			that.model.read({ completed: !completed }, function (data) {
				data.forEach(function (item) {
					that.toggleComplete(item.id, completed, true);
				});
			});

			that._filter();
		};

		/**
		 * Updates the pieces of the page which change depending on the remaining
		 * number of todos.
		 */
		Controller.prototype._updateCount = function () {
			var that = this;
			that.model.getCount(function (todos) {
				that.view.render('updateElementCount', todos.active);
				that.view.render('clearCompletedButton', {
					completed: todos.completed,
					visible: todos.completed > 0
				});

				that.view.render('toggleAll', {checked: todos.completed === todos.total});
				that.view.render('contentBlockVisibility', {visible: todos.total > 0});
			});
		};

		/**
		 * Re-filters the todo items, based on the active route.
		 * @param {boolean|undefined} force  forces a re-painting of todo items.
		 */
		Controller.prototype._filter = function (force) {
			var activeRoute = this._activeRoute.charAt(0).toUpperCase() + this._activeRoute.substr(1);

			// Update the elements on the page, which change with each completed todo
			this._updateCount();

			// If the last active route isn't "All", or we're switching routes, we
			// re-create the todo item elements, calling:
			//   this.show[All|Active|Completed]();
			if (force || this._lastActiveRoute !== 'All' || this._lastActiveRoute !== activeRoute) {
				this['show' + activeRoute]();
			}

			this._lastActiveRoute = activeRoute;
		};

		/**
		 * Simply updates the filter nav's selected states
		 */
		Controller.prototype._updateFilterState = function (currentPage) {
			// Store a reference to the active route, allowing us to re-filter todo
			// items as they are marked complete or incomplete.
			this._activeRoute = currentPage;

			if (currentPage === '') {
				this._activeRoute = 'All';
			}

			this._filter();

			this.view.render('setFilter', currentPage);
		};

		// Export to window
		window.app = window.app || {};
		window.app.Controller = Controller;
	})(window);


/***/ },
/* 11 */
/***/ function(module, exports) {

	(function (window) {
		'use strict';

		/**
		 * Creates a new Model instance and hooks up the storage.
		 *
		 * @constructor
		 * @param {object} storage A reference to the client side storage class
		 */
		function Model(storage) {
			this.storage = storage;
		}

		/**
		 * Creates a new todo model
		 *
		 * @param {string} [title] The title of the task
		 * @param {function} [callback] The callback to fire after the model is created
		 */
		Model.prototype.create = function (title, callback) {
			title = title || '';
			callback = callback || function () {};

			var newItem = {
				title: title.trim(),
				completed: false
			};

			this.storage.save(newItem, callback);
		};

		/**
		 * Finds and returns a model in storage. If no query is given it'll simply
		 * return everything. If you pass in a string or number it'll look that up as
		 * the ID of the model to find. Lastly, you can pass it an object to match
		 * against.
		 *
		 * @param {string|number|object} [query] A query to match models against
		 * @param {function} [callback] The callback to fire after the model is found
		 *
		 * @example
		 * model.read(1, func); // Will find the model with an ID of 1
		 * model.read('1'); // Same as above
		 * //Below will find a model with foo equalling bar and hello equalling world.
		 * model.read({ foo: 'bar', hello: 'world' });
		 */
		Model.prototype.read = function (query, callback) {
			var queryType = typeof query;
			callback = callback || function () {};

			if (queryType === 'function') {
				callback = query;
				return this.storage.findAll(callback);
			} else if (queryType === 'string' || queryType === 'number') {
				query = parseInt(query, 10);
				this.storage.find({ id: query }, callback);
			} else {
				this.storage.find(query, callback);
			}
		};

		/**
		 * Updates a model by giving it an ID, data to update, and a callback to fire when
		 * the update is complete.
		 *
		 * @param {number} id The id of the model to update
		 * @param {object} data The properties to update and their new value
		 * @param {function} callback The callback to fire when the update is complete.
		 */
		Model.prototype.update = function (id, data, callback) {
			this.storage.save(data, callback, id);
		};

		/**
		 * Removes a model from storage
		 *
		 * @param {number} id The ID of the model to remove
		 * @param {function} callback The callback to fire when the removal is complete.
		 */
		Model.prototype.remove = function (id, callback) {
			this.storage.remove(id, callback);
		};

		/**
		 * WARNING: Will remove ALL data from storage.
		 *
		 * @param {function} callback The callback to fire when the storage is wiped.
		 */
		Model.prototype.removeAll = function (callback) {
			this.storage.drop(callback);
		};

		/**
		 * Returns a count of all todos
		 */
		Model.prototype.getCount = function (callback) {
			var todos = {
				active: 0,
				completed: 0,
				total: 0
			};

			this.storage.findAll(function (data) {
				data.forEach(function (todo) {
					if (todo.completed) {
						todos.completed++;
					} else {
						todos.active++;
					}

					todos.total++;
				});
				callback(todos);
			});
		};

		// Export to window
		window.app = window.app || {};
		window.app.Model = Model;
	})(window);


/***/ },
/* 12 */
/***/ function(module, exports) {

	/*jshint eqeqeq:false */
	(function (window) {
		'use strict';

		/**
		 * Creates a new client side storage object and will create an empty
		 * collection if no collection already exists.
		 *
		 * @param {string} name The name of our DB we want to use
		 * @param {function} callback Our fake DB uses callbacks because in
		 * real life you probably would be making AJAX calls
		 */
		function Store(name, callback) {
			callback = callback || function () {};

			this._dbName = name;

			if (!localStorage[name]) {
				var data = {
					todos: []
				};

				localStorage[name] = JSON.stringify(data);
			}

			callback.call(this, JSON.parse(localStorage[name]));
		}

		/**
		 * Finds items based on a query given as a JS object
		 *
		 * @param {object} query The query to match against (i.e. {foo: 'bar'})
		 * @param {function} callback	 The callback to fire when the query has
		 * completed running
		 *
		 * @example
		 * db.find({foo: 'bar', hello: 'world'}, function (data) {
		 *	 // data will return any items that have foo: bar and
		 *	 // hello: world in their properties
		 * });
		 */
		Store.prototype.find = function (query, callback) {
			if (!callback) {
				return;
			}

			var todos = JSON.parse(localStorage[this._dbName]).todos;

			callback.call(this, todos.filter(function (todo) {
				for (var q in query) {
					if (query[q] !== todo[q]) {
						return false;
					}
				}
				return true;
			}));
		};

		/**
		 * Will retrieve all data from the collection
		 *
		 * @param {function} callback The callback to fire upon retrieving data
		 */
		Store.prototype.findAll = function (callback) {
			callback = callback || function () {};
			callback.call(this, JSON.parse(localStorage[this._dbName]).todos);
		};

		/**
		 * Will save the given data to the DB. If no item exists it will create a new
		 * item, otherwise it'll simply update an existing item's properties
		 *
		 * @param {object} updateData The data to save back into the DB
		 * @param {function} callback The callback to fire after saving
		 * @param {number} id An optional param to enter an ID of an item to update
		 */
		Store.prototype.save = function (updateData, callback, id) {
			var data = JSON.parse(localStorage[this._dbName]);
			var todos = data.todos;

			callback = callback || function () {};

			// If an ID was actually given, find the item and update each property
			if (id) {
				for (var i = 0; i < todos.length; i++) {
					if (todos[i].id === id) {
						for (var key in updateData) {
							todos[i][key] = updateData[key];
						}
						break;
					}
				}

				localStorage[this._dbName] = JSON.stringify(data);
				callback.call(this, JSON.parse(localStorage[this._dbName]).todos);
			} else {
				// Generate an ID
				updateData.id = new Date().getTime();

				todos.push(updateData);
				localStorage[this._dbName] = JSON.stringify(data);
				callback.call(this, [updateData]);
			}
		};

		/**
		 * Will remove an item from the Store based on its ID
		 *
		 * @param {number} id The ID of the item you want to remove
		 * @param {function} callback The callback to fire after saving
		 */
		Store.prototype.remove = function (id, callback) {
			var data = JSON.parse(localStorage[this._dbName]);
			var todos = data.todos;

			for (var i = 0; i < todos.length; i++) {
				if (todos[i].id == id) {
					todos.splice(i, 1);
					break;
				}
			}

			localStorage[this._dbName] = JSON.stringify(data);
			callback.call(this, JSON.parse(localStorage[this._dbName]).todos);
		};

		/**
		 * Will drop all storage and start fresh
		 *
		 * @param {function} callback The callback to fire after dropping the data
		 */
		Store.prototype.drop = function (callback) {
			localStorage[this._dbName] = JSON.stringify({todos: []});
			callback.call(this, JSON.parse(localStorage[this._dbName]).todos);
		};

		// Export to window
		window.app = window.app || {};
		window.app.Store = Store;
	})(window);


/***/ },
/* 13 */
/***/ function(module, exports) {

	/*jshint laxbreak:true */
	(function (window) {
		'use strict';

		var htmlEscapes = {
			'&': '&amp;',
			'<': '&lt;',
			'>': '&gt;',
			'"': '&quot;',
			'\'': '&#x27;',
			'`': '&#x60;'
		};

		var escapeHtmlChar = function (chr) {
			return htmlEscapes[chr];
		};

		var reUnescapedHtml = /[&<>"'`]/g,
		    reHasUnescapedHtml = new RegExp(reUnescapedHtml.source);

		var escape = function (string) {
			return (string && reHasUnescapedHtml.test(string))
				? string.replace(reUnescapedHtml, escapeHtmlChar)
				: string;
		};

		/**
		 * Sets up defaults for all the Template methods such as a default template
		 *
		 * @constructor
		 */
		function Template() {
			this.defaultTemplate
			=	'<li data-id="{{id}}" class="{{completed}}">'
			+		'<div class="view">'
			+			'<input class="toggle" type="checkbox" {{checked}}>'
			+			'<label>{{title}}</label>'
			+			'<button class="destroy"></button>'
			+		'</div>'
			+	'</li>';
		}

		/**
		 * Creates an <li> HTML string and returns it for placement in your app.
		 *
		 * NOTE: In real life you should be using a templating engine such as Mustache
		 * or Handlebars, however, this is a vanilla JS example.
		 *
		 * @param {object} data The object containing keys you want to find in the
		 *                      template to replace.
		 * @returns {string} HTML String of an <li> element
		 *
		 * @example
		 * view.show({
		 *	id: 1,
		 *	title: "Hello World",
		 *	completed: 0,
		 * });
		 */
		Template.prototype.show = function (data) {
			var i, l;
			var view = '';

			for (i = 0, l = data.length; i < l; i++) {
				var template = this.defaultTemplate;
				var completed = '';
				var checked = '';

				if (data[i].completed) {
					completed = 'completed';
					checked = 'checked';
				}

				template = template.replace('{{id}}', data[i].id);
				template = template.replace('{{title}}', escape(data[i].title));
				template = template.replace('{{completed}}', completed);
				template = template.replace('{{checked}}', checked);

				view = view + template;
			}

			return view;
		};

		/**
		 * Displays a counter of how many to dos are left to complete
		 *
		 * @param {number} activeTodos The number of active todos.
		 * @returns {string} String containing the count
		 */
		Template.prototype.itemCounter = function (activeTodos) {
			var plural = activeTodos === 1 ? '' : 's';

			return '<strong>' + activeTodos + '</strong> item' + plural + ' left';
		};

		/**
		 * Updates the text within the "Clear completed" button
		 *
		 * @param  {[type]} completedTodos The number of completed todos.
		 * @returns {string} String containing the count
		 */
		Template.prototype.clearCompletedButton = function (completedTodos) {
			if (completedTodos > 0) {
				return 'Clear completed';
			} else {
				return '';
			}
		};

		// Export to window
		window.app = window.app || {};
		window.app.Template = Template;
	})(window);


/***/ }
/******/ ]);