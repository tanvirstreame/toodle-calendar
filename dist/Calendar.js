"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/web.url.to-json.js");

var _react = _interopRequireWildcard(require("react"));

require("./css/calender-view.css");

var _Month = _interopRequireDefault(require("./Month"));

var _utils = require("./utils");

var _MonthList = _interopRequireDefault(require("./MonthList"));

var _YearList = _interopRequireDefault(require("./YearList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Calendar = props => {
  const [numberOfMonth, setNumberOfMonth] = (0, _react.useState)(0);
  const [calenderValue, setCalenderValue] = (0, _react.useState)("");
  const [calenderObject, setCalenderObject] = (0, _react.useState)({});
  const [weekDayStart, setWeekDayStart] = (0, _react.useState)(0);
  const [visibleMonthList, setVisibleMonthList] = (0, _react.useState)(false);
  const [visibleYearList, setVisibleYearList] = (0, _react.useState)(false);
  const [visibleCalendarList, setVisibleCalendarList] = (0, _react.useState)(false);

  const handleOnYearChange = yearNumber => {
    setCalenderObject(_objectSpread(_objectSpread({}, calenderObject), {}, {
      year: yearNumber
    }));
    setNumberOfMonth((0, _utils.getDaysInMonth)(calenderObject.month, yearNumber));
    setCalenderValue(new Date("".concat(yearNumber, "/").concat(calenderObject.month, "/").concat(calenderObject.day)).toJSON().slice(0, 10));
    handleOpenYearList();
  };

  const handleOnMonthChange = monthNumber => {
    setCalenderObject(_objectSpread(_objectSpread({}, calenderObject), {}, {
      month: monthNumber + 1
    }));
    setNumberOfMonth((0, _utils.getDaysInMonth)(monthNumber, calenderObject.year));
    setCalenderValue(new Date("".concat(calenderObject.year, "/").concat(monthNumber + 1, "/").concat(calenderObject.day)).toJSON().slice(0, 10));
    handleOpenMonthList();
  };

  const handleOpenYearList = () => {
    setVisibleYearList(!visibleYearList);
  };

  const handleOpenMonthList = () => {
    setVisibleMonthList(!visibleMonthList);
  };

  const handleOpenCalendarList = () => {
    setVisibleCalendarList(!visibleCalendarList);
  };

  const handleClickDateChange = value => {
    setCalenderObject(_objectSpread(_objectSpread({}, calenderObject), {}, {
      day: value
    }));
    setCalenderValue(new Date("".concat(calenderObject.year, "/").concat(calenderObject.month, "/").concat(value + 1)).toJSON().slice(0, 10));
    handleOpenCalendarList();
  };

  (0, _react.useEffect)(() => {
    const dateObject = calenderValue ? new Date(calenderValue) : new Date();
    const calenderInfo = {
      day: 1,
      year: dateObject.getFullYear(),
      month: dateObject.getMonth() + 1
    };
    setNumberOfMonth((0, _utils.getDaysInMonth)(calenderInfo.month, calenderInfo.year));
    setCalenderValue(dateObject.toJSON().slice(0, 10));
    setCalenderObject(calenderInfo);
    setWeekDayStart(new Date("".concat(calenderInfo.year, "/").concat(calenderInfo.month, "/01")).getDay() + 1);
  }, []);
  (0, _react.useEffect)(() => {
    if (calenderValue) {
      if (props.handleOnChange) {
        props.handleOnChange(calenderValue);
      }
    }
  }, [calenderValue]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "calendar-view-component"
  }, visibleCalendarList && /*#__PURE__*/_react.default.createElement("div", {
    className: "calendar-view"
  }, visibleMonthList && /*#__PURE__*/_react.default.createElement("div", {
    className: "month-drop-list-view"
  }, /*#__PURE__*/_react.default.createElement(_MonthList.default, {
    handleOnMonthChange: handleOnMonthChange
  })), visibleYearList && /*#__PURE__*/_react.default.createElement(_YearList.default, {
    handleOnYearChange: handleOnYearChange
  }), /*#__PURE__*/_react.default.createElement(_Month.default, {
    calenderValue: calenderValue,
    weekDayStart: weekDayStart,
    numberOfMonth: numberOfMonth,
    calenderObject: calenderObject,
    handleOpenYearList: handleOpenYearList,
    handleOpenMonthList: handleOpenMonthList,
    handleClickDateChange: handleClickDateChange
  }))), /*#__PURE__*/_react.default.createElement("input", {
    name: "calender",
    className: props.className,
    onClick: () => handleOpenCalendarList(),
    type: "text",
    value: calenderValue,
    readOnly: true
  }));
};

var _default = Calendar;
exports.default = _default;