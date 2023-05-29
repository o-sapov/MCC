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

/***/ "./app/assets/scripts/App.js":
/*!***********************************!*\
  !*** ./app/assets/scripts/App.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// require('./modules/rendering');\n__webpack_require__(/*! ./modules/ProjectInformation */ \"./app/assets/scripts/modules/ProjectInformation.js\");\n\n//# sourceURL=webpack://mozart_clarinet_concerto/./app/assets/scripts/App.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/ProjectInformation.js":
/*!**********************************************************!*\
  !*** ./app/assets/scripts/modules/ProjectInformation.js ***!
  \**********************************************************/
/***/ (() => {

eval("// show project descrption\n$('#project_info').on(\"click\", function (e) {\n  $('.music').hide();\n  $(\"body\").css(\"background-color\", \"#fff\");\n  $('.description').show();\n  $('#allegro').removeClass('active');\n  $(this).addClass('active');\n  $(footer).css(\"position\", \"\");\n});\n$('#allegro').on(\"click\", function (e) {\n  loadFile();\n  $('.description').hide();\n  $(\"body\").css(\"background-color\", \"#1a0d00;\");\n  $('.music').show();\n  $('.score-wrapper').css(\"display\", \"block\");\n  $('.control-bar').css(\"display\", \"flex\");\n  $('#project_info').removeClass('active');\n  $(this).addClass('active');\n  $(footer).css(\"display\", \"none\");\n});\n\n//# sourceURL=webpack://mozart_clarinet_concerto/./app/assets/scripts/modules/ProjectInformation.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./app/assets/scripts/App.js");
/******/ 	
/******/ })()
;