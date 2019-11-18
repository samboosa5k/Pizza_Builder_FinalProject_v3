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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/jaynephillips/webdevelopment/Pizza_Builder_FinalProject_v2/Pizza_Builder_Development/node_modules/axios/index.js'");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/builder/BurgerBuilder/Burger.css":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/components/builder/BurgerBuilder/Burger.css ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".Burger {\n    width: 100%;\n    margin: auto;\n    height: 250px;\n    overflow: scroll;\n    text-align: center;\n    font-weight: bold;\n    font-size: 1.2rem;\n}\n\n@media (max-width: 500px) and (max-height: 400px) {\n    .Burger {\n        width: 350px;\n        height: 300px;\n    }\n}\n\n@media (min-width: 500px) and (min-height: 401px) {\n    .Burger {\n        width: 450px;\n        height: 400px;\n    }\n}\n\n@media (min-width: 1000px) and (min-height: 700px) {\n    .Burger {\n        width: 700px;\n        height: 600px;\n    }\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/builder/BurgerBuilder/Controls/buildcontrol.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/components/builder/BurgerBuilder/Controls/buildcontrol.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".BuildControl {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n            align-items: center;\n    margin: 5px 0;\n}\n\n.BuildControl button {\n    display: block;\n    font: inherit;\n    padding: 5px;\n    margin: 0 5px;\n    width: 80px;\n    border: 1px solid #AA6817;\n    cursor: pointer;\n    outline: none;\n}\n\n.BuildControl button:disabled {\n    background-color: #AC9980;\n    border: 1px solid #7E7365;\n    color: #ccc;\n    cursor: default;\n}\n\n.BuildControl button:hover:disabled {\n    background-color: #AC9980;\n    color: #ccc;\n    cursor: not-allowed;\n}\n\n.Label {\n    padding: 10px;\n    font-weight: bold;\n    width: 80px;\n}\n\n.BuildControl .Less {  \n    background-color: #D39952;\n    color: white;\n}\n\n.BuildControl .More {\n    background-color: #8F5E1E;\n    color: white;\n}\n\n.BuildControl .Less:hover, .BuildControl .Less:active {  \n    background-color: #DAA972;\n    color: white;\n}\n\n.BuildControl .More:hover,.BuildControl .More:active {\n    background-color: #99703F;\n    color: white;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/builder/BurgerBuilder/Controls/buildcontrols.css":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/components/builder/BurgerBuilder/Controls/buildcontrols.css ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".BuildControls {\n    width: 100%;\n    background-color: #CF8F2E;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-flow: column;\n    -webkit-box-align: center;\n            align-items: center;\n    box-shadow: 0 2px 1px #ccc;\n    margin:a uto;\n    padding: 10px 0;\n\n}\n\n\n.OrderButton {\n    background-color: #DAD735;\n    outline: none;\n    cursor: pointer;\n    border: 1px solid #966909;\n    color: #966909;\n    font-family: inherit;\n    font-size: 1.2em;\n    padding: 15px 30px;\n    box-shadow: 2px 2px 2px #966909;\n}\n\n.OrderButton:hover, .OrderButton:active {\n    background-color: #A0DB41;\n    border: 1px solid #966909;\n    color: #966909;\n}\n\n.OrderButton:disabled {\n    background-color: #C7C6C6;\n    cursor: not-allowed;\n    border: 1px solid #ccc;\n    color: #888888;\n}\n\n.OrderButton:not(:disabled) {\n    -webkit-animation: enable 0.3s linear;\n            animation: enable 0.3s linear;\n}\n\n@-webkit-keyframes enable {\n    0% {\n        -webkit-transform: scale(1);\n                transform: scale(1);\n    }\n    60% {\n        -webkit-transform: scale(1.1);\n                transform: scale(1.1);\n    }\n    100% {\n        -webkit-transform: scale(1);\n                transform: scale(1);\n    }\n}\n\n@keyframes enable {\n    0% {\n        -webkit-transform: scale(1);\n                transform: scale(1);\n    }\n    60% {\n        -webkit-transform: scale(1.1);\n                transform: scale(1.1);\n    }\n    100% {\n        -webkit-transform: scale(1);\n                transform: scale(1);\n    }\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/builder/BurgerBuilder/Summary/backdrop.css":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/components/builder/BurgerBuilder/Summary/backdrop.css ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".Backdrop {\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    z-index: 100;\n    left: 0;\n    top: 0;\n    background-color: rgba(0, 0, 0, 0.5); \n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/builder/BurgerBuilder/Summary/button.css":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/components/builder/BurgerBuilder/Summary/button.css ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".Button {\n    background-color: transparent;\n    border: none;\n    color: black;\n    outline: none;\n    cursor: pointer;\n    font: inherit;\n    padding: 10px;\n    margin: 10px;\n    font-weight: bold;\n}\n\n.Button:first-of-type {\n    margin-left: 0;\n    padding-left: 0;\n}\n\n.Success {\n    color: #5C9210;\n}\n\n.Danger {\n    color: #944317;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/builder/BurgerBuilder/Summary/modal.css":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/components/builder/BurgerBuilder/Summary/modal.css ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".Modal {\n    position: fixed;\n    z-index: 500;\n    background-color: white;\n    width: 70%;\n    border: 1px solid #ccc;\n    box-shadow: 1px 1px 1px black;\n    padding: 16px;\n    left: 15%;\n    top: 30%;\n    box-sizing: border-box;\n    -webkit-transition: all 0.3s ease-out;\n    transition: all 0.3s ease-out;\n}\n\n@media (min-width: 600px) {\n    .Modal {\n        width: 500px;\n        left: calc(50% - 250px);\n    }\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/builder/BurgerBuilder/burgeringredient.css":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/components/builder/BurgerBuilder/burgeringredient.css ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".BreadBottom {\n    height: 13%;\n    width: 80%;\n    background: -webkit-gradient(linear, left top, left bottom, from(#F08E4A), to(#e27b36));\n    background: linear-gradient(#F08E4A, #e27b36);\n    border-radius: 0 0 30px 30px;\n    box-shadow: inset -15px 0 #c15711;\n    margin: 2% auto;\n}\n\n.BreadTop {\n    height: 20%;\n    width: 80%;\n    background: -webkit-gradient(linear, left top, left bottom, from(#bc581e), to(#e27b36));\n    background: linear-gradient(#bc581e, #e27b36);\n    border-radius: 50% 50% 0 0;\n    box-shadow: inset -15px 0 #c15711;\n    margin: 2% auto;\n    position: relative;\n}\n\n.Seeds1 {\n    width: 10%;\n    height: 15%;\n    position: absolute;\n    background-color: white;\n    left: 30%;\n    top: 50%;\n    border-radius: 40%;\n    -webkit-transform: rotate(-20deg);\n            transform: rotate(-20deg);\n    box-shadow: inset -2px -3px #c9c9c9;\n}\n\n.Seeds1:after {\n    content: \"\";\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    background-color: white;\n    left: -170%;\n    top: -260%;\n    border-radius: 40%;\n    -webkit-transform: rotate(60deg);\n            transform: rotate(60deg);\n    box-shadow: inset -1px 2px #c9c9c9;\n  }\n  \n.Seeds1:before {\n    content: \"\";\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    background-color: white;\n    left: 180%;\n    top: -50%;\n    border-radius: 40%;\n    -webkit-transform: rotate(60deg);\n            transform: rotate(60deg);\n    box-shadow: inset -1px -3px #c9c9c9;\n  }\n\n  .Seeds2 {\n    width: 10%;\n    height: 15%;\n    position: absolute;\n    background-color: white;\n    left: 64%;\n    top: 50%;\n    border-radius: 40%;\n    -webkit-transform: rotate(10deg);\n            transform: rotate(10deg);\n    box-shadow: inset -3px 0 #c9c9c9;\n  }\n  \n  .Seeds2:before {\n    content: \"\";\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    background-color: white;\n    left: 150%;\n    top: -130%;\n    border-radius: 40%;\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n    box-shadow: inset 1px 3px #c9c9c9;\n  }\n  \n\n.Meat {\n    width: 80%;\n    height: 8%;\n    background: -webkit-gradient(linear, left top, left bottom, from(#7f3608), to(#702e05));\n    background: linear-gradient(#7f3608, #702e05);\n    margin: 2% auto;\n    border-radius: 15px;\n}\n\n.Cheese {\n    width: 90%;\n    height: 4.5%;\n    margin: 2% auto;\n    background: -webkit-gradient(linear, left top, left bottom, from(#f4d004), to(#d6bb22));\n    background: linear-gradient(#f4d004, #d6bb22);\n    border-radius: 20px;\n}\n\n.Salad {\n    width: 85%;\n    height: 7%;\n    margin: 2% auto;\n    background: -webkit-gradient(linear, left top, left bottom, from(#228c1d), to(#91ce50));\n    background: linear-gradient(#228c1d, #91ce50);\n    border-radius: 20px;\n}\n\n.Bacon {\n    width: 80%;\n    height: 3%;\n    background: -webkit-gradient(linear, left top, left bottom, from(#bf3813), to(#c45e38));\n    background: linear-gradient(#bf3813, #c45e38);\n    margin: 2% auto;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/jaynephillips/webdevelopment/Pizza_Builder_FinalProject_v2/Pizza_Builder_Development/node_modules/css-loader/lib/css-base.js'");

/***/ }),

/***/ "./node_modules/lodash/lodash.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/lodash.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/jaynephillips/webdevelopment/Pizza_Builder_FinalProject_v2/Pizza_Builder_Development/node_modules/lodash/lodash.js'");

/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/jaynephillips/webdevelopment/Pizza_Builder_FinalProject_v2/Pizza_Builder_Development/node_modules/prop-types/index.js'");

/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!*****************************************!*\
  !*** ./node_modules/react-dom/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/jaynephillips/webdevelopment/Pizza_Builder_FinalProject_v2/Pizza_Builder_Development/node_modules/react-dom/index.js'");

/***/ }),

/***/ "./node_modules/react-router-dom/esm/react-router-dom.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-router-dom/esm/react-router-dom.js ***!
  \***************************************************************/
/*! exports provided: MemoryRouter, Prompt, Redirect, Route, Router, StaticRouter, Switch, __RouterContext, generatePath, matchPath, useHistory, useLocation, useParams, useRouteMatch, withRouter, BrowserRouter, HashRouter, Link, NavLink */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/jaynephillips/webdevelopment/Pizza_Builder_FinalProject_v2/Pizza_Builder_Development/node_modules/react-router-dom/esm/react-router-dom.js'");

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/jaynephillips/webdevelopment/Pizza_Builder_FinalProject_v2/Pizza_Builder_Development/node_modules/react/index.js'");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/jaynephillips/webdevelopment/Pizza_Builder_FinalProject_v2/Pizza_Builder_Development/node_modules/style-loader/lib/addStyles.js'");

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");
/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


__webpack_require__(/*! ./components/App */ "./resources/js/components/App.js");

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

var token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo'
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });

/***/ }),

/***/ "./resources/js/components/Admin.js":
/*!******************************************!*\
  !*** ./resources/js/components/Admin.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _admin_components_MainContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin_components/MainContent */ "./resources/js/components/admin_components/MainContent.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



/* import NavBar from './admin_components/NavBar'; */




var Admin =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Admin, _React$Component);

  function Admin(props) {
    var _this;

    _classCallCheck(this, Admin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Admin).call(this, props));
    _this.state = {
      token: '',
      status: '',
      apiResponse: '',
      content: '',
      error: ''
    };
    _this.loadAdmin = _this.loadAdmin.bind(_assertThisInitialized(_this));
    _this.menuClick = _this.menuClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Admin, [{
    key: "loadAdmin",
    value: function loadAdmin() {
      var _this2 = this;

      fetch('/management', {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + this.props.token.token,
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        _this2.setState({
          apiResponse: data
        });
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadAdmin();
    }
  }, {
    key: "menuClick",
    value: function menuClick(event) {
      event.preventDefault();
      console.log(event.target.id);
      this.setState({
        content: event.target.id
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
        from: "/login/",
        to: "/admin"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "menu-admin"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        id: "open-orders",
        className: "menu-admin__item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        to: "/admin/open-orders"
      }, "Open Orders")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        id: "past-orders",
        className: "menu-admin__item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        to: "/admin/past-orders"
      }, "Past Orders")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        id: "available-ingredients",
        className: "menu-admin__item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        to: "/admin/available-ingredients"
      }, "Available Ingredients")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        id: "registered-custoemrs",
        className: "menu-admin__item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        to: "/admin/registered-customers"
      }, "Regsitered Customers")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        id: "add-order",
        className: "menu-admin__item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        to: "/admin/add-order"
      }, "Add Order")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        id: "customer-portal",
        className: "menu-admin__item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/"
      }, "\u2192 Go to customer portal!"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        to: "/login",
        className: "menu-admin__logout",
        onClick: this.props.handleLogout
      }, "Logout babyyyy!")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
        path: "/admin/open-orders",
        render: function render(routeProps) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_admin_components_MainContent__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, routeProps, {
            content: "open-orders",
            token: _this3.props.token.token
          }));
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
        path: "/admin/past-orders",
        render: function render(routeProps) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_admin_components_MainContent__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, routeProps, {
            content: "past-orders",
            token: _this3.props.token.token
          }));
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
        path: "/admin/available-ingredients",
        render: function render(routeProps) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_admin_components_MainContent__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, routeProps, {
            content: "available-ingredients",
            token: _this3.props.token.token
          }));
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
        path: "/admin/registered-customers",
        render: function render(routeProps) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_admin_components_MainContent__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, routeProps, {
            content: "registered-customers",
            token: _this3.props.token.token
          }));
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
        path: "/admin/add-order",
        render: function render(routeProps) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_admin_components_MainContent__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, routeProps, {
            content: "add-order",
            token: _this3.props.token.token
          }));
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
        path: "/admin",
        render: function render(routeProps) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Welcome to the admin area home!");
        }
      }))));
    }
  }]);

  return Admin;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Admin);

if (document.getElementById('admin')) {
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Admin, null), document.getElementById('admin'));
}

/***/ }),

/***/ "./resources/js/components/AdminLogin.jsx":
/*!************************************************!*\
  !*** ./resources/js/components/AdminLogin.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Admin */ "./resources/js/components/Admin.js");
/* harmony import */ var _ErrorBoundary_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ErrorBoundary.jsx */ "./resources/js/components/ErrorBoundary.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var AdminLogin =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AdminLogin, _React$Component);

  function AdminLogin(props) {
    var _this;

    _classCallCheck(this, AdminLogin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AdminLogin).call(this, props));
    _this.state = {
      email: '',
      password: '',
      token: '',
      status: '',
      error: ''
    };
    _this.handleLogin = _this.handleLogin.bind(_assertThisInitialized(_this));
    _this.handleLogout = _this.handleLogout.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.getToken = _this.getToken.bind(_assertThisInitialized(_this));
    return _this;
  }
  /*
      COMPONENTDIDMOUNT explanation
      - When logging in, a token is stored in state, however the next time you navigate to
      this page, the login fetch is not done again and the state-token used for authentication down the line
      won't actually exist
      - This lifecycle will check for the token and put it in state if it exists
  */


  _createClass(AdminLogin, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        token: {
          token: this.getToken()
        }
      });
    }
    /*
        LOGIN & AUTH RELATED
    */

  }, {
    key: "handleLogin",
    value: function handleLogin(event) {
      var _this2 = this;

      event.preventDefault(); // Prevent form redirect

      if (this.state.status !== '') {
        this.setState({
          status: 'logged_out'
        }); //  If login details are invalid, stay logged out
      } else {
        fetch('/api/auth/login', {
          method: 'POST',
          withCredentials: true,
          credentials: 'include',
          headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'email': this.state.email,
            'password': this.state.password
          })
        }).then(function (response) {
          return response.json();
        }).then(function (data) {
          if (data['message'] !== 'Authorized') {
            // This is where we check if error comes back
            _this2.setState({
              error: data['error']
            }); // If an error comes back, state->error will be filled

          } else {
            _this2.setState({
              //  This is what will happen if log in is successful
              token: data,
              status: 'logged_in'
            });

            _this2.setToken(data.token);
          }
        });
      }
    }
  }, {
    key: "handleLogout",
    value: function handleLogout() {
      window.localStorage.removeItem('_token');
      this.setState({
        email: '',
        password: '',
        token: '',
        status: '',
        error: ''
      });
    }
    /*
        TOKEN RELATED
    */

  }, {
    key: "setToken",
    value: function setToken(token) {
      window.localStorage.setItem('_token', token);
    }
  }, {
    key: "getToken",
    value: function getToken() {
      return window.localStorage.getItem('_token');
    }
    /*
        FORM RELATED
    */

  }, {
    key: "handleChange",
    value: function handleChange(event) {
      var nam = event.target.name;
      var val = event.target.value;
      this.setState(_defineProperty({}, nam, val));
    }
  }, {
    key: "render",
    value: function render() {
      console.log('Step 2', 'AdminLogin.jsx reached, token is = ' + this.getToken()); // Weird login bug troubleshooting
      //  Below if-condition checks what to do if status is logged in, OR if

      if (this.state.status === 'logged_in' || window.localStorage.getItem('_token') !== null) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorBoundary_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Admin__WEBPACK_IMPORTED_MODULE_2__["default"], {
          token: this.state.token,
          handleLogout: this.handleLogout
        }));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "admin-login__wrapper"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
          className: "admin-login__header"
        }, "Admin Login"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
          className: "form-group admin-login__form",
          onSubmit: this.handleLogin
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          className: "admin-login__label",
          htmlFor: "email"
        }, "Email address:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "email",
          className: "admin-login__input",
          id: "email",
          name: "email",
          onChange: this.handleChange
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          className: "admin-login__label",
          htmlFor: "pwd"
        }, "Password:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "password",
          className: "admin-login__input",
          id: "password",
          name: "password",
          onChange: this.handleChange
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          type: "submit",
          className: "btn btn-default admin-login__button"
        }, "Submit"))));
      }
    }
  }]);

  return AdminLogin;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AdminLogin);

/***/ }),

/***/ "./resources/js/components/App.js":
/*!****************************************!*\
  !*** ./resources/js/components/App.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Home_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Home.jsx */ "./resources/js/components/Home.jsx");
/* harmony import */ var _AdminLogin_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AdminLogin.jsx */ "./resources/js/components/AdminLogin.jsx");
/* harmony import */ var _customer_components_NavBar_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer_components/NavBar.jsx */ "./resources/js/components/customer_components/NavBar.jsx");
/* harmony import */ var _ErrorBoundary_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ErrorBoundary.jsx */ "./resources/js/components/ErrorBoundary.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    _this.state = {
      ingredientProps: {
        "pizza_1": {
          "pizza_id": 2,
          "pizza_ingredients": [3, 4, 4, 5]
        }
      }
    };
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      console.log('Step 1', 'App.js reached'); // Weird login bug troubleshooting

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        path: "/login",
        render: function render(routeProps) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AdminLogin_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], routeProps);
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        path: "/admin",
        render: function render(routeProps) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AdminLogin_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], routeProps);
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        path: "/magic",
        render: function render(routeProps) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Home_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], routeProps);
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        exact: true,
        path: "/",
        render: function render(routeProps) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Home_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], routeProps);
        }
      }))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (App);

if (document.getElementById('app')) {
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.getElementById('app'));
}

/***/ }),

/***/ "./resources/js/components/ErrorBoundary.jsx":
/*!***************************************************!*\
  !*** ./resources/js/components/ErrorBoundary.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/* 
    Source: https://reactjs.org/docs/error-boundaries.html
*/


var ErrorBoundary =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ErrorBoundary, _React$Component);

  function ErrorBoundary(props) {
    var _this;

    _classCallCheck(this, ErrorBoundary);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ErrorBoundary).call(this, props));
    _this.state = {
      hasError: false
    };
    return _this;
  }

  _createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      console.log("there is an error");
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Something went wrong");
      }

      return this.props.children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return {
        hasError: true
      };
    }
  }]);

  return ErrorBoundary;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ErrorBoundary);

/***/ }),

/***/ "./resources/js/components/Home.jsx":
/*!******************************************!*\
  !*** ./resources/js/components/Home.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _customer_components_NavBar_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer_components/NavBar.jsx */ "./resources/js/components/customer_components/NavBar.jsx");
/* harmony import */ var _builder_BurgerBuilder_BurgerBuilder_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./builder/BurgerBuilder/BurgerBuilder.jsx */ "./resources/js/components/builder/BurgerBuilder/BurgerBuilder.jsx");
/* harmony import */ var _customer_components_FrontPage_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer_components/FrontPage.jsx */ "./resources/js/components/customer_components/FrontPage.jsx");
/* harmony import */ var _customer_components_Checkout_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer_components/Checkout.jsx */ "./resources/js/components/customer_components/Checkout.jsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var Home = function Home(_ref) {
  var match = _ref.match;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    "pizza_1": {
      "pizza_id": 2,
      "pizza_ingredients": [3, 4, 4, 5]
    }
  }),
      _useState2 = _slicedToArray(_useState, 2),
      ingredientProps = _useState2[0],
      setIngredientProps = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_customer_components_NavBar_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "builder-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/magic/builder",
    render: function render(routeProps) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_builder_BurgerBuilder_BurgerBuilder_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], routeProps);
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/home",
    render: function render(routeProps) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_customer_components_FrontPage_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], routeProps);
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/magic/checkout",
    render: function render(routeProps) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_customer_components_Checkout_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, routeProps, {
        ingredientProps: ingredientProps
      }));
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/magic",
    render: function render(routeProps) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_customer_components_FrontPage_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], routeProps);
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./resources/js/components/admin_components/Ingredients.jsx":
/*!******************************************************************!*\
  !*** ./resources/js/components/admin_components/Ingredients.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Ingredients =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Ingredients, _React$Component);

  function Ingredients(props) {
    var _this;

    _classCallCheck(this, Ingredients);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Ingredients).call(this, props));
    _this.state = {
      apiResponse: ''
    };
    return _this;
  }

  _createClass(Ingredients, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      fetch('/api/ingredients').then(function (response) {
        return response.json();
      }).then(function (data) {
        _this2.setState({
          apiResponse: data
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var apiResponse = 'Loading...';

      if (this.state.apiResponse !== '') {
        apiResponse = this.state.apiResponse.map(function (elem, index) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: index,
            className: "ingredients-single"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Name: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "ingredients-single__element"
          }, elem.name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Category: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "ingredients-single__element"
          }, elem.category)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Amount: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "ingredients-single__element"
          }, elem.amount, " ", elem.units)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Usage: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "ingredients-single__element"
          }, elem.unit_deduction, " ", elem.units)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Cost: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "ingredients-single__element"
          }, elem.unit_price)));
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, apiResponse);
    }
  }]);

  return Ingredients;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Ingredients);

/***/ }),

/***/ "./resources/js/components/admin_components/MainContent.jsx":
/*!******************************************************************!*\
  !*** ./resources/js/components/admin_components/MainContent.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Ingredients_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ingredients.jsx */ "./resources/js/components/admin_components/Ingredients.jsx");
/* harmony import */ var _Orders_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Orders.jsx */ "./resources/js/components/admin_components/Orders.jsx");
/* harmony import */ var _OrderCheckout_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OrderCheckout.jsx */ "./resources/js/components/admin_components/OrderCheckout.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var MainContent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MainContent, _React$Component);

  function MainContent(props) {
    _classCallCheck(this, MainContent);

    return _possibleConstructorReturn(this, _getPrototypeOf(MainContent).call(this, props));
  }

  _createClass(MainContent, [{
    key: "render",
    value: function render() {
      var _this = this;

      console.log('Step 3', 'MainContent.jsx reached, token is = ' + this.props.token); // Weird login bug troubleshooting

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mainContent-admin"
      }, function () {
        switch (_this.props.content) {
          case 'available-ingredients':
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Ingredients_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], null);
            break;

          case 'open-orders':
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Orders_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
              token: _this.props.token
            });
            break;

          case 'add-order':
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OrderCheckout_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null);
            break;

          default:
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, _this.props.content);
        }
      }());
    }
  }]);

  return MainContent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (MainContent);

/***/ }),

/***/ "./resources/js/components/admin_components/OrderCheckout.jsx":
/*!********************************************************************!*\
  !*** ./resources/js/components/admin_components/OrderCheckout.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var OrderCheckout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(OrderCheckout, _React$Component);

  function OrderCheckout(props) {
    var _this;

    _classCallCheck(this, OrderCheckout);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OrderCheckout).call(this, props));
    _this.state = {
      first_name: '',
      last_name: '',
      phone_number: '',
      street_and_housenumber: '',
      postcode: '',
      city: '',
      price: 10.25,
      csrf_token: ''
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(OrderCheckout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        csrf_token: document.getElementsByName('_token')[0].value
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault();
      fetch('/order/finalize', {
        method: 'POST',
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': this.state.csrf_token
        },
        body: JSON.stringify({
          'first_name': this.state.first_name,
          'last_name': this.state.last_name,
          'phone_number': this.state.phone_number,
          'street_and_housenumber': this.state.street_and_housenumber,
          'postcode': this.state.postcode,
          'city': this.state.city,
          'price': this.state.price
        })
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        console.log(data);
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      var nam = event.target.name;
      var val = event.target.value;
      this.setState(_defineProperty({}, nam, val));
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "admin-login__wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: "form-group admin-login__form",
        onSubmit: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "admin-login__label",
        htmlFor: "first_name"
      }, "First Name:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        className: "admin-login__input",
        id: "first_name",
        name: "first_name",
        onChange: this.handleChange
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "admin-login__label",
        htmlFor: "last_name"
      }, "Last Name:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        className: "admin-login__input",
        id: "last_name",
        name: "last_name",
        onChange: this.handleChange
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "admin-login__label",
        htmlFor: "phone_number"
      }, "Phone:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        className: "admin-login__input",
        id: "phone_number",
        name: "phone_number",
        onChange: this.handleChange
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "admin-login__label",
        htmlFor: "street_and_housenumber"
      }, "Street & House Nr.:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        className: "admin-login__input",
        id: "street_and_housenumber",
        name: "street_and_housenumber",
        onChange: this.handleChange
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "admin-login__label",
        htmlFor: "postcode"
      }, "Postcode:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        className: "admin-login__input",
        id: "postcode",
        name: "postcode",
        onChange: this.handleChange
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "admin-login__label",
        htmlFor: "city"
      }, "City:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        className: "admin-login__input",
        id: "city",
        name: "city",
        onChange: this.handleChange
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        className: "btn btn-default admin-login__button"
      }, "Submit"))));
    }
  }]);

  return OrderCheckout;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (OrderCheckout);

/***/ }),

/***/ "./resources/js/components/admin_components/Orders.jsx":
/*!*************************************************************!*\
  !*** ./resources/js/components/admin_components/Orders.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PopDetails_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PopDetails.jsx */ "./resources/js/components/admin_components/PopDetails.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Orders =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Orders, _React$Component);

  function Orders(props) {
    var _this;

    _classCallCheck(this, Orders);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Orders).call(this, props));
    _this.state = {
      apiResponse: '',
      orderItems: '',
      popContent: '',
      pop_id: '',
      pop_open: false
    };
    _this.popDetails = _this.popDetails.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Orders, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      fetch('http://127.0.0.1:8000/order/status/in_progress', {
        // FETCH -> all 'in_progress' orders
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + this.props.token,
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        _this2.setState({
          apiResponse: data.orders,
          orderItems: data.items
        });
      });
    }
  }, {
    key: "popDetails",
    value: function popDetails(event, id) {
      // For setting pop-up related state and ID
      event.preventDefault();
      var details = [];

      if (this.state.orderItems !== '') {
        this.state.orderItems.forEach(function (elem, index) {
          if (elem.order_id === id) details = [].concat(_toConsumableArray(details), [elem]); // Putting only relevant ingredients into array
        });
      }

      this.setState(function (prevState) {
        return {
          pop_open: !prevState.pop_open,
          pop_id: id,
          popContent: details
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var apiResponse = 'Loading...';
      var popContent = 'Loading...';

      if (this.state.pop_open === true) {
        popContent = this.state.popContent;
      }

      if (this.state.apiResponse !== '') {
        apiResponse = this.state.apiResponse.map(function (elem, index) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: index,
            className: "orders-single"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "orders-single__information"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Order ID: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "orders-single__element"
          }, elem.id)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Name: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "orders-single__element"
          }, elem.first_name, " ", elem.last_name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Ordered At: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "orders-single__element"
          }, elem.created_at))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "orders-single__bottom-menu"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: "#",
            onClick: function onClick(event) {
              _this3.popDetails(event, elem.id);
            },
            className: "orders-single__details-button nostyle-links"
          }, "Order Details")), _this3.state.pop_open === true && elem.id === _this3.state.pop_id && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PopDetails_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
            popContent: popContent
          }));
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, apiResponse);
    }
  }]);

  return Orders;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Orders);
/*
    Pizza where order_id === id
    pizza_order_ingredients where pizza_id = pizzas.pizza_id
*/

/***/ }),

/***/ "./resources/js/components/admin_components/PopDetails.jsx":
/*!*****************************************************************!*\
  !*** ./resources/js/components/admin_components/PopDetails.jsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: /Users/jaynephillips/webdevelopment/Pizza_Builder_FinalProject_v2/Pizza_Builder_Development/resources/js/components/admin_components/PopDetails.jsx: Cannot find module '@babel/core'\n    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:636:15)\n    at Function.Module._load (internal/modules/cjs/loader.js:562:25)\n    at Module.require (internal/modules/cjs/loader.js:692:17)\n    at require (/Users/jaynephillips/webdevelopment/Pizza_Builder_FinalProject_v2/Pizza_Builder_Development/node_modules/v8-compile-cache/v8-compile-cache.js:161:20)\n    at _core (/Users/jaynephillips/webdevelopment/Pizza_Builder_FinalProject_v2/Pizza_Builder_Development/node_modules/@babel/plugin-transform-template-literals/lib/index.js:19:16)\n    at PluginPass.TemplateLiteral (/Users/jaynephillips/webdevelopment/Pizza_Builder_FinalProject_v2/Pizza_Builder_Development/node_modules/@babel/plugin-transform-template-literals/lib/index.js:110:24)\n    at newFn (/Users/jaynephillips/webdevelopment/Pizza_Builder_FinalProject_v2/Pizza_Builder_Development/node_modules/@babel/traverse/lib/visitors.js:179:21)\n    at NodePath._call (/Users/jaynephillips/webdevelopment/Pizza_Builder_FinalProject_v2/Pizza_Builder_Development/node_modules/@babel/traverse/lib/path/context.js:53:20)\n    at NodePath.call (/Users/jaynephillips/webdevelopment/Pizza_Builder_FinalProject_v2/Pizza_Builder_Development/node_modules/@babel/traverse/lib/path/context.js:40:17)\n    at NodePath.visit (/Users/jaynephillips/webdevelopment/Pizza_Builder_FinalProject_v2/Pizza_Builder_Development/node_modules/@babel/traverse/lib/path/context.js:88:12)\n    at TraversalContext.visitQueue (/Users/jaynephillips/webdevelopment/Pizza_Builder_FinalProject_v2/Pizza_Builder_Development/node_modules/@babel/traverse/lib/context.js:112:16)\n    at TraversalContext.visitSingle (/Users/jaynephillips/webdevelopment/Pizza_Builder_FinalProject_v2/Pizza_Builder_Development/node_modules/@babel/traverse/lib/context.js:84:19)\n    at TraversalContext.visit (/Users/jaynephillips/webdevelopment/Pizza_Builder_FinalProject_v2/Pizza_Builder_Development/node_modules/@babel/traverse/lib/context.js:140:19)\n    at Function.traverse.node (/Users/jaynephillips/webdevelopment/Pizza_Builder_FinalProject_v2/Pizza_Builder_Development/node_modules/@babel/traverse/lib/index.js:80:17)\n    at NodePath.visit (/Users/jaynephillips/webdevelopment/Pizza_Builder_FinalProject_v2/Pizza_Builder_Development/node_modules/@babel/traverse/lib/path/context.js:95:18)\n    at TraversalContext.visitQueue (/Users/jaynephillips/webdevelopment/Pizza_Builder_FinalProject_v2/Pizza_Builder_Development/node_modules/@babel/traverse/lib/context.js:112:16)\n    at TraversalContext.visitSingle (/Users/jaynephillips/webdevelopment/Pizza_Builder_FinalProject_v2/Pizza_Builder_Development/node_modules/@babel/traverse/lib/context.js:84:19)\n    at TraversalContext.visit (/Users/jaynephillips/webdevelopment/Pizza_Builder_FinalProject_v2/Pizza_Builder_Development/node_modules/@babel/traverse/lib/context.js:140:19)\n    at Function.traverse.node (/Users/jaynephillips/webdevelopment/Pizza_Builder_FinalProject_v2/Pizza_Builder_Development/node_modules/@babel/traverse/lib/index.js:80:17)\n    at NodePath.visit (/Users/jaynephillips/webdevelopment/Pizza_Builder_FinalProject_v2/Pizza_Builder_Development/node_modules/@babel/traverse/lib/path/context.js:95:18)\n    at TraversalContext.visitQueue (/Users/jaynephillips/webdevelopment/Pizza_Builder_FinalProject_v2/Pizza_Builder_Development/node_modules/@babel/traverse/lib/context.js:112:16)\n    at TraversalContext.visitMultiple (/Users/jaynephillips/webdevelopment/Pizza_Builder_FinalProject_v2/Pizza_Builder_Development/node_modules/@babel/traverse/lib/context.js:79:17)\n    at TraversalContext.visit (/Users/jaynephillips/webdevelopment/Pizza_Builder_FinalProject_v2/Pizza_Builder_Development/node_modules/@babel/traverse/lib/context.js:138:19)\n    at Function.traverse.node (/Users/jaynephillips/webdevelopment/Pizza_Builder_FinalProject_v2/Pizza_Builder_Development/node_modules/@babel/traverse/lib/index.js:80:17)\n    at NodePath.visit (/Users/jaynephillips/webdevelopment/Pizza_Builder_FinalProject_v2/Pizza_Builder_Development/node_modules/@babel/traverse/lib/path/context.js:95:18)\n    at TraversalContext.visitQueue (/Users/jaynephillips/webdevelopment/Pizza_Builder_FinalProject_v2/Pizza_Builder_Development/node_modules/@babel/traverse/lib/context.js:112:16)\n    at TraversalContext.visitSingle (/Users/jaynephillips/webdevelopment/Pizza_Builder_FinalProject_v2/Pizza_Builder_Development/node_modules/@babel/traverse/lib/context.js:84:19)\n    at TraversalContext.visit (/Users/jaynephillips/webdevelopment/Pizza_Builder_FinalProject_v2/Pizza_Builder_Development/node_modules/@babel/traverse/lib/context.js:140:19)\n    at Function.traverse.node (/Users/jaynephillips/webdevelopment/Pizza_Builder_FinalProject_v2/Pizza_Builder_Development/node_modules/@babel/traverse/lib/index.js:80:17)\n    at NodePath.visit (/Users/jaynephillips/webdevelopment/Pizza_Builder_FinalProject_v2/Pizza_Builder_Development/node_modules/@babel/traverse/lib/path/context.js:95:18)\n    at TraversalContext.visitQueue (/Users/jaynephillips/webdevelopment/Pizza_Builder_FinalProject_v2/Pizza_Builder_Development/node_modules/@babel/traverse/lib/context.js:112:16)\n    at TraversalContext.visitMultiple (/Users/jaynephillips/webdevelopment/Pizza_Builder_FinalProject_v2/Pizza_Builder_Development/node_modules/@babel/traverse/lib/context.js:79:17)\n    at TraversalContext.visit (/Users/jaynephillips/webdevelopment/Pizza_Builder_FinalProject_v2/Pizza_Builder_Development/node_modules/@babel/traverse/lib/context.js:138:19)\n    at Function.traverse.node (/Users/jaynephillips/webdevelopment/Pizza_Builder_FinalProject_v2/Pizza_Builder_Development/node_modules/@babel/traverse/lib/index.js:80:17)\n    at NodePath.visit (/Users/jaynephillips/webdevelopment/Pizza_Builder_FinalProject_v2/Pizza_Builder_Development/node_modules/@babel/traverse/lib/path/context.js:95:18)\n    at TraversalContext.visitQueue (/Users/jaynephillips/webdevelopment/Pizza_Builder_FinalProject_v2/Pizza_Builder_Development/node_modules/@babel/traverse/lib/context.js:112:16)");

/***/ }),

/***/ "./resources/js/components/builder/BurgerBuilder/Burger.css":
/*!******************************************************************!*\
  !*** ./resources/js/components/builder/BurgerBuilder/Burger.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/postcss-loader/src??ref--6-2!./Burger.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/builder/BurgerBuilder/Burger.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/components/builder/BurgerBuilder/Burger.jsx":
/*!******************************************************************!*\
  !*** ./resources/js/components/builder/BurgerBuilder/Burger.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Burger_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Burger.css */ "./resources/js/components/builder/BurgerBuilder/Burger.css");
/* harmony import */ var _Burger_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Burger_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BurgerIngredient_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BurgerIngredient.jsx */ "./resources/js/components/builder/BurgerBuilder/BurgerIngredient.jsx");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }





var burger = function burger(props) {
  var transformerIngredients = Object.keys(props.ingredients).map(function (igKey) {
    return _toConsumableArray(Array(props.ingredients[igKey])).map(function (_, i) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BurgerIngredient_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: igKey + i,
        type: igKey
      });
    });
  }).reduce(function (arr, el) {
    return arr.concat(el);
  }, []);

  if (transformerIngredients.length === 0) {
    transformerIngredients = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Please start adding ingredients");
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Burger"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BurgerIngredient_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "bread-top"
  }), transformerIngredients, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BurgerIngredient_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "bread-bottom"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (burger);

/***/ }),

/***/ "./resources/js/components/builder/BurgerBuilder/BurgerBuilder.jsx":
/*!*************************************************************************!*\
  !*** ./resources/js/components/builder/BurgerBuilder/BurgerBuilder.jsx ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hoc_Aux_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hoc/Aux.jsx */ "./resources/js/components/builder/hoc/Aux.jsx");
/* harmony import */ var _Burger_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Burger.jsx */ "./resources/js/components/builder/BurgerBuilder/Burger.jsx");
/* harmony import */ var _Controls_BuildControls_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Controls/BuildControls.jsx */ "./resources/js/components/builder/BurgerBuilder/Controls/BuildControls.jsx");
/* harmony import */ var _Summary_Modal_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Summary/Modal.jsx */ "./resources/js/components/builder/BurgerBuilder/Summary/Modal.jsx");
/* harmony import */ var _Summary_DisplaySummary_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Summary/DisplaySummary.jsx */ "./resources/js/components/builder/BurgerBuilder/Summary/DisplaySummary.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.4
};

var BurgerBuilder =
/*#__PURE__*/
function (_Component) {
  _inherits(BurgerBuilder, _Component);

  // constructor(props) {
  //     super(props);
  //     this.state = {...}
  // }
  function BurgerBuilder(props) {
    var _this;

    _classCallCheck(this, BurgerBuilder);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BurgerBuilder).call(this, props));
    _this.state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      },
      totalPrice: 4,
      //base price
      purchasable: false,
      purchasing: false
    };
    _this.updatePurchaseState = _this.updatePurchaseState.bind(_assertThisInitialized(_this));
    _this.addIngredientHandler = _this.addIngredientHandler.bind(_assertThisInitialized(_this));
    _this.removeIngredientHandler = _this.removeIngredientHandler.bind(_assertThisInitialized(_this));
    _this.purchaseHandler = _this.purchaseHandler.bind(_assertThisInitialized(_this));
    _this.purchaseCancelHandler = _this.purchaseCancelHandler.bind(_assertThisInitialized(_this));
    _this.purchaseContinueHandler = _this.purchaseContinueHandler.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(BurgerBuilder, [{
    key: "updatePurchaseState",
    value: function updatePurchaseState(ingredients) {
      var sum = Object.keys(ingredients).map(function (igKey) {
        return ingredients[igKey];
      }).reduce(function (sum, el) {
        return sum + el;
      }, 0);
      this.setState({
        purchasable: sum > 0
      });
    }
  }, {
    key: "addIngredientHandler",
    value: function addIngredientHandler(type) {
      var oldCount = this.state.ingredients[type];
      var updatedCount = oldCount + 1;

      var updatedIngredients = _objectSpread({}, this.state.ingredients);

      updatedIngredients[type] = updatedCount;
      var priceAddition = INGREDIENT_PRICES[type];
      var oldPrice = this.state.totalPrice;
      var newPrice = oldPrice + priceAddition;
      this.setState({
        totalPrice: newPrice,
        ingredients: updatedIngredients
      });
      this.updatePurchaseState(updatedIngredients);
    }
  }, {
    key: "removeIngredientHandler",
    value: function removeIngredientHandler(type) {
      var oldCount = this.state.ingredients[type];

      if (oldCount <= 0) {
        return;
      }

      var updatedCount = oldCount - 1;

      var updatedIngredients = _objectSpread({}, this.state.ingredients);

      updatedIngredients[type] = updatedCount;
      var priceDeduction = INGREDIENT_PRICES[type];
      var oldPrice = this.state.totalPrice;
      var newPrice = oldPrice - priceDeduction;
      this.setState({
        totalPrice: newPrice,
        ingredients: updatedIngredients
      });
      this.updatePurchaseState(updatedIngredients);
    }
  }, {
    key: "purchaseHandler",
    value: function purchaseHandler() {
      this.setState({
        purchasing: true
      });
    }
  }, {
    key: "purchaseCancelHandler",
    value: function purchaseCancelHandler() {
      this.setState({
        purchasing: false
      });
    }
  }, {
    key: "purchaseContinueHandler",
    value: function purchaseContinueHandler() {
      // alert( 'You continue!' );
      var order = {
        ingredients: this.state.ingredients,
        price: this.state.totalPrice,
        //you would normally recalculate on the server
        customer: {
          name: 'Jayne Phillips',
          address: {
            street: 'Test street 1',
            zipCode: '12345'
          },
          email: 'test@test.com'
        }
      };
      fetch('/admin/open-orders', order, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({// "movie_id": this.state.movie_id,
          // "user_id": 1
        })
      }).then(function (response) {
        return console.log(response);
      }); // .then(this.setState({
      //     favorite: !this.state.favorite
      // }));
    }
  }, {
    key: "render",
    value: function render() {
      var disabledInfo = _objectSpread({}, this.state.ingredients);

      for (var key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0;
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Summary_Modal_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
        show: this.state.purchasing,
        modalClosed: this.purchaseCancelHandler
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Summary_DisplaySummary_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
        ingredients: this.state.ingredients,
        price: this.state.totalPrice,
        purchaseCancelled: this.purchaseCancelHandler,
        purchaseContinued: this.purchaseContinueHandler
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Burger_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        ingredients: this.state.ingredients
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Controls_BuildControls_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
        ingredientAdded: this.addIngredientHandler,
        ingredientRemoved: this.removeIngredientHandler,
        disabled: disabledInfo,
        purchasable: this.state.purchasable,
        ordered: this.purchaseHandler,
        price: this.state.totalPrice
      }));
    }
  }]);

  return BurgerBuilder;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (BurgerBuilder);

/***/ }),

/***/ "./resources/js/components/builder/BurgerBuilder/BurgerIngredient.jsx":
/*!****************************************************************************!*\
  !*** ./resources/js/components/builder/BurgerBuilder/BurgerIngredient.jsx ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _burgeringredient_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./burgeringredient.css */ "./resources/js/components/builder/BurgerBuilder/burgeringredient.css");
/* harmony import */ var _burgeringredient_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_burgeringredient_css__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var BurgerIngredient =
/*#__PURE__*/
function (_Component) {
  _inherits(BurgerIngredient, _Component);

  function BurgerIngredient() {
    _classCallCheck(this, BurgerIngredient);

    return _possibleConstructorReturn(this, _getPrototypeOf(BurgerIngredient).apply(this, arguments));
  }

  _createClass(BurgerIngredient, [{
    key: "render",
    value: function render() {
      var ingredient = null;

      switch (this.props.type) {
        case 'bread-bottom':
          ingredient = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "BreadBottom"
          });
          break;

        case 'bread-top':
          ingredient = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "BreadTop"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "Seeds1"
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "Seeds2"
          }));
          break;

        case 'meat':
          ingredient = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "Meat"
          });
          break;

        case 'cheese':
          ingredient = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "Cheese"
          });
          break;

        case 'bacon':
          ingredient = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "Bacon"
          });
          break;

        case 'salad':
          ingredient = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "Salad"
          });
          break;

        default:
          ingredient = null;
      }

      return ingredient;
    }
  }]);

  return BurgerIngredient;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

BurgerIngredient.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (BurgerIngredient);

/***/ }),

/***/ "./resources/js/components/builder/BurgerBuilder/Controls/BuildControl.jsx":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/builder/BurgerBuilder/Controls/BuildControl.jsx ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _buildcontrol_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buildcontrol.css */ "./resources/js/components/builder/BurgerBuilder/Controls/buildcontrol.css");
/* harmony import */ var _buildcontrol_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_buildcontrol_css__WEBPACK_IMPORTED_MODULE_1__);



var buildControl = function buildControl(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "BuildControl"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Label"
  }, props.label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "Less",
    onClick: props.removed,
    disabled: props.disabled
  }, "Less"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "More",
    onClick: props.added
  }, "More"));
};

/* harmony default export */ __webpack_exports__["default"] = (buildControl);

/***/ }),

/***/ "./resources/js/components/builder/BurgerBuilder/Controls/BuildControls.jsx":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/builder/BurgerBuilder/Controls/BuildControls.jsx ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _buildcontrols_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buildcontrols.css */ "./resources/js/components/builder/BurgerBuilder/Controls/buildcontrols.css");
/* harmony import */ var _buildcontrols_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_buildcontrols_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BuildControl_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BuildControl.jsx */ "./resources/js/components/builder/BurgerBuilder/Controls/BuildControl.jsx");



var controls = [{
  label: 'Salad',
  type: 'salad'
}, {
  label: 'Bacon',
  type: 'bacon'
}, {
  label: 'Cheese',
  type: 'cheese'
}, {
  label: 'Meat',
  type: 'meat'
}];

var buildControls = function buildControls(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "BuildControls"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Current Price: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, props.price.toFixed(2))), controls.map(function (ctrl) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BuildControl_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: ctrl.label,
      label: ctrl.label,
      added: function added() {
        return props.ingredientAdded(ctrl.type);
      },
      removed: function removed() {
        return props.ingredientRemoved(ctrl.type);
      },
      disabled: props.disabled[ctrl.type]
    });
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "OrderButton",
    disabled: !props.purchasable,
    onClick: props.ordered
  }, "ORDER NOW"));
};

/* harmony default export */ __webpack_exports__["default"] = (buildControls);

/***/ }),

/***/ "./resources/js/components/builder/BurgerBuilder/Controls/buildcontrol.css":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/builder/BurgerBuilder/Controls/buildcontrol.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/postcss-loader/src??ref--6-2!./buildcontrol.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/builder/BurgerBuilder/Controls/buildcontrol.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/components/builder/BurgerBuilder/Controls/buildcontrols.css":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/builder/BurgerBuilder/Controls/buildcontrols.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/postcss-loader/src??ref--6-2!./buildcontrols.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/builder/BurgerBuilder/Controls/buildcontrols.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/components/builder/BurgerBuilder/Summary/Backdrop.jsx":
/*!****************************************************************************!*\
  !*** ./resources/js/components/builder/BurgerBuilder/Summary/Backdrop.jsx ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _backdrop_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backdrop.css */ "./resources/js/components/builder/BurgerBuilder/Summary/backdrop.css");
/* harmony import */ var _backdrop_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_backdrop_css__WEBPACK_IMPORTED_MODULE_1__);



var backdrop = function backdrop(props) {
  return props.show ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Backdrop",
    onClick: props.clicked
  }) : null;
};

/* harmony default export */ __webpack_exports__["default"] = (backdrop);

/***/ }),

/***/ "./resources/js/components/builder/BurgerBuilder/Summary/Button.jsx":
/*!**************************************************************************!*\
  !*** ./resources/js/components/builder/BurgerBuilder/Summary/Button.jsx ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _button_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button.css */ "./resources/js/components/builder/BurgerBuilder/Summary/button.css");
/* harmony import */ var _button_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_button_css__WEBPACK_IMPORTED_MODULE_1__);



var button = function button(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "Button",
    onClick: props.clicked
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (button);

/***/ }),

/***/ "./resources/js/components/builder/BurgerBuilder/Summary/DisplaySummary.jsx":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/builder/BurgerBuilder/Summary/DisplaySummary.jsx ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.jsx */ "./resources/js/components/builder/BurgerBuilder/Summary/Button.jsx");
/* harmony import */ var _button_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button.css */ "./resources/js/components/builder/BurgerBuilder/Summary/button.css");
/* harmony import */ var _button_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_button_css__WEBPACK_IMPORTED_MODULE_2__);
 // import Aux from '../../../hoc/Aux.jsx';




var orderSummary = function orderSummary(props) {
  var ingredientSummary = Object.keys(props.ingredients).map(function (igKey) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: igKey
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      style: {
        textTransform: 'capitalize'
      }
    }, igKey), ": ", props.ingredients[igKey]);
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Your Order"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "A delicious burger with the following ingredients:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, ingredientSummary), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Total Price: ", props.price.toFixed(2))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Continue to Checkout?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "Danger",
    clicked: props.purchaseCancelled
  }, "CANCEL"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    clicked: props.purchaseContinued
  }, "CONTINUE"));
};

/* harmony default export */ __webpack_exports__["default"] = (orderSummary);

/***/ }),

/***/ "./resources/js/components/builder/BurgerBuilder/Summary/Modal.jsx":
/*!*************************************************************************!*\
  !*** ./resources/js/components/builder/BurgerBuilder/Summary/Modal.jsx ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modal_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.css */ "./resources/js/components/builder/BurgerBuilder/Summary/modal.css");
/* harmony import */ var _modal_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modal_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Backdrop_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Backdrop.jsx */ "./resources/js/components/builder/BurgerBuilder/Summary/Backdrop.jsx");

 // import Aux from '../../../hoc/Aux.jsx';



var modal = function modal(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Backdrop_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    show: props.show,
    clicked: props.modalClosed
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Modal",
    style: {
      transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
      opacity: props.show ? '1' : '0'
    }
  }, props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (modal);

/***/ }),

/***/ "./resources/js/components/builder/BurgerBuilder/Summary/backdrop.css":
/*!****************************************************************************!*\
  !*** ./resources/js/components/builder/BurgerBuilder/Summary/backdrop.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/postcss-loader/src??ref--6-2!./backdrop.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/builder/BurgerBuilder/Summary/backdrop.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/components/builder/BurgerBuilder/Summary/button.css":
/*!**************************************************************************!*\
  !*** ./resources/js/components/builder/BurgerBuilder/Summary/button.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/postcss-loader/src??ref--6-2!./button.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/builder/BurgerBuilder/Summary/button.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/components/builder/BurgerBuilder/Summary/modal.css":
/*!*************************************************************************!*\
  !*** ./resources/js/components/builder/BurgerBuilder/Summary/modal.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/postcss-loader/src??ref--6-2!./modal.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/builder/BurgerBuilder/Summary/modal.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/components/builder/BurgerBuilder/burgeringredient.css":
/*!****************************************************************************!*\
  !*** ./resources/js/components/builder/BurgerBuilder/burgeringredient.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/postcss-loader/src??ref--6-2!./burgeringredient.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/builder/BurgerBuilder/burgeringredient.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/components/builder/hoc/Aux.jsx":
/*!*****************************************************!*\
  !*** ./resources/js/components/builder/hoc/Aux.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var aux = function aux(props) {
  return props.children;
};

/* harmony default export */ __webpack_exports__["default"] = (aux);

/***/ }),

/***/ "./resources/js/components/customer_components/Checkout.jsx":
/*!******************************************************************!*\
  !*** ./resources/js/components/customer_components/Checkout.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Checkout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Checkout, _React$Component);

  function Checkout(props) {
    var _this;

    _classCallCheck(this, Checkout);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Checkout).call(this, props));
    _this.state = {
      first_name: '',
      last_name: '',
      phone_number: '',
      street_and_housenumber: '',
      postcode: '',
      city: '',
      price: 10.25,
      csrf_token: '',
      checkout_object: ''
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Checkout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        csrf_token: document.getElementsByName('_token')[0].value
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault();
      this.setState({
        checkout_object: {
          "first_name": this.state.first_name,
          "last_name": this.state.last_name,
          "phone_number": this.state.phone_number,
          "street_and_number": this.state.street_and_housenumber,
          "postcode": this.state.postcode,
          "city": this.state.city,
          "price": "make algorith, jasper",
          "order": this.props.ingredientProps
        }
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      var nam = event.target.name;
      var val = event.target.value;
      this.setState(_defineProperty({}, nam, val));
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "admin-login__wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          padding: 1 + "rem",
          backgroundColor: "white"
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "What comes from the pizza builder:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), JSON.stringify(this.props.ingredientProps)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: "form-group admin-login__form",
        onSubmit: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "admin-login__label",
        htmlFor: "first_name"
      }, "First Name:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        className: "admin-login__input",
        id: "first_name",
        name: "first_name",
        onChange: this.handleChange
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "admin-login__label",
        htmlFor: "last_name"
      }, "Last Name:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        className: "admin-login__input",
        id: "last_name",
        name: "last_name",
        onChange: this.handleChange
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "admin-login__label",
        htmlFor: "phone_number"
      }, "Phone:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        className: "admin-login__input",
        id: "phone_number",
        name: "phone_number",
        onChange: this.handleChange
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "admin-login__label",
        htmlFor: "street_and_housenumber"
      }, "Street & House Nr.:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        className: "admin-login__input",
        id: "street_and_housenumber",
        name: "street_and_housenumber",
        onChange: this.handleChange
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "admin-login__label",
        htmlFor: "postcode"
      }, "Postcode:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        className: "admin-login__input",
        id: "postcode",
        name: "postcode",
        onChange: this.handleChange
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "admin-login__label",
        htmlFor: "city"
      }, "City:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        className: "admin-login__input",
        id: "city",
        name: "city",
        onChange: this.handleChange
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        className: "btn btn-default admin-login__button"
      }, "Submit")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          padding: 1 + "rem",
          backgroundColor: "white"
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "What is sent to backend:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), JSON.stringify(this.state.checkout_object))));
    }
  }]);

  return Checkout;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Checkout);

/***/ }),

/***/ "./resources/js/components/customer_components/FrontPage.jsx":
/*!*******************************************************************!*\
  !*** ./resources/js/components/customer_components/FrontPage.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var FrontPage = function FrontPage(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      width: "100%",
      textAlign: "center"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "This is the home page"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Soon this will show the view created by Jayne & Adi")));
};

/* harmony default export */ __webpack_exports__["default"] = (FrontPage);

/***/ }),

/***/ "./resources/js/components/customer_components/NavBar.jsx":
/*!****************************************************************!*\
  !*** ./resources/js/components/customer_components/NavBar.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");



var NavBar = function NavBar(_ref) {
  var match = _ref.match;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "menu-customer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "menu-customer__block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    id: "home",
    className: "menu-customer__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    activeStyle: {
      color: "red"
    },
    to: "/home"
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    id: "builder",
    className: "menu-customer__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    activeStyle: {
      color: "red"
    },
    to: "/magic/builder"
  }, "Build a Pizza")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    id: "about",
    className: "menu-customer__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    activeStyle: {
      color: "red"
    },
    to: "/magic/about"
  }, "About")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    id: "contact",
    className: "menu-customer__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    activeStyle: {
      color: "red"
    },
    to: "/magic/contact"
  }, "Contact")))));
};

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/css-loader/index.js):\nModuleBuildError: Module build failed: Error: ENOENT: no such file or directory, open '/Users/jaynephillips/webdevelopment/Pizza_Builder_FinalProject_v2/Pizza_Builder_Development/node_modules/css-loader/lib/css-base.js'\n    at runLoaders (/Users/jaynephillips/webdevelopment/Pizza_Builder_FinalProject_v2/Pizza_Builder_Development/node_modules/webpack/lib/NormalModule.js:316:20)\n    at /Users/jaynephillips/webdevelopment/Pizza_Builder_FinalProject_v2/Pizza_Builder_Development/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /Users/jaynephillips/webdevelopment/Pizza_Builder_FinalProject_v2/Pizza_Builder_Development/node_modules/loader-runner/lib/LoaderRunner.js:203:19\n    at process.nextTick (/Users/jaynephillips/webdevelopment/Pizza_Builder_FinalProject_v2/Pizza_Builder_Development/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:85:15)\n    at process._tickCallback (internal/process/next_tick.js:61:11)");

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/jaynephillips/webdevelopment/Pizza_Builder_FinalProject_v2/Pizza_Builder_Development/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /Users/jaynephillips/webdevelopment/Pizza_Builder_FinalProject_v2/Pizza_Builder_Development/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });