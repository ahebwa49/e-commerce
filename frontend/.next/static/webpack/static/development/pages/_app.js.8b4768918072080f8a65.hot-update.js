webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Menu.js":
/*!****************************!*\
  !*** ./components/Menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Signout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Signout */ "./components/Signout.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./User */ "./components/User.js");
var _jsxFileName = "/home/ahebwa49/projects/e-commerce/frontend/components/Menu.js";




var Menu = function Menu(props) {
  var styles = {
    container: {
      display: props.menuOpen ? "flex" : "none",
      justifyContent: "center",
      position: "absolute",
      top: "15%",
      right: 0,
      height: props.menuOpen ? "auto" : 0,
      width: "30%",
      flexDirection: "column",
      background: "white",
      opacity: props.menuOpen ? 1 : 0,
      color: "#fafafa",
      transition: "height 0.3s ease",
      zIndex: 3,
      border: "1px solid gray",
      borderRadius: "3px"
    },
    menuList: {
      paddingBottom: "1rem"
    }
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: styles.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: styles.menuList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ })

})
//# sourceMappingURL=_app.js.8b4768918072080f8a65.hot-update.js.map