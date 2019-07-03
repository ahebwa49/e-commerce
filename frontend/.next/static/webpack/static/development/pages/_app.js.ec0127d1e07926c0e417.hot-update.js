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
/* harmony import */ var _SmallSignout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SmallSignout */ "./components/SmallSignout.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Cart */ "./components/Cart.js");
/* harmony import */ var _CartCount__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CartCount */ "./components/CartCount.js");
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
    menuItem: {
      display: "flex",
      justifyContent: "center",
      fontFamily: "'Open Sans', sans-serif",
      fontSize: "1.5rem",
      padding: "3 0%",
      margin: "5%",
      cursor: "pointer",
      color: "black" //border: "1px solid red"

    },
    menuList: {
      paddingBottom: "1rem"
    }
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, function (_ref) {
    var profile = _ref.data.profile;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: styles.container,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: styles.menuList,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, props.children), profile && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: styles.menuItem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["Mutation"], {
      mutation: _Cart__WEBPACK_IMPORTED_MODULE_4__["TOGGLE_CART_MUTATION"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, function (toggleCart) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: toggleCart,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "Cart", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CartCount__WEBPACK_IMPORTED_MODULE_5__["default"], {
        count: profile.cart.reduce(function (tally, cartItem) {
          return tally + cartItem.quantity;
        }, 0),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }));
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: styles.menuItem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SmallSignout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }))));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ })

})
//# sourceMappingURL=_app.js.ec0127d1e07926c0e417.hot-update.js.map