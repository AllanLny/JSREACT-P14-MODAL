"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Modal = function Modal(_ref) {
  var isOpen = _ref.isOpen,
    onClose = _ref.onClose,
    children = _ref.children;
  var closeModal = function closeModal() {
    onClose();
  };
  return isOpen ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-overlay",
    onClick: closeModal
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-content"
  }, children, /*#__PURE__*/_react["default"].createElement("button", {
    className: "modal-close",
    onClick: closeModal
  }, "X")))) : null;
};
var _default = exports["default"] = Modal;