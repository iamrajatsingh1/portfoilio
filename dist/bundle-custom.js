/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// window.$ = require(\"jquery\");\n__webpack_require__(/*! ./js/custom.js */ \"./js/custom.js\");\n\n\n//# sourceURL=webpack://rajats_portfolio/./app.js?");

/***/ }),

/***/ "./js/custom.js":
/*!**********************!*\
  !*** ./js/custom.js ***!
  \**********************/
/***/ (() => {

eval("(function ($) {\n  \"use strict\";\n\n  // function to set a given theme/color-scheme\n  function setTheme(newTheme, cb) {\n    cb = cb || function () {};\n    window.localStorage.setItem(\"theme\", newTheme);\n    // let currentTheme = window.localStorage.getItem(\"theme\");\n    if (newTheme === \"dark-mode\") {\n      $(\".toggle-button\").text(\"Set Color Mode\");\n      $(\".color-mode-icon\").removeClass(\"active\");\n    } else {\n      $(\".toggle-button\").text(\"Set Dark Mode\");\n      $(\".color-mode-icon\").addClass(\"active\");\n    }\n    $(\"body\").removeClass();\n    $(\"body\").addClass(newTheme);\n    cb();\n  }\n\n  // Immediately invoked function to set the theme on initial load\n\n  function setThemeOnPageLoad() {\n    let currentTheme = window.localStorage.getItem(\"theme\");\n    if (currentTheme) {\n      setTheme(currentTheme);\n    } else {\n      setTheme(\"color-mode\"); //1st time Color mode will be set\n    }\n  }\n  setThemeOnPageLoad();\n\n  // function to toggle between light and dark theme\n  function toggleTheme() {\n    let currentTheme = window.localStorage.getItem(\"theme\");\n    if (currentTheme === \"dark-mode\") {\n      setTheme(\"color-mode\");\n    } else {\n      setTheme(\"dark-mode\");\n    }\n  }\n\n  // COLOR MODE\n\n  $(\".toggle-button\").click(function () {\n    // $(\".color-mode-icon\").toggleClass(\"active\");\n    // $(\"body\").toggleClass(\"dark-mode\");\n    toggleTheme();\n  });\n\n  // HEADER\n  $(\".navbar\").headroom();\n\n  // PROJECT CAROUSEL\n  $(\".owl-carousel\").owlCarousel({\n    items: 1,\n    loop: true,\n    margin: 10,\n    nav: true,\n  });\n\n  // SMOOTHSCROLL\n  $(function () {\n    $(\".nav-link, .custom-btn-link\").on(\"click\", function (event) {\n      var $anchor = $(this);\n      $(\"html, body\")\n        .stop()\n        .animate(\n          {\n            scrollTop: $($anchor.attr(\"href\")).offset().top - 49,\n          },\n          1000\n        );\n      event.preventDefault();\n    });\n  });\n\n  // Submit form details\n  $(\"#contact-form-details\").submit(function (event) {\n    // alert(\"Form submitted successfully.\");\n    event.preventDefault();\n    let formData = $(this).serializeArray();\n    // console.log(formData);\n  });\n  // TOOLTIP\n  $(\".social-links a\").tooltip();\n})(jQuery);\n\n\n//# sourceURL=webpack://rajats_portfolio/./js/custom.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app.js");
/******/ 	
/******/ })()
;