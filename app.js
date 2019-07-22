"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MyComponent = function MyComponent() {
  return _react["default"].createElement("h1", null, "Abhishek welcomes you");
};

_reactDom["default"].render(_react["default"].createElement(MyComponent, null), document.getElementById('root'));