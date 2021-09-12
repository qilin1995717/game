(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["XJGame"] = factory();
	else
		root["XJGame"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "//i.gtimg.cn/ams-web/public/xj-game/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 91);
/******/ })
/************************************************************************/
/******/ ({

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InteractiveSDK; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = __webpack_require__(70),
    SDK_NAME = _require.SDK_NAME;

var InteractiveSDK = /*#__PURE__*/function () {
  function InteractiveSDK() {
    _classCallCheck(this, InteractiveSDK);

    this.TIMING = {
      LOADED: 'resource_loaded',
      START: 'game_start',
      END: 'game_end',
      TRANSFORM_AFTER_END: 'transform_after_game_end'
    };
    this.VISIBILITY = {
      VISIBLE: 'visible',
      HIDDEN: 'hidden'
    };
    this.declareSingletonInstance();
  } // 单例模式


  _createClass(InteractiveSDK, [{
    key: "declareSingletonInstance",
    value: function declareSingletonInstance() {
      if (!window[SDK_NAME]) {
        console.log('初始化SDK');
        window[SDK_NAME] = this;
      }

      return window[SDK_NAME];
    }
  }, {
    key: "getConfigAsync",
    // 获取游戏配置
    value: function getConfigAsync() {
      return Promise.resolve({});
    } // 获取环境要求

  }, {
    key: "getEnv",
    value: function getEnv() {
      return {
        mute: false,
        publicPath: '/TODO/需要根据当前路有动态配置'
      };
    } // 转化

  }, {
    key: "transform",
    value: function transform() {
      // TODO: 跟page-viewer的转化组件打通
      console.info('[XJ] 触发转化行为');
    } // jsapi，大多数为异步
    // 该方法必须依照对外的对接文档开发
    // 解析zip包： https://docs.qq.com/doc/DSGFMS3hGa3Z0T0py
    // ISV: https://docs.qq.com/doc/DU2hDSlBOc2FIeUpC

  }, {
    key: "invoke",
    value: function invoke() {
      var eventName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'nothing';
      var payload = arguments.length > 1 ? arguments[1] : undefined;
      var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
      var handler = this["".concat(eventName, "Handler")];

      if (!handler) {
        console.error("[XJ] \u6CA1\u6709\u5BF9\u5E94\u7684jsapi: ".concat(eventName));
        return;
      }

      ; // 是否有参数。若无，这第二个参数为回调

      var withPayload = typeof payload !== 'function';
      console.log('invoke arguments');
      console.log(payload);
      console.log(callback);
      handler({
        payload: withPayload ? payload : null,
        callback: withPayload ? callback : payload
      });
    } // 页面可以展示的以后执行，一般服务预加载的场景

  }, {
    key: "onshowHandler",
    value: function onshowHandler(_ref) {
      var callback = _ref.callback;
      // TODO: 根据流量差异，判断落地页是否已经展示
      callback();
    } // 落地页显示隐藏变更时执行

  }, {
    key: "visibilitychangeHandler",
    value: function visibilitychangeHandler(_ref2) {
      var callback = _ref2.callback;
      // TODO: 跟page-viewer的Visibility关联
      console.log(callback);
    } // 打点

  }, {
    key: "timingHandler",
    value: function timingHandler(_ref3) {
      var timing = _ref3.payload;

      if (!timing) {
        console.warn('[XJ] timing为空，跳过打点');
        return;
      } // TODO: 补充上报


      if (_typeof(timing) === 'object' && timing !== null && timing.custom) {
        console.info("[XJ] \u81EA\u5B9A\u4E49\u6253\u70B9\uFF0C\u503C\u4E3A: ".concat(timing.custom));
        return;
      }

      console.info("[XJ] \u5E38\u89C4\u6253\u70B9\uFF0C\u503C\u4E3A: ".concat(timing));
    }
  }]);

  return InteractiveSDK;
}();


;

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SDK_NAME", function() { return SDK_NAME; });
var SDK_NAME = 'XJ_INTERACTIVE_SDK';

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ParentClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var DebugInteractiveSDK = /*#__PURE__*/function (_InteractiveSDK) {
  _inherits(DebugInteractiveSDK, _InteractiveSDK);

  var _super = _createSuper(DebugInteractiveSDK);

  function DebugInteractiveSDK() {
    var _temp, _this;

    _classCallCheck(this, DebugInteractiveSDK);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _super.call.apply(_super, [this].concat(args)), _this.getEnv = window.__XJ_DEBUG_MOCK__.getEnv || _this.getEnv, _this.onshowHandler = window.__XJ_DEBUG_MOCK__.onshowHandler || _this.onshowHandler, _temp));
  }

  _createClass(DebugInteractiveSDK, [{
    key: "getConfigAsync",
    value: function getConfigAsync() {
      return fetch('./config.json').then(function (res) {
        return res.json();
      }).then(function (json) {
        console.info('[XJ] 获取播放端配置成功');
        return json.xjViewerConfig;
      }).catch(err => {
        console.log(err)
        return 201
      });
    }
  }, {
    key: "visibilitychangeHandler",
    value: function visibilitychangeHandler(_ref) {
      var callback = _ref.callback;
      window.addEventListener('visibilitychange', function () {
        var state = document.visibilityState || document.webkitVisibilityState;
        callback(state);
      });
    } // eslint-disable-next-line no-underscore-dangle

  }]);

  return DebugInteractiveSDK;
}(_ParentClass__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

new DebugInteractiveSDK();

/***/ })

/******/ })["default"];
});