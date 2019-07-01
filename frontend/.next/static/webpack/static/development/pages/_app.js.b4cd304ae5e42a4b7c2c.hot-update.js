webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/MenuApp.js":
/*!*******************************!*\
  !*** ./components/MenuApp.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuItem */ "./components/MenuItem.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menu */ "./components/Menu.js");
var _jsxFileName = "/home/ahebwa49/projects/e-commerce/frontend/components/MenuApp.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var MenuApp =
/*#__PURE__*/
function (_Component) {
  _inherits(MenuApp, _Component);

  function MenuApp(props) {
    var _this;

    _classCallCheck(this, MenuApp);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MenuApp).call(this, props));
    _this.handleLinkClick = _this.handleLinkClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(MenuApp, [{
    key: "handleLinkClick",
    value: function handleLinkClick() {
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push({
        pathname: "https://asabahebwa.com",
        query: {}
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var styles = {
        container: {
          display: this.props.menuOpen ? "flex" : "none",
          position: "fixed",
          top: "15%",
          right: 0,
          zIndex: "2",
          opacity: this.props.menuOpen ? 1 : 0,
          alignItems: "center",
          width: "100%",
          height: this.props.menuOpen ? "auto" : 0,
          color: "red",
          fontFamily: "Lobster"
        }
      };
      var menu = ["Shop", "Sign Up"];
      var menuItems = menu.map(function (val, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: index,
          onClick: _this2.handleLinkClick,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, val);
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: styles.container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_3__["default"], {
        menuOpen: this.props.menuOpen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, menuItems));
    }
  }]);

  return MenuApp;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MenuApp);

/***/ })

})
//# sourceMappingURL=_app.js.b4cd304ae5e42a4b7c2c.hot-update.js.map