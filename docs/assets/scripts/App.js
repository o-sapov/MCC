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

eval("__webpack_require__(/*! ./modules/vrv-basic-rendering.js */ \"./app/assets/scripts/modules/vrv-basic-rendering.js\");\n__webpack_require__(/*! ./modules/toggleViews */ \"./app/assets/scripts/modules/toggleViews.js\");\n\n//# sourceURL=webpack://mozart_clarinet_concerto/./app/assets/scripts/App.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/toggleViews.js":
/*!***************************************************!*\
  !*** ./app/assets/scripts/modules/toggleViews.js ***!
  \***************************************************/
/***/ (() => {

eval("$('#project_info').on(\"click\", function (e) {\n  $('.music').hide();\n  $(\"body\").css(\"background-color\", \"#fff\");\n  $('.home, .wrapper--description').show();\n  $('#allegro').removeClass('active');\n  $(this).addClass('active');\n  $(footer).css(\"position\", \"\");\n  $(\".wrapper\").css(\"width\", \"60vw\");\n  $(\"body\").css(\"background-color\", \"#374259\");\n});\n$('#allegro').on(\"click\", function (e) {\n  loadFile();\n  $('.home, .wrapper--description').hide();\n  $(\"body\").css(\"background-color\", \"#1a0d00;\");\n  $('.music').show();\n  $('.score-wrapper').css(\"display\", \"block\");\n  $('.control-bar').css(\"display\", \"flex\");\n  $('#project_info').removeClass('active');\n  $(this).addClass('active');\n  $(footer).css(\"display\", \"none\");\n  $(\".wrapper\").css(\"width\", \"100vw\");\n  $(\"body\").css(\"background-color\", \"#f6f6f6\");\n});\n\n//# sourceURL=webpack://mozart_clarinet_concerto/./app/assets/scripts/modules/toggleViews.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/vrv-basic-rendering.js":
/*!***********************************************************!*\
  !*** ./app/assets/scripts/modules/vrv-basic-rendering.js ***!
  \***********************************************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", function (event) {\n  verovio.module.onRuntimeInitialized = function () {\n    var tk = new verovio.toolkit();\n    console.log(\"Verovio has loaded!\");\n    var notation = document.getElementById(\"svg_output\");\n    options1 = {\n      scale: 30,\n      landscape: true,\n      adjustPageWidth: true\n    };\n    var zoom = 10;\n    var pageHeight = document.body.clientHeight * 100 / zoom;\n    var pageWidth = document.body.clientWidth * 100 / zoom;\n    options2 = {\n      pageHeight: pageHeight,\n      pageWidth: pageWidth,\n      // Add an option to pass note@pname and note@oct as svg @data-*\n      svgAdditionalAttribute: [\"note@pname\", \"note@oct\"]\n    };\n\n    // Verovio Options\n    tk.setOptions(options1);\n    fetch(\"./data/mozart_K622_allegro.mei\")\n    // fetch(\"https://www.verovio.org/examples/downloads/Schubert_Lindenbaum.mei\")\n    .then(function (response) {\n      return response.text();\n    }).then(function (meiXML) {\n      var svg = tk.renderData(meiXML, {});\n      document.getElementById(\"notation\").innerHTML = svg;\n    });\n\n    // var meiXML = \"\";\n    // Options for SaxonJS\n    //   var options = {\n    //     location: \"./data/dmeref_457-003_5490.xml\",\n    //     type: \"text\"\n    // };\n    // meiFile = SaxonJS.getResource(options);    \n    // meiFile.then(function (result) {\n\n    //   meiXML = result;\n    // });\n    // console.log(meiXML);\n    // let svg = tk.renderData(meiXML, {});\n    // document.getElementById(\"notation\").innerHTML = svg;\n\n    // console.log(\"Verovio options:\", tk.getOptions());\n    // console.log(\"Verovio dafault options:\", tk.getDefaultOptions());\n  };\n});\n\n//# sourceURL=webpack://mozart_clarinet_concerto/./app/assets/scripts/modules/vrv-basic-rendering.js?");

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