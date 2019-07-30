"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _intro = _interopRequireDefault(require("./components/intro"));

var _headingCard = _interopRequireDefault(require("./components/headingCard"));

require("bootstrap");

require("bootstrap/dist/css/bootstrap.min.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var App = function App() {
  return _react["default"].createElement("div", {
    className: "container-fluid"
  }, _react["default"].createElement(_headingCard["default"], null), _react["default"].createElement(_intro["default"], null));
};

_reactDom["default"].render(_react["default"].createElement(App, null), document.getElementById('root'));