webpackHotUpdate_N_E("pages/new-meetup",{

/***/ "./pages/new-meetup/index.js":
/*!***********************************!*\
  !*** ./pages/new-meetup/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_jabrahamdev_Documents_Cursos_React_Academind_Projects_sec23_nextJsMeetups_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_jabrahamdev_Documents_Cursos_React_Academind_Projects_sec23_nextJsMeetups_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_jabrahamdev_Documents_Cursos_React_Academind_Projects_sec23_nextJsMeetups_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_jabrahamdev_Documents_Cursos_React_Academind_Projects_sec23_nextJsMeetups_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/meetups/NewMeetupForm */ \"./components/meetups/NewMeetupForm.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\nvar _jsxFileName = \"/Users/jabrahamdev/Documents/Cursos/React/Academind/Projects/sec23_nextJsMeetups/pages/new-meetup/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar NewMeetupPage = function NewMeetupPage() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n\n  var addMeetupHandler = /*#__PURE__*/function () {\n    var _ref = Object(_Users_jabrahamdev_Documents_Cursos_React_Academind_Projects_sec23_nextJsMeetups_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_jabrahamdev_Documents_Cursos_React_Academind_Projects_sec23_nextJsMeetups_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(enteredMeetupData) {\n      var response, data;\n      return _Users_jabrahamdev_Documents_Cursos_React_Academind_Projects_sec23_nextJsMeetups_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              console.log(\"enteredMeetupData: \", enteredMeetupData);\n              _context.next = 3;\n              return fetch(\"/api/new-meetup\", {\n                method: \"POST\",\n                body: JSON.stringify(enteredMeetupData),\n                headers: {\n                  \"Content-Type\": \"application/json\"\n                }\n              });\n\n            case 3:\n              response = _context.sent;\n              _context.next = 6;\n              return response.json();\n\n            case 6:\n              data = _context.sent;\n              console.log(data);\n              router.push(\"/\");\n\n            case 9:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function addMeetupHandler(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_6__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Add a New Meetup\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: \"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      onAddMeetup: addMeetupHandler\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(NewMeetupPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = NewMeetupPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewMeetupPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"NewMeetupPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3LW1lZXR1cC9pbmRleC5qcz84NDNhIl0sIm5hbWVzIjpbIk5ld01lZXR1cFBhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJhZGRNZWV0dXBIYW5kbGVyIiwiZW50ZXJlZE1lZXR1cERhdGEiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUE7O0FBQzFCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRUEsTUFBTUMsZ0JBQWdCO0FBQUEsMFhBQUcsaUJBQU9DLGlCQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN2QkMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFaLEVBQW1DRixpQkFBbkM7QUFEdUI7QUFBQSxxQkFFQUcsS0FBSyxDQUFDLGlCQUFELEVBQW9CO0FBQzlDQyxzQkFBTSxFQUFFLE1BRHNDO0FBRTlDQyxvQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVAsaUJBQWYsQ0FGd0M7QUFHOUNRLHVCQUFPLEVBQUU7QUFDUCxrQ0FBZ0I7QUFEVDtBQUhxQyxlQUFwQixDQUZMOztBQUFBO0FBRWpCQyxzQkFGaUI7QUFBQTtBQUFBLHFCQVVKQSxRQUFRLENBQUNDLElBQVQsRUFWSTs7QUFBQTtBQVVqQkMsa0JBVmlCO0FBWXZCVixxQkFBTyxDQUFDQyxHQUFSLENBQVlTLElBQVo7QUFFQWQsb0JBQU0sQ0FBQ2UsSUFBUCxDQUFZLEdBQVo7O0FBZHVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWhCYixnQkFBZ0I7QUFBQTtBQUFBO0FBQUEsS0FBdEI7O0FBaUJBLHNCQUNFLHFFQUFDLDhDQUFEO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBTSxZQUFJLEVBQUMsYUFBWDtBQUF5QixlQUFPLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBS0UscUVBQUMseUVBQUQ7QUFBZSxpQkFBVyxFQUFFQTtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFTRCxDQTdCRDs7R0FBTUgsYTtVQUNXRSxxRDs7O0tBRFhGLGE7QUErQlNBLDRFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvbmV3LW1lZXR1cC9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IE5ld01lZXR1cEZvcm0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbWVldHVwcy9OZXdNZWV0dXBGb3JtXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBOZXdNZWV0dXBQYWdlID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBhZGRNZWV0dXBIYW5kbGVyID0gYXN5bmMgKGVudGVyZWRNZWV0dXBEYXRhKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJlbnRlcmVkTWVldHVwRGF0YTogXCIsIGVudGVyZWRNZWV0dXBEYXRhKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9uZXctbWVldHVwXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShlbnRlcmVkTWVldHVwRGF0YSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+QWRkIGEgTmV3IE1lZXR1cDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPE5ld01lZXR1cEZvcm0gb25BZGRNZWV0dXA9e2FkZE1lZXR1cEhhbmRsZXJ9IC8+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5ld01lZXR1cFBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/new-meetup/index.js\n");

/***/ })

})