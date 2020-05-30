(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

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

/***/ "./resources/js/components/Hooks/index.js":
/*!************************************************!*\
  !*** ./resources/js/components/Hooks/index.js ***!
  \************************************************/
/*! exports provided: UseUsers, UseUser, UseStatsCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User */ "./resources/js/components/Hooks/User.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UseUsers", function() { return _User__WEBPACK_IMPORTED_MODULE_0__["UseUsers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UseUser", function() { return _User__WEBPACK_IMPORTED_MODULE_0__["UseUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UseStatsCount", function() { return _User__WEBPACK_IMPORTED_MODULE_0__["UseStatsCount"]; });

/* harmony import */ var _UseEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UseEffect */ "./resources/js/components/Hooks/UseEffect.js");
/* empty/unused harmony star reexport */


/***/ }),

/***/ "./resources/js/views/Dashboard/Dashboard.js":
/*!***************************************************!*\
  !*** ./resources/js/views/Dashboard/Dashboard.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-chartjs-2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'reactstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/coreui-plugin-chartjs-custom-tooltips'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/coreui/dist/js/coreui-utilities'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_Hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Hooks */ "./resources/js/components/Hooks/index.js");
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var brandInfo = !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/coreui/dist/js/coreui-utilities'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('--info');
var brandSuccess = !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/coreui/dist/js/coreui-utilities'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('--success');
var brandWarning = !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/coreui/dist/js/coreui-utilities'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('--warning');
var brandDanger = !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/coreui/dist/js/coreui-utilities'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('--danger');
 //Random Numbers

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(80, 100));
  data3.push(65);
}

var mainChart = {
  labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
  datasets: [{
    label: 'My First dataset',
    backgroundColor: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/coreui/dist/js/coreui-utilities'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(brandInfo, 10),
    borderColor: brandInfo,
    pointHoverBackgroundColor: '#fff',
    borderWidth: 2,
    data: data1
  }, {
    label: 'My Second dataset',
    backgroundColor: 'transparent',
    borderColor: brandSuccess,
    pointHoverBackgroundColor: '#fff',
    borderWidth: 2,
    data: data2
  }, {
    label: 'My Third dataset',
    backgroundColor: 'transparent',
    borderColor: brandDanger,
    pointHoverBackgroundColor: '#fff',
    borderWidth: 1,
    borderDash: [8, 5],
    data: data3
  }]
};
var mainChartOpts = {
  tooltips: {
    enabled: false,
    custom: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/coreui-plugin-chartjs-custom-tooltips'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    intersect: true,
    mode: 'index',
    position: 'nearest',
    callbacks: {
      labelColor: function labelColor(tooltipItem, chart) {
        return {
          backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor
        };
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      gridLines: {
        drawOnChartArea: false
      }
    }],
    yAxes: [{
      ticks: {
        beginAtZero: true,
        maxTicksLimit: 5,
        stepSize: Math.ceil(250 / 5),
        max: 250
      }
    }]
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3
    }
  }
};

var Dashboard = /*#__PURE__*/function (_Component) {
  _inherits(Dashboard, _Component);

  var _super = _createSuper(Dashboard);

  function Dashboard(props) {
    var _this;

    _classCallCheck(this, Dashboard);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "loading", function () {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "animated fadeIn pt-1 text-center"
      }, "Loading...");
    });

    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    _this.onRadioBtnClick = _this.onRadioBtnClick.bind(_assertThisInitialized(_this));
    _this.state = {
      dropdownOpen: false,
      radioSelected: 2
    };
    return _this;
  }

  _createClass(Dashboard, [{
    key: "toggle",
    value: function toggle() {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    }
  }, {
    key: "onRadioBtnClick",
    value: function onRadioBtnClick(radioSelected) {
      this.setState({
        radioSelected: radioSelected
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "animated fadeIn"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'reactstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Hooks__WEBPACK_IMPORTED_MODULE_2__["UseStatsCount"], null)));
    }
  }]);

  return Dashboard;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ })

}]);