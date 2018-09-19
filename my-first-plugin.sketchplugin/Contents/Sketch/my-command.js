var that = this;
function __skpm_run (key, context) {
  that.context = context;

var exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/my-command.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/my-command.js":
/*!***************************!*\
  !*** ./src/my-command.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch */ "sketch");
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (context) {
  var sketch = __webpack_require__(/*! sketch */ "sketch");

  var document = sketch.getSelectedDocument();
  var page = document.selectedPage;
  var layers = document.selectedLayers;

  var UI = __webpack_require__(/*! sketch/ui */ "sketch/ui");

  if (layers.isEmpty) UI.message('No layers selected!');else {
    var shadow_0dp = [];
    var shadow_1dp = [{
      color: '#00000024',
      x: 0,
      y: 1,
      blur: 1,
      spread: 0
    }, {
      color: '#0000001F',
      x: 0,
      y: 2,
      blur: 1,
      spread: -1
    }, {
      color: '#00000033',
      x: 0,
      y: 1,
      blur: 3,
      spread: 0
    }];
    var shadow_2dp = [{
      color: '#00000024',
      x: 0,
      y: 2,
      blur: 2,
      spread: 0
    }, {
      color: '#0000001F',
      x: 0,
      y: 3,
      blur: 1,
      spread: -2
    }, {
      color: '#00000033',
      x: 0,
      y: 1,
      blur: 5,
      spread: 0
    }];
    var shadow_3dp = [{
      color: '#00000024',
      x: 0,
      y: 3,
      blur: 4,
      spread: 0
    }, {
      color: '#0000001F',
      x: 0,
      y: 3,
      blur: 3,
      spread: -2
    }, {
      color: '#00000033',
      x: 0,
      y: 1,
      blur: 8,
      spread: 0
    }];
    var shadow_4dp = [{
      color: '#00000024',
      x: 0,
      y: 4,
      blur: 5,
      spread: 0
    }, {
      color: '#0000001F',
      x: 0,
      y: 1,
      blur: 10,
      spread: 0
    }, {
      color: '#00000033',
      x: 0,
      y: 2,
      blur: 4,
      spread: -1
    }];
    var shadow_6dp = [{
      color: '#00000024',
      x: 0,
      y: 6,
      blur: 10,
      spread: 0
    }, {
      color: '#0000001F',
      x: 0,
      y: 1,
      blur: 18,
      spread: 0
    }, {
      color: '#00000033',
      x: 0,
      y: 3,
      blur: 5,
      spread: -1
    }];
    var shadow_8dp = [{
      color: '#00000024',
      x: 0,
      y: 8,
      blur: 10,
      spread: 1
    }, {
      color: '#0000001F',
      x: 0,
      y: 3,
      blur: 14,
      spread: 2
    }, {
      color: '#00000033',
      x: 0,
      y: 5,
      blur: 5,
      spread: -3
    }];
    var shadow_9dp = [{
      color: '#00000024',
      x: 0,
      y: 9,
      blur: 12,
      spread: 1
    }, {
      color: '#0000001F',
      x: 0,
      y: 3,
      blur: 16,
      spread: 2
    }, {
      color: '#00000033',
      x: 0,
      y: 5,
      blur: 6,
      spread: -3
    }];
    var shadow_12dp = [{
      color: '#00000024',
      x: 0,
      y: 12,
      blur: 17,
      spread: 2
    }, {
      color: '#0000001F',
      x: 0,
      y: 5,
      blur: 22,
      spread: 4
    }, {
      color: '#00000033',
      x: 0,
      y: 7,
      blur: 8,
      spread: -4
    }];
    var shadow_16dp = [{
      color: '#00000024',
      x: 0,
      y: 16,
      blur: 24,
      spread: 2
    }, {
      color: '#0000001F',
      x: 0,
      y: 6,
      blur: 30,
      spread: 5
    }, {
      color: '#00000033',
      x: 0,
      y: 8,
      blur: 10,
      spread: -5
    }];
    var shadow_24dp = [{
      color: '#00000024',
      x: 0,
      y: 24,
      blur: 38,
      spread: 3
    }, {
      color: '#0000001F',
      x: 0,
      y: 9,
      blur: 46,
      spread: 8
    }, {
      color: '#00000033',
      x: 0,
      y: 11,
      blur: 15,
      spread: -7
    }];
    var options = ['0dp', '1dp', '2dp', '3dp', '4dp', '6dp', '8dp', '9dp', '12dp', '16dp', '24dp'];
    var selectDialog = sketch.UI.getSelectionFromUser("Please select shadow depth:", options //defualt; 0,1
    );
    var selected = selectDialog[1];

    if (selected == 0) {
      layers.forEach(function (e) {
        e.style.shadows = shadow_0dp;
      });
    } else if (selected == 1) {
      layers.forEach(function (e) {
        e.style.shadows = shadow_1dp;
      });
    } else if (selected == 2) {
      layers.forEach(function (e) {
        e.style.shadows = shadow_2dp;
      });
    } else if (selected == 3) {
      layers.forEach(function (e) {
        e.style.shadows = shadow_3dp;
      });
    } else if (selected == 4) {
      layers.forEach(function (e) {
        e.style.shadows = shadow_4dp;
      });
    } else if (selected == 5) {
      layers.forEach(function (e) {
        e.style.shadows = shadow_6dp;
      });
    } else if (selected == 6) {
      layers.forEach(function (e) {
        e.style.shadows = shadow_8dp;
      });
    } else if (selected == 7) {
      layers.forEach(function (e) {
        e.style.shadows = shadow_9dp;
      });
    } else if (selected == 8) {
      layers.forEach(function (e) {
        e.style.shadows = shadow_12dp;
      });
    } else if (selected == 9) {
      layers.forEach(function (e) {
        e.style.shadows = shadow_16dp;
      });
    } else if (selected == 10) {
      log(shadow_24dp);
      layers.forEach(function (e) {
        e.style.shadows = shadow_24dp;
      });
    }
  }
});

/***/ }),

/***/ "sketch":
/*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch");

/***/ }),

/***/ "sketch/ui":
/*!****************************!*\
  !*** external "sketch/ui" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/ui");

/***/ })

/******/ });
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
that['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=my-command.js.map