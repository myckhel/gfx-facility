(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./resources/js/components/Hooks/UseEffect.js":
/*!****************************************************!*\
  !*** ./resources/js/components/Hooks/UseEffect.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var use_deep_compare_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! use-deep-compare-effect */ "./node_modules/use-deep-compare-effect/dist/use-deep-compare-effect.esm.js");


/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (_ref) {
  var _ref$watches = _ref.watches,
      watches = _ref$watches === void 0 ? [] : _ref$watches,
      onUpdate = _ref.onUpdate,
      unMount = _ref.unMount;
  Object(use_deep_compare_effect__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
    onUpdate && onUpdate();
    return function () {
      return unMount && unMount();
    };
  }, watches);
  return null;
}));

/***/ }),

/***/ "./resources/js/components/Hooks/User.js":
/*!***********************************************!*\
  !*** ./resources/js/components/Hooks/User.js ***!
  \***********************************************/
/*! exports provided: UseUsers, UseUser, UseStatsCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UseUsers", function() { return UseUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UseUser", function() { return UseUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UseStatsCount", function() { return UseStatsCount; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-chartjs-2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'reactstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/coreui-plugin-chartjs-custom-tooltips'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/coreui/dist/js/coreui-utilities'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/hooks */ "./resources/js/redux/hooks.js");
/* harmony import */ var _UseEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UseEffect */ "./resources/js/components/Hooks/UseEffect.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







 // import {UseEffect} from 'react-class-component-hooks'


var UseUsers = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (_ref) {
  var _onUpdate = _ref.onUpdate;

  var _useUsers = Object(_redux_hooks__WEBPACK_IMPORTED_MODULE_2__["useUsers"])(),
      users = _useUsers.users,
      loading = _useUsers.loading,
      rest = _objectWithoutProperties(_useUsers, ["users", "loading"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UseEffect__WEBPACK_IMPORTED_MODULE_3__["default"], {
    watches: [users, loading],
    onUpdate: function onUpdate() {
      return _onUpdate(_objectSpread({
        users: users,
        loading: loading
      }, rest));
    }
  });
});
var UseUser = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (_ref2) {
  var id = _ref2.id,
      _onUpdate2 = _ref2.onUpdate;

  var _useUser = Object(_redux_hooks__WEBPACK_IMPORTED_MODULE_2__["useUser"])(id),
      user = _useUser.user,
      loading = _useUser.loading,
      rest = _objectWithoutProperties(_useUser, ["user", "loading"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UseEffect__WEBPACK_IMPORTED_MODULE_3__["default"], {
    watches: [user, loading],
    onUpdate: function onUpdate() {
      return _onUpdate2(_objectSpread({
        user: user,
        loading: loading
      }, rest));
    }
  });
});
var brandPrimary = !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/coreui/dist/js/coreui-utilities'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('--primary');
var brandInfo = !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/coreui/dist/js/coreui-utilities'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('--info');
var month_tree = {};
var day_tree = {};
var week_tree = {};
var hour_tree = {};

var getMonths = function getMonths() {
  var months = [];

  for (var i = 0; i < 7; i++) {
    var month = moment__WEBPACK_IMPORTED_MODULE_4___default()().subtract(i, 'months');
    month_tree[month.format('M')] = 6 - i;
    months.push(month.format('MMMM'));
  }

  return months.reverse();
};

var getHours = function getHours() {
  var hours = [];

  for (var i = 0; i < 7; i++) {
    var hour = moment__WEBPACK_IMPORTED_MODULE_4___default()().subtract(i, 'hours');
    hour_tree[hour.format('H')] = 6 - i;
    hours.push(hour.format('HH') + ':00');
  }

  return hours.reverse();
};

var getDays = function getDays() {
  var days = [];

  for (var i = 0; i < 7; i++) {
    var day = moment__WEBPACK_IMPORTED_MODULE_4___default()().subtract(i, 'days');
    day_tree[day.day()] = 6 - i;
    days.push(day.format('dddd'));
  }

  return days.reverse();
};

var getWeeks = function getWeeks() {
  var weeks = [];

  for (var i = 0; i < 16; i++) {
    var week = moment__WEBPACK_IMPORTED_MODULE_4___default()().subtract(i, 'weeks');
    week_tree[week.format('W')] = 15 - i;
    weeks.push('Week ' + week.format('WW'));
  }

  return weeks.reverse();
}; // Card Chart 1


var cardChartData1 = {
  labels: getMonths(),
  datasets: [{
    label: 'Monthly Users',
    backgroundColor: brandPrimary,
    borderColor: 'rgba(255,255,255,.55)',
    data: [0, 0, 0, 0, 0, 0, 0]
  }]
}; // Card Chart 2

var cardChartData2 = {
  labels: getHours(),
  datasets: [{
    label: 'Hourly Users',
    backgroundColor: brandInfo,
    borderColor: 'rgba(255,255,255,.55)',
    data: [0, 0, 0, 0, 0, 0, 0]
  }]
}; // Card Chart 3

var cardChartData3 = {
  labels: getDays(),
  datasets: [{
    label: 'Daily Users',
    backgroundColor: 'rgba(255,255,255,.2)',
    borderColor: 'rgba(255,255,255,.55)',
    data: [0, 0, 0, 0, 0, 0, 0]
  }]
}; // Card Chart 4

var cardChartData4 = {
  labels: getWeeks(),
  datasets: [{
    label: 'Monthly Users',
    backgroundColor: 'rgba(255,255,255,.3)',
    borderColor: 'transparent',
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  }]
};
var cardChartOpts1 = {
  tooltips: {
    enabled: false,
    custom: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/coreui-plugin-chartjs-custom-tooltips'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  },
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      gridLines: {
        color: 'transparent',
        zeroLineColor: 'transparent'
      },
      ticks: {
        fontSize: 2,
        fontColor: 'transparent'
      }
    }],
    yAxes: [{
      display: false,
      ticks: {
        display: false,
        min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
        max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5
      }
    }]
  },
  elements: {
    line: {
      borderWidth: 1
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4
    }
  }
};
var cardChartOpts2 = {
  tooltips: {
    enabled: false,
    custom: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/coreui-plugin-chartjs-custom-tooltips'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  },
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      gridLines: {
        color: 'transparent',
        zeroLineColor: 'transparent'
      },
      ticks: {
        fontSize: 2,
        fontColor: 'transparent'
      }
    }],
    yAxes: [{
      display: false,
      ticks: {
        display: false,
        min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
        max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5
      }
    }]
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4
    }
  }
};
var cardChartOpts3 = {
  tooltips: {
    enabled: false,
    custom: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/coreui-plugin-chartjs-custom-tooltips'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  },
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      display: false
    }],
    yAxes: [{
      display: false
    }]
  },
  elements: {
    line: {
      borderWidth: 2
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4
    }
  }
};
var cardChartOpts4 = {
  tooltips: {
    enabled: false,
    custom: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/coreui-plugin-chartjs-custom-tooltips'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  },
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      display: false,
      barPercentage: 0.6
    }],
    yAxes: [{
      display: false
    }]
  }
};
var UseStatsCount = function UseStatsCount(_ref3) {
  _objectDestructuringEmpty(_ref3);

  var _useMergeState = Object(_redux_hooks__WEBPACK_IMPORTED_MODULE_2__["useMergeState"])({
    data1: cardChartData1,
    options1: cardChartOpts1,
    data2: cardChartData2,
    options2: cardChartOpts2,
    data3: cardChartData3,
    options3: cardChartOpts3,
    data4: cardChartData4,
    options4: cardChartOpts4,
    dropdownOpen: false,
    radioSelected: 2
  }),
      _useMergeState2 = _slicedToArray(_useMergeState, 2),
      state = _useMergeState2[0],
      setState = _useMergeState2[1];

  var dropdownOpen = state.dropdownOpen,
      radioSelected = state.radioSelected,
      data1 = state.data1,
      options1 = state.options1,
      data2 = state.data2,
      options2 = state.options2,
      data3 = state.data3,
      options3 = state.options3,
      data4 = state.data4,
      options4 = state.options4;

  var _useStatsCount = Object(_redux_hooks__WEBPACK_IMPORTED_MODULE_2__["useStatsCount"])(),
      today = _useStatsCount.today,
      week = _useStatsCount.week,
      count = _useStatsCount.count,
      month = _useStatsCount.month,
      loading = _useStatsCount.loading;

  var _useAnalysis = Object(_redux_hooks__WEBPACK_IMPORTED_MODULE_2__["useAnalysis"])(),
      hours = _useAnalysis.hours,
      weeks = _useAnalysis.weeks,
      days = _useAnalysis.days,
      months = _useAnalysis.months,
      analLoading = _useAnalysis.loading;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!empty([months])) {
      var newdata1 = data1;
      var newoptions1 = options1;
      var newdata2 = data2;
      var newoptions2 = options2;
      var newdata3 = data3;
      var newoptions3 = options3;
      var newdata4 = data4;
      var newoptions4 = options4;
      months.map(function (_ref4) {
        var month = _ref4.month,
            count = _ref4.count;
        return newdata1.datasets[0].data[month_tree[month]] = count;
      });
      newoptions1.scales.yAxes[0].ticks = {
        display: false,
        min: Math.min.apply(Math, newdata1.datasets[0].data) - 5,
        max: Math.max.apply(Math, newdata1.datasets[0].data) + 5
      };
      hours.map(function (_ref5) {
        var hour = _ref5.hour,
            count = _ref5.count;
        return newdata2.datasets[0].data[hour_tree[hour]] = count;
      });
      newoptions2.scales.yAxes[0].ticks = {
        display: false,
        min: Math.min.apply(Math, newdata2.datasets[0].data) - 5,
        max: Math.max.apply(Math, newdata2.datasets[0].data) + 5
      };
      days.map(function (_ref6) {
        var day = _ref6.day,
            count = _ref6.count;
        return newdata3.datasets[0].data[day_tree[day]] = count;
      });
      newoptions3.scales.yAxes[0].ticks = {
        display: false,
        min: Math.min.apply(Math, newdata3.datasets[0].data) - 5,
        max: Math.max.apply(Math, newdata3.datasets[0].data) + 5
      };
      weeks.map(function (_ref7) {
        var week = _ref7.week,
            count = _ref7.count;
        return newdata4.datasets[0].data[week_tree[week]] = count;
      });
      newoptions4.scales.yAxes[0].ticks = {
        display: false,
        min: Math.min.apply(Math, newdata4.datasets[0].data) - 5,
        max: Math.max.apply(Math, newdata4.datasets[0].data) + 5
      };
      setState({
        data1: newdata1,
        options1: newoptions1,
        data2: newdata2,
        options2: newoptions2,
        data3: newdata3,
        options3: newoptions3,
        data4: newdata4,
        options4: newoptions4
      });
    }
  }, [months]);

  var display = function display(text) {
    return loading ? 'loading...' : text;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'reactstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    xs: "12",
    sm: "6",
    lg: "3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'reactstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: "text-white bg-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'reactstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: "pb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-value"
  }, display(count)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Total Users")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart-wrapper mx-3",
    style: {
      height: '70px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-chartjs-2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    redraw: true,
    data: data1,
    options: options1,
    height: 70
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'reactstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    xs: "12",
    sm: "6",
    lg: "3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'reactstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: "text-white bg-primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'reactstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: "pb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-value"
  }, display(today)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "New Users Today")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart-wrapper mx-3",
    style: {
      height: '70px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-chartjs-2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    redraw: true,
    data: data2,
    options: options2,
    height: 70
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'reactstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    xs: "12",
    sm: "6",
    lg: "3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'reactstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: "text-white bg-warning"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'reactstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: "pb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-value"
  }, display(week)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "New Users This Week")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart-wrapper",
    style: {
      height: '70px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-chartjs-2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    redraw: true,
    data: data3,
    options: options3,
    height: 70
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'reactstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    xs: "12",
    sm: "6",
    lg: "3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'reactstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: "text-white bg-danger"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'reactstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: "pb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-value"
  }, display(month)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "New Users This Month")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart-wrapper mx-3",
    style: {
      height: '70px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-chartjs-2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    redraw: true,
    data: data4,
    options: options4,
    height: 70
  })))));
};

/***/ }),

/***/ "./resources/js/redux/hooks.js":
/*!*************************************!*\
  !*** ./resources/js/redux/hooks.js ***!
  \*************************************/
/*! exports provided: useUsers, useUser, useStatsCount, useAnalysis, useMergeState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user/hooks */ "./resources/js/redux/user/hooks.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUsers", function() { return _user_hooks__WEBPACK_IMPORTED_MODULE_0__["useUsers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUser", function() { return _user_hooks__WEBPACK_IMPORTED_MODULE_0__["useUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useStatsCount", function() { return _user_hooks__WEBPACK_IMPORTED_MODULE_0__["useStatsCount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAnalysis", function() { return _user_hooks__WEBPACK_IMPORTED_MODULE_0__["useAnalysis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMergeState", function() { return _user_hooks__WEBPACK_IMPORTED_MODULE_0__["useMergeState"]; });



/***/ }),

/***/ "./resources/js/redux/user/hooks.js":
/*!******************************************!*\
  !*** ./resources/js/redux/user/hooks.js ***!
  \******************************************/
/*! exports provided: useUsers, useUser, useStatsCount, useAnalysis, useMergeState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUsers", function() { return useUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUser", function() { return useUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStatsCount", function() { return useStatsCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAnalysis", function() { return useAnalysis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMergeState", function() { return useMergeState; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
!(function webpackMissingModule() { var e = new Error("Cannot find module '../../func/async/user'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _func__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../func */ "./resources/js/func/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var useUsers = function useUsers() {
  var _useMergeState = useMergeState({
    users: [],
    loading: false
  }),
      _useMergeState2 = _slicedToArray(_useMergeState, 2),
      state = _useMergeState2[0],
      setState = _useMergeState2[1];

  var users = state.users,
      loading = state.loading;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    init();
  }, []);

  var init = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var params,
          _yield$usersAsync,
          data,
          rest,
          _args = arguments;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              params = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
              _context.prev = 1;
              setState({
                loading: true
              });
              _context.next = 5;
              return !(function webpackMissingModule() { var e = new Error("Cannot find module '../../func/async/user'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_objectSpread({
                pageSize: 100
              }, params));

            case 5:
              _yield$usersAsync = _context.sent;
              data = _yield$usersAsync.data;
              rest = _objectWithoutProperties(_yield$usersAsync, ["data"]);
              setState(_objectSpread({
                users: data
              }, rest));
              _context.next = 13;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](1);

            case 13:
              _context.prev = 13;
              setState({
                loading: false
              });
              return _context.finish(13);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 11, 13, 16]]);
    }));

    return function init() {
      return _ref.apply(this, arguments);
    };
  }();

  return _objectSpread(_objectSpread({}, state), {}, {
    init: init
  });
};
var useUser = function useUser(id) {
  var _useHistory = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useHistory"])(),
      push = _useHistory.push,
      goBack = _useHistory.goBack;

  var _useMergeState3 = useMergeState({
    user: {},
    loading: true
  }),
      _useMergeState4 = _slicedToArray(_useMergeState3, 2),
      state = _useMergeState4[0],
      setState = _useMergeState4[1];

  var user = state.user,
      loading = state.loading;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!id) {
      push('/404');
    } else {
      getUser();
    }
  }, []);

  var getUser = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var _user;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return !(function webpackMissingModule() { var e = new Error("Cannot find module '../../func/async/user'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(id);

            case 3:
              _user = _context2.sent;
              setState({
                user: _user
              });
              _context2.next = 10;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              console.log({
                e: _context2.t0
              });

            case 10:
              _context2.prev = 10;
              setState({
                loading: false
              });
              return _context2.finish(10);

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 7, 10, 13]]);
    }));

    return function getUser() {
      return _ref2.apply(this, arguments);
    };
  }();

  var remove = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      var confirmed, _yield$deleteAsync, status;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              confirmed = confirm('Are You Sure You Want To Delete ' + (user === null || user === void 0 ? void 0 : user.name));

              if (!confirmed) {
                _context3.next = 18;
                break;
              }

              _context3.prev = 2;
              setState({
                loading: 'delete'
              });
              _context3.next = 6;
              return !(function webpackMissingModule() { var e = new Error("Cannot find module '../../func/async/user'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(id);

            case 6:
              _yield$deleteAsync = _context3.sent;
              status = _yield$deleteAsync.status;
              goBack('/');
              Object(_func__WEBPACK_IMPORTED_MODULE_3__["Notify"])({
                type: 'success',
                msg: "User Deleted"
              });
              _context3.next = 15;
              break;

            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3["catch"](2);
              console.log({
                e: _context3.t0
              });

            case 15:
              _context3.prev = 15;
              setState({
                loading: false
              });
              return _context3.finish(15);

            case 18:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[2, 12, 15, 18]]);
    }));

    return function remove() {
      return _ref3.apply(this, arguments);
    };
  }();

  var verify = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(_verify) {
      var _yield$verifyAsync, user_verfication;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              setState({
                loading: 'verify'
              });
              _context4.next = 4;
              return !(function webpackMissingModule() { var e = new Error("Cannot find module '../../func/async/user'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(id, _verify);

            case 4:
              _yield$verifyAsync = _context4.sent;
              user_verfication = _yield$verifyAsync.user_verfication;
              update({
                user_verfication: user_verfication
              });
              Object(_func__WEBPACK_IMPORTED_MODULE_3__["Notify"])({
                type: 'success',
                msg: "User ".concat(_verify ? 'Verified' : 'Unverified')
              });
              _context4.next = 12;
              break;

            case 10:
              _context4.prev = 10;
              _context4.t0 = _context4["catch"](0);

            case 12:
              _context4.prev = 12;
              setState({
                loading: false
              });
              return _context4.finish(12);

            case 15:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 10, 12, 15]]);
    }));

    return function verify(_x) {
      return _ref4.apply(this, arguments);
    };
  }();

  var suspend = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(suspension) {
      var _yield$suspendAsync, suspend_time;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              setState({
                loading: 'suspend'
              });
              _context5.next = 4;
              return !(function webpackMissingModule() { var e = new Error("Cannot find module '../../func/async/user'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(id, suspension);

            case 4:
              _yield$suspendAsync = _context5.sent;
              suspend_time = _yield$suspendAsync.suspend_time;
              update({
                suspend_time: suspend_time
              });
              Object(_func__WEBPACK_IMPORTED_MODULE_3__["Notify"])({
                type: 'success',
                msg: "User ".concat(suspend_time ? 'Suspend' : 'Unsuspended')
              });
              _context5.next = 12;
              break;

            case 10:
              _context5.prev = 10;
              _context5.t0 = _context5["catch"](0);

            case 12:
              _context5.prev = 12;
              setState({
                loading: false
              });
              return _context5.finish(12);

            case 15:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 10, 12, 15]]);
    }));

    return function suspend(_x2) {
      return _ref5.apply(this, arguments);
    };
  }();

  var removeImage = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(_ref6) {
      var _ref6$index, index, type, _yield$removeImageAsy, ind, _user$images, _user$images$images, images, _user$images2;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _ref6$index = _ref6.index, index = _ref6$index === void 0 ? '' : _ref6$index, type = _ref6.type;
              _context6.prev = 1;
              setState({
                loading: "".concat(type).concat(index)
              });
              _context6.next = 5;
              return !(function webpackMissingModule() { var e = new Error("Cannot find module '../../func/async/user'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(id, {
                index: index,
                type: type
              });

            case 5:
              _yield$removeImageAsy = _context6.sent;
              ind = _yield$removeImageAsy.index;

              if (type === 'images') {
                images = (user === null || user === void 0 ? void 0 : (_user$images = user.images) === null || _user$images === void 0 ? void 0 : (_user$images$images = _user$images.images) === null || _user$images$images === void 0 ? void 0 : _user$images$images.filter(function (_, i) {
                  return i !== ind;
                })) || [];
                update({
                  images: {
                    avatar: user === null || user === void 0 ? void 0 : user.images.avatar,
                    images: images
                  }
                });
              } else {
                update({
                  images: {
                    avatar: null,
                    images: user === null || user === void 0 ? void 0 : (_user$images2 = user.images) === null || _user$images2 === void 0 ? void 0 : _user$images2.images
                  }
                });
              }

              Object(_func__WEBPACK_IMPORTED_MODULE_3__["Notify"])({
                type: 'success',
                msg: "Image ".concat('Deleted')
              });
              _context6.next = 13;
              break;

            case 11:
              _context6.prev = 11;
              _context6.t0 = _context6["catch"](1);

            case 13:
              _context6.prev = 13;
              setState({
                loading: false
              });
              return _context6.finish(13);

            case 16:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[1, 11, 13, 16]]);
    }));

    return function removeImage(_x3) {
      return _ref7.apply(this, arguments);
    };
  }();

  var update = function update() {
    var updates = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    lodash__WEBPACK_IMPORTED_MODULE_4___default.a.forOwn(updates, function (value, key) {
      user[key] = value;
    });

    setState({
      user: user
    });
  };

  return _objectSpread(_objectSpread({}, state), {}, {
    getUser: getUser,
    remove: remove,
    verify: verify,
    suspend: suspend,
    removeImage: removeImage
  });
};
var useStatsCount = function useStatsCount() {
  var _useMergeState5 = useMergeState({
    today: 0,
    week: 0,
    count: 0,
    month: 0,
    loading: false
  }),
      _useMergeState6 = _slicedToArray(_useMergeState5, 2),
      state = _useMergeState6[0],
      setState = _useMergeState6[1];

  var today = state.today,
      week = state.week,
      count = state.count,
      month = state.month,
      loading = state.loading;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    init();
  }, []);

  var init = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
      var _yield$statsCount, _today, _week, _count, _month;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              setState({
                loading: true
              });
              _context7.next = 4;
              return !(function webpackMissingModule() { var e = new Error("Cannot find module '../../func/async/user'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();

            case 4:
              _yield$statsCount = _context7.sent;
              _today = _yield$statsCount.today;
              _week = _yield$statsCount.week;
              _count = _yield$statsCount.count;
              _month = _yield$statsCount.month;
              setState({
                today: _today,
                week: _week,
                count: _count,
                month: _month
              });
              _context7.next = 15;
              break;

            case 12:
              _context7.prev = 12;
              _context7.t0 = _context7["catch"](0);
              console.log({
                e: _context7.t0
              });

            case 15:
              _context7.prev = 15;
              setState({
                loading: false
              });
              return _context7.finish(15);

            case 18:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[0, 12, 15, 18]]);
    }));

    return function init() {
      return _ref8.apply(this, arguments);
    };
  }();

  return {
    today: today,
    week: week,
    count: count,
    month: month,
    loading: loading
  };
};
var useAnalysis = function useAnalysis() {
  var _useMergeState7 = useMergeState({
    hours: [],
    weeks: [],
    months: [],
    days: [],
    loading: false
  }),
      _useMergeState8 = _slicedToArray(_useMergeState7, 2),
      state = _useMergeState8[0],
      setState = _useMergeState8[1];

  var weeks = state.weeks,
      months = state.months,
      days = state.days,
      hours = state.hours,
      loading = state.loading;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    init();
  }, []);

  var init = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
      var _yield$analysis, _weeks, _months, _days, _hours;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              setState({
                loading: true
              });
              _context8.next = 4;
              return !(function webpackMissingModule() { var e = new Error("Cannot find module '../../func/async/user'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();

            case 4:
              _yield$analysis = _context8.sent;
              _weeks = _yield$analysis.weeks;
              _months = _yield$analysis.months;
              _days = _yield$analysis.days;
              _hours = _yield$analysis.hours;
              setState({
                weeks: _weeks,
                months: _months,
                days: _days,
                hours: _hours
              });
              _context8.next = 15;
              break;

            case 12:
              _context8.prev = 12;
              _context8.t0 = _context8["catch"](0);
              console.log({
                e: _context8.t0
              });

            case 15:
              _context8.prev = 15;
              setState({
                loading: false
              });
              return _context8.finish(15);

            case 18:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[0, 12, 15, 18]]);
    }));

    return function init() {
      return _ref9.apply(this, arguments);
    };
  }();

  return {
    weeks: weeks,
    months: months,
    days: days,
    hours: hours,
    loading: loading
  };
};
var useMergeState = function useMergeState(initialState) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialState),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var setMergedState = function setMergedState(newState) {
    return setState(function (prevState) {
      return Object.assign({}, prevState, newState);
    });
  };

  return [state, setMergedState];
};

/***/ })

}]);