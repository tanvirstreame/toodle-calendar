"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

require("./css/month-view.css");

var _utils = require("./utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Month = props => {
  var _props$calenderObject, _props$calenderObject2;

  const [days, setDays] = (0, _react.useState)( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null));
  (0, _react.useEffect)(() => {
    const dayList = [];

    for (let i = 0; i < props.numberOfMonth; i++) {
      if (i + 1 === 1) {
        dayList.push( /*#__PURE__*/_react.default.createElement("li", {
          key: i,
          className: "each-day first-day",
          onClick: () => props.handleClickDateChange(i + 1),
          style: {
            gridColumnStart: props.weekDayStart
          }
        }, i + 1));
      } else {
        dayList.push( /*#__PURE__*/_react.default.createElement("li", {
          key: i,
          className: "each-day",
          onClick: () => props.handleClickDateChange(i + 1)
        }, i + 1));
      }
    }

    setDays(dayList);
  }, [props === null || props === void 0 ? void 0 : (_props$calenderObject = props.calenderObject) === null || _props$calenderObject === void 0 ? void 0 : _props$calenderObject.month]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "month-view-component"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "month-name",
    onClick: () => props.handleOpenMonthList()
  }, (0, _utils.getCurrentMonthName)(props.calenderValue)), /*#__PURE__*/_react.default.createElement("div", {
    className: "year-heading-name",
    onClick: () => props.handleOpenYearList()
  }, props === null || props === void 0 ? void 0 : (_props$calenderObject2 = props.calenderObject) === null || _props$calenderObject2 === void 0 ? void 0 : _props$calenderObject2.year)), /*#__PURE__*/_react.default.createElement("ol", {
    className: "calendar"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "day-name"
  }, "Sun"), /*#__PURE__*/_react.default.createElement("li", {
    className: "day-name"
  }, "Mon"), /*#__PURE__*/_react.default.createElement("li", {
    className: "day-name"
  }, "Tue"), /*#__PURE__*/_react.default.createElement("li", {
    className: "day-name"
  }, "Wed"), /*#__PURE__*/_react.default.createElement("li", {
    className: "day-name"
  }, "Thu"), /*#__PURE__*/_react.default.createElement("li", {
    className: "day-name"
  }, "Fri"), /*#__PURE__*/_react.default.createElement("li", {
    className: "day-name"
  }, "Sat"), days)));
};

var _default = Month;
exports.default = _default;