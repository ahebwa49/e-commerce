webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/MenuButton.js":
/*!**********************************!*\
  !*** ./components/MenuButton.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MenuApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuApp */ "./components/MenuApp.js");
var _jsxFileName = "/home/ahebwa49/projects/e-commerce/frontend/components/MenuButton.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var MenuButton =
/*#__PURE__*/
function (_Component) {
  _inherits(MenuButton, _Component);

  function MenuButton(props) {
    var _this;

    _classCallCheck(this, MenuButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MenuButton).call(this, props));
    _this.state = {
      menuOpen: false
    };
    _this.handleMenuButtonClick = _this.handleMenuButtonClick.bind(_assertThisInitialized(_assertThisInitialized(_this))); //this.closeMenu = this.closeMenu.bind(this);

    return _this;
  }

  _createClass(MenuButton, [{
    key: "handleMenuButtonClick",
    value: function handleMenuButtonClick() {
      console.log("Been clicked");
      this.setState({
        menuOpen: !this.state.menuOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      var styles = {
        container: {
          display: "grid",
          cursor: "pointer",
          top: "10px"
        },
        bar1: {
          width: "35px",
          height: "5px",
          backgroundColor: "#333",
          margin: "6px 0px",
          transition: "0.25s",
          transform: this.state.menuOpen ? "rotate(45deg)" : "none",
          transformOrigin: "top left",
          marginBottom: "5px"
        },
        bar2: {
          width: "35px",
          height: "5px",
          backgroundColor: "#333",
          margin: "6px 0px",
          transition: "0.25s",
          opacity: this.state.menuOpen ? 0 : 1,
          transform: this.state.menuOpen ? "translateX(-16px)" : "none"
        },
        bar3: {
          width: "35px",
          height: "5px",
          backgroundColor: "#333",
          margin: "6px 0px",
          transition: "0.25s",
          transform: this.state.menuOpen ? "translateX(-1px) rotate(-45deg)" : "none",
          transformOrigin: "top left",
          marginTop: "5px"
        }
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: styles.container,
        onClick: this.handleMenuButtonClick,
        id: "menuButton",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: styles.bar1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: styles.bar2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: styles.bar3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuApp__WEBPACK_IMPORTED_MODULE_1__["default"], {
        menuOpen: this.state.menuOpen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }));
    }
  }]);

  return MenuButton;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MenuButton);

/***/ })

})
//# sourceMappingURL=_app.js.0c94e346958354a28917.hot-update.js.map