"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _intro = _interopRequireDefault(require("./components/intro"));

require("bootstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var App = function App() {
  return _react["default"].createElement("div", {
    className: "jumbotron text-center"
  }, _react["default"].createElement("h1", null, "Abhishek welcomes you"), _react["default"].createElement(_intro["default"], null));
};

_reactDom["default"].render(_react["default"].createElement(App, null), document.getElementById('root'));