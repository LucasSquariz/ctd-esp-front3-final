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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ comicDetails; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/esm/index.js\");\n\n\nvar __N_SSG = true;\nfunction comicDetails(props) {\n    var ref, ref1;\n    var id = props;\n    var images = (ref = id.data) === null || ref === void 0 ? void 0 : ref.images[0];\n    console.log(images);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Card, {\n        sx: {\n            display: flex\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {\n                gutterBottom: true,\n                variant: \"h5\",\n                component: \"div\",\n                children: (ref1 = id.data) === null || ref1 === void 0 ? void 0 : ref1.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sybiru_System_REBORN\\\\Documents\\\\DH\\\\7 bimestre\\\\Front\\\\checkpoint-final\\\\ctd-esp-front3-final\\\\pages\\\\comics\\\\[id].page.tsx\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.CardActionArea, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.CardMedia, {\n                        component: \"img\",\n                        image: \"\".concat(images === null || images === void 0 ? void 0 : images.path, \".\").concat(images === null || images === void 0 ? void 0 : images.extension),\n                        alt: id.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sybiru_System_REBORN\\\\Documents\\\\DH\\\\7 bimestre\\\\Front\\\\checkpoint-final\\\\ctd-esp-front3-final\\\\pages\\\\comics\\\\[id].page.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.CardContent, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sybiru_System_REBORN\\\\Documents\\\\DH\\\\7 bimestre\\\\Front\\\\checkpoint-final\\\\ctd-esp-front3-final\\\\pages\\\\comics\\\\[id].page.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Sybiru_System_REBORN\\\\Documents\\\\DH\\\\7 bimestre\\\\Front\\\\checkpoint-final\\\\ctd-esp-front3-final\\\\pages\\\\comics\\\\[id].page.tsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.CardActions, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    size: \"small\",\n                    color: \"primary\",\n                    children: \"Comprar\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Sybiru_System_REBORN\\\\Documents\\\\DH\\\\7 bimestre\\\\Front\\\\checkpoint-final\\\\ctd-esp-front3-final\\\\pages\\\\comics\\\\[id].page.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sybiru_System_REBORN\\\\Documents\\\\DH\\\\7 bimestre\\\\Front\\\\checkpoint-final\\\\ctd-esp-front3-final\\\\pages\\\\comics\\\\[id].page.tsx\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Sybiru_System_REBORN\\\\Documents\\\\DH\\\\7 bimestre\\\\Front\\\\checkpoint-final\\\\ctd-esp-front3-final\\\\pages\\\\comics\\\\[id].page.tsx\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, this);\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21pY3MvW2lkXS5wYWdlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQThHOztBQXdCL0YsU0FBU08sWUFBWSxDQUFDQyxLQUFVLEVBQUU7UUFFOUJDLEdBQU8sRUFTVEEsSUFBTztJQVZwQixJQUFNQSxFQUFFLEdBQUdELEtBQUs7SUFDaEIsSUFBTUUsTUFBTSxHQUFHRCxDQUFBQSxHQUFPLEdBQVBBLEVBQUUsQ0FBQ0UsSUFBSSxjQUFQRixHQUFPLFdBQVEsR0FBZkEsS0FBQUEsQ0FBZSxHQUFmQSxHQUFPLENBQUVDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDakNFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxNQUFNLENBQUM7SUFDbkIscUJBQ0ksOERBQUNULCtDQUFJO1FBQUNhLEVBQUUsRUFBRTtZQUFDQyxPQUFPLEVBQUNDLElBQUk7U0FBQzs7MEJBQ3BCLDhEQUFDVixxREFBVTtnQkFDUFcsWUFBWTtnQkFDWkMsT0FBTyxFQUFDLElBQUk7Z0JBQ1pDLFNBQVMsRUFBQyxLQUFLOzBCQUVkVixDQUFBQSxJQUFPLEdBQVBBLEVBQUUsQ0FBQ0UsSUFBSSxjQUFQRixJQUFPLFdBQU8sR0FBZEEsS0FBQUEsQ0FBYyxHQUFkQSxJQUFPLENBQUVXLEtBQUs7Ozs7O29CQUNOOzBCQUNiLDhEQUFDbEIseURBQWM7O2tDQUNYLDhEQUFDRyxvREFBUzt3QkFDTmMsU0FBUyxFQUFDLEtBQUs7d0JBQ2ZFLEtBQUssRUFBRSxFQUFDLENBQWtCWCxNQUFpQixDQUFqQ0EsTUFBTSxhQUFOQSxNQUFNLFdBQU0sR0FBWkEsS0FBQUEsQ0FBWSxHQUFaQSxNQUFNLENBQUVZLElBQUksRUFBQyxHQUFDLENBQW9CLFFBQWxCWixNQUFNLGFBQU5BLE1BQU0sV0FBVyxHQUFqQkEsS0FBQUEsQ0FBaUIsR0FBakJBLE1BQU0sQ0FBRWEsU0FBUyxDQUFFO3dCQUM3Q0MsR0FBRyxFQUFFZixFQUFFLENBQUNXLEtBQUs7Ozs7OzRCQUNmO2tDQUNGLDhEQUFDaEIsc0RBQVc7Ozs7NEJBRUU7Ozs7OztvQkFDRDswQkFDakIsOERBQUNELHNEQUFXOzBCQUNSLDRFQUFDSCxpREFBTTtvQkFBQ3lCLElBQUksRUFBQyxPQUFPO29CQUFDQyxLQUFLLEVBQUMsU0FBUzs4QkFBQyxTQUFPOzs7Ozt3QkFBUzs7Ozs7b0JBQzNDOzs7Ozs7WUFDWCxDQUVWO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29taWNzL1tpZF0ucGFnZS50c3g/MDg1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIENhcmQsIENhcmRBY3Rpb25BcmVhLCBDYXJkQWN0aW9ucywgQ2FyZENvbnRlbnQsIENhcmRNZWRpYSwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IGdldENvbWljIH0gZnJvbSBcImRoLW1hcnZlbC9zZXJ2aWNlcy9tYXJ2ZWwvbWFydmVsLnNlcnZpY2VcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwYXRoczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6XHJcbiAgICAgICAgICAgICAgICAgICAgeyBpZDogXCIxMDA5MTk3XCIgfVxyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICBmYWxsYmFjazogdHJ1ZVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH06IGFueSkge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldENvbWljKHBhcmFtcy5pZClcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgZGF0YVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29taWNEZXRhaWxzKHByb3BzOiBhbnkpIHtcclxuICAgIGNvbnN0IGlkID0gcHJvcHM7XHJcbiAgICBjb25zdCBpbWFnZXMgPSBpZC5kYXRhPy5pbWFnZXNbMF07XHJcbiAgICBjb25zb2xlLmxvZyhpbWFnZXMpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDYXJkIHN4PXt7ZGlzcGxheTpmbGV4fX0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICBndXR0ZXJCb3R0b21cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNVwiXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7aWQuZGF0YT8udGl0bGV9XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPENhcmRBY3Rpb25BcmVhPlxyXG4gICAgICAgICAgICAgICAgPENhcmRNZWRpYVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2Ake2ltYWdlcz8ucGF0aH0uJHtpbWFnZXM/LmV4dGVuc2lvbn1gfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD17aWQudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvQ2FyZEFjdGlvbkFyZWE+XHJcbiAgICAgICAgICAgIDxDYXJkQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJwcmltYXJ5XCI+Q29tcHJhcjwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxyXG4gICAgICAgIDwvQ2FyZD5cclxuXHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiQnV0dG9uIiwiQ2FyZCIsIkNhcmRBY3Rpb25BcmVhIiwiQ2FyZEFjdGlvbnMiLCJDYXJkQ29udGVudCIsIkNhcmRNZWRpYSIsIlR5cG9ncmFwaHkiLCJjb21pY0RldGFpbHMiLCJwcm9wcyIsImlkIiwiaW1hZ2VzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzeCIsImRpc3BsYXkiLCJmbGV4IiwiZ3V0dGVyQm90dG9tIiwidmFyaWFudCIsImNvbXBvbmVudCIsInRpdGxlIiwiaW1hZ2UiLCJwYXRoIiwiZXh0ZW5zaW9uIiwiYWx0Iiwic2l6ZSIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/comics/[id].page.tsx\n"));

/***/ })

});