"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _linkedln = _interopRequireDefault(require("../../resources/icons/linkedln.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default() {
  return _react["default"].createElement("div", {
    className: "card"
  }, _react["default"].createElement("div", {
    className: "card-body"
  }, _react["default"].createElement("h1", {
    className: "card-title text-info"
  }, "ABHISHEK DAS"), _react["default"].createElement("h3", {
    className: "card-text text-secondary"
  }, "Lead Test Engineer at Lloyds Banking Group"), _react["default"].createElement("h4", {
    className: "card-text text-secondary"
  }, "London, United Kingdom"), _react["default"].createElement("svg", {
    className: "float-right",
    viewBox: "0 0 100 100"
  }, _react["default"].createElement("a", {
    href: "https://www.linkedin.com/in/abhishek-das-b2248665/"
  }, _linkedln["default"]))));
};

exports["default"] = _default;