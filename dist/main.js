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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _baseClass = __webpack_require__(1);

(function (global) {
    var debug = true;
    global.zhlux = {
        tasks: [],
        registerTask: function registerTask(task) {
            this.tasks.push(task);
        },
        dispatcher: function dispatcher(oldState, taskName, data) {
            var filterTasks = this.tasks.filter(function (item) {
                if (item.name === taskName) {
                    item.action(oldState, data);
                }
                return item.action;
            });
            if (!filterTasks instanceof Array) {
                console.error('error!param error!');
            } else if (filterTasks instanceof Array && filterTasks.length === 0) {
                if (debug) {
                    console.log('warning! ' + taskName + ' has no action !');
                }
            }
        }
    };
})(window);
zhlux.registerTask(new _baseClass.Task('add', new _baseClass.Action(function (oldState, data) {
    console.log({ name: oldState.name, age: oldState.age + data });
})));
zhlux.dispatcher({ name: 'jack', age: 15 }, 'add', 2);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Action = function Action(fn) {
    _classCallCheck(this, Action);

    this.exe = fn;
    return this.exe;
};

var Task = function Task() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Action();

    _classCallCheck(this, Task);

    this.name = name;
    this.action = action;
};

exports.Action = Action;
exports.Task = Task;

/***/ })
/******/ ]);