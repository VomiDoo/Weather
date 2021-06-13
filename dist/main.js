/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _img_background_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/background.jpg */ \"./src/img/background.jpg\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_img_background_jpg__WEBPACK_IMPORTED_MODULE_2__.default);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n    box-sizing: border-box;\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n}\\r\\n\\r\\n.wrap {\\r\\n    position: relative;\\r\\n    width: 1400px;\\r\\n    height: 800px;\\r\\n    margin: 0 auto;\\r\\n    font-family: 'Noto Sans JP', sans-serif;\\r\\n    background: transparent;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n.wrap--bg {\\r\\n    width: 1400px;\\r\\n    height: 1000px;\\r\\n    background:linear-gradient(65deg, rgba(2, 0, 1, 0.2), rgba(8, 13, 17, 0.2)), url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat center;\\r\\n}\\r\\n\\r\\n\\r\\n/* Header options */\\r\\n\\r\\n\\r\\n.header {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    width: 100%;\\r\\n    height: 100px;\\r\\n}\\r\\n\\r\\ninput[type=text] {\\r\\n    width: 300px;\\r\\n    height: 30px;\\r\\n    margin-right: 20px;\\r\\n    padding-left: 10px;\\r\\n    font-size: 20px;\\r\\n    font-family: 'Noto Sans JP', sans-serif;\\r\\n    color: white;\\r\\n    background: transparent;\\r\\n    border: 1.5px solid white;\\r\\n    border-radius: 25px;\\r\\n    outline: none;\\r\\n}\\r\\n\\r\\ninput[type=text]:focus {\\r\\n    border: 1.5px solid white;\\r\\n    border-radius: 25px;\\r\\n}\\r\\n\\r\\n.btn {\\r\\n    width: 130px;\\r\\n    height: 30px;\\r\\n    font-size: 20px;\\r\\n    font-family: 'Noto Sans JP', sans-serif;\\r\\n    color: rgb(107, 114, 121);\\r\\n    border-radius: 25px;\\r\\n    background: white;\\r\\n    border: 1.5px solid white;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n\\r\\n/* Main options */\\r\\n\\r\\n\\r\\n.main {\\r\\n    width: 1400px;\\r\\n    padding: 50px 100px;\\r\\n}\\r\\n\\r\\n.main__title {\\r\\n    font-size: 60px;\\r\\n    color: white;\\r\\n}\\r\\n\\r\\n.main__temperature {\\r\\n    font-size: 40px;\\r\\n    color: white;\\r\\n}\\r\\n\\r\\n.main__img {\\r\\n    margin: 20px auto;\\r\\n    width: 70px;\\r\\n    height: 70px;\\r\\n    border: 1.5px solid white;\\r\\n    border-radius: 50%;\\r\\n}\\r\\n\\r\\n.main__body {\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    margin-top: 50px;\\r\\n}\\r\\n\\r\\n.main__box {\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    flex-direction: column;\\r\\n    width: 350px;\\r\\n    height: 300px;\\r\\n    padding: 70px 0;\\r\\n    border: 1.5px solid white;\\r\\n    border-radius: 25px;\\r\\n    background: rgba(134, 132, 121, 0.507);\\r\\n    font-size: 30px;\\r\\n    color: white;\\r\\n}\\r\\n\\r\\n\\r\\n/* Notification */\\r\\n\\r\\n.notification {\\r\\n    position: absolute;\\r\\n    top: 20px;\\r\\n    left: 20px;\\r\\n    width: 500px;\\r\\n    min-height: 400px;\\r\\n    padding: 15px;\\r\\n    background-color: white;\\r\\n    border-radius: 25px;\\r\\n}\\r\\n\\r\\n.notification__close {\\r\\n    display: none;\\r\\n}\\r\\n\\r\\n.notification__close-btn {\\r\\n    position: absolute;\\r\\n    right: 15px;\\r\\n    top: 15px;\\r\\n    width: 40px;\\r\\n    height: 40px;\\r\\n    font-size: 25px;\\r\\n    background-color: rgb(107, 114, 121);\\r\\n    border: 1.5px;\\r\\n    border-radius: 25%;\\r\\n    cursor: pointer;\\r\\n    z-index: 10;\\r\\n}\\r\\n\\r\\n.notification__disable {\\r\\n    position: absolute;\\r\\n    bottom: 30px;\\r\\n    left: 30px;\\r\\n    width: 20px;\\r\\n    height: 20px;\\r\\n}\\r\\n\\r\\n.notification__title {\\r\\n    max-width: 380px;\\r\\n    margin-bottom: 20px;\\r\\n    font-size: 30px;\\r\\n}\\r\\n\\r\\n.notification__text {\\r\\n    margin-bottom: 60px;\\r\\n    font-size: 18px;\\r\\n    text-align: left;\\r\\n}\\r\\n\\r\\n.notification__pages {\\r\\n    position: absolute;\\r\\n    right: 30px;\\r\\n    bottom: 30px;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.notification__btn {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    width: 30px;\\r\\n    height: 30px;\\r\\n    font-size: 30px;\\r\\n    z-index: 10;\\r\\n}\\r\\n\\r\\n.page {\\r\\n    width: 20px;\\r\\n    height: 20px;\\r\\n    margin: 0 5px;\\r\\n}\\r\\n\\r\\n.none {\\r\\n    display: none;\\r\\n}\\r\\n\\r\\n\\r\\n/* History */\\r\\n\\r\\n.history__wrap {\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n    display: none;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    background: rgba(134, 132, 121, 0.507);\\r\\n    z-index: 15;\\r\\n}\\r\\n\\r\\n.history {\\r\\n    position: absolute;\\r\\n    top: 150px;\\r\\n    left: 350px;\\r\\n    display: none;\\r\\n    width: 700px;\\r\\n    height: 400px;\\r\\n    padding: 20px;\\r\\n    background-color: white;\\r\\n    border-radius: 25px;\\r\\n    z-index: 20;\\r\\n}\\r\\n\\r\\n.history__open{\\r\\n    display: block;\\r\\n}\\r\\n\\r\\n.history__header {\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    margin-bottom: 20px;\\r\\n}\\r\\n\\r\\n.history__title {\\r\\n    font-size: 30px;\\r\\n    font-family: 'Noto Sans JP', sans-serif;\\r\\n    color: rgb(107, 114, 121);\\r\\n}\\r\\n\\r\\n.history__close-btn {\\r\\n    position: absolute;\\r\\n    right: 15px;\\r\\n    top: 15px;\\r\\n    width: 40px;\\r\\n    height: 40px;\\r\\n    font-size: 25px;\\r\\n    background-color: rgb(107, 114, 121);\\r\\n    border: 1.5px;\\r\\n    border-radius: 25%;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.history__li{\\r\\n    display: flex;\\r\\n    list-style: none;\\r\\n}\\r\\n\\r\\n.border {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    height: 50px;\\r\\n    padding: 5px;\\r\\n    font-size: 18px;\\r\\n    font-family: 'Noto Sans JP', sans-serif;\\r\\n    border: 2px solid grey;\\r\\n}\\r\\n\\r\\n.title {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    height: 50px;\\r\\n    padding: 5px;\\r\\n    font-size: 14px;\\r\\n    font-family: 'Noto Sans JP', sans-serif;\\r\\n    border: 2px solid grey;\\r\\n}\\r\\n\\r\\n.history__name {\\r\\n    width: 270px;\\r\\n}\\r\\n\\r\\n.history__temperature {\\r\\n    width: 100px;\\r\\n}\\r\\n\\r\\n.history__weather {\\r\\n    width: 100px;\\r\\n}\\r\\n\\r\\n.history__weather-icon{\\r\\n    width: 45px;\\r\\n    height: 45px;\\r\\n    border: 1.5px solid white;\\r\\n    border-radius: 50%;\\r\\n}\\r\\n\\r\\n.history__wind {\\r\\n    width: 190px;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://weather/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== \"string\") {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://weather/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/img/background.jpg":
/*!********************************!*\
  !*** ./src/img/background.jpg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"71090cf1135ae64a375c09082082772d.jpg\");\n\n//# sourceURL=webpack://weather/./src/img/background.jpg?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://weather/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\nconst test = /[0-9]/g\r\n// const _ = require('lodash');\r\n;\r\nconst { printWeather } = __webpack_require__ (/*! ./printWeather */ \"./src/printWeather.js\")\r\n\r\n\r\nfunction HistoryObject (data) {\r\n    this.location = `${data.location.country}, ${data.location.region}`;\r\n    this.temperature = data.current.temperature;\r\n    this.windDir = data.current.wind_dir;\r\n    this.windSpeed = data.current.wind_speed;\r\n    const icon = data.current.weather_icons[0];\r\n    this.icon = icon;\r\n    this.time = data.location.localtime.slice(11, 16);\r\n    this.pressure = data.current.pressure;\r\n    this.feelslike = data.current.feelslike;\r\n    this.discription = data.current.weather_descriptions;\r\n}\r\n\r\nlet history = []\r\n\r\nfunction setLocal (weather){\r\n    history.unshift(weather);\r\n\thistory.length = 5\r\n\tlocalStorage.setItem('history', JSON.stringify(history))\r\n}\r\n\r\nfunction getLocal () {\r\n    if(localStorage.getItem('history')) {\r\n        history = JSON.parse(localStorage.getItem('history'))\r\n    }\r\n}\r\ngetLocal()\r\n\r\n\r\n\r\nconst fetchAPI = (coord) => {\r\n    const city =  document.querySelector('.header__input--city').value || coord;\r\n    if (!city.match(test)) {\r\n        fetch(`http://api.weatherstack.com/current?access_key=8b381b83f1d5a8436bbb94c6d780f9e4&query=${city}`)\r\n            .then(data => data.json())\r\n            .then(data => {\r\n                const town = new HistoryObject(data)\r\n                printWeather(town)\r\n                setLocal(town)\r\n                console.log(history);\r\n            })    \r\n    } \r\n}\r\n\r\nfunction createHistory () {\r\n    history.forEach(i => {\r\n        document.querySelector('.history__ul').insertAdjacentHTML('beforeend',`<li class=\"history__li\">\r\n                                                                                <p class=\"history__name border\">${i.location}</p>\r\n                                                                                <p class=\"history__temperature border\">${i.temperature} &#8451;</p>\r\n                                                                                <p class=\"history__weather border\"><img src=\"${i.icon}\" class=\"history__weather-icon\"></p>\r\n                                                                                <p class=\"history__wind border\">${i.windSpeed} km/s ${i.windDir}</p>\r\n                                                                            </li>`)\r\n    })\r\n}\r\n\r\ndocument.querySelector('.header').addEventListener('click', e => {\r\n    if (e.target === document.querySelector('.my-weather__btn')) {\r\n        navigator.geolocation.getCurrentPosition(position => {\r\n            fetchAPI((`${position.coords.latitude.toFixed(4)  },${  position.coords.longitude.toFixed(4)}`))\r\n        });\r\n    }\r\n    if (e.target === document.querySelector('.header__btn')){\r\n        fetchAPI()\r\n        document.querySelector('.header__input--city').value = ''\r\n        document.querySelector('.header__input--country').value = ''\r\n    }\r\n    if (e.target === document.querySelector('.open-history-btn')){\r\n        document.querySelector('.history').classList.add('history__open')\r\n        document.querySelector('.history__wrap').classList.add('history__open')\r\n        createHistory()\r\n    }\r\n\r\n    if (e.target === document.querySelector('.open-notification-btn')){\r\n        localStorage.removeItem('disable')\r\n        document.querySelector('.notification').style.display = 'block'\r\n    }\r\n    if (e.target === document.querySelector('.clear-local-btn')) {\r\n        localStorage.removeItem('history')\r\n        location.reload() \r\n    }\r\n})\r\n\r\n\r\ndocument.querySelector('.header__input--city').addEventListener('keypress', e => {\r\n    if (e.key === 'Enter') {\r\n        fetchAPI()\r\n        document.querySelector('.header__input--city').value = ''\r\n        document.querySelector('.header__input--country').value = ''\r\n    }\r\n})\r\n\r\ndocument.querySelector('.header__input--country').addEventListener('keypress', e => {\r\n    if (e.key === 'Enter') {\r\n        fetchAPI()\r\n        document.querySelector('.header__input--city').value = ''\r\n        document.querySelector('.header__input--country').value = ''\r\n    }\r\n})\r\n\r\n\r\n// History\r\n\r\ndocument.querySelector('.history__close-btn').addEventListener('click', () => {\r\n    document.querySelector('.history').classList.remove('history__open')\r\n    document.querySelector('.history__wrap').classList.remove('history__open')\r\n    document.querySelector('.history__ul').innerHTML = ''\r\n})\r\n\r\n\r\n// Notification\r\n\r\n\r\nfunction createNotification (title, text, num) {\r\n    return ` <div class=\"notification__inform none a${num}\">\r\n                <h2 class=\"notification__title\">${num + 1}. ${title}</h2>\r\n                <p class=\"notification__text\">${text}</p>\r\n            </div>`\r\n}\r\n\r\nfunction openNotification (num, arr) {\r\n    if (document.getElementById(`${num}`).checked === true) {\r\n        document.querySelector(`.a${num}`).classList.remove('none')\r\n    } \r\n    arr.querySelectorAll('input[type=radio]').forEach(i => {\r\n        if (!i.checked) {\r\n            document.querySelector(`.a${i.id}`).classList.add('none')\r\n        }\r\n    })\r\n}\r\n\r\nfunction saveLocalStorage (num) {\r\n    localStorage.setItem('page', num)\r\n}\r\n\r\n\r\nfetch('./MOCK_DATA.json').then(response => response.json())\r\n    .then(data => {\r\n        for (let i = 0; i < data.length; i++) {\r\n            document.querySelector('.notification').innerHTML += createNotification(data[i].title, data[i].phrase, i)\r\n            document.querySelector('.pages').innerHTML +=`<input type = 'radio' id = '${i}' name = 'input'>`\r\n        }\r\n        const inputArr = document.querySelector('.pages');\r\n        if (localStorage.getItem('page')) {\r\n            openNotification(localStorage.getItem('page'), inputArr)\r\n        } else {\r\n            openNotification(0, inputArr)\r\n        }\r\n        \r\n        if (localStorage.getItem('disable') === 'true') {\r\n            document.querySelector('.notification').style.display = 'none'\r\n        }\r\n\r\n        document.querySelector('.notification').addEventListener('click', e =>{\r\n            if (e.target === document.querySelector('.notification__close-btn')) {\r\n                document.querySelector('.notification').style.display = 'none'\r\n            }\r\n            if (e.target === document.querySelector('input[type=radio]:checked')){\r\n                openNotification(e.target.id, inputArr)\r\n                saveLocalStorage(e.target.id)\r\n            }\r\n            if (e.target === document.querySelector('.left-btn')) {\r\n                let num = document.querySelector('input[type=radio]:checked').id - 1\r\n                if (num < 0) {\r\n                    num = inputArr.querySelectorAll('input').length - 1\r\n                }\r\n                openNotification(num, inputArr)\r\n                saveLocalStorage(num)\r\n            }\r\n            if (e.target === document.querySelector('.right-btn')) {\r\n                let numPlus = Number(document.querySelector('input[type=radio]:checked').id) + 1\r\n                if (numPlus + 1 > inputArr.querySelectorAll('input').length) {\r\n                    numPlus = 0\r\n                }\r\n                openNotification(numPlus, inputArr)\r\n                saveLocalStorage(numPlus)\r\n            }\r\n            if (e.target === (document.querySelector('.notification__disable'))) {\r\n                localStorage.setItem('disable', 'true')\r\n            }\r\n        })\r\n});\r\n\n\n//# sourceURL=webpack://weather/./src/index.js?");

/***/ }),

/***/ "./src/printWeather.js":
/*!*****************************!*\
  !*** ./src/printWeather.js ***!
  \*****************************/
/***/ ((module) => {

eval("function printWeather (data) {\r\n    document.querySelector('.main__title').innerHTML = data.location\r\n    document.querySelector('.main__temperature').innerHTML = `${data.temperature} &#8451;`\r\n    document.querySelector('.main__img').style.backgroundImage = `url(${data.icon})`\r\n    document.querySelector('.inform__time').innerHTML = `Time: ${data.time}`\r\n    document.querySelector('.inform__pressure').innerHTML = `Pressure: ${data.pressure} MB`\r\n    document.querySelector('.inform__feelslike').innerHTML = `Feels like: ${data.feelslike} &#8451;`\r\n    document.querySelector('.inform__weather').innerHTML = `Today is ${data.discription}`\r\n    document.querySelector('.wind-direction').innerHTML = `Wind: ${data.windDir}`\r\n    document.querySelector('.wind-speed').innerHTML = `Speed: ${data.windSpeed} km/h`\r\n}\r\n\r\nmodule.exports = { printWeather };\n\n//# sourceURL=webpack://weather/./src/printWeather.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;