"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./css/year-list-view.css");

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const YearList = props => {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "year-list-component"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "choose-year"
  }, "Choose Year"), /*#__PURE__*/_react.default.createElement("ol", {
    className: "year-list-view"
  }, (0, _utils.getYearList)().map((eachYear, key) => /*#__PURE__*/_react.default.createElement("li", {
    key: key,
    className: "year-name",
    onClick: () => props.handleOnYearChange(eachYear)
  }, eachYear)))));
};

var _default = YearList;
exports.default = _default;