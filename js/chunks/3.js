(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/dequal/dist/dequal.mjs":
/*!*********************************************!*\
  !*** ./node_modules/dequal/dist/dequal.mjs ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return dequal; });
function dequal(foo, bar) {
	var ctor, len;
	if (foo === bar) return true;
	if (foo && bar && (ctor=foo.constructor) === bar.constructor) {
		if (ctor === Date) return foo.getTime() === bar.getTime();
		if (ctor === RegExp) return foo.toString() === bar.toString();
		if (ctor === Array && (len=foo.length) === bar.length) {
			while (len-- && dequal(foo[len], bar[len]));
			return len === -1;
		}
		if (ctor === Object) {
			if (Object.keys(foo).length !== Object.keys(bar).length) return false;
			for (len in foo) if (!(len in bar) || !dequal(foo[len], bar[len])) return false;
			return true;
		}
	}
	return foo !== foo && bar !== bar;
}


/***/ }),

/***/ "./node_modules/use-deep-compare-effect/dist/use-deep-compare-effect.esm.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/use-deep-compare-effect/dist/use-deep-compare-effect.esm.js ***!
  \**********************************************************************************/
/*! exports provided: default, useDeepCompareEffectNoCheck */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDeepCompareEffectNoCheck", function() { return useDeepCompareEffectNoCheck; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dequal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dequal */ "./node_modules/dequal/dist/dequal.mjs");



function checkDeps(deps) {
  if (!deps || !deps.length) {
    throw new Error('useDeepCompareEffect should not be used with no dependencies. Use React.useEffect instead.');
  }

  if (deps.every(isPrimitive)) {
    throw new Error('useDeepCompareEffect should not be used with dependencies that are all primitive values. Use React.useEffect instead.');
  }
}

function isPrimitive(val) {
  return val == null || /^[sbn]/.test(typeof val);
}

function useDeepCompareMemoize(value) {
  var ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef();

  if (!Object(dequal__WEBPACK_IMPORTED_MODULE_1__["default"])(value, ref.current)) {
    ref.current = value;
  }

  return ref.current;
}

function useDeepCompareEffect(callback, dependencies) {
  if (true) {
    checkDeps(dependencies);
  }

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(callback, useDeepCompareMemoize(dependencies));
}

function useDeepCompareEffectNoCheck(callback, dependencies) {
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(callback, useDeepCompareMemoize(dependencies));
}

/* harmony default export */ __webpack_exports__["default"] = (useDeepCompareEffect);



/***/ }),

/***/ "./resources/js/components/Base/Ui/Image.js":
/*!**************************************************!*\
  !*** ./resources/js/components/Base/Ui/Image.js ***!
  \**************************************************/
/*! exports provided: ImageViewer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageViewer", function() { return ImageViewer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var Image = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (_ref) {
  var style = _ref.style,
      src = _ref.src,
      alt = _ref.alt,
      onView = _ref.onView;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    onClick: function onClick() {
      return onView && setVisible(!visible);
    },
    style: _objectSpread(_objectSpread({}, {
      cursor: 'pointer'
    }), style),
    alt: alt,
    src: src,
    className: "img"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImageViewer, {
    onCancel: function onCancel(bool) {
      return setVisible(bool);
    },
    visible: visible,
    srcs: [src]
  }));
});
var ImageViewer = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (_ref2) {
  var srcs = _ref2.srcs,
      alt = _ref2.alt,
      visible = _ref2.visible,
      _onCancel = _ref2.onCancel;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    index: 0
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      state = _useState4[0],
      setState = _useState4[1];

  var url = state.url,
      index = state.index,
      isArray = state.isArray;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    visible: visible,
    onCancel: function onCancel() {
      return _onCancel(false);
    },
    footer: null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image, {
    src: srcs[index],
    alt: alt,
    style: {
      width: '100%',
      height: '100%'
    }
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./resources/js/components/Base/Ui/index.js":
/*!**************************************************!*\
  !*** ./resources/js/components/Base/Ui/index.js ***!
  \**************************************************/
/*! exports provided: Image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Image */ "./resources/js/components/Base/Ui/Image.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _Image__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./resources/js/views/Users/User.js":
/*!******************************************!*\
  !*** ./resources/js/views/Users/User.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dashboard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'reactstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_Base_Anim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Base/Anim */ "./resources/js/components/Base/Anim/index.js");
/* harmony import */ var _components_Hooks_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Hooks/User */ "./resources/js/components/Hooks/User.js");
/* harmony import */ var _components_Base_Ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Base/Ui */ "./resources/js/components/Base/Ui/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






 // import {user as userAsync} from '../../func/async/user'

var Image = function Image(_ref) {
  var removeImage = _ref.removeImage,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'images' : _ref$type,
      _ref$index = _ref.index,
      index = _ref$index === void 0 ? '' : _ref$index,
      url = _ref.url,
      alt = _ref.alt,
      loading = _ref.loading;
  var style = type === 'profile' ? {
    width: 200,
    height: 200
  } : {
    margin: 10,
    width: 50,
    height: 50
  };
  var margin = type === 'profile' ? {
    margin: '-210px 0 0 200px',
    fontWeight: '90px'
  } : {
    margin: '-58px 0 0 45px'
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'reactstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: "img text-center"
  }, loading === "".concat(type).concat(index) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Base_Anim__WEBPACK_IMPORTED_MODULE_2__["Overlay"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: _objectSpread(_objectSpread({}, style), {
      backgroundColor: 'grey'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Base_Ui__WEBPACK_IMPORTED_MODULE_4__["Image"], {
    onView: true,
    style: {
      width: '100%',
      height: '100%'
    },
    src: url,
    alt: alt
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    style: _objectSpread(_objectSpread({}, margin), {})
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    onClick: function onClick() {
      return removeImage({
        type: type,
        index: index
      });
    },
    className: "fa fa-close"
  }))));
};

var Dashboard = /*#__PURE__*/function (_PureComponent) {
  _inherits(Dashboard, _PureComponent);

  var _super = _createSuper(Dashboard);

  function Dashboard(props) {
    var _this;

    _classCallCheck(this, Dashboard);

    _this = _super.call(this, props);
    _this.state = {
      loading: true
    };
    return _this;
  }

  _createClass(Dashboard, [{
    key: "render",
    value: function render() {
      var _this$props$match$par,
          _this2 = this,
          _user$images,
          _user$images$avatar,
          _user$images2,
          _user$images2$images,
          _user$request;

      var _this$state = this.state,
          user = _this$state.user,
          loading = _this$state.loading,
          getUser = _this$state.getUser,
          verify = _this$state.verify,
          remove = _this$state.remove,
          suspend = _this$state.suspend,
          removeImage = _this$state.removeImage;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "animated fadeIn"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Hooks_User__WEBPACK_IMPORTED_MODULE_3__["UseUser"], {
        id: parseInt((_this$props$match$par = this.props.match.params) === null || _this$props$match$par === void 0 ? void 0 : _this$props$match$par.id),
        onUpdate: function onUpdate(_ref2) {
          var user = _ref2.user,
              loading = _ref2.loading,
              rest = _objectWithoutProperties(_ref2, ["user", "loading"]);

          return _this2.setState(_objectSpread({
            user: user,
            loading: loading
          }, rest));
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'reactstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null, loading !== false && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Base_Anim__WEBPACK_IMPORTED_MODULE_2__["Overlay"], null), !empty([user]) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'reactstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        className: "mb-1",
        lg: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'reactstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        className: "mb-3",
        sm: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image, {
        loading: loading,
        removeImage: removeImage,
        type: "profile",
        url: user === null || user === void 0 ? void 0 : (_user$images = user.images) === null || _user$images === void 0 ? void 0 : (_user$images$avatar = _user$images.avatar) === null || _user$images$avatar === void 0 ? void 0 : _user$images$avatar.photo,
        alt: user === null || user === void 0 ? void 0 : user.name
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'reactstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        sm: 12
      }, user === null || user === void 0 ? void 0 : (_user$images2 = user.images) === null || _user$images2 === void 0 ? void 0 : (_user$images2$images = _user$images2.images) === null || _user$images2$images === void 0 ? void 0 : _user$images2$images.map(function (_ref3, i) {
        var thumb = _ref3.thumb,
            photo = _ref3.photo;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image, {
          loading: loading,
          removeImage: removeImage,
          index: i,
          key: '' + i,
          url: photo,
          alt: user === null || user === void 0 ? void 0 : user.name
        });
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'reactstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        lg: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-user"
      }), " ", user === null || user === void 0 ? void 0 : user.name, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-birthday-cake"
      }), " ", user === null || user === void 0 ? void 0 : user.age), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-map-marker"
      }), " ", "".concat(user === null || user === void 0 ? void 0 : user.state, ", ").concat(user === null || user === void 0 ? void 0 : user.country)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-phone"
      }), " ", "+".concat(user === null || user === void 0 ? void 0 : user.phone_code).concat(user === null || user === void 0 ? void 0 : user.phone)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-calendar"
      }), " Member Since: ", moment__WEBPACK_IMPORTED_MODULE_5___default()(user === null || user === void 0 ? void 0 : user.createtime).format('LLL')), (user === null || user === void 0 ? void 0 : user.request) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-users"
      }), " Last Request: ", moment__WEBPACK_IMPORTED_MODULE_5___default()(user === null || user === void 0 ? void 0 : (_user$request = user.request) === null || _user$request === void 0 ? void 0 : _user$request.createtime).format('LLL')), (user === null || user === void 0 ? void 0 : user.suspend_time) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-pause"
      }), " Suspended Until: ", moment__WEBPACK_IMPORTED_MODULE_5___default()(user === null || user === void 0 ? void 0 : user.suspend_time).format('LLL')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'reactstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        onClick: remove,
        disabled: loading === 'delete',
        color: "danger"
      }, loading === 'delete' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'reactstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        size: "sm"
      }) : 'Delete'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'reactstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        onClick: function onClick() {
          return verify(!((user === null || user === void 0 ? void 0 : user.user_verfication) === 'yes'));
        },
        className: "ml-1",
        disabled: loading === 'verify',
        color: "warning"
      }, loading === 'verify' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'reactstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        size: "sm"
      }) : (user === null || user === void 0 ? void 0 : user.user_verfication) === 'yes' ? 'Unverify' : 'Verify'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'reactstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        onClick: function onClick() {
          return suspend(!(user === null || user === void 0 ? void 0 : user.suspend_time));
        },
        className: "ml-1",
        disabled: loading === 'suspend',
        color: "primary"
      }, loading === 'suspend' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'reactstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        size: "sm"
      }) : (user === null || user === void 0 ? void 0 : user.suspend_time) ? 'Unsuspend' : 'Suspend')))));
    }
  }]);

  return Dashboard;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);



/***/ })

}]);