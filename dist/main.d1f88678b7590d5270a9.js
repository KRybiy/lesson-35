/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./model/lodash.js":
/*!*************************!*\
  !*** ./model/lodash.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__.e(/*! import() */ "vendors-node_modules_lodash_lodash_js").then(__webpack_require__.t.bind(__webpack_require__, /*! lodash */ "../node_modules/lodash/lodash.js", 23)).then(_ref => {
  let {
    default: _
  } = _ref;
  const numbers = [1, 5, 5, 5, 8, 10, 1, 1, 1, 5, 15, 42, 5];
  const uniqNumbers = _.uniq(numbers);
  console.log("Lodash uniq:", uniqNumbers);
  console.log("Lodash random:", _.random(0, 100, true));
});

/***/ }),

/***/ "./model/post.js":
/*!***********************!*\
  !*** ./model/post.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Post)
/* harmony export */ });
class Post {
  constructor(title, img) {
    this.img = img;
    this.date = new Date();
    this.title = title;
  }
  toString() {
    return JSON.stringify({
      date: this.date.toJSON(),
      img: this.img,
      title: this.title
    }, null, 2);
  }
}

/***/ }),

/***/ "./index.jsx":
/*!*******************!*\
  !*** ./index.jsx ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @css/style.css */ "./css/style.css");
/* harmony import */ var _less_style_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @less/style.less */ "./less/style.less");
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sass/style.scss */ "./sass/style.scss");
/* harmony import */ var _sass_style_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sass/style.sass */ "./sass/style.sass");
/* harmony import */ var _model_lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @model/lodash */ "./model/lodash.js");
/* harmony import */ var _model_lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_model_lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _model_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @model/post */ "./model/post.js");
/* harmony import */ var _assets_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @assets/data */ "./assets/data.json");
/* harmony import */ var _assets_icon_square_big__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @assets/icon-square-big */ "./assets/icon-square-big.png");
/* harmony import */ var _assets_data_xml__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @assets/data.xml */ "./assets/data.xml");
/* harmony import */ var _assets_data_xml__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_data_xml__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_data_csv__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @assets/data.csv */ "./assets/data.csv");
/* harmony import */ var _assets_data_csv__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_data_csv__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-dom/client */ "../node_modules/react-dom/client.js");













const App = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement("div", {
  className: "container"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement("h1", null, "Webpack training"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement("div", {
  className: "webpack-logo"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement("pre", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement("div", {
  className: "less-demo"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement("h2", null, "Less")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement("div", {
  className: "scss-demo"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement("h2", null, "Scss")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement("div", {
  className: "sass-demo"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement("h2", null, "Sass")));
const root = react_dom_client__WEBPACK_IMPORTED_MODULE_12__.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement(App, null));
const post = new _model_post__WEBPACK_IMPORTED_MODULE_6__["default"]("Webpack Post Title", _assets_icon_square_big__WEBPACK_IMPORTED_MODULE_8__);
jquery__WEBPACK_IMPORTED_MODULE_5__("pre").addClass("code").html(post.toString());
jquery__WEBPACK_IMPORTED_MODULE_5__("pre").html(post.toString());
console.log("JSON:", _assets_data__WEBPACK_IMPORTED_MODULE_7__);
console.log(_assets_icon_square_big__WEBPACK_IMPORTED_MODULE_8__);
console.log("XML:", (_assets_data_xml__WEBPACK_IMPORTED_MODULE_9___default()));
console.log("CSV:", (_assets_data_csv__WEBPACK_IMPORTED_MODULE_10___default()));

/***/ }),

/***/ "./assets/data.csv":
/*!*************************!*\
  !*** ./assets/data.csv ***!
  \*************************/
/***/ ((module) => {

module.exports = [["Series reference","Period","Description","Revised","Initially published"],["2019.09","PPIQ.SQN800000","All industries excl admin health educati, Inputs Indexes (Level 0)","1167","1164"],["2019.12","PPIQ.SQN800000","All industries excl admin health educati, Inputs Indexes (Level 0)","1170","1166"],["2019.09","PPIQ.SQN800001","All industries ex admin health edu OOD, Inputs Indexes (Level 0)","1167","1164"],["2019.12","PPIQ.SQN800001","All industries ex admin health edu OOD, Inputs Indexes (Level 0)","1170","1166"],["2019.09","PPIQ.SQN900000","All industries, Inputs Indexes (Level 0)","1166","1164"],["2019.12","PPIQ.SQN900000","All industries, Inputs Indexes (Level 0)","1169","1165"],["2019.09","PPIQ.SQN900001","All industries excl OOD, Inputs Indexes (Level 0)","1166","1163"],["2019.12","PPIQ.SQN900001","All industries excl OOD, Inputs Indexes (Level 0)","1169","1165"],["2019.12","PPIQ.SQNAA0000","Agriculture, Forestry and Fishing, Inputs Indexes (Level 1)","1207","1206"],["2019.12","PPIQ.SQNAA2000","Forestry and Logging, Inputs Indexes (Level 2)","1217","1208"],["2019.12","PPIQ.SQNAA2100","Forestry and Logging, Inputs Indexes (Level 3)","1217","1208"],["2019.12","PPIQ.SQNAA211X","Forestry and Logging, Inputs Indexes (Level 4)","1217","1208"],["2019.09","PPIQ.SQNCC0000","Manufacturing, Inputs Indexes (Level 1)","1154","1144"],["2019.12","PPIQ.SQNCC0000","Manufacturing, Inputs Indexes (Level 1)","1162","1149"],["2019.09","PPIQ.SQNCC1000","Food, Beverage and Tobacco Product Manuf, InputIndexes (Level 2)","1203","1184"],["2019.12","PPIQ.SQNCC1000","Food, Beverage and Tobacco Product Manuf, Inputs Indexes (Level 2)","1232","1208"],["2019.09","PPIQ.SQNCC1300","Dairy Product Manufacturing, Inputs Indexes (Level 3)","1131","1094"],["2019.12","PPIQ.SQNCC1300","Dairy Product Manufacturing, Inputs Indexes (Level 3)","1162","1116"],["2019.09","PPIQ.SQNCC131X","Dairy Product Manufacturing, Inputs Indexes (Level 4)","1131","1094"],["2019.12","PPIQ.SQNCC131X","Dairy Product Manufacturing, Inputs Indexes (Level 4)","1162","1116"],["2019.12","PPIQ.SQNCC1400","Fruit, Oil, Cereal and Other Food Produc, Inputs Indexes (Level 3)","1138","1137"],["2019.12","PPIQ.SQNCC141X","Fruit, Oil, Cereal and Other Food Product Manufact, Inputs Indexes (Level 4)","1138","1137"],["2019.12","PPIQ.SQNCC3000","Wood and Paper Products Manufacturing, Inputs Indexes (Level 2)","1150","1139"],["2019.12","PPIQ.SQNCC3100","Wood Product Manufacturing, Inputs Indexes (Level 3)","1179","1166"],["2019.12","PPIQ.SQNCC311X","Wood Product Manufacturing, Inputs Indexes (Level 4)","1179","1166"],["2019.12","PPIQ.SQNCC3200","Pulp, Paper and Converted Paper Product, Inputs Indexes (Level 3)","1108","1100"],["2019.12","PPIQ.SQNCC321X","Pulp, Paper and Converted Paper Product Manufactur, Inputs Indexes (Level 4)","1108","1100"],["2019.09","PPIQ.SQU900000","All industries, Outputs Indexes (Level 0)","1179","1178"],["2019.12","PPIQ.SQU900000","All industries, Outputs Indexes (Level 0)","1185","1183"],["2019.09","PPIQ.SQU900001","All industries excl OOD, Outputs Indexes (Level 0)","1178","1176"],["2019.12","PPIQ.SQU900001","All industries excl OOD, Outputs Indexes (Level 0)","1184","1181"],["2019.09","PPIQ.SQUAA0000","Agriculture, Forestry and Fishing, Outputs Indexes (Level 1)","1287","1268"],["2019.12","PPIQ.SQUAA0000","Agriculture, Forestry and Fishing, Outputs Indexes (Level 1)","1318","1290"],["2019.09","PPIQ.SQUAA1000","Agriculture, Outputs Indexes (Level 2)","1298","1273"],["2019.12","PPIQ.SQUAA1000","Agriculture, Outputs Indexes (Level 2)","1336","1305"],["2019.09","PPIQ.SQUAA1100","Horticulture and Fruit Growing, Outputs Indexes (Level 3)","1251","1250"],["2019.12","PPIQ.SQUAA1100","Horticulture and Fruit Growing, Outputs Indexes (Level 3)","1237","1236"],["2019.09","PPIQ.SQUAA1110","Horticulture and Fruit Growing, Outputs Indexes (Level 4)","1251","1250"],["2019.12","PPIQ.SQUAA1110","Horticulture and Fruit Growing, Outputs Indexes (Level 4)","1237","1236"],["2019.09","PPIQ.SQUAA1200","Sheep, Beef Cattle and Grain Farming, Outputs Indexes (Level 3)","1545","1541"],["2019.12","PPIQ.SQUAA1200","Sheep, Beef Cattle and Grain Farming, Outputs Indexes (Level 3)","1613","1608"],["2019.09","PPIQ.SQUAA1210","Sheep, Beef Cattle and Grain Farming, Outputs Indexes (Level 4)","1545","1541"],["2019.12","PPIQ.SQUAA1210","Sheep, Beef Cattle and Grain Farming, Outputs Indexes (Level 4)","1613","1608"],["2019.09","PPIQ.SQUAA1300","Dairy Cattle Farming, Outputs Indexes (Level 3)","1061","1019"],["2019.12","PPIQ.SQUAA1300","Dairy Cattle Farming, Outputs Indexes (Level 3)","1101","1048"],["2019.09","PPIQ.SQUAA1310","Dairy Cattle Farming, Outputs Indexes (Level 4)","1061","1019"],["2019.12","PPIQ.SQUAA1310","Dairy Cattle Farming, Outputs Indexes (Level 4)","1101","1048"],["2019.09","PPIQ.SQUAA1400","Poultry, Deer and Other Livestock Farmin, Outputs Indexes (Level 3)","1284","1281"],["2019.12","PPIQ.SQUAA1400","Poultry, Deer and Other Livestock Farmin, Outputs Indexes (Level 3)","1293","1289"],["2019.09","PPIQ.SQUAA1410","Poultry, Deer and Other Livestock Farming, Outputs Indexes (Level 4)","1284","1281"],["2019.12","PPIQ.SQUAA1410","Poultry, Deer and Other Livestock Farming, Outputs Indexes (Level 4)","1293","1289"],["2019.12","PPIQ.SQUAA2000","Forestry and Logging, Outputs Indexes (Level 2)","1218","1184"],["2019.12","PPIQ.SQUAA2100","Forestry and Logging, Outputs Indexes (Level 3)","1218","1184"],["2019.12","PPIQ.SQUAA2110","Forestry and Logging, Outputs Indexes (Level 4)","1218","1184"],["2019.09","PPIQ.SQUAA3000","Fishing, Aquaculture and Agriculture, Fo, Outputs Indexes (Level 2)","1250","1249"],["2019.12","PPIQ.SQUAA3220","Agriculture, Forestry and Fishing Support Services, Outputs Indexes (Level 4)","1245","1244"],["2019.12","PPIQ.SQUC03210","Logs for domestic market, LPT PPI - NA06CC higher level commodity indexes","1459","1399"],["2019.12","PPIQ.SQUC03220","Logs for export market, LPT PPI - NA06CC higher level commodity indexes","1429","1395"],["2019.12","PPIQ.SQUCC0000","Manufacturing, Outputs Indexes (Level 1)","1166","1165"],["2019.09","PPIQ.SQUCC1000","Food, Beverage and Tobacco Product Manuf, Outputs Indexes (Level 2)","1258","1257"],["2019.12","PPIQ.SQUCC1000","Food, Beverage and Tobacco Product Manuf, Outputs Indexes (Level 2)","1264","1262"],["2019.09","PPIQ.SQUCC1300","Dairy Product Manufacturing, Outputs Indexes (Level 3)","1243","1241"],["2019.12","PPIQ.SQUCC1300","Dairy Product Manufacturing, Outputs Indexes (Level 3)","1220","1217"],["2019.09","PPIQ.SQUCC1310","Dairy Product Manufacturing, Outputs Indexes (Level 4)","1243","1241"],["2019.12","PPIQ.SQUCC1310","Dairy Product Manufacturing, Outputs Indexes (Level 4)","1220","1217"],["2019.12","PPIQ.SQUCC3200","Pulp, Paper and Converted Paper Product, Outputs Indexes (Level 3)","1015","1014"],["2019.12","PPIQ.SQUCC3210","Pulp, Paper and Converted Paper Product Manufactur, Outputs Indexes (Level 4)","1015","1014"],[""]]

/***/ }),

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./less/style.less":
/*!*************************!*\
  !*** ./less/style.less ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./sass/style.sass":
/*!*************************!*\
  !*** ./sass/style.sass ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./sass/style.scss":
/*!*************************!*\
  !*** ./sass/style.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/data.xml":
/*!*************************!*\
  !*** ./assets/data.xml ***!
  \*************************/
/***/ ((module) => {

module.exports = {"Company":{"Employee":[{"FirstName":["Tanmay"],"LastName":["Patil"],"ContactNo":["1234567890"],"Email":["tanmaypatil@xyz.com"],"Address":[{"City":["Bangalore"],"State":["Karnataka"],"Zip":["560212"]}]}]}}

/***/ }),

/***/ "./assets/icon-square-big.png":
/*!************************************!*\
  !*** ./assets/icon-square-big.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "47692505d122dbcae490.png";

/***/ }),

/***/ "./assets/data.json":
/*!**************************!*\
  !*** ./assets/data.json ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"name":"Barton Bradley","age":27,"gender":"male","company":"PROXSOFT","email":"bartonbradley@proxsoft.com"}');

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
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("d1f88678b7590d5270a9")
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
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		// data-webpack is not used as build has no uniqueName
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 		
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
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
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_react-dom_client_js"], () => (__webpack_require__("./index.jsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;