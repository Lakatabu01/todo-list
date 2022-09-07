/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Poppins-Medium.ttf */ "./src/fonts/Poppins-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root, html, body{\n    margin: 0;\n    padding: 0;\n    max-width: 100%;\n    overflow-x: hidden;\n    font-family: popins;\n}\n\n@font-face{\n  font-family: popins;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nbody{\n    background-color: #f8fafc;\n}\n\n.header{\n    width: 100%;\n    background-color: #334155;\n    color: white;\n    display: flex;\n    justify-content: space-between;\n}\n\n.home-icon{\n    padding: 0.5em;\n}\n\n.home-style{\n    padding-left: 1em;\n}\n\n.add-style{\n    padding-right: 1em;\n}\n\n.footer{\n    width: 100%;\n    background-color: #334155;\n    color: white;\n    display: flex;\n    justify-content: center;\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n}\n\n.sidebar {\n    height: 100%;\n    width: 0;\n    position: fixed;\n    z-index: 1;\n    /*top: 0;*/\n    left: 0;\n    background-color: #cbd5e1;\n    overflow-x: hidden;\n    transition: 0.5s;\n    padding-top: 60px;\n  }\n  \n  .sidebar .btn {\n    padding: 8px 8px 8px 32px;\n    text-decoration: none;\n    font-size: 25px;\n    color: #818181;\n    display: block;\n    transition: 0.3s;\n    cursor: pointer;\n  }\n  \n  .sidebar .btn:hover {\n    color: #f1f1f1;\n  }\n  \n  \n  .sidebar .closebtn {\n    position: absolute;\n    top: 0;\n    right: 25px;\n    font-size: 36px;\n    margin-left: 50px;\n    cursor: pointer;\n  }\n  \n  .openbtn {\n    font-size: 20px;\n    cursor: pointer;\n    background-color: #111;\n    color: white;\n    padding: 10px 15px;\n    border: none;\n  }\n  \n  .openbtn:hover {\n    background-color: #444;\n  }\n  \n  #content {\n    transition: margin-left .5s;\n    padding: 16px;\n  }\n  \n  /* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */\n  @media screen and (max-height: 450px) {\n    .sidebar {padding-top: 15px;}\n    .sidebar a {font-size: 18px;}\n  }\n\n  .group{\n    width: 80%;\n    /*background-color: red;*/\n    margin-left: 10px;\n    font-size: 18px;\n    color: #818181;\n    \n    transition: 0.3s;\n    display: flex;\n    \n    flex-direction: column;\n    align-items: center;\n  }\n\n  .add-btn{\n    color: #334155;\n    background-color: #cbd5e1;\n    border: #cbd5e1;\n    font-size: 15px;\n    cursor: pointer;\n  }\n\n  /* The Modal (background) */\n.modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0,0,0); /* Fallback color */\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n\n.todo-popup{\n  background-color: #fefefe;\n  position: fixed; \n  left: 14%;\n  top: 15%;\n  /*margin: 15% auto; /* 15% from the top and centered */\n  padding: 2%;\n  border: 1px solid #888;\n  width: 70%; /* Could be more or less, depending on screen size */\n}\n\n/* Modal Content/Box */\n.modal-content {\n  background-color: #fefefe;\n  margin: 15% auto; /* 15% from the top and centered */\n  padding: 20px;\n  border: 1px solid #888;\n  width: 20em; /* Could be more or less, depending on screen size */\n}\n\n/* The Close Button */\n.close {\n  color: #aaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.project-input{\n  margin-top: 5px;\n  border-radius: 5px;\n  width: 98%;\n  height: 30px;\n  border: 1px solid #cbd5e1;\n  font-size: 16px;\n}\n\n.project-input:focus{\n  outline: 1px solid blue;\n}\n\n.title-label{\n  font-size: 25px;\n  color: #334155;\n  display: block;\n}\n\n.btn-div{\n  display: flex;\n  justify-content: flex-end;\n /* margin-right: 95px;*/\n  margin-top: 20px;\n}\n\n.btn-div button{\n  padding: 8px;\n  margin: 4px;\n  font-size: 18px;\n  border-radius: 5px;\n  border: 1px solid #334155;\n  cursor: pointer;\n}\n\n.submit-project{\n  background-color: #334155;\n  color: white;\n  \n}\n\n.cancel-project:hover{\nbackground-color: #cbd5e1;\n}\n\n.modal-container{\n  padding: 5px;\n  display: flex;\n  flex-direction: column;\n  /*border: 2px solid red;*/\n}\n\n.project-list{\n  background-color: #cbd5e1;\n  border: solid 1px #cbd5e1;\n  color: #818181;\n  font-size: 17px;\n}\n\n.first-flex{\n  display: flex;\n  /*border: 2px solid green;*/\n  justify-content: space-between;\n  padding: 10px;\n}\n\n.title-div, .date-div {\n  width: 40%;\n /* border: 2px solid yellow;\n  padding: 5px;*/\n}\n\n.info-form{\n /* border: solid 2px red;*/\n}\n\n.date-input, .title-input{\n  width: 95%;\n   height: 30px;\n  border: 1px solid #cbd5e1;\n  font-size: 16px;\n  border-radius: 5px;\n  margin-top: 5px;\n}\n\n.date-input:focus, .title-input:focus, .description-input:focus{\n  outline: 1px solid blue;\n}\n\n.description-input{\n  width: 95%;\n   min-height: 90px;\n  border: 1px solid #cbd5e1;\n  font-size: 16px;\n  border-radius: 5px;\n  margin-top: 5px;\n}\n\n.project-div{\n  margin-top: 5px;\n  /*border: 2px solid red;*/\n}\n\n.both-div{\n  display: flex;\n  flex-direction: column;\n}\n\n.both-div div{\n  margin-top: 10px;\n}\n\n.first-btn, .second-btn{\n  padding: 8px;\n  margin: 4px;\n  font-size: 18px;\n  border-radius: 5px;\n  border: 1px solid #334155;\n  cursor: pointer;\n}\n\n.first-btn{\n  background-color: #334155;\n  color: white;\n}\n\n.second-btn{\n  background-color: white;\n}\n.second-btn:hover{\n  background-color: #cbd5e1;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root, html, body{\n    margin: 0;\n    padding: 0;\n    max-width: 100%;\n    overflow-x: hidden;\n    font-family: popins;\n}\n\n@font-face{\n  font-family: popins;\n  src: url(./fonts/Poppins-Medium.ttf);\n}\n\nbody{\n    background-color: #f8fafc;\n}\n\n.header{\n    width: 100%;\n    background-color: #334155;\n    color: white;\n    display: flex;\n    justify-content: space-between;\n}\n\n.home-icon{\n    padding: 0.5em;\n}\n\n.home-style{\n    padding-left: 1em;\n}\n\n.add-style{\n    padding-right: 1em;\n}\n\n.footer{\n    width: 100%;\n    background-color: #334155;\n    color: white;\n    display: flex;\n    justify-content: center;\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n}\n\n.sidebar {\n    height: 100%;\n    width: 0;\n    position: fixed;\n    z-index: 1;\n    /*top: 0;*/\n    left: 0;\n    background-color: #cbd5e1;\n    overflow-x: hidden;\n    transition: 0.5s;\n    padding-top: 60px;\n  }\n  \n  .sidebar .btn {\n    padding: 8px 8px 8px 32px;\n    text-decoration: none;\n    font-size: 25px;\n    color: #818181;\n    display: block;\n    transition: 0.3s;\n    cursor: pointer;\n  }\n  \n  .sidebar .btn:hover {\n    color: #f1f1f1;\n  }\n  \n  \n  .sidebar .closebtn {\n    position: absolute;\n    top: 0;\n    right: 25px;\n    font-size: 36px;\n    margin-left: 50px;\n    cursor: pointer;\n  }\n  \n  .openbtn {\n    font-size: 20px;\n    cursor: pointer;\n    background-color: #111;\n    color: white;\n    padding: 10px 15px;\n    border: none;\n  }\n  \n  .openbtn:hover {\n    background-color: #444;\n  }\n  \n  #content {\n    transition: margin-left .5s;\n    padding: 16px;\n  }\n  \n  /* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */\n  @media screen and (max-height: 450px) {\n    .sidebar {padding-top: 15px;}\n    .sidebar a {font-size: 18px;}\n  }\n\n  .group{\n    width: 80%;\n    /*background-color: red;*/\n    margin-left: 10px;\n    font-size: 18px;\n    color: #818181;\n    \n    transition: 0.3s;\n    display: flex;\n    \n    flex-direction: column;\n    align-items: center;\n  }\n\n  .add-btn{\n    color: #334155;\n    background-color: #cbd5e1;\n    border: #cbd5e1;\n    font-size: 15px;\n    cursor: pointer;\n  }\n\n  /* The Modal (background) */\n.modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0,0,0); /* Fallback color */\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n\n.todo-popup{\n  background-color: #fefefe;\n  position: fixed; \n  left: 14%;\n  top: 15%;\n  /*margin: 15% auto; /* 15% from the top and centered */\n  padding: 2%;\n  border: 1px solid #888;\n  width: 70%; /* Could be more or less, depending on screen size */\n}\n\n/* Modal Content/Box */\n.modal-content {\n  background-color: #fefefe;\n  margin: 15% auto; /* 15% from the top and centered */\n  padding: 20px;\n  border: 1px solid #888;\n  width: 20em; /* Could be more or less, depending on screen size */\n}\n\n/* The Close Button */\n.close {\n  color: #aaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.project-input{\n  margin-top: 5px;\n  border-radius: 5px;\n  width: 98%;\n  height: 30px;\n  border: 1px solid #cbd5e1;\n  font-size: 16px;\n}\n\n.project-input:focus{\n  outline: 1px solid blue;\n}\n\n.title-label{\n  font-size: 25px;\n  color: #334155;\n  display: block;\n}\n\n.btn-div{\n  display: flex;\n  justify-content: flex-end;\n /* margin-right: 95px;*/\n  margin-top: 20px;\n}\n\n.btn-div button{\n  padding: 8px;\n  margin: 4px;\n  font-size: 18px;\n  border-radius: 5px;\n  border: 1px solid #334155;\n  cursor: pointer;\n}\n\n.submit-project{\n  background-color: #334155;\n  color: white;\n  \n}\n\n.cancel-project:hover{\nbackground-color: #cbd5e1;\n}\n\n.modal-container{\n  padding: 5px;\n  display: flex;\n  flex-direction: column;\n  /*border: 2px solid red;*/\n}\n\n.project-list{\n  background-color: #cbd5e1;\n  border: solid 1px #cbd5e1;\n  color: #818181;\n  font-size: 17px;\n}\n\n.first-flex{\n  display: flex;\n  /*border: 2px solid green;*/\n  justify-content: space-between;\n  padding: 10px;\n}\n\n.title-div, .date-div {\n  width: 40%;\n /* border: 2px solid yellow;\n  padding: 5px;*/\n}\n\n.info-form{\n /* border: solid 2px red;*/\n}\n\n.date-input, .title-input{\n  width: 95%;\n   height: 30px;\n  border: 1px solid #cbd5e1;\n  font-size: 16px;\n  border-radius: 5px;\n  margin-top: 5px;\n}\n\n.date-input:focus, .title-input:focus, .description-input:focus{\n  outline: 1px solid blue;\n}\n\n.description-input{\n  width: 95%;\n   min-height: 90px;\n  border: 1px solid #cbd5e1;\n  font-size: 16px;\n  border-radius: 5px;\n  margin-top: 5px;\n}\n\n.project-div{\n  margin-top: 5px;\n  /*border: 2px solid red;*/\n}\n\n.both-div{\n  display: flex;\n  flex-direction: column;\n}\n\n.both-div div{\n  margin-top: 10px;\n}\n\n.first-btn, .second-btn{\n  padding: 8px;\n  margin: 4px;\n  font-size: 18px;\n  border-radius: 5px;\n  border: 1px solid #334155;\n  cursor: pointer;\n}\n\n.first-btn{\n  background-color: #334155;\n  color: white;\n}\n\n.second-btn{\n  background-color: white;\n}\n.second-btn:hover{\n  background-color: #cbd5e1;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addIcon": () => (/* binding */ addIcon),
/* harmony export */   "createHeader": () => (/* binding */ createHeader),
/* harmony export */   "sidebarAndBody": () => (/* binding */ sidebarAndBody)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _format_list_bulleted_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./format-list-bulleted.png */ "./src/format-list-bulleted.png");
/* harmony import */ var _home_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.png */ "./src/home.png");
/* harmony import */ var _pencil_plus_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pencil-plus.png */ "./src/pencil-plus.png");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo */ "./src/todo.js");







let addIcon = document.createElement("img")
function headerContainer(){
    const headerDiv = document.createElement('div')
    const leftIcons = document.createElement("div")
    const rightIcons = document.createElement("div")
    const listIcon = document.createElement("img")
    const homeIcon = document.createElement("img")
    

    listIcon.src = _format_list_bulleted_png__WEBPACK_IMPORTED_MODULE_1__
    homeIcon.src = _home_png__WEBPACK_IMPORTED_MODULE_2__
    addIcon.src = _pencil_plus_png__WEBPACK_IMPORTED_MODULE_3__
    headerDiv.appendChild(leftIcons)
    headerDiv.appendChild(rightIcons)
    leftIcons.appendChild(listIcon)
    leftIcons.appendChild(homeIcon)
    rightIcons.appendChild(addIcon)

    leftIcons.classList.add("home-icon")
    rightIcons.classList.add("home-icon")
    headerDiv.classList.add("header")
    homeIcon.classList.add("home-style")
    addIcon.classList.add("add-style")
    //listIcon.classList.add("openbtn")

    listIcon.addEventListener("click", openNav)
    addIcon.addEventListener("click", () => {
        _todo__WEBPACK_IMPORTED_MODULE_5__.modal.style.display = "block"
    })
    return headerDiv
}

let collapsibleDiv;
function collapsibleSidebar() {
    collapsibleDiv = document.createElement("div")
    const close = document.createElement("btn")
    const inbox = document.createElement("btn")
    const today = document.createElement("btn")
    const projects = document.createElement("btn")
    
    function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
      }

    collapsibleDiv.appendChild(close)
    collapsibleDiv.appendChild(inbox)
    collapsibleDiv.appendChild(today)
    collapsibleDiv.appendChild(projects)
    collapsibleDiv.appendChild((0,_projects__WEBPACK_IMPORTED_MODULE_4__.createProjectGroup)())
    collapsibleDiv.classList.add("sidebar")
    collapsibleDiv.setAttribute("id", "mySidebar")

    close.classList.add("closebtn")
    close.addEventListener("click", closeNav)
    close.textContent = "x"
    inbox.textContent = "Inbox"
    inbox.classList.add("btn")
    today.textContent = "Today"
    today.classList.add("btn")
    projects.textContent = "Projects"
    projects.classList.add("btn")

    projects.addEventListener("click", ()=>{
        if (document.querySelector(".group").classList.contains("active")){
        document.querySelector(".group").style.display = "none" 
        document.querySelector(".group").classList.remove("active")
        } else {
        document.querySelector(".group").style.display = "flex"
        document.querySelector(".group").classList.add("active")
        }
    })
    return collapsibleDiv
}

    let bodyDiv
function main() {
    bodyDiv = document.createElement("div")
    bodyDiv.textContent = "what are we doing today?"
    bodyDiv.classList.add("main")
    bodyDiv.setAttribute("id", "main")
    
    return bodyDiv
}

function sidebarAndBody() {
    const container = document.createElement("div")
    container.appendChild(collapsibleSidebar())
    container.appendChild(main())

    return container
}

function openNav() {
    collapsibleDiv.style.width = "250px";
    bodyDiv.style.marginLeft = "250px";
}


function createHeader() {
  return  headerContainer()
}





/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProjectGroup": () => (/* binding */ createProjectGroup),
/* harmony export */   "input": () => (/* binding */ input),
/* harmony export */   "projectForm": () => (/* binding */ projectForm)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


let modal
let plusBtn
let newProject
const documentedProjects = document.createElement("ul")
documentedProjects.classList.add("all-projects")

function createProjectGroup() {
    const group = document.createElement("div")
    const projectDiv = document.createElement("div")
    
    const btnDiv = document.createElement("div")
    const firstProject = document.createElement("li")
    const demoProject = document.createElement("button")
    plusBtn = document.createElement("button")

    plusBtn.textContent = " +    New Project"
    plusBtn.setAttribute("id", "myBtn")
    demoProject.textContent = "The Odin Project"
    
    plusBtn.onclick = function() {
        modal.style.display = "block";
      }

    group.appendChild(projectDiv)
    group.appendChild(btnDiv)
    projectDiv.appendChild(documentedProjects)
    firstProject.appendChild(demoProject)
    demoProject.classList.add("project-list")
    
    btnDiv.appendChild(plusBtn)
    documentedProjects.appendChild(firstProject)

    group.classList.add("group")
    plusBtn.classList.add("add-btn")

    group.style.display = "none"
    return group
}

const input = document.createElement("input")
function projectForm() {
    modal = document.createElement("div")
    const modalContent = document.createElement("div")
    const span = document.createElement("span")
    const modalContainer = document.createElement("div")

    const form  = document.createElement("form")
    const formDiv = document.createElement("div")
    const label = document.createElement("label")
    const formSpan = document.createElement("span")
    
    const btnDiv = document.createElement("div")
    const submitButton = document.createElement("button")
    const cancelButton = document.createElement("button")

    form.appendChild(formDiv)
    formDiv.appendChild(label)
    label.appendChild(formSpan)
    label.appendChild(input)
    btnDiv.appendChild(submitButton)
    btnDiv.appendChild(cancelButton)

    label.setAttribute("for", "title")
    input.style.display = "block"
    formSpan.textContent = "Project Title"
    input.setAttribute("type", "text")
    input.setAttribute("id", "title")
    input.setAttribute("placeholder", "The Odin Project")
    
    modal.appendChild(modalContent)
    modalContent.appendChild(span)
    modalContent.appendChild(modalContainer)
    modalContainer.appendChild(form)
    modalContainer.appendChild(btnDiv)
    input.classList.add("project-input")
    submitButton.classList.add("submit-project")
    cancelButton.classList.add("cancel-project")

    modalContainer.classList.add("modal-container")
    btnDiv.classList.add("btn-div")
    label.classList.add("title-label")
    modal.classList.add("modal")
    modal.setAttribute("id", "myModal")
    modalContent.classList.add("modal-content")
    span.classList.add("close")
    span.textContent = "x"
    submitButton.textContent = "Submit"
    cancelButton.textContent = "Cancel"
    submitButton.addEventListener("click", appendProject)
    cancelButton.addEventListener("click", cancelModal)

      span.onclick = function() {
        modal.style.display = "none";
      }

      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
      return modal
}


function appendProject () {
const newListItem = document.createElement("li")
newProject = document.createElement("button")    
newProject.textContent = input.value

const newDiv = document.createElement("div")
newListItem.appendChild(newDiv)
newDiv.appendChild(newProject)
newProject.classList.add("project-list")
documentedProjects.appendChild(newListItem)

//return projectArray
}


//projectArray.push(newProject.textContent)

function cancelModal() {
    modal.style.display = "none";
}





/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "modal": () => (/* binding */ modal),
/* harmony export */   "span": () => (/* binding */ span),
/* harmony export */   "todoPopup": () => (/* binding */ todoPopup)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




let modal
let span 
function todoPopup() {
    modal = document.createElement("div")
    const modalContent = document.createElement("div")
    span = document.createElement("span")
    const modalContainer = document.createElement("div")
    const formHeader = document.createElement("h2")
    formHeader.textContent = "New Task"

    modal.appendChild(modalContent)
    modalContent.appendChild(span)
    modalContent.appendChild(modalContainer)
    modalContainer.appendChild(formHeader)
    modalContainer.appendChild(formContent())
    modalContainer.appendChild(formButtons())

    modalContainer.classList.add("modal-container")
    modal.classList.add("modal")
    modal.setAttribute("id", "myModal")
    modalContent.classList.add("todo-popup")
    span.classList.add("close")
    span.textContent = "x"

    span.onclick = function() {
        modal.style.display = "none";
      }

      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }

    return modal
}

function formContent() {
    const infoForm = document.createElement("form")

    //DOM code for title input
    const firstFlexDiv = document.createElement("div")
    const titleDiv = document.createElement("div")
    const titleLabel = document.createElement("label")
    titleLabel.setAttribute ("for", "title")
    const titleSpan = document.createElement("span")
    titleSpan.textContent = "Title"
    const titleInput = document.createElement("input")
    titleInput.style.display = "block"
    titleInput.setAttribute("id", "title")

    infoForm.appendChild(firstFlexDiv)
    firstFlexDiv.appendChild(titleDiv)
    titleDiv.appendChild(titleLabel)
    titleLabel.appendChild(titleSpan)
    titleLabel.appendChild(titleInput)

    firstFlexDiv.classList.add("first-flex")
    infoForm.classList.add("info-form")
    titleDiv.classList.add("title-div")
    titleLabel.classList.add("todo-label")
    titleInput.classList.add("title-input")

    //Dom code for Due Date input 
    const dateDiv = document.createElement("div")
    const dateLabel = document.createElement("label")
    dateLabel.setAttribute ("for", "date")
    const dateSpan = document.createElement("span")
    dateSpan.textContent = "Due date:"
    const dateInput = document.createElement("input")
    dateInput.style.display = "block"
    dateInput.setAttribute("id", "date")
    dateInput.setAttribute("type", "datetime-local")

    dateDiv.classList.add("date-div")
    dateInput.classList.add("date-input")

    firstFlexDiv.appendChild(dateDiv)
    dateDiv.appendChild(dateLabel)
    dateLabel.appendChild(dateSpan)
    dateLabel.appendChild(dateInput)

    // Dom code for description input
    const secondFlexDiv = document.createElement("div")
    const descriptionDiv = document.createElement("div")
    const descriptionLabel = document.createElement("label")
    
    descriptionLabel.setAttribute ("for", "description")
    const descriptionSpan = document.createElement("span")
    descriptionSpan.textContent = "Description:"
    const descriptionInput = document.createElement("textarea")
    descriptionInput.style.display = "block"
    
    infoForm.appendChild(secondFlexDiv)
    secondFlexDiv.appendChild(descriptionDiv)
    descriptionDiv.appendChild(descriptionLabel)
    descriptionLabel.appendChild(descriptionSpan)
    descriptionLabel.appendChild(descriptionInput)
    descriptionInput.classList.add("description-input")
    descriptionDiv.classList.add("title-div")

    // Dom code for priority and project input
    const priorityAndProjectDiv = document.createElement("div")
    const priorityDiv = document.createElement("div")
    const priorityLabel = document.createElement("label")
    priorityLabel.setAttribute ("for", "priority")
    const prioritySpan = document.createElement("span")
    prioritySpan.textContent = "Priority"
    const priorityInput = document.createElement("select")
    const opt1 = document.createElement("option")
    const opt2 = document.createElement("option")
    const opt3 = document.createElement("option")

    opt1.textContent = "Low"
    opt1.setAttribute("value", "low")
    opt2.textContent = "Medium"
    opt2.setAttribute("value", "high")
    opt3.textContent = "High"
    opt3.setAttribute("value", "high")
    
    secondFlexDiv.appendChild(priorityAndProjectDiv)
    secondFlexDiv.classList.add("first-flex")
    priorityAndProjectDiv.appendChild(priorityDiv)
    priorityDiv.appendChild(priorityLabel)
    priorityLabel.appendChild(prioritySpan)
    priorityLabel.appendChild(priorityInput)
    priorityInput.appendChild(opt1)
    priorityInput.appendChild(opt2)
    priorityInput.appendChild(opt3)
    priorityAndProjectDiv.classList.add("title-div")
    priorityAndProjectDiv.classList.add("both-div")
    priorityInput.classList.add("date-input")

    const projectDiv = document.createElement("div")
    const projectLabel = document.createElement("label")
    projectLabel.setAttribute ("for", "project")
    const projectSpan = document.createElement("span")
    projectSpan.textContent = "Project"

    //work in progress
    const projectInput = document.createElement("select")
    const projectOpt1 = document.createElement("option")
    projectOpt1.textContent = "Inbox"
    projectInput.appendChild(projectOpt1)

    const projectOpt2 = document.createElement("option")
    projectOpt2.textContent = "The Odin Project"
    projectInput.appendChild(projectOpt2)
    //bug is likely to be somewhere around here
    
    
    let projectArray = []
    _home__WEBPACK_IMPORTED_MODULE_0__.addIcon.onclick = function () {
      let randomWord
     projectArray = ["inbox", "The Odin Project"]
        if (_projects__WEBPACK_IMPORTED_MODULE_1__.input.value != null){
          randomWord = _projects__WEBPACK_IMPORTED_MODULE_1__.input.value 
          projectArray.unshift(randomWord)
          //for (let i = 0; i < projectArray.length; i++ ){
            const projectOpt3 = document.createElement("option")
            projectOpt3.textContent = projectArray[0]
            projectInput.appendChild(projectOpt3)
          //}
        } else return
    }
    
   


    //const projectOpt1 = document.createElement("option")
    //const projectOpt2 = document.createElement("option")
    //const projectOpt3 = document.createElement("option")
    projectInput.style.display = "block"
    projectInput.setAttribute("id", "project")

   //projectOpt1.textContent = projectArray[1] 
   //projectOpt2.textContent = projectArray[0] 

    priorityAndProjectDiv.appendChild(projectDiv)
    projectDiv.appendChild(projectLabel)
    projectLabel.appendChild(projectSpan)
    projectLabel.appendChild(projectInput)
   // projectInput.appendChild(projectOpt1)
    //projectInput.appendChild(projectOpt2)
    //projectInput.appendChild(projectOpt3)

    projectInput.classList.add("date-input")
    projectDiv.classList.add("project-div")
    

    return infoForm
}

function formButtons() {
  const todoButtonDiv = document.createElement("div")
  const todoSubmitButton = document.createElement("button")
  const todoCancelButton = document.createElement("button")

  todoButtonDiv.appendChild(todoSubmitButton)
  todoButtonDiv.appendChild(todoCancelButton)

  todoSubmitButton.textContent = "Submit"
  todoCancelButton.textContent = "Cancel"

  todoButtonDiv.classList.add("btn-div")
  todoButtonDiv.style.paddingRight = "11px"
  todoSubmitButton.classList.add("first-btn")
  todoCancelButton.classList.add("second-btn")

  return todoButtonDiv
}




/***/ }),

/***/ "./src/fonts/Poppins-Medium.ttf":
/*!**************************************!*\
  !*** ./src/fonts/Poppins-Medium.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b59f6a636397975c5409.ttf";

/***/ }),

/***/ "./src/format-list-bulleted.png":
/*!**************************************!*\
  !*** ./src/format-list-bulleted.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "868804e1d3ea7c2b3d1e.png";

/***/ }),

/***/ "./src/home.png":
/*!**********************!*\
  !*** ./src/home.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d9380c7e49d401205364.png";

/***/ }),

/***/ "./src/pencil-plus.png":
/*!*****************************!*\
  !*** ./src/pencil-plus.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b6fc2650660b9677bb37.png";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo */ "./src/todo.js");





const content = document.querySelector("#main-content")

function initializeTodoList() {
content.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createHeader)())
content.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.sidebarAndBody)())
content.appendChild((0,_projects__WEBPACK_IMPORTED_MODULE_1__.projectForm)())
content.appendChild((0,_todo__WEBPACK_IMPORTED_MODULE_3__.todoPopup)())
}
initializeTodoList()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUUrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0hkO0FBQ0U7QUFDZDs7QUFFZDtBQUNBO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrREFBZTtBQUNuQjtBQUNBO0FBQ0EsWUFBWSxrREFBVztBQUN2Qix1QkFBdUIsa0RBQVc7QUFDbEM7QUFDQSw0QkFBNEIseUJBQXlCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdE5BO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFEO0FBQ2Y7QUFDakI7QUFDYzs7QUFFbkM7O0FBRUE7QUFDQSxvQkFBb0IsbURBQVk7QUFDaEMsb0JBQW9CLHFEQUFjO0FBQ2xDLG9CQUFvQixzREFBVztBQUMvQixvQkFBb0IsZ0RBQVM7QUFDN0I7QUFDQSxvQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Qb3BwaW5zLU1lZGl1bS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCwgaHRtbCwgYm9keXtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgZm9udC1mYW1pbHk6IHBvcGlucztcXG59XFxuXFxuQGZvbnQtZmFjZXtcXG4gIGZvbnQtZmFtaWx5OiBwb3BpbnM7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbmJvZHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XFxufVxcblxcbi5oZWFkZXJ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM0MTU1O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmhvbWUtaWNvbntcXG4gICAgcGFkZGluZzogMC41ZW07XFxufVxcblxcbi5ob21lLXN0eWxle1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcXG59XFxuXFxuLmFkZC1zdHlsZXtcXG4gICAgcGFkZGluZy1yaWdodDogMWVtO1xcbn1cXG5cXG4uZm9vdGVye1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzNDE1NTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDA7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgLyp0b3A6IDA7Ki9cXG4gICAgbGVmdDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NiZDVlMTtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcXG4gIH1cXG4gIFxcbiAgLnNpZGViYXIgLmJ0biB7XFxuICAgIHBhZGRpbmc6IDhweCA4cHggOHB4IDMycHg7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBjb2xvcjogIzgxODE4MTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG4gIFxcbiAgLnNpZGViYXIgLmJ0bjpob3ZlciB7XFxuICAgIGNvbG9yOiAjZjFmMWYxO1xcbiAgfVxcbiAgXFxuICBcXG4gIC5zaWRlYmFyIC5jbG9zZWJ0biB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMjVweDtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbiAgXFxuICAub3BlbmJ0biB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgfVxcbiAgXFxuICAub3BlbmJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XFxuICB9XFxuICBcXG4gICNjb250ZW50IHtcXG4gICAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgLjVzO1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgfVxcbiAgXFxuICAvKiBPbiBzbWFsbGVyIHNjcmVlbnMsIHdoZXJlIGhlaWdodCBpcyBsZXNzIHRoYW4gNDUwcHgsIGNoYW5nZSB0aGUgc3R5bGUgb2YgdGhlIHNpZGVuYXYgKGxlc3MgcGFkZGluZyBhbmQgYSBzbWFsbGVyIGZvbnQgc2l6ZSkgKi9cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0NTBweCkge1xcbiAgICAuc2lkZWJhciB7cGFkZGluZy10b3A6IDE1cHg7fVxcbiAgICAuc2lkZWJhciBhIHtmb250LXNpemU6IDE4cHg7fVxcbiAgfVxcblxcbiAgLmdyb3Vwe1xcbiAgICB3aWR0aDogODAlO1xcbiAgICAvKmJhY2tncm91bmQtY29sb3I6IHJlZDsqL1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBjb2xvcjogIzgxODE4MTtcXG4gICAgXFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIFxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLmFkZC1idG57XFxuICAgIGNvbG9yOiAjMzM0MTU1O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JkNWUxO1xcbiAgICBib3JkZXI6ICNjYmQ1ZTE7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcblxcbiAgLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xcbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXFxuICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXG4gIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cXG4gIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xcbn1cXG5cXG4udG9kby1wb3B1cHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7IFxcbiAgbGVmdDogMTQlO1xcbiAgdG9wOiAxNSU7XFxuICAvKm1hcmdpbjogMTUlIGF1dG87IC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXFxuICBwYWRkaW5nOiAyJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICB3aWR0aDogNzAlOyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xcbn1cXG5cXG4vKiBNb2RhbCBDb250ZW50L0JveCAqL1xcbi5tb2RhbC1jb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICBtYXJnaW46IDE1JSBhdXRvOyAvKiAxNSUgZnJvbSB0aGUgdG9wIGFuZCBjZW50ZXJlZCAqL1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICB3aWR0aDogMjBlbTsgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cXG59XFxuXFxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xcbi5jbG9zZSB7XFxuICBjb2xvcjogI2FhYTtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY2xvc2U6aG92ZXIsXFxuLmNsb3NlOmZvY3VzIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3QtaW5wdXR7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB3aWR0aDogOTglO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NiZDVlMTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLnByb2plY3QtaW5wdXQ6Zm9jdXN7XFxuICBvdXRsaW5lOiAxcHggc29saWQgYmx1ZTtcXG59XFxuXFxuLnRpdGxlLWxhYmVse1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgY29sb3I6ICMzMzQxNTU7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmJ0bi1kaXZ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gLyogbWFyZ2luLXJpZ2h0OiA5NXB4OyovXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4uYnRuLWRpdiBidXR0b257XFxuICBwYWRkaW5nOiA4cHg7XFxuICBtYXJnaW46IDRweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzQxNTU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zdWJtaXQtcHJvamVjdHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzQxNTU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBcXG59XFxuXFxuLmNhbmNlbC1wcm9qZWN0OmhvdmVye1xcbmJhY2tncm91bmQtY29sb3I6ICNjYmQ1ZTE7XFxufVxcblxcbi5tb2RhbC1jb250YWluZXJ7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC8qYm9yZGVyOiAycHggc29saWQgcmVkOyovXFxufVxcblxcbi5wcm9qZWN0LWxpc3R7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JkNWUxO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NiZDVlMTtcXG4gIGNvbG9yOiAjODE4MTgxO1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbn1cXG5cXG4uZmlyc3QtZmxleHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAvKmJvcmRlcjogMnB4IHNvbGlkIGdyZWVuOyovXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4udGl0bGUtZGl2LCAuZGF0ZS1kaXYge1xcbiAgd2lkdGg6IDQwJTtcXG4gLyogYm9yZGVyOiAycHggc29saWQgeWVsbG93O1xcbiAgcGFkZGluZzogNXB4OyovXFxufVxcblxcbi5pbmZvLWZvcm17XFxuIC8qIGJvcmRlcjogc29saWQgMnB4IHJlZDsqL1xcbn1cXG5cXG4uZGF0ZS1pbnB1dCwgLnRpdGxlLWlucHV0e1xcbiAgd2lkdGg6IDk1JTtcXG4gICBoZWlnaHQ6IDMwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2JkNWUxO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG5cXG4uZGF0ZS1pbnB1dDpmb2N1cywgLnRpdGxlLWlucHV0OmZvY3VzLCAuZGVzY3JpcHRpb24taW5wdXQ6Zm9jdXN7XFxuICBvdXRsaW5lOiAxcHggc29saWQgYmx1ZTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLWlucHV0e1xcbiAgd2lkdGg6IDk1JTtcXG4gICBtaW4taGVpZ2h0OiA5MHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NiZDVlMTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG59XFxuXFxuLnByb2plY3QtZGl2e1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgLypib3JkZXI6IDJweCBzb2xpZCByZWQ7Ki9cXG59XFxuXFxuLmJvdGgtZGl2e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5ib3RoLWRpdiBkaXZ7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4uZmlyc3QtYnRuLCAuc2Vjb25kLWJ0bntcXG4gIHBhZGRpbmc6IDhweDtcXG4gIG1hcmdpbjogNHB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzNDE1NTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZpcnN0LWJ0bntcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzQxNTU7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5zZWNvbmQtYnRue1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbi5zZWNvbmQtYnRuOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NiZDVlMTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsNENBQW9DO0FBQ3RDOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixPQUFPO0lBQ1AsU0FBUztJQUNULFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixRQUFRO0lBQ1IsZUFBZTtJQUNmLFVBQVU7SUFDVixVQUFVO0lBQ1YsT0FBTztJ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QXlCO0VBQ3pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFVBQVU7R0FDVCxnQkFBZ0I7RUFDakIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290LCBodG1sLCBib2R5e1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICBmb250LWZhbWlseTogcG9waW5zO1xcbn1cXG5cXG5AZm9udC1mYWNle1xcbiAgZm9udC1mYW1pbHk6IHBvcGlucztcXG4gIHNyYzogdXJsKC4vZm9udHMvUG9wcGlucy1NZWRpdW0udHRmKTtcXG59XFxuXFxuYm9keXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYztcXG59XFxuXFxuLmhlYWRlcntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzQxNTU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uaG9tZS1pY29ue1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG59XFxuXFxuLmhvbWUtc3R5bGV7XFxuICAgIHBhZGRpbmctbGVmdDogMWVtO1xcbn1cXG5cXG4uYWRkLXN0eWxle1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XFxufVxcblxcbi5mb290ZXJ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM0MTU1O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICAvKnRvcDogMDsqL1xcbiAgICBsZWZ0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JkNWUxO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xcbiAgfVxcbiAgXFxuICAuc2lkZWJhciAuYnRuIHtcXG4gICAgcGFkZGluZzogOHB4IDhweCA4cHggMzJweDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIGNvbG9yOiAjODE4MTgxO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbiAgXFxuICAuc2lkZWJhciAuYnRuOmhvdmVyIHtcXG4gICAgY29sb3I6ICNmMWYxZjE7XFxuICB9XFxuICBcXG4gIFxcbiAgLnNpZGViYXIgLmNsb3NlYnRuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAyNXB4O1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuICBcXG4gIC5vcGVuYnRuIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICB9XFxuICBcXG4gIC5vcGVuYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcXG4gIH1cXG4gIFxcbiAgI2NvbnRlbnQge1xcbiAgICB0cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAuNXM7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICB9XFxuICBcXG4gIC8qIE9uIHNtYWxsZXIgc2NyZWVucywgd2hlcmUgaGVpZ2h0IGlzIGxlc3MgdGhhbiA0NTBweCwgY2hhbmdlIHRoZSBzdHlsZSBvZiB0aGUgc2lkZW5hdiAobGVzcyBwYWRkaW5nIGFuZCBhIHNtYWxsZXIgZm9udCBzaXplKSAqL1xcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XFxuICAgIC5zaWRlYmFyIHtwYWRkaW5nLXRvcDogMTVweDt9XFxuICAgIC5zaWRlYmFyIGEge2ZvbnQtc2l6ZTogMThweDt9XFxuICB9XFxuXFxuICAuZ3JvdXB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIC8qYmFja2dyb3VuZC1jb2xvcjogcmVkOyovXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGNvbG9yOiAjODE4MTgxO1xcbiAgICBcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuYWRkLWJ0bntcXG4gICAgY29sb3I6ICMzMzQxNTU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYmQ1ZTE7XFxuICAgIGJvcmRlcjogI2NiZDVlMTtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuXFxuICAvKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXG4gIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxufVxcblxcbi50b2RvLXBvcHVwe1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDsgXFxuICBsZWZ0OiAxNCU7XFxuICB0b3A6IDE1JTtcXG4gIC8qbWFyZ2luOiAxNSUgYXV0bzsgLyogMTUlIGZyb20gdGhlIHRvcCBhbmQgY2VudGVyZWQgKi9cXG4gIHBhZGRpbmc6IDIlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gIHdpZHRoOiA3MCU7IC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXFxufVxcblxcbi8qIE1vZGFsIENvbnRlbnQvQm94ICovXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gIG1hcmdpbjogMTUlIGF1dG87IC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gIHdpZHRoOiAyMGVtOyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xcbn1cXG5cXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICovXFxuLmNsb3NlIHtcXG4gIGNvbG9yOiAjYWFhO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jbG9zZTpob3ZlcixcXG4uY2xvc2U6Zm9jdXMge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdC1pbnB1dHtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHdpZHRoOiA5OCU7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2JkNWUxO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4ucHJvamVjdC1pbnB1dDpmb2N1c3tcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBibHVlO1xcbn1cXG5cXG4udGl0bGUtbGFiZWx7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBjb2xvcjogIzMzNDE1NTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uYnRuLWRpdntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAvKiBtYXJnaW4tcmlnaHQ6IDk1cHg7Ki9cXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5idG4tZGl2IGJ1dHRvbntcXG4gIHBhZGRpbmc6IDhweDtcXG4gIG1hcmdpbjogNHB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzNDE1NTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnN1Ym1pdC1wcm9qZWN0e1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzNDE1NTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIFxcbn1cXG5cXG4uY2FuY2VsLXByb2plY3Q6aG92ZXJ7XFxuYmFja2dyb3VuZC1jb2xvcjogI2NiZDVlMTtcXG59XFxuXFxuLm1vZGFsLWNvbnRhaW5lcntcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLypib3JkZXI6IDJweCBzb2xpZCByZWQ7Ki9cXG59XFxuXFxuLnByb2plY3QtbGlzdHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjYmQ1ZTE7XFxuICBib3JkZXI6IHNvbGlkIDFweCAjY2JkNWUxO1xcbiAgY29sb3I6ICM4MTgxODE7XFxuICBmb250LXNpemU6IDE3cHg7XFxufVxcblxcbi5maXJzdC1mbGV4e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC8qYm9yZGVyOiAycHggc29saWQgZ3JlZW47Ki9cXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi50aXRsZS1kaXYsIC5kYXRlLWRpdiB7XFxuICB3aWR0aDogNDAlO1xcbiAvKiBib3JkZXI6IDJweCBzb2xpZCB5ZWxsb3c7XFxuICBwYWRkaW5nOiA1cHg7Ki9cXG59XFxuXFxuLmluZm8tZm9ybXtcXG4gLyogYm9yZGVyOiBzb2xpZCAycHggcmVkOyovXFxufVxcblxcbi5kYXRlLWlucHV0LCAudGl0bGUtaW5wdXR7XFxuICB3aWR0aDogOTUlO1xcbiAgIGhlaWdodDogMzBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYmQ1ZTE7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcblxcbi5kYXRlLWlucHV0OmZvY3VzLCAudGl0bGUtaW5wdXQ6Zm9jdXMsIC5kZXNjcmlwdGlvbi1pbnB1dDpmb2N1c3tcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBibHVlO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24taW5wdXR7XFxuICB3aWR0aDogOTUlO1xcbiAgIG1pbi1oZWlnaHQ6IDkwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2JkNWUxO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG5cXG4ucHJvamVjdC1kaXZ7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICAvKmJvcmRlcjogMnB4IHNvbGlkIHJlZDsqL1xcbn1cXG5cXG4uYm90aC1kaXZ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmJvdGgtZGl2IGRpdntcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5maXJzdC1idG4sIC5zZWNvbmQtYnRue1xcbiAgcGFkZGluZzogOHB4O1xcbiAgbWFyZ2luOiA0cHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMzM0MTU1O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZmlyc3QtYnRue1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzNDE1NTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNlY29uZC1idG57XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuLnNlY29uZC1idG46aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JkNWUxO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBsaXN0IGZyb20gXCIuL2Zvcm1hdC1saXN0LWJ1bGxldGVkLnBuZ1wiXG5pbXBvcnQgaG9tZSBmcm9tIFwiLi9ob21lLnBuZ1wiXG5pbXBvcnQgYWRkIGZyb20gXCIuL3BlbmNpbC1wbHVzLnBuZ1wiXG5pbXBvcnQge2NyZWF0ZVByb2plY3RHcm91cH0gZnJvbSBcIi4vcHJvamVjdHNcIlxuaW1wb3J0IHttb2RhbH0gZnJvbSBcIi4vdG9kb1wiXG5cbmxldCBhZGRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuZnVuY3Rpb24gaGVhZGVyQ29udGFpbmVyKCl7XG4gICAgY29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBsZWZ0SWNvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3QgcmlnaHRJY29ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb25zdCBsaXN0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICBjb25zdCBob21lSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICBcblxuICAgIGxpc3RJY29uLnNyYyA9IGxpc3RcbiAgICBob21lSWNvbi5zcmMgPSBob21lXG4gICAgYWRkSWNvbi5zcmMgPSBhZGRcbiAgICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQobGVmdEljb25zKVxuICAgIGhlYWRlckRpdi5hcHBlbmRDaGlsZChyaWdodEljb25zKVxuICAgIGxlZnRJY29ucy5hcHBlbmRDaGlsZChsaXN0SWNvbilcbiAgICBsZWZ0SWNvbnMuYXBwZW5kQ2hpbGQoaG9tZUljb24pXG4gICAgcmlnaHRJY29ucy5hcHBlbmRDaGlsZChhZGRJY29uKVxuXG4gICAgbGVmdEljb25zLmNsYXNzTGlzdC5hZGQoXCJob21lLWljb25cIilcbiAgICByaWdodEljb25zLmNsYXNzTGlzdC5hZGQoXCJob21lLWljb25cIilcbiAgICBoZWFkZXJEaXYuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKVxuICAgIGhvbWVJY29uLmNsYXNzTGlzdC5hZGQoXCJob21lLXN0eWxlXCIpXG4gICAgYWRkSWNvbi5jbGFzc0xpc3QuYWRkKFwiYWRkLXN0eWxlXCIpXG4gICAgLy9saXN0SWNvbi5jbGFzc0xpc3QuYWRkKFwib3BlbmJ0blwiKVxuXG4gICAgbGlzdEljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5OYXYpXG4gICAgYWRkSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgfSlcbiAgICByZXR1cm4gaGVhZGVyRGl2XG59XG5cbmxldCBjb2xsYXBzaWJsZURpdjtcbmZ1bmN0aW9uIGNvbGxhcHNpYmxlU2lkZWJhcigpIHtcbiAgICBjb2xsYXBzaWJsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidG5cIilcbiAgICBjb25zdCBpbmJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidG5cIilcbiAgICBjb25zdCB0b2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidG5cIilcbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidG5cIilcbiAgICBcbiAgICBmdW5jdGlvbiBjbG9zZU5hdigpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteVNpZGViYXJcIikuc3R5bGUud2lkdGggPSBcIjBcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLnN0eWxlLm1hcmdpbkxlZnQ9IFwiMFwiO1xuICAgICAgfVxuXG4gICAgY29sbGFwc2libGVEaXYuYXBwZW5kQ2hpbGQoY2xvc2UpXG4gICAgY29sbGFwc2libGVEaXYuYXBwZW5kQ2hpbGQoaW5ib3gpXG4gICAgY29sbGFwc2libGVEaXYuYXBwZW5kQ2hpbGQodG9kYXkpXG4gICAgY29sbGFwc2libGVEaXYuYXBwZW5kQ2hpbGQocHJvamVjdHMpXG4gICAgY29sbGFwc2libGVEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdEdyb3VwKCkpXG4gICAgY29sbGFwc2libGVEaXYuY2xhc3NMaXN0LmFkZChcInNpZGViYXJcIilcbiAgICBjb2xsYXBzaWJsZURpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm15U2lkZWJhclwiKVxuXG4gICAgY2xvc2UuY2xhc3NMaXN0LmFkZChcImNsb3NlYnRuXCIpXG4gICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTmF2KVxuICAgIGNsb3NlLnRleHRDb250ZW50ID0gXCJ4XCJcbiAgICBpbmJveC50ZXh0Q29udGVudCA9IFwiSW5ib3hcIlxuICAgIGluYm94LmNsYXNzTGlzdC5hZGQoXCJidG5cIilcbiAgICB0b2RheS50ZXh0Q29udGVudCA9IFwiVG9kYXlcIlxuICAgIHRvZGF5LmNsYXNzTGlzdC5hZGQoXCJidG5cIilcbiAgICBwcm9qZWN0cy50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIlxuICAgIHByb2plY3RzLmNsYXNzTGlzdC5hZGQoXCJidG5cIilcblxuICAgIHByb2plY3RzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ncm91cFwiKS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdyb3VwXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIiBcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ncm91cFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ3JvdXBcIikuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ3JvdXBcIikuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gY29sbGFwc2libGVEaXZcbn1cblxuICAgIGxldCBib2R5RGl2XG5mdW5jdGlvbiBtYWluKCkge1xuICAgIGJvZHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgYm9keURpdi50ZXh0Q29udGVudCA9IFwid2hhdCBhcmUgd2UgZG9pbmcgdG9kYXk/XCJcbiAgICBib2R5RGl2LmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpXG4gICAgYm9keURpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW5cIilcbiAgICBcbiAgICByZXR1cm4gYm9keURpdlxufVxuXG5mdW5jdGlvbiBzaWRlYmFyQW5kQm9keSgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbGxhcHNpYmxlU2lkZWJhcigpKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKCkpXG5cbiAgICByZXR1cm4gY29udGFpbmVyXG59XG5cbmZ1bmN0aW9uIG9wZW5OYXYoKSB7XG4gICAgY29sbGFwc2libGVEaXYuc3R5bGUud2lkdGggPSBcIjI1MHB4XCI7XG4gICAgYm9keURpdi5zdHlsZS5tYXJnaW5MZWZ0ID0gXCIyNTBweFwiO1xufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgcmV0dXJuICBoZWFkZXJDb250YWluZXIoKVxufVxuXG5leHBvcnQge2NyZWF0ZUhlYWRlciwgc2lkZWJhckFuZEJvZHksIGFkZEljb259XG5cbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmxldCBtb2RhbFxubGV0IHBsdXNCdG5cbmxldCBuZXdQcm9qZWN0XG5jb25zdCBkb2N1bWVudGVkUHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIilcbmRvY3VtZW50ZWRQcm9qZWN0cy5jbGFzc0xpc3QuYWRkKFwiYWxsLXByb2plY3RzXCIpXG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RHcm91cCgpIHtcbiAgICBjb25zdCBncm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIFxuICAgIGNvbnN0IGJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb25zdCBmaXJzdFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICBjb25zdCBkZW1vUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBwbHVzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuXG4gICAgcGx1c0J0bi50ZXh0Q29udGVudCA9IFwiICsgICAgTmV3IFByb2plY3RcIlxuICAgIHBsdXNCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJteUJ0blwiKVxuICAgIGRlbW9Qcm9qZWN0LnRleHRDb250ZW50ID0gXCJUaGUgT2RpbiBQcm9qZWN0XCJcbiAgICBcbiAgICBwbHVzQnRuLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIH1cblxuICAgIGdyb3VwLmFwcGVuZENoaWxkKHByb2plY3REaXYpXG4gICAgZ3JvdXAuYXBwZW5kQ2hpbGQoYnRuRGl2KVxuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnRlZFByb2plY3RzKVxuICAgIGZpcnN0UHJvamVjdC5hcHBlbmRDaGlsZChkZW1vUHJvamVjdClcbiAgICBkZW1vUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1saXN0XCIpXG4gICAgXG4gICAgYnRuRGl2LmFwcGVuZENoaWxkKHBsdXNCdG4pXG4gICAgZG9jdW1lbnRlZFByb2plY3RzLmFwcGVuZENoaWxkKGZpcnN0UHJvamVjdClcblxuICAgIGdyb3VwLmNsYXNzTGlzdC5hZGQoXCJncm91cFwiKVxuICAgIHBsdXNCdG4uY2xhc3NMaXN0LmFkZChcImFkZC1idG5cIilcblxuICAgIGdyb3VwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgIHJldHVybiBncm91cFxufVxuXG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuZnVuY3Rpb24gcHJvamVjdEZvcm0oKSB7XG4gICAgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKVxuICAgIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuXG4gICAgY29uc3QgZm9ybSAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKVxuICAgIGNvbnN0IGZvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcbiAgICBjb25zdCBmb3JtU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpXG4gICAgXG4gICAgY29uc3QgYnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1EaXYpXG4gICAgZm9ybURpdi5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChmb3JtU3BhbilcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBidG5EaXYuYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKVxuICAgIGJ0bkRpdi5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pXG5cbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0aXRsZVwiKVxuICAgIGlucHV0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbiAgICBmb3JtU3Bhbi50ZXh0Q29udGVudCA9IFwiUHJvamVjdCBUaXRsZVwiXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIilcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRpdGxlXCIpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJUaGUgT2RpbiBQcm9qZWN0XCIpXG4gICAgXG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQobW9kYWxDb250ZW50KVxuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChzcGFuKVxuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChtb2RhbENvbnRhaW5lcilcbiAgICBtb2RhbENvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKVxuICAgIG1vZGFsQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bkRpdilcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pbnB1dFwiKVxuICAgIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic3VibWl0LXByb2plY3RcIilcbiAgICBjYW5jZWxCdXR0b24uY2xhc3NMaXN0LmFkZChcImNhbmNlbC1wcm9qZWN0XCIpXG5cbiAgICBtb2RhbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibW9kYWwtY29udGFpbmVyXCIpXG4gICAgYnRuRGl2LmNsYXNzTGlzdC5hZGQoXCJidG4tZGl2XCIpXG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcInRpdGxlLWxhYmVsXCIpXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsXCIpXG4gICAgbW9kYWwuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJteU1vZGFsXCIpXG4gICAgbW9kYWxDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1jb250ZW50XCIpXG4gICAgc3Bhbi5jbGFzc0xpc3QuYWRkKFwiY2xvc2VcIilcbiAgICBzcGFuLnRleHRDb250ZW50ID0gXCJ4XCJcbiAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiXG4gICAgY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIlxuICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXBwZW5kUHJvamVjdClcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhbmNlbE1vZGFsKVxuXG4gICAgICBzcGFuLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT0gbW9kYWwpIHtcbiAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBtb2RhbFxufVxuXG5cbmZ1bmN0aW9uIGFwcGVuZFByb2plY3QgKCkge1xuY29uc3QgbmV3TGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbm5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpICAgIFxubmV3UHJvamVjdC50ZXh0Q29udGVudCA9IGlucHV0LnZhbHVlXG5cbmNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbm5ld0xpc3RJdGVtLmFwcGVuZENoaWxkKG5ld0Rpdilcbm5ld0Rpdi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KVxubmV3UHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1saXN0XCIpXG5kb2N1bWVudGVkUHJvamVjdHMuYXBwZW5kQ2hpbGQobmV3TGlzdEl0ZW0pXG5cbi8vcmV0dXJuIHByb2plY3RBcnJheVxufVxuXG5cbi8vcHJvamVjdEFycmF5LnB1c2gobmV3UHJvamVjdC50ZXh0Q29udGVudClcblxuZnVuY3Rpb24gY2FuY2VsTW9kYWwoKSB7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufVxuXG5leHBvcnQge2NyZWF0ZVByb2plY3RHcm91cCwgcHJvamVjdEZvcm0sIGlucHV0fVxuXG4iLCJpbXBvcnQgeyBhZGRJY29uIH0gZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IHsgaW5wdXQgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuZXhwb3J0IGxldCBtb2RhbFxuZXhwb3J0IGxldCBzcGFuIFxuZnVuY3Rpb24gdG9kb1BvcHVwKCkge1xuICAgIG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcbiAgICBjb25zdCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb25zdCBmb3JtSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpXG4gICAgZm9ybUhlYWRlci50ZXh0Q29udGVudCA9IFwiTmV3IFRhc2tcIlxuXG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQobW9kYWxDb250ZW50KVxuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChzcGFuKVxuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChtb2RhbENvbnRhaW5lcilcbiAgICBtb2RhbENvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtSGVhZGVyKVxuICAgIG1vZGFsQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Db250ZW50KCkpXG4gICAgbW9kYWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUJ1dHRvbnMoKSlcblxuICAgIG1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1jb250YWluZXJcIilcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWxcIilcbiAgICBtb2RhbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm15TW9kYWxcIilcbiAgICBtb2RhbENvbnRlbnQuY2xhc3NMaXN0LmFkZChcInRvZG8tcG9wdXBcIilcbiAgICBzcGFuLmNsYXNzTGlzdC5hZGQoXCJjbG9zZVwiKVxuICAgIHNwYW4udGV4dENvbnRlbnQgPSBcInhcIlxuXG4gICAgc3Bhbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09IG1vZGFsKSB7XG4gICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICByZXR1cm4gbW9kYWxcbn1cblxuZnVuY3Rpb24gZm9ybUNvbnRlbnQoKSB7XG4gICAgY29uc3QgaW5mb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKVxuXG4gICAgLy9ET00gY29kZSBmb3IgdGl0bGUgaW5wdXRcbiAgICBjb25zdCBmaXJzdEZsZXhEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxuICAgIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlIChcImZvclwiLCBcInRpdGxlXCIpXG4gICAgY29uc3QgdGl0bGVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcbiAgICB0aXRsZVNwYW4udGV4dENvbnRlbnQgPSBcIlRpdGxlXCJcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgdGl0bGVJbnB1dC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRpdGxlXCIpXG5cbiAgICBpbmZvRm9ybS5hcHBlbmRDaGlsZChmaXJzdEZsZXhEaXYpXG4gICAgZmlyc3RGbGV4RGl2LmFwcGVuZENoaWxkKHRpdGxlRGl2KVxuICAgIHRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpXG4gICAgdGl0bGVMYWJlbC5hcHBlbmRDaGlsZCh0aXRsZVNwYW4pXG4gICAgdGl0bGVMYWJlbC5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KVxuXG4gICAgZmlyc3RGbGV4RGl2LmNsYXNzTGlzdC5hZGQoXCJmaXJzdC1mbGV4XCIpXG4gICAgaW5mb0Zvcm0uY2xhc3NMaXN0LmFkZChcImluZm8tZm9ybVwiKVxuICAgIHRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS1kaXZcIilcbiAgICB0aXRsZUxhYmVsLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWxhYmVsXCIpXG4gICAgdGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKFwidGl0bGUtaW5wdXRcIilcblxuICAgIC8vRG9tIGNvZGUgZm9yIER1ZSBEYXRlIGlucHV0IFxuICAgIGNvbnN0IGRhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXG4gICAgZGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSAoXCJmb3JcIiwgXCJkYXRlXCIpXG4gICAgY29uc3QgZGF0ZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKVxuICAgIGRhdGVTcGFuLnRleHRDb250ZW50ID0gXCJEdWUgZGF0ZTpcIlxuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIGRhdGVJbnB1dC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGF0ZVwiKVxuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZXRpbWUtbG9jYWxcIilcblxuICAgIGRhdGVEaXYuY2xhc3NMaXN0LmFkZChcImRhdGUtZGl2XCIpXG4gICAgZGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJkYXRlLWlucHV0XCIpXG5cbiAgICBmaXJzdEZsZXhEaXYuYXBwZW5kQ2hpbGQoZGF0ZURpdilcbiAgICBkYXRlRGl2LmFwcGVuZENoaWxkKGRhdGVMYWJlbClcbiAgICBkYXRlTGFiZWwuYXBwZW5kQ2hpbGQoZGF0ZVNwYW4pXG4gICAgZGF0ZUxhYmVsLmFwcGVuZENoaWxkKGRhdGVJbnB1dClcblxuICAgIC8vIERvbSBjb2RlIGZvciBkZXNjcmlwdGlvbiBpbnB1dFxuICAgIGNvbnN0IHNlY29uZEZsZXhEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3QgZGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxuICAgIFxuICAgIGRlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlIChcImZvclwiLCBcImRlc2NyaXB0aW9uXCIpXG4gICAgY29uc3QgZGVzY3JpcHRpb25TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcbiAgICBkZXNjcmlwdGlvblNwYW4udGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uOlwiXG4gICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKVxuICAgIGRlc2NyaXB0aW9uSW5wdXQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICAgIFxuICAgIGluZm9Gb3JtLmFwcGVuZENoaWxkKHNlY29uZEZsZXhEaXYpXG4gICAgc2Vjb25kRmxleERpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkRpdilcbiAgICBkZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKVxuICAgIGRlc2NyaXB0aW9uTGFiZWwuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25TcGFuKVxuICAgIGRlc2NyaXB0aW9uTGFiZWwuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dClcbiAgICBkZXNjcmlwdGlvbklucHV0LmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvbi1pbnB1dFwiKVxuICAgIGRlc2NyaXB0aW9uRGl2LmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS1kaXZcIilcblxuICAgIC8vIERvbSBjb2RlIGZvciBwcmlvcml0eSBhbmQgcHJvamVjdCBpbnB1dFxuICAgIGNvbnN0IHByaW9yaXR5QW5kUHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb25zdCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXG4gICAgcHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUgKFwiZm9yXCIsIFwicHJpb3JpdHlcIilcbiAgICBjb25zdCBwcmlvcml0eVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKVxuICAgIHByaW9yaXR5U3Bhbi50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHlcIlxuICAgIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpXG4gICAgY29uc3Qgb3B0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIilcbiAgICBjb25zdCBvcHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKVxuICAgIGNvbnN0IG9wdDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpXG5cbiAgICBvcHQxLnRleHRDb250ZW50ID0gXCJMb3dcIlxuICAgIG9wdDEuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJsb3dcIilcbiAgICBvcHQyLnRleHRDb250ZW50ID0gXCJNZWRpdW1cIlxuICAgIG9wdDIuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJoaWdoXCIpXG4gICAgb3B0My50ZXh0Q29udGVudCA9IFwiSGlnaFwiXG4gICAgb3B0My5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImhpZ2hcIilcbiAgICBcbiAgICBzZWNvbmRGbGV4RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5QW5kUHJvamVjdERpdilcbiAgICBzZWNvbmRGbGV4RGl2LmNsYXNzTGlzdC5hZGQoXCJmaXJzdC1mbGV4XCIpXG4gICAgcHJpb3JpdHlBbmRQcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5RGl2KVxuICAgIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpXG4gICAgcHJpb3JpdHlMYWJlbC5hcHBlbmRDaGlsZChwcmlvcml0eVNwYW4pXG4gICAgcHJpb3JpdHlMYWJlbC5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KVxuICAgIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQob3B0MSlcbiAgICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKG9wdDIpXG4gICAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChvcHQzKVxuICAgIHByaW9yaXR5QW5kUHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwidGl0bGUtZGl2XCIpXG4gICAgcHJpb3JpdHlBbmRQcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJib3RoLWRpdlwiKVxuICAgIHByaW9yaXR5SW5wdXQuY2xhc3NMaXN0LmFkZChcImRhdGUtaW5wdXRcIilcblxuICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3QgcHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXG4gICAgcHJvamVjdExhYmVsLnNldEF0dHJpYnV0ZSAoXCJmb3JcIiwgXCJwcm9qZWN0XCIpXG4gICAgY29uc3QgcHJvamVjdFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKVxuICAgIHByb2plY3RTcGFuLnRleHRDb250ZW50ID0gXCJQcm9qZWN0XCJcblxuICAgIC8vd29yayBpbiBwcm9ncmVzc1xuICAgIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIilcbiAgICBjb25zdCBwcm9qZWN0T3B0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIilcbiAgICBwcm9qZWN0T3B0MS50ZXh0Q29udGVudCA9IFwiSW5ib3hcIlxuICAgIHByb2plY3RJbnB1dC5hcHBlbmRDaGlsZChwcm9qZWN0T3B0MSlcblxuICAgIGNvbnN0IHByb2plY3RPcHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKVxuICAgIHByb2plY3RPcHQyLnRleHRDb250ZW50ID0gXCJUaGUgT2RpbiBQcm9qZWN0XCJcbiAgICBwcm9qZWN0SW5wdXQuYXBwZW5kQ2hpbGQocHJvamVjdE9wdDIpXG4gICAgLy9idWcgaXMgbGlrZWx5IHRvIGJlIHNvbWV3aGVyZSBhcm91bmQgaGVyZVxuICAgIFxuICAgIFxuICAgIGxldCBwcm9qZWN0QXJyYXkgPSBbXVxuICAgIGFkZEljb24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCByYW5kb21Xb3JkXG4gICAgIHByb2plY3RBcnJheSA9IFtcImluYm94XCIsIFwiVGhlIE9kaW4gUHJvamVjdFwiXVxuICAgICAgICBpZiAoaW5wdXQudmFsdWUgIT0gbnVsbCl7XG4gICAgICAgICAgcmFuZG9tV29yZCA9IGlucHV0LnZhbHVlIFxuICAgICAgICAgIHByb2plY3RBcnJheS51bnNoaWZ0KHJhbmRvbVdvcmQpXG4gICAgICAgICAgLy9mb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RBcnJheS5sZW5ndGg7IGkrKyApe1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdE9wdDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpXG4gICAgICAgICAgICBwcm9qZWN0T3B0My50ZXh0Q29udGVudCA9IHByb2plY3RBcnJheVswXVxuICAgICAgICAgICAgcHJvamVjdElucHV0LmFwcGVuZENoaWxkKHByb2plY3RPcHQzKVxuICAgICAgICAgIC8vfVxuICAgICAgICB9IGVsc2UgcmV0dXJuXG4gICAgfVxuICAgIFxuICAgXG5cblxuICAgIC8vY29uc3QgcHJvamVjdE9wdDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpXG4gICAgLy9jb25zdCBwcm9qZWN0T3B0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIilcbiAgICAvL2NvbnN0IHByb2plY3RPcHQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKVxuICAgIHByb2plY3RJbnB1dC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgcHJvamVjdElucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdFwiKVxuXG4gICAvL3Byb2plY3RPcHQxLnRleHRDb250ZW50ID0gcHJvamVjdEFycmF5WzFdIFxuICAgLy9wcm9qZWN0T3B0Mi50ZXh0Q29udGVudCA9IHByb2plY3RBcnJheVswXSBcblxuICAgIHByaW9yaXR5QW5kUHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KVxuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdExhYmVsKVxuICAgIHByb2plY3RMYWJlbC5hcHBlbmRDaGlsZChwcm9qZWN0U3BhbilcbiAgICBwcm9qZWN0TGFiZWwuYXBwZW5kQ2hpbGQocHJvamVjdElucHV0KVxuICAgLy8gcHJvamVjdElucHV0LmFwcGVuZENoaWxkKHByb2plY3RPcHQxKVxuICAgIC8vcHJvamVjdElucHV0LmFwcGVuZENoaWxkKHByb2plY3RPcHQyKVxuICAgIC8vcHJvamVjdElucHV0LmFwcGVuZENoaWxkKHByb2plY3RPcHQzKVxuXG4gICAgcHJvamVjdElucHV0LmNsYXNzTGlzdC5hZGQoXCJkYXRlLWlucHV0XCIpXG4gICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1kaXZcIilcbiAgICBcblxuICAgIHJldHVybiBpbmZvRm9ybVxufVxuXG5mdW5jdGlvbiBmb3JtQnV0dG9ucygpIHtcbiAgY29uc3QgdG9kb0J1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgY29uc3QgdG9kb1N1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgY29uc3QgdG9kb0NhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcblxuICB0b2RvQnV0dG9uRGl2LmFwcGVuZENoaWxkKHRvZG9TdWJtaXRCdXR0b24pXG4gIHRvZG9CdXR0b25EaXYuYXBwZW5kQ2hpbGQodG9kb0NhbmNlbEJ1dHRvbilcblxuICB0b2RvU3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIlxuICB0b2RvQ2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIlxuXG4gIHRvZG9CdXR0b25EaXYuY2xhc3NMaXN0LmFkZChcImJ0bi1kaXZcIilcbiAgdG9kb0J1dHRvbkRpdi5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIjExcHhcIlxuICB0b2RvU3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJmaXJzdC1idG5cIilcbiAgdG9kb0NhbmNlbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic2Vjb25kLWJ0blwiKVxuXG4gIHJldHVybiB0b2RvQnV0dG9uRGl2XG59XG5cblxuZXhwb3J0IHt0b2RvUG9wdXB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGNyZWF0ZUhlYWRlciwgc2lkZWJhckFuZEJvZHl9IGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCB7cHJvamVjdEZvcm19IGZyb20gXCIuL3Byb2plY3RzXCJcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyB0b2RvUG9wdXAgfSBmcm9tIFwiLi90b2RvXCI7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tY29udGVudFwiKVxuXG5mdW5jdGlvbiBpbml0aWFsaXplVG9kb0xpc3QoKSB7XG5jb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKVxuY29udGVudC5hcHBlbmRDaGlsZChzaWRlYmFyQW5kQm9keSgpKVxuY29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybSgpKVxuY29udGVudC5hcHBlbmRDaGlsZCh0b2RvUG9wdXAoKSlcbn1cbmluaXRpYWxpemVUb2RvTGlzdCgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9