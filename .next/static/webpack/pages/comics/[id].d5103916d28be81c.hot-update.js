"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/comics/[id]",{

/***/ "./pages/comics/[id].page.tsx":
/*!************************************!*\
  !*** ./pages/comics/[id].page.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ comicDetails; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/esm/index.js\");\n\n\nvar __N_SSG = true;\nfunction comicDetails(props) {\n    var ref, ref1;\n    var id = props;\n    var images = (ref = id.data) === null || ref === void 0 ? void 0 : ref.images[0];\n    console.log(images);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Card, {\n        sx: {\n            display: \"flex\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {\n                gutterBottom: true,\n                variant: \"h5\",\n                component: \"div\",\n                children: (ref1 = id.data) === null || ref1 === void 0 ? void 0 : ref1.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sybiru_System_REBORN\\\\Documents\\\\DH\\\\7 bimestre\\\\Front\\\\checkpoint-final\\\\ctd-esp-front3-final\\\\pages\\\\comics\\\\[id].page.tsx\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.CardActionArea, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.CardMedia, {\n                        component: \"img\",\n                        image: \"\".concat(images === null || images === void 0 ? void 0 : images.path, \".\").concat(images === null || images === void 0 ? void 0 : images.extension),\n                        alt: id.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sybiru_System_REBORN\\\\Documents\\\\DH\\\\7 bimestre\\\\Front\\\\checkpoint-final\\\\ctd-esp-front3-final\\\\pages\\\\comics\\\\[id].page.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.CardContent, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sybiru_System_REBORN\\\\Documents\\\\DH\\\\7 bimestre\\\\Front\\\\checkpoint-final\\\\ctd-esp-front3-final\\\\pages\\\\comics\\\\[id].page.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Sybiru_System_REBORN\\\\Documents\\\\DH\\\\7 bimestre\\\\Front\\\\checkpoint-final\\\\ctd-esp-front3-final\\\\pages\\\\comics\\\\[id].page.tsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.CardActions, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    size: \"small\",\n                    color: \"primary\",\n                    children: \"Comprar\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Sybiru_System_REBORN\\\\Documents\\\\DH\\\\7 bimestre\\\\Front\\\\checkpoint-final\\\\ctd-esp-front3-final\\\\pages\\\\comics\\\\[id].page.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sybiru_System_REBORN\\\\Documents\\\\DH\\\\7 bimestre\\\\Front\\\\checkpoint-final\\\\ctd-esp-front3-final\\\\pages\\\\comics\\\\[id].page.tsx\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Sybiru_System_REBORN\\\\Documents\\\\DH\\\\7 bimestre\\\\Front\\\\checkpoint-final\\\\ctd-esp-front3-final\\\\pages\\\\comics\\\\[id].page.tsx\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, this);\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21pY3MvW2lkXS5wYWdlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQThHOztBQXdCL0YsU0FBU08sWUFBWSxDQUFDQyxLQUFVLEVBQUU7UUFFOUJDLEdBQU8sRUFTVEEsSUFBTztJQVZwQixJQUFNQSxFQUFFLEdBQUdELEtBQUs7SUFDaEIsSUFBTUUsTUFBTSxHQUFHRCxDQUFBQSxHQUFPLEdBQVBBLEVBQUUsQ0FBQ0UsSUFBSSxjQUFQRixHQUFPLFdBQVEsR0FBZkEsS0FBQUEsQ0FBZSxHQUFmQSxHQUFPLENBQUVDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDakNFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxNQUFNLENBQUM7SUFDbkIscUJBQ0ksOERBQUNULCtDQUFJO1FBQUNhLEVBQUUsRUFBRTtZQUFDQyxPQUFPLEVBQUMsTUFBTTtTQUFDOzswQkFDdEIsOERBQUNULHFEQUFVO2dCQUNQVSxZQUFZO2dCQUNaQyxPQUFPLEVBQUMsSUFBSTtnQkFDWkMsU0FBUyxFQUFDLEtBQUs7MEJBRWRULENBQUFBLElBQU8sR0FBUEEsRUFBRSxDQUFDRSxJQUFJLGNBQVBGLElBQU8sV0FBTyxHQUFkQSxLQUFBQSxDQUFjLEdBQWRBLElBQU8sQ0FBRVUsS0FBSzs7Ozs7b0JBQ047MEJBQ2IsOERBQUNqQix5REFBYzs7a0NBQ1gsOERBQUNHLG9EQUFTO3dCQUNOYSxTQUFTLEVBQUMsS0FBSzt3QkFDZkUsS0FBSyxFQUFFLEVBQUMsQ0FBa0JWLE1BQWlCLENBQWpDQSxNQUFNLGFBQU5BLE1BQU0sV0FBTSxHQUFaQSxLQUFBQSxDQUFZLEdBQVpBLE1BQU0sQ0FBRVcsSUFBSSxFQUFDLEdBQUMsQ0FBb0IsUUFBbEJYLE1BQU0sYUFBTkEsTUFBTSxXQUFXLEdBQWpCQSxLQUFBQSxDQUFpQixHQUFqQkEsTUFBTSxDQUFFWSxTQUFTLENBQUU7d0JBQzdDQyxHQUFHLEVBQUVkLEVBQUUsQ0FBQ1UsS0FBSzs7Ozs7NEJBQ2Y7a0NBQ0YsOERBQUNmLHNEQUFXOzs7OzRCQUVFOzs7Ozs7b0JBQ0Q7MEJBQ2pCLDhEQUFDRCxzREFBVzswQkFDUiw0RUFBQ0gsaURBQU07b0JBQUN3QixJQUFJLEVBQUMsT0FBTztvQkFBQ0MsS0FBSyxFQUFDLFNBQVM7OEJBQUMsU0FBTzs7Ozs7d0JBQVM7Ozs7O29CQUMzQzs7Ozs7O1lBQ1gsQ0FFVjtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbWljcy9baWRdLnBhZ2UudHN4PzA4NTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBDYXJkQWN0aW9uQXJlYSwgQ2FyZEFjdGlvbnMsIENhcmRDb250ZW50LCBDYXJkTWVkaWEsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBnZXRDb21pYyB9IGZyb20gXCJkaC1tYXJ2ZWwvc2VydmljZXMvbWFydmVsL21hcnZlbC5zZXJ2aWNlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGF0aHM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zOlxyXG4gICAgICAgICAgICAgICAgICAgIHsgaWQ6IFwiMTAwOTE5N1wiIH1cclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgZmFsbGJhY2s6IHRydWVcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9OiBhbnkpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRDb21pYyhwYXJhbXMuaWQpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIGRhdGFcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbWljRGV0YWlscyhwcm9wczogYW55KSB7XHJcbiAgICBjb25zdCBpZCA9IHByb3BzO1xyXG4gICAgY29uc3QgaW1hZ2VzID0gaWQuZGF0YT8uaW1hZ2VzWzBdO1xyXG4gICAgY29uc29sZS5sb2coaW1hZ2VzKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2FyZCBzeD17e2Rpc3BsYXk6J2ZsZXgnfX0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICBndXR0ZXJCb3R0b21cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNVwiXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7aWQuZGF0YT8udGl0bGV9XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPENhcmRBY3Rpb25BcmVhPlxyXG4gICAgICAgICAgICAgICAgPENhcmRNZWRpYVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2Ake2ltYWdlcz8ucGF0aH0uJHtpbWFnZXM/LmV4dGVuc2lvbn1gfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD17aWQudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvQ2FyZEFjdGlvbkFyZWE+XHJcbiAgICAgICAgICAgIDxDYXJkQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJwcmltYXJ5XCI+Q29tcHJhcjwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxyXG4gICAgICAgIDwvQ2FyZD5cclxuXHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiQnV0dG9uIiwiQ2FyZCIsIkNhcmRBY3Rpb25BcmVhIiwiQ2FyZEFjdGlvbnMiLCJDYXJkQ29udGVudCIsIkNhcmRNZWRpYSIsIlR5cG9ncmFwaHkiLCJjb21pY0RldGFpbHMiLCJwcm9wcyIsImlkIiwiaW1hZ2VzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzeCIsImRpc3BsYXkiLCJndXR0ZXJCb3R0b20iLCJ2YXJpYW50IiwiY29tcG9uZW50IiwidGl0bGUiLCJpbWFnZSIsInBhdGgiLCJleHRlbnNpb24iLCJhbHQiLCJzaXplIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/comics/[id].page.tsx\n"));

/***/ })

});