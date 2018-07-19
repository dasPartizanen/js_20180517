/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks/block.js":
/*!*************************!*\
  !*** ./blocks/block.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Block = function () {\n    function Block() {\n        _classCallCheck(this, Block);\n    }\n\n    _createClass(Block, [{\n        key: \"append\",\n\n\n        /**\n         * Вставка элемента на старинцу\n         * @param {Element} root - родительский элемент\n         */\n        value: function append(root) {\n            root.innerHTML += this.template;\n        }\n    }]);\n\n    return Block;\n}();\n\nexports.default = Block;\n\n//# sourceURL=webpack:///./blocks/block.js?");

/***/ }),

/***/ "./blocks/button/button.js":
/*!*********************************!*\
  !*** ./blocks/button/button.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _block = __webpack_require__(/*! ../block */ \"./blocks/block.js\");\n\nvar _block2 = _interopRequireDefault(_block);\n\nvar _button = __webpack_require__(/*! ./button.pug */ \"./blocks/button/button.pug\");\n\nvar _button2 = _interopRequireDefault(_button);\n\n__webpack_require__(/*! ./button.scss */ \"./blocks/button/button.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Button = function (_Block) {\n    _inherits(Button, _Block);\n\n    /**\n     * Кнопка\n     * @param {Object} obj\n     * @param {string} obj.text - текст кнопки\n     * @param {string} [obj.type] - тип кнопки\n     * @param {string} [obj.className] - имя модификатора или микса\n     */\n    function Button(_ref) {\n        var text = _ref.text,\n            _ref$type = _ref.type,\n            type = _ref$type === undefined ? false : _ref$type,\n            _ref$className = _ref.className,\n            className = _ref$className === undefined ? false : _ref$className;\n\n        _classCallCheck(this, Button);\n\n        var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this));\n\n        _this.template = (0, _button2.default)({\n            type: type,\n            text: text,\n            className: className\n        });\n\n        return _this;\n    }\n\n    return Button;\n}(_block2.default);\n\nexports.default = Button;\n\n//# sourceURL=webpack:///./blocks/button/button.js?");

/***/ }),

/***/ "./blocks/button/button.pug":
/*!**********************************!*\
  !*** ./blocks/button/button.pug ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (className, text, type) {pug_html = pug_html + \"\\u003Cbutton\" + (pug.attr(\"class\", pug.classes([\"button\",className], [false,true]), false, true)+pug.attr(\"type\", type, true, true)) + \"\\u003E\" + (pug.escape(null == (pug_interp = text) ? \"\" : pug_interp)) + \"\\u003C\\u002Fbutton\\u003E\";}.call(this,\"className\" in locals_for_with?locals_for_with.className:typeof className!==\"undefined\"?className:undefined,\"text\" in locals_for_with?locals_for_with.text:typeof text!==\"undefined\"?text:undefined,\"type\" in locals_for_with?locals_for_with.type:typeof type!==\"undefined\"?type:undefined));;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./blocks/button/button.pug?");

/***/ }),

/***/ "./blocks/button/button.scss":
/*!***********************************!*\
  !*** ./blocks/button/button.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./button.scss */ \"./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./blocks/button/button.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./blocks/button/button.scss?");

/***/ }),

/***/ "./blocks/input/input.js":
/*!*******************************!*\
  !*** ./blocks/input/input.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _block = __webpack_require__(/*! ../block */ \"./blocks/block.js\");\n\nvar _block2 = _interopRequireDefault(_block);\n\nvar _input = __webpack_require__(/*! ./input.pug */ \"./blocks/input/input.pug\");\n\nvar _input2 = _interopRequireDefault(_input);\n\n__webpack_require__(/*! ./input.scss */ \"./blocks/input/input.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Input = function (_Block) {\n    _inherits(Input, _Block);\n\n    /**\n     * Input\n     * @param {Object} obj\n     * @param {string} obj.placeholder - текст инпута,\n     * @param {string} [obj.type] - тип инпута (по умолчанию text)\n     * @param {string} [obj.value] - значение инпута\n     * @param {string} [obj.className] - имя БЭМ микса\n     * @param {string} [obj.className] - имя поля\n     */\n    function Input(_ref) {\n        var placeholder = _ref.placeholder,\n            _ref$type = _ref.type,\n            type = _ref$type === undefined ? 'text' : _ref$type,\n            _ref$value = _ref.value,\n            value = _ref$value === undefined ? '' : _ref$value,\n            _ref$className = _ref.className,\n            className = _ref$className === undefined ? false : _ref$className,\n            _ref$name = _ref.name,\n            name = _ref$name === undefined ? false : _ref$name;\n\n        _classCallCheck(this, Input);\n\n        var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this));\n\n        _this.template = (0, _input2.default)({\n            type: type,\n            placeholder: placeholder,\n            value: value,\n            className: className,\n            name: name\n        });\n        return _this;\n    }\n\n    return Input;\n}(_block2.default);\n\nexports.default = Input;\n\n//# sourceURL=webpack:///./blocks/input/input.js?");

/***/ }),

/***/ "./blocks/input/input.pug":
/*!********************************!*\
  !*** ./blocks/input/input.pug ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (className, name, placeholder, type, value) {pug_html = pug_html + \"\\u003Cinput\" + (pug.attr(\"class\", pug.classes([\"input\",className], [false,true]), false, true)+pug.attr(\"placeholder\", placeholder, true, true)+pug.attr(\"type\", type, true, true)+pug.attr(\"value\", value, true, true)+pug.attr(\"name\", name, true, true)) + \"\\u003E\";}.call(this,\"className\" in locals_for_with?locals_for_with.className:typeof className!==\"undefined\"?className:undefined,\"name\" in locals_for_with?locals_for_with.name:typeof name!==\"undefined\"?name:undefined,\"placeholder\" in locals_for_with?locals_for_with.placeholder:typeof placeholder!==\"undefined\"?placeholder:undefined,\"type\" in locals_for_with?locals_for_with.type:typeof type!==\"undefined\"?type:undefined,\"value\" in locals_for_with?locals_for_with.value:typeof value!==\"undefined\"?value:undefined));;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./blocks/input/input.pug?");

/***/ }),

/***/ "./blocks/input/input.scss":
/*!*********************************!*\
  !*** ./blocks/input/input.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./input.scss */ \"./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./blocks/input/input.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./blocks/input/input.scss?");

/***/ }),

/***/ "./blocks/link/link.js":
/*!*****************************!*\
  !*** ./blocks/link/link.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _block = __webpack_require__(/*! ../block */ \"./blocks/block.js\");\n\nvar _block2 = _interopRequireDefault(_block);\n\nvar _link = __webpack_require__(/*! ./link.pug */ \"./blocks/link/link.pug\");\n\nvar _link2 = _interopRequireDefault(_link);\n\n__webpack_require__(/*! ./link.scss */ \"./blocks/link/link.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Link = function (_Block) {\n    _inherits(Link, _Block);\n\n    /**\n     * Input\n     * @param {Object} obj\n     * @param {string} obj.href - путь ссылки,\n     * @param {string} [obj.className] - имя класса модификатора или микса\n     */\n    function Link(_ref) {\n        var _ref$href = _ref.href,\n            href = _ref$href === undefined ? '#' : _ref$href,\n            _ref$className = _ref.className,\n            className = _ref$className === undefined ? false : _ref$className,\n            _ref$text = _ref.text,\n            text = _ref$text === undefined ? 'Ссылка' : _ref$text;\n\n        _classCallCheck(this, Link);\n\n        var _this = _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).call(this));\n\n        _this.template = (0, _link2.default)({\n            href: href,\n            className: className,\n            text: text\n        });\n        return _this;\n    }\n\n    return Link;\n}(_block2.default);\n\nexports.default = Link;\n\n//# sourceURL=webpack:///./blocks/link/link.js?");

/***/ }),

/***/ "./blocks/link/link.pug":
/*!******************************!*\
  !*** ./blocks/link/link.pug ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (className, href, text) {pug_html = pug_html + \"\\u003Ca\" + (pug.attr(\"class\", pug.classes([\"link\",className], [false,true]), false, true)+pug.attr(\"href\", href, true, true)) + \"\\u003E\" + (pug.escape(null == (pug_interp = text) ? \"\" : pug_interp)) + \"\\u003C\\u002Fa\\u003E\";}.call(this,\"className\" in locals_for_with?locals_for_with.className:typeof className!==\"undefined\"?className:undefined,\"href\" in locals_for_with?locals_for_with.href:typeof href!==\"undefined\"?href:undefined,\"text\" in locals_for_with?locals_for_with.text:typeof text!==\"undefined\"?text:undefined));;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./blocks/link/link.pug?");

/***/ }),

/***/ "./blocks/link/link.scss":
/*!*******************************!*\
  !*** ./blocks/link/link.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./link.scss */ \"./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./blocks/link/link.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./blocks/link/link.scss?");

/***/ }),

/***/ "./blocks/main/main.scss":
/*!*******************************!*\
  !*** ./blocks/main/main.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./main.scss */ \"./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./blocks/main/main.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./blocks/main/main.scss?");

/***/ }),

/***/ "./blocks/messages/message.pug":
/*!*************************************!*\
  !*** ./blocks/messages/message.pug ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (author, className, modifierOwner, text) {pug_html = pug_html + \"\\u003Cdiv\" + (pug.attr(\"class\", pug.classes([\"message\",`${className} ${modifierOwner}`], [false,true]), false, true)) + \"\\u003E\\u003Cp class=\\\"message__author\\\"\\u003E\" + (pug.escape(null == (pug_interp = author) ? \"\" : pug_interp)) + \"\\u003C\\u002Fp\\u003E\\u003Cp class=\\\"message__text\\\"\\u003E\" + (pug.escape(null == (pug_interp = text) ? \"\" : pug_interp)) + \"\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\";}.call(this,\"author\" in locals_for_with?locals_for_with.author:typeof author!==\"undefined\"?author:undefined,\"className\" in locals_for_with?locals_for_with.className:typeof className!==\"undefined\"?className:undefined,\"modifierOwner\" in locals_for_with?locals_for_with.modifierOwner:typeof modifierOwner!==\"undefined\"?modifierOwner:undefined,\"text\" in locals_for_with?locals_for_with.text:typeof text!==\"undefined\"?text:undefined));;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./blocks/messages/message.pug?");

/***/ }),

/***/ "./blocks/messages/message.scss":
/*!**************************************!*\
  !*** ./blocks/messages/message.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./message.scss */ \"./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./blocks/messages/message.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./blocks/messages/message.scss?");

/***/ }),

/***/ "./blocks/messages/messages.js":
/*!*************************************!*\
  !*** ./blocks/messages/messages.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _block = __webpack_require__(/*! ../block */ \"./blocks/block.js\");\n\nvar _block2 = _interopRequireDefault(_block);\n\nvar _message = __webpack_require__(/*! ./message.pug */ \"./blocks/messages/message.pug\");\n\nvar _message2 = _interopRequireDefault(_message);\n\n__webpack_require__(/*! ./message.scss */ \"./blocks/messages/message.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Message = function (_Block) {\n    _inherits(Message, _Block);\n\n    /**\n     * Input\n     * @param {Object} obj\n     * @param {string} obj.author - имя автора сообщения\n     * @param {string} obj.message - текст сообщения\n     * @param {string} [obj.className] - имя микса\n     */\n    function Message(_ref) {\n        var message = _ref.message,\n            author = _ref.author,\n            _ref$className = _ref.className,\n            className = _ref$className === undefined ? false : _ref$className,\n            _ref$modifierOwner = _ref.modifierOwner,\n            modifierOwner = _ref$modifierOwner === undefined ? false : _ref$modifierOwner;\n\n        _classCallCheck(this, Message);\n\n        var _this = _possibleConstructorReturn(this, (Message.__proto__ || Object.getPrototypeOf(Message)).call(this));\n\n        _this.template = (0, _message2.default)({\n            className: className,\n            modifierOwner: modifierOwner ? 'message_owner' : '',\n            text: message,\n            author: author\n        });\n        return _this;\n    }\n\n    return Message;\n}(_block2.default);\n\nexports.default = Message;\n\n//# sourceURL=webpack:///./blocks/messages/messages.js?");

/***/ }),

/***/ "./blocks/reset.scss":
/*!***************************!*\
  !*** ./blocks/reset.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../node_modules/css-loader!../node_modules/sass-loader/lib/loader.js!./reset.scss */ \"./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./blocks/reset.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./blocks/reset.scss?");

/***/ }),

/***/ "./blocks/textarea/textarea.js":
/*!*************************************!*\
  !*** ./blocks/textarea/textarea.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _block = __webpack_require__(/*! ../block */ \"./blocks/block.js\");\n\nvar _block2 = _interopRequireDefault(_block);\n\nvar _textarea = __webpack_require__(/*! ./textarea.pug */ \"./blocks/textarea/textarea.pug\");\n\nvar _textarea2 = _interopRequireDefault(_textarea);\n\n__webpack_require__(/*! ./textarea.scss */ \"./blocks/textarea/textarea.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Textarea = function (_Block) {\n    _inherits(Textarea, _Block);\n\n    /**\n     * Input\n     * @param {Object} obj\n     * @param {string} obj.placeholder - placeholder поля\n     * @param {string} [obj.className] - имя модификатора или микса\n     */\n    function Textarea(_ref) {\n        var placeholder = _ref.placeholder,\n            _ref$className = _ref.className,\n            className = _ref$className === undefined ? false : _ref$className;\n\n        _classCallCheck(this, Textarea);\n\n        var _this = _possibleConstructorReturn(this, (Textarea.__proto__ || Object.getPrototypeOf(Textarea)).call(this));\n\n        _this.template = (0, _textarea2.default)({\n            placeholder: placeholder,\n            className: className\n        });\n        return _this;\n    }\n\n    return Textarea;\n}(_block2.default);\n\nexports.default = Textarea;\n\n//# sourceURL=webpack:///./blocks/textarea/textarea.js?");

/***/ }),

/***/ "./blocks/textarea/textarea.pug":
/*!**************************************!*\
  !*** ./blocks/textarea/textarea.pug ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (className, placeholder) {pug_html = pug_html + \"\\u003Ctextarea\" + (pug.attr(\"class\", pug.classes([\"textarea\",className], [false,true]), false, true)+pug.attr(\"placeholder\", placeholder, true, true)) + \"\\u003E\\u003C\\u002Ftextarea\\u003E\";}.call(this,\"className\" in locals_for_with?locals_for_with.className:typeof className!==\"undefined\"?className:undefined,\"placeholder\" in locals_for_with?locals_for_with.placeholder:typeof placeholder!==\"undefined\"?placeholder:undefined));;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./blocks/textarea/textarea.pug?");

/***/ }),

/***/ "./blocks/textarea/textarea.scss":
/*!***************************************!*\
  !*** ./blocks/textarea/textarea.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./textarea.scss */ \"./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./blocks/textarea/textarea.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./blocks/textarea/textarea.scss?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _router = __webpack_require__(/*! ./modules/router */ \"./modules/router.js\");\n\nvar _router2 = _interopRequireDefault(_router);\n\nvar _login = __webpack_require__(/*! ./views/login/login */ \"./views/login/login.js\");\n\nvar _login2 = _interopRequireDefault(_login);\n\nvar _signup = __webpack_require__(/*! ./views/signup/signup */ \"./views/signup/signup.js\");\n\nvar _signup2 = _interopRequireDefault(_signup);\n\nvar _chat = __webpack_require__(/*! ./views/chat/chat */ \"./views/chat/chat.js\");\n\nvar _chat2 = _interopRequireDefault(_chat);\n\n__webpack_require__(/*! ./blocks/reset.scss */ \"./blocks/reset.scss\");\n\n__webpack_require__(/*! ./blocks/main/main.scss */ \"./blocks/main/main.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nwindow.addEventListener('DOMContentLoaded', function () {\n    var router = new _router2.default();\n\n    var loginView = new _login2.default({\n        el: document.querySelector('.js-login')\n    });\n\n    var signupView = new _signup2.default({\n        el: document.querySelector('.js-signup')\n    });\n\n    var chatView = new _chat2.default({\n        el: document.querySelector('.js-chat')\n    });\n\n    router.route('login', loginView).route('signup', signupView).route('chat', chatView);\n\n    router.start();\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/router.js":
/*!***************************!*\
  !*** ./modules/router.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Router = function () {\n    function Router() {\n        _classCallCheck(this, Router);\n\n        this.routes = {};\n    }\n\n    /**\n     * Добавить новый маршрут\n     * @param {string} path - маршрут\n     * @param {View} view - вьюха которая должна быть показана по маршруту\n    */\n\n\n    _createClass(Router, [{\n        key: 'route',\n        value: function route(path, view) {\n            this.routes[path] = view;\n            return this;\n        }\n    }, {\n        key: '_onRoute',\n        value: function _onRoute(path) {\n            path = path.replace('#', '');\n\n            var view = this.routes[path];\n\n            if (this.current) {\n                this.current.hide();\n            }\n\n            if (view) {\n                view.show();\n                this.current = view;\n            }\n        }\n    }, {\n        key: 'start',\n        value: function start() {\n            var _this = this;\n\n            window.addEventListener('hashchange', function () {\n                _this._onRoute(location.hash);\n            });\n\n            this._onRoute(location.hash);\n        }\n    }]);\n\n    return Router;\n}();\n\nexports.default = Router;\n\n//# sourceURL=webpack:///./modules/router.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./blocks/button/button.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./blocks/button/button.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".button {\\n  border: none;\\n  cursor: pointer;\\n  font: 14px/1.2 'Roboto', sans-serif;\\n  background-color: #E1630E;\\n  border-radius: 4px;\\n  padding: 9px 20px;\\n  font-size: 14px;\\n  font-weight: bold;\\n  text-align: center;\\n  letter-spacing: 1.4px;\\n  text-transform: uppercase;\\n  text-decoration: none;\\n  color: #fff;\\n  box-sizing: border-box;\\n  transition: background-color .2s ease-out, opacity .2s ease-out; }\\n  .button:hover {\\n    background-color: #E69740; }\\n  .button_disabled {\\n    opacity: .5;\\n    cursor: default; }\\n    .button_disabled:hover {\\n      background-color: #E1630E; }\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./blocks/button/button.scss?./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./blocks/input/input.scss":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./blocks/input/input.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".input {\\n  padding: 8px 9px;\\n  border: none;\\n  border-radius: 4px;\\n  background-color: #E9EDEF;\\n  font-family: 'Roboto', sans-serif;\\n  font-size: 16px;\\n  color: #4D585F;\\n  box-sizing: border-box;\\n  transition: background-color .35s ease-in-out, box-shadow .35s ease-in-out; }\\n  .input:focus {\\n    box-shadow: 0 0 50px #121A22;\\n    background-color: #EDEDED; }\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./blocks/input/input.scss?./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./blocks/link/link.scss":
/*!**************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./blocks/link/link.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".link {\\n  color: #F2942B;\\n  text-decoration: none;\\n  transition: color .35s ease-in-out; }\\n  .link:hover {\\n    color: #FDBE2C; }\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./blocks/link/link.scss?./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./blocks/main/main.scss":
/*!**************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./blocks/main/main.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"html {\\n  height: 100%; }\\n\\n.main {\\n  min-height: 100%;\\n  height: 100%;\\n  background: #121a22;\\n  font: 14px/1.2 'Roboto', sans-serif;\\n  color: #ced6d5; }\\n  .main__content {\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    height: 100%; }\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./blocks/main/main.scss?./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./blocks/messages/message.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./blocks/messages/message.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".message_owner {\\n  align-self: flex-end; }\\n\\n.message__author {\\n  font-size: 12px;\\n  font-weight: bold;\\n  color: #fff;\\n  opacity: .8; }\\n\\n.message__text {\\n  margin-top: 3px;\\n  padding: 16px;\\n  color: #838b8d;\\n  font-size: 14px;\\n  background-color: #1D232A;\\n  border-radius: 0 10px 10px 10px; }\\n  .message_owner .message__text {\\n    border-radius: 10px 10px 0 10px;\\n    background-color: #323E46;\\n    color: #fff; }\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./blocks/messages/message.scss?./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./blocks/reset.scss":
/*!**********************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./blocks/reset.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"html, body, div, span, applet, object, iframe,\\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\\na, abbr, acronym, address, big, cite, code,\\ndel, dfn, em, font, img, ins, kbd, q, s, samp,\\nsmall, strike, strong, sub, sup, tt, var,\\nb, u, i, center,\\ndl, dt, dd, ol, ul, li,\\nfieldset, form, label, legend,\\ntable, caption, tbody, tfoot, thead, tr, th, td {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  outline: 0;\\n  font-size: 100%;\\n  vertical-align: baseline;\\n  background: transparent; }\\n\\nh1, h2, h3, h4, h5, h6 {\\n  font-weight: normal;\\n  font-style: normal;\\n  font-stretch: normal; }\\n\\narticle,\\naside,\\naudio,\\ncanvas,\\ndatalist,\\ndetails,\\nembed,\\nfigcaption,\\nfigure,\\nfooter,\\nheader,\\nkeygen,\\nmenu,\\nnav,\\noutput,\\nprogress,\\nsection,\\nsource,\\nvideo {\\n  display: block;\\n  margin: 0; }\\n\\nbody {\\n  line-height: 1; }\\n\\nol, ul {\\n  list-style: none; }\\n\\nblockquote, q {\\n  quotes: none; }\\n\\nblockquote:before, blockquote:after,\\nq:before, q:after {\\n  content: '';\\n  content: none; }\\n\\n/* remember to define focus styles! */\\n:focus {\\n  outline: 0; }\\n\\n/* remember to highlight inserts somehow! */\\nins {\\n  text-decoration: none; }\\n\\ndel {\\n  text-decoration: line-through; }\\n\\n/* tables still need 'cellspacing=\\\"0\\\"' in the markup */\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0; }\\n\\ntd {\\n  vertical-align: top; }\\n\\nbutton::-moz-focus-inner,\\ninput[type=\\\"reset\\\"]::-moz-focus-inner,\\ninput[type=\\\"button\\\"]::-moz-focus-inner,\\ninput[type=\\\"submit\\\"]::-moz-focus-inner,\\ninput[type=\\\"submit\\\"]::-moz-focus-inner,\\ninput[type=\\\"file\\\"] > input[type=\\\"button\\\"]::-moz-focus-inner {\\n  /*ff fix*/\\n  border: none;\\n  padding: 0;\\n  margin: 0; }\\n\\ninput, textarea {\\n  font-family: Arial, \\\"Helvetica CY\\\", Helvetica, sans-serif; }\\n  input:-moz-placeholder, textarea:-moz-placeholder {\\n    color: #4d4d4d;\\n    font-weight: normal; }\\n  input::-moz-placeholder, textarea::-moz-placeholder {\\n    color: #4d4d4d;\\n    font-weight: normal; }\\n  input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {\\n    color: #767676;\\n    display: inline-block;\\n    padding-top: 2px;\\n    font-weight: normal; }\\n\\n::-ms-clear {\\n  display: none; }\\n\\ninput:-webkit-autofill {\\n  color: #000 !important; }\\n\\ninput[type=number]::-webkit-inner-spin-button,\\ninput[type=number]::-webkit-outer-spin-button {\\n  -webkit-appearance: none;\\n  margin: 0; }\\n\\ninput[type='number'] {\\n  -moz-appearance: textfield; }\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./blocks/reset.scss?./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./blocks/textarea/textarea.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./blocks/textarea/textarea.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".textarea {\\n  padding: 8px 9px;\\n  border: none;\\n  border-radius: 4px;\\n  background-color: #E9EDEF;\\n  font-family: 'Roboto', sans-serif;\\n  font-size: 16px;\\n  color: #4D585F;\\n  box-sizing: border-box;\\n  transition: background-color .35s ease-in-out, box-shadow .35s ease-in-out; }\\n  .textarea:focus {\\n    box-shadow: 0 0 50px #121A22;\\n    background-color: #EDEDED; }\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./blocks/textarea/textarea.scss?./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./views/chat/chat.scss":
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./views/chat/chat.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".chat {\\n  min-width: 320px;\\n  max-width: 450px; }\\n  .chat__content {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: flex-start;\\n    justify-content: flex-end;\\n    max-height: 500px;\\n    overflow: auto;\\n    border-top: 1px solid rgba(206, 214, 213, 0.3);\\n    border-bottom: 1px solid rgba(206, 214, 213, 0.3);\\n    padding: 14px 0;\\n    box-sizing: border-box; }\\n  .chat__message {\\n    margin-top: 14px; }\\n    .chat__message:first-child {\\n      margin-top: 0; }\\n  .chat__send-message {\\n    margin-top: 28px; }\\n  .chat__textarea {\\n    width: 100%; }\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./views/chat/chat.scss?./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./views/login/login.scss":
/*!***************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./views/login/login.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".login {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center; }\\n  .login__input {\\n    margin-top: 14px; }\\n  .login__button {\\n    min-width: 100%;\\n    margin-top: 28px; }\\n  .login__link {\\n    margin-top: 14px; }\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./views/login/login.scss?./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./views/signup/signup.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./views/signup/signup.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".signup {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center; }\\n  .signup__input {\\n    min-width: 100%;\\n    margin-top: 14px; }\\n  .signup__button {\\n    min-width: 100%;\\n    margin-top: 28px; }\\n  .signup__link {\\n    margin-top: 14px; }\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./views/signup/signup.scss?./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function(useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif(item[2]) {\n\t\t\t\treturn \"@media \" + item[2] + \"{\" + content + \"}\";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function(modules, mediaQuery) {\n\t\tif(typeof modules === \"string\")\n\t\t\tmodules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor(var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif(typeof id === \"number\")\n\t\t\t\talreadyImportedModules[id] = true;\n\t\t}\n\t\tfor(i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif(typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif(mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if(mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || '';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === 'function') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n\t}\n\n\treturn [content].join('\\n');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n\n\treturn '/*# ' + data + ' */';\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/pug-runtime/index.js":
/*!*******************************************!*\
  !*** ./node_modules/pug-runtime/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar pug_has_own_property = Object.prototype.hasOwnProperty;\n\n/**\n * Merge two attribute objects giving precedence\n * to values in object `b`. Classes are special-cased\n * allowing for arrays and merging/joining appropriately\n * resulting in a string.\n *\n * @param {Object} a\n * @param {Object} b\n * @return {Object} a\n * @api private\n */\n\nexports.merge = pug_merge;\nfunction pug_merge(a, b) {\n  if (arguments.length === 1) {\n    var attrs = a[0];\n    for (var i = 1; i < a.length; i++) {\n      attrs = pug_merge(attrs, a[i]);\n    }\n    return attrs;\n  }\n\n  for (var key in b) {\n    if (key === 'class') {\n      var valA = a[key] || [];\n      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);\n    } else if (key === 'style') {\n      var valA = pug_style(a[key]);\n      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;\n      var valB = pug_style(b[key]);\n      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;\n      a[key] = valA + valB;\n    } else {\n      a[key] = b[key];\n    }\n  }\n\n  return a;\n};\n\n/**\n * Process array, object, or string as a string of classes delimited by a space.\n *\n * If `val` is an array, all members of it and its subarrays are counted as\n * classes. If `escaping` is an array, then whether or not the item in `val` is\n * escaped depends on the corresponding item in `escaping`. If `escaping` is\n * not an array, no escaping is done.\n *\n * If `val` is an object, all the keys whose value is truthy are counted as\n * classes. No escaping is done.\n *\n * If `val` is a string, it is counted as a class. No escaping is done.\n *\n * @param {(Array.<string>|Object.<string, boolean>|string)} val\n * @param {?Array.<string>} escaping\n * @return {String}\n */\nexports.classes = pug_classes;\nfunction pug_classes_array(val, escaping) {\n  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);\n  for (var i = 0; i < val.length; i++) {\n    className = pug_classes(val[i]);\n    if (!className) continue;\n    escapeEnabled && escaping[i] && (className = pug_escape(className));\n    classString = classString + padding + className;\n    padding = ' ';\n  }\n  return classString;\n}\nfunction pug_classes_object(val) {\n  var classString = '', padding = '';\n  for (var key in val) {\n    if (key && val[key] && pug_has_own_property.call(val, key)) {\n      classString = classString + padding + key;\n      padding = ' ';\n    }\n  }\n  return classString;\n}\nfunction pug_classes(val, escaping) {\n  if (Array.isArray(val)) {\n    return pug_classes_array(val, escaping);\n  } else if (val && typeof val === 'object') {\n    return pug_classes_object(val);\n  } else {\n    return val || '';\n  }\n}\n\n/**\n * Convert object or string to a string of CSS styles delimited by a semicolon.\n *\n * @param {(Object.<string, string>|string)} val\n * @return {String}\n */\n\nexports.style = pug_style;\nfunction pug_style(val) {\n  if (!val) return '';\n  if (typeof val === 'object') {\n    var out = '';\n    for (var style in val) {\n      /* istanbul ignore else */\n      if (pug_has_own_property.call(val, style)) {\n        out = out + style + ':' + val[style] + ';';\n      }\n    }\n    return out;\n  } else {\n    return val + '';\n  }\n};\n\n/**\n * Render the given attribute.\n *\n * @param {String} key\n * @param {String} val\n * @param {Boolean} escaped\n * @param {Boolean} terse\n * @return {String}\n */\nexports.attr = pug_attr;\nfunction pug_attr(key, val, escaped, terse) {\n  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {\n    return '';\n  }\n  if (val === true) {\n    return ' ' + (terse ? key : key + '=\"' + key + '\"');\n  }\n  if (typeof val.toJSON === 'function') {\n    val = val.toJSON();\n  }\n  if (typeof val !== 'string') {\n    val = JSON.stringify(val);\n    if (!escaped && val.indexOf('\"') !== -1) {\n      return ' ' + key + '=\\'' + val.replace(/'/g, '&#39;') + '\\'';\n    }\n  }\n  if (escaped) val = pug_escape(val);\n  return ' ' + key + '=\"' + val + '\"';\n};\n\n/**\n * Render the given attributes object.\n *\n * @param {Object} obj\n * @param {Object} terse whether to use HTML5 terse boolean attributes\n * @return {String}\n */\nexports.attrs = pug_attrs;\nfunction pug_attrs(obj, terse){\n  var attrs = '';\n\n  for (var key in obj) {\n    if (pug_has_own_property.call(obj, key)) {\n      var val = obj[key];\n\n      if ('class' === key) {\n        val = pug_classes(val);\n        attrs = pug_attr(key, val, false, terse) + attrs;\n        continue;\n      }\n      if ('style' === key) {\n        val = pug_style(val);\n      }\n      attrs += pug_attr(key, val, false, terse);\n    }\n  }\n\n  return attrs;\n};\n\n/**\n * Escape the given string of `html`.\n *\n * @param {String} html\n * @return {String}\n * @api private\n */\n\nvar pug_match_html = /[\"&<>]/;\nexports.escape = pug_escape;\nfunction pug_escape(_html){\n  var html = '' + _html;\n  var regexResult = pug_match_html.exec(html);\n  if (!regexResult) return _html;\n\n  var result = '';\n  var i, lastIndex, escape;\n  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {\n    switch (html.charCodeAt(i)) {\n      case 34: escape = '&quot;'; break;\n      case 38: escape = '&amp;'; break;\n      case 60: escape = '&lt;'; break;\n      case 62: escape = '&gt;'; break;\n      default: continue;\n    }\n    if (lastIndex !== i) result += html.substring(lastIndex, i);\n    lastIndex = i + 1;\n    result += escape;\n  }\n  if (lastIndex !== i) return result + html.substring(lastIndex, i);\n  else return result;\n};\n\n/**\n * Re-throw the given `err` in context to the\n * the pug in `filename` at the given `lineno`.\n *\n * @param {Error} err\n * @param {String} filename\n * @param {String} lineno\n * @param {String} str original source\n * @api private\n */\n\nexports.rethrow = pug_rethrow;\nfunction pug_rethrow(err, filename, lineno, str){\n  if (!(err instanceof Error)) throw err;\n  if ((typeof window != 'undefined' || !filename) && !str) {\n    err.message += ' on line ' + lineno;\n    throw err;\n  }\n  try {\n    str = str || __webpack_require__(/*! fs */ 0).readFileSync(filename, 'utf8')\n  } catch (ex) {\n    pug_rethrow(err, null, lineno)\n  }\n  var context = 3\n    , lines = str.split('\\n')\n    , start = Math.max(lineno - context, 0)\n    , end = Math.min(lines.length, lineno + context);\n\n  // Error context\n  var context = lines.slice(start, end).map(function(line, i){\n    var curr = i + start + 1;\n    return (curr == lineno ? '  > ' : '    ')\n      + curr\n      + '| '\n      + line;\n  }).join('\\n');\n\n  // Alter exception message\n  err.path = filename;\n  err.message = (filename || 'Pug') + ':' + lineno\n    + '\\n' + context + '\\n\\n' + err.message;\n  throw err;\n};\n\n\n//# sourceURL=webpack:///./node_modules/pug-runtime/index.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target) {\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertInto + \" \" + options.insertAt.before);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = options.transform(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./views/chat/chat.js":
/*!****************************!*\
  !*** ./views/chat/chat.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _messages = __webpack_require__(/*! ../../blocks/messages/messages */ \"./blocks/messages/messages.js\");\n\nvar _messages2 = _interopRequireDefault(_messages);\n\nvar _textarea = __webpack_require__(/*! ../../blocks/textarea/textarea */ \"./blocks/textarea/textarea.js\");\n\nvar _textarea2 = _interopRequireDefault(_textarea);\n\nvar _views = __webpack_require__(/*! ../views */ \"./views/views.js\");\n\nvar _views2 = _interopRequireDefault(_views);\n\nvar _chat = __webpack_require__(/*! ./chat.pug */ \"./views/chat/chat.pug\");\n\nvar _chat2 = _interopRequireDefault(_chat);\n\n__webpack_require__(/*! ./chat.scss */ \"./views/chat/chat.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ChatView = function (_View) {\n    _inherits(ChatView, _View);\n\n    _createClass(ChatView, [{\n        key: 'bemName',\n        get: function get() {\n            return 'chat';\n        }\n    }]);\n\n    function ChatView(_ref) {\n        var el = _ref.el;\n\n        _classCallCheck(this, ChatView);\n\n        var _this = _possibleConstructorReturn(this, (ChatView.__proto__ || Object.getPrototypeOf(ChatView)).call(this, { el: el }));\n\n        _this.render(_chat2.default);\n\n        _this.insertMessages([{\n            text: 'Че каво, ссучары?',\n            name: 'Пинкман',\n            owner: false\n        }, {\n            text: 'Сегодня кристально синий!',\n            name: 'Уайт',\n            owner: false\n        }, {\n            text: 'Пакуйте, беру все.',\n            name: 'Хэнк',\n            owner: true\n        }]);\n\n        _this.textarea = new _textarea2.default({\n            className: _this.bemName + '__textarea',\n            placeholder: 'Введите свое сообщение'\n        });\n\n        _this.addBlock(_this.textarea, 'send-message');\n        _this.el.addEventListener('keyup', _this.onKeyUp.bind(_this));\n        return _this;\n    }\n\n    _createClass(ChatView, [{\n        key: 'insertMessage',\n        value: function insertMessage(_ref2) {\n            var text = _ref2.text,\n                name = _ref2.name,\n                _ref2$owner = _ref2.owner,\n                owner = _ref2$owner === undefined ? false : _ref2$owner;\n\n            this.message = new _messages2.default({\n                className: this.bemName + '__message',\n                message: text,\n                author: name,\n                modifierOwner: owner\n            });\n            this.addBlock(this.message, 'content');\n        }\n    }, {\n        key: 'insertMessages',\n        value: function insertMessages() {\n            var _this2 = this;\n\n            var messages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n\n            messages.forEach(function (message) {\n                return _this2.insertMessage(message);\n            });\n        }\n    }, {\n        key: 'onKeyUp',\n        value: function onKeyUp(e) {\n            if (e.keyCode === 13) {\n                var target = e.target;\n                this.insertMessage({\n                    text: target.value,\n                    name: 'Хэнк',\n                    owner: true\n                });\n                e.preventDefault();\n                target.value = '';\n            }\n        }\n    }]);\n\n    return ChatView;\n}(_views2.default);\n\nexports.default = ChatView;\n\n//# sourceURL=webpack:///./views/chat/chat.js?");

/***/ }),

/***/ "./views/chat/chat.pug":
/*!*****************************!*\
  !*** ./views/chat/chat.pug ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cdiv class=\\\"chat\\\"\\u003E\\u003Cdiv class=\\\"chat__content\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cform class=\\\"chat__send-message\\\"\\u003E\\u003C\\u002Fform\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./views/chat/chat.pug?");

/***/ }),

/***/ "./views/chat/chat.scss":
/*!******************************!*\
  !*** ./views/chat/chat.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./chat.scss */ \"./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./views/chat/chat.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./views/chat/chat.scss?");

/***/ }),

/***/ "./views/login/login.js":
/*!******************************!*\
  !*** ./views/login/login.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _input = __webpack_require__(/*! ../../blocks/input/input */ \"./blocks/input/input.js\");\n\nvar _input2 = _interopRequireDefault(_input);\n\nvar _button = __webpack_require__(/*! ../../blocks/button/button */ \"./blocks/button/button.js\");\n\nvar _button2 = _interopRequireDefault(_button);\n\nvar _link = __webpack_require__(/*! ../../blocks/link/link */ \"./blocks/link/link.js\");\n\nvar _link2 = _interopRequireDefault(_link);\n\nvar _views = __webpack_require__(/*! ../views */ \"./views/views.js\");\n\nvar _views2 = _interopRequireDefault(_views);\n\nvar _login = __webpack_require__(/*! ./login.pug */ \"./views/login/login.pug\");\n\nvar _login2 = _interopRequireDefault(_login);\n\n__webpack_require__(/*! ./login.scss */ \"./views/login/login.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar LoginView = function (_View) {\n    _inherits(LoginView, _View);\n\n    _createClass(LoginView, [{\n        key: 'bemName',\n        get: function get() {\n            return 'login';\n        }\n    }]);\n\n    function LoginView(_ref) {\n        var el = _ref.el;\n\n        _classCallCheck(this, LoginView);\n\n        var _this = _possibleConstructorReturn(this, (LoginView.__proto__ || Object.getPrototypeOf(LoginView)).call(this, { el: el }));\n\n        _this.render(_login2.default);\n\n        _this.name = new _input2.default({\n            className: _this.bemName + '__input',\n            placeholder: 'Имя',\n            name: 'name'\n        });\n\n        _this.pwd = new _input2.default({\n            className: _this.bemName + '__input',\n            placeholder: 'Пароль',\n            type: 'password',\n            name: 'password'\n        });\n\n        _this.button = new _button2.default({\n            className: _this.bemName + '__button',\n            text: 'Войти',\n            type: 'submit'\n        });\n\n        _this.link = new _link2.default({\n            className: _this.bemName + '__link',\n            href: '#signup',\n            text: 'Регистрация'\n        });\n\n        _this.addBlock(_this.name).addBlock(_this.pwd).addBlock(_this.button).addBlock(_this.link);\n\n        _this.el.addEventListener('submit', function (e) {\n            console.log(e.target.querySelector('input[name=name]').value);\n            e.preventDefault(); // убираем сабмит формы\n        });\n        return _this;\n    }\n\n    return LoginView;\n}(_views2.default);\n\nexports.default = LoginView;\n\n//# sourceURL=webpack:///./views/login/login.js?");

/***/ }),

/***/ "./views/login/login.pug":
/*!*******************************!*\
  !*** ./views/login/login.pug ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cform class=\\\"login\\\"\\u003E\\u003C\\u002Fform\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./views/login/login.pug?");

/***/ }),

/***/ "./views/login/login.scss":
/*!********************************!*\
  !*** ./views/login/login.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./login.scss */ \"./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./views/login/login.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./views/login/login.scss?");

/***/ }),

/***/ "./views/signup/signup.js":
/*!********************************!*\
  !*** ./views/signup/signup.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _input = __webpack_require__(/*! ../../blocks/input/input */ \"./blocks/input/input.js\");\n\nvar _input2 = _interopRequireDefault(_input);\n\nvar _button = __webpack_require__(/*! ../../blocks/button/button */ \"./blocks/button/button.js\");\n\nvar _button2 = _interopRequireDefault(_button);\n\nvar _link = __webpack_require__(/*! ../../blocks/link/link */ \"./blocks/link/link.js\");\n\nvar _link2 = _interopRequireDefault(_link);\n\nvar _views = __webpack_require__(/*! ../views */ \"./views/views.js\");\n\nvar _views2 = _interopRequireDefault(_views);\n\nvar _signup = __webpack_require__(/*! ./signup.pug */ \"./views/signup/signup.pug\");\n\nvar _signup2 = _interopRequireDefault(_signup);\n\n__webpack_require__(/*! ./signup.scss */ \"./views/signup/signup.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar SignupView = function (_View) {\n    _inherits(SignupView, _View);\n\n    _createClass(SignupView, [{\n        key: 'bemName',\n        get: function get() {\n            return 'signup';\n        }\n    }]);\n\n    function SignupView(_ref) {\n        var el = _ref.el;\n\n        _classCallCheck(this, SignupView);\n\n        var _this = _possibleConstructorReturn(this, (SignupView.__proto__ || Object.getPrototypeOf(SignupView)).call(this, { el: el }));\n\n        _this.render(_signup2.default);\n\n        _this.name = new _input2.default({\n            className: _this.bemName + '__input',\n            placeholder: 'Имя'\n        });\n\n        _this.pwd = new _input2.default({\n            className: _this.bemName + '__input',\n            placeholder: 'Пароль',\n            type: 'password'\n        });\n\n        _this.pwdRe = new _input2.default({\n            className: _this.bemName + '__input',\n            placeholder: 'Повторите пароль',\n            type: 'password'\n        });\n\n        _this.button = new _button2.default({\n            className: _this.bemName + '__button',\n            text: 'Зарегистрироваться',\n            type: 'submit'\n        });\n\n        _this.link = new _link2.default({\n            className: _this.bemName + '__link',\n            href: '#login',\n            text: 'Логин'\n        });\n\n        _this.addBlock(_this.name).addBlock(_this.pwd).addBlock(_this.pwdRe).addBlock(_this.button).addBlock(_this.link);\n        return _this;\n    }\n\n    return SignupView;\n}(_views2.default);\n\nexports.default = SignupView;\n\n//# sourceURL=webpack:///./views/signup/signup.js?");

/***/ }),

/***/ "./views/signup/signup.pug":
/*!*********************************!*\
  !*** ./views/signup/signup.pug ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cform class=\\\"signup\\\"\\u003E\\u003C\\u002Fform\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./views/signup/signup.pug?");

/***/ }),

/***/ "./views/signup/signup.scss":
/*!**********************************!*\
  !*** ./views/signup/signup.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./signup.scss */ \"./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./views/signup/signup.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./views/signup/signup.scss?");

/***/ }),

/***/ "./views/views.js":
/*!************************!*\
  !*** ./views/views.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar View = function () {\n    function View(_ref) {\n        var el = _ref.el;\n\n        _classCallCheck(this, View);\n\n        this.el = el;\n        this.hide();\n    }\n\n    _createClass(View, [{\n        key: \"render\",\n        value: function render(template) {\n            this.el.innerHTML = template();\n        }\n    }, {\n        key: \"show\",\n        value: function show() {\n            this.el.hidden = false;\n        }\n    }, {\n        key: \"hide\",\n        value: function hide() {\n            this.el.hidden = true;\n        }\n    }, {\n        key: \"addBlock\",\n        value: function addBlock(block, name) {\n            if (name) {\n                block.append(this.el.querySelector(\".\" + this.bemName + \"__\" + name));\n            } else {\n                block.append(this.el.querySelector(\".\" + this.bemName));\n            }\n            return this;\n        }\n    }]);\n\n    return View;\n}();\n\nexports.default = View;\n\n//# sourceURL=webpack:///./views/views.js?");

/***/ }),

/***/ 0:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///fs_(ignored)?");

/***/ })

/******/ });