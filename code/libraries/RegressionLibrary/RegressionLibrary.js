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
/******/ 	return __webpack_require__(__webpack_require__.s = 137);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);

var core = __webpack_require__(10);

var hide = __webpack_require__(18);

var redefine = __webpack_require__(15);

var ctx = __webpack_require__(22);

var PROTOTYPE = 'prototype';

var $export = function $export(type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;

  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined; // export native or passed

    out = (own ? target : source)[key]; // bind timers to global for call from export context

    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out; // extend global

    if (target) redefine(target, key, out, type & $export.U); // export

    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};

global.core = core; // type bitmap

$export.F = 1; // forced

$export.G = 2; // global

$export.S = 4; // static

$export.P = 8; // proto

$export.B = 16; // bind

$export.W = 32; // wrap

$export.U = 64; // safe

$export.R = 128; // real proto method for `library`

module.exports = $export;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/is-any-array/src/index.js
var src = __webpack_require__(32);
var src_default = /*#__PURE__*/__webpack_require__.n(src);

// CONCATENATED MODULE: ./node_modules/ml-array-max/lib-es6/index.js

/**
 * Computes the maximum of the given values
 * @param {Array<number>} input
 * @return {number}
 */

function lib_es6_max(input) {
  if (!src_default()(input)) {
    throw new TypeError('input must be an array');
  }

  if (input.length === 0) {
    throw new TypeError('input must not be empty');
  }

  var max = input[0];

  for (var i = 1; i < input.length; i++) {
    if (input[i] > max) max = input[i];
  }

  return max;
}

/* harmony default export */ var lib_es6 = (lib_es6_max);
// CONCATENATED MODULE: ./node_modules/ml-array-min/lib-es6/index.js

/**
 * Computes the minimum of the given values
 * @param {Array<number>} input
 * @return {number}
 */

function lib_es6_min(input) {
  if (!src_default()(input)) {
    throw new TypeError('input must be an array');
  }

  if (input.length === 0) {
    throw new TypeError('input must not be empty');
  }

  var min = input[0];

  for (var i = 1; i < input.length; i++) {
    if (input[i] < min) min = input[i];
  }

  return min;
}

/* harmony default export */ var ml_array_min_lib_es6 = (lib_es6_min);
// CONCATENATED MODULE: ./node_modules/ml-array-rescale/lib-es6/index.js




function rescale(input) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!src_default()(input)) {
    throw new TypeError('input must be an array');
  } else if (input.length === 0) {
    throw new TypeError('input must not be empty');
  }

  var output;

  if (options.output !== undefined) {
    if (!src_default()(options.output)) {
      throw new TypeError('output option must be an array if specified');
    }

    output = options.output;
  } else {
    output = new Array(input.length);
  }

  var currentMin = ml_array_min_lib_es6(input);
  var currentMax = lib_es6(input);

  if (currentMin === currentMax) {
    throw new RangeError('minimum and maximum input values are equal. Cannot rescale a constant array');
  }

  var _options$min = options.min,
      minValue = _options$min === void 0 ? options.autoMinMax ? currentMin : 0 : _options$min,
      _options$max = options.max,
      maxValue = _options$max === void 0 ? options.autoMinMax ? currentMax : 1 : _options$max;

  if (minValue >= maxValue) {
    throw new RangeError('min option must be smaller than max option');
  }

  var factor = (maxValue - minValue) / (currentMax - currentMin);

  for (var i = 0; i < input.length; i++) {
    output[i] = (input[i] - currentMin) * factor + minValue;
  }

  return output;
}

/* harmony default export */ var ml_array_rescale_lib_es6 = (rescale);
// EXTERNAL MODULE: ./node_modules/ml-matrix/src/util.js
var util = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/ml-matrix/src/stat.js

function sumByRow(matrix) {
  var sum = Object(util["i" /* newArray */])(matrix.rows);

  for (var i = 0; i < matrix.rows; ++i) {
    for (var j = 0; j < matrix.columns; ++j) {
      sum[i] += matrix.get(i, j);
    }
  }

  return sum;
}
function sumByColumn(matrix) {
  var sum = Object(util["i" /* newArray */])(matrix.columns);

  for (var i = 0; i < matrix.rows; ++i) {
    for (var j = 0; j < matrix.columns; ++j) {
      sum[j] += matrix.get(i, j);
    }
  }

  return sum;
}
function sumAll(matrix) {
  var v = 0;

  for (var i = 0; i < matrix.rows; i++) {
    for (var j = 0; j < matrix.columns; j++) {
      v += matrix.get(i, j);
    }
  }

  return v;
}
function productByRow(matrix) {
  var sum = Object(util["i" /* newArray */])(matrix.rows, 1);

  for (var i = 0; i < matrix.rows; ++i) {
    for (var j = 0; j < matrix.columns; ++j) {
      sum[i] *= matrix.get(i, j);
    }
  }

  return sum;
}
function productByColumn(matrix) {
  var sum = Object(util["i" /* newArray */])(matrix.columns, 1);

  for (var i = 0; i < matrix.rows; ++i) {
    for (var j = 0; j < matrix.columns; ++j) {
      sum[j] *= matrix.get(i, j);
    }
  }

  return sum;
}
function productAll(matrix) {
  var v = 1;

  for (var i = 0; i < matrix.rows; i++) {
    for (var j = 0; j < matrix.columns; j++) {
      v *= matrix.get(i, j);
    }
  }

  return v;
}
function varianceByRow(matrix, unbiased, mean) {
  var rows = matrix.rows;
  var cols = matrix.columns;
  var variance = [];

  for (var i = 0; i < rows; i++) {
    var sum1 = 0;
    var sum2 = 0;
    var x = 0;

    for (var j = 0; j < cols; j++) {
      x = matrix.get(i, j) - mean[i];
      sum1 += x;
      sum2 += x * x;
    }

    if (unbiased) {
      variance.push((sum2 - sum1 * sum1 / cols) / (cols - 1));
    } else {
      variance.push((sum2 - sum1 * sum1 / cols) / cols);
    }
  }

  return variance;
}
function varianceByColumn(matrix, unbiased, mean) {
  var rows = matrix.rows;
  var cols = matrix.columns;
  var variance = [];

  for (var j = 0; j < cols; j++) {
    var sum1 = 0;
    var sum2 = 0;
    var x = 0;

    for (var i = 0; i < rows; i++) {
      x = matrix.get(i, j) - mean[j];
      sum1 += x;
      sum2 += x * x;
    }

    if (unbiased) {
      variance.push((sum2 - sum1 * sum1 / rows) / (rows - 1));
    } else {
      variance.push((sum2 - sum1 * sum1 / rows) / rows);
    }
  }

  return variance;
}
function varianceAll(matrix, unbiased, mean) {
  var rows = matrix.rows;
  var cols = matrix.columns;
  var size = rows * cols;
  var sum1 = 0;
  var sum2 = 0;
  var x = 0;

  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      x = matrix.get(i, j) - mean;
      sum1 += x;
      sum2 += x * x;
    }
  }

  if (unbiased) {
    return (sum2 - sum1 * sum1 / size) / (size - 1);
  } else {
    return (sum2 - sum1 * sum1 / size) / size;
  }
}
function centerByRow(matrix, mean) {
  for (var i = 0; i < matrix.rows; i++) {
    for (var j = 0; j < matrix.columns; j++) {
      matrix.set(i, j, matrix.get(i, j) - mean[i]);
    }
  }
}
function centerByColumn(matrix, mean) {
  for (var i = 0; i < matrix.rows; i++) {
    for (var j = 0; j < matrix.columns; j++) {
      matrix.set(i, j, matrix.get(i, j) - mean[j]);
    }
  }
}
function centerAll(matrix, mean) {
  for (var i = 0; i < matrix.rows; i++) {
    for (var j = 0; j < matrix.columns; j++) {
      matrix.set(i, j, matrix.get(i, j) - mean);
    }
  }
}
function getScaleByRow(matrix) {
  var scale = [];

  for (var i = 0; i < matrix.rows; i++) {
    var sum = 0;

    for (var j = 0; j < matrix.columns; j++) {
      sum += Math.pow(matrix.get(i, j), 2) / (matrix.columns - 1);
    }

    scale.push(Math.sqrt(sum));
  }

  return scale;
}
function scaleByRow(matrix, scale) {
  for (var i = 0; i < matrix.rows; i++) {
    for (var j = 0; j < matrix.columns; j++) {
      matrix.set(i, j, matrix.get(i, j) / scale[i]);
    }
  }
}
function getScaleByColumn(matrix) {
  var scale = [];

  for (var j = 0; j < matrix.columns; j++) {
    var sum = 0;

    for (var i = 0; i < matrix.rows; i++) {
      sum += Math.pow(matrix.get(i, j), 2) / (matrix.rows - 1);
    }

    scale.push(Math.sqrt(sum));
  }

  return scale;
}
function scaleByColumn(matrix, scale) {
  for (var i = 0; i < matrix.rows; i++) {
    for (var j = 0; j < matrix.columns; j++) {
      matrix.set(i, j, matrix.get(i, j) / scale[j]);
    }
  }
}
function getScaleAll(matrix) {
  var divider = matrix.size - 1;
  var sum = 0;

  for (var j = 0; j < matrix.columns; j++) {
    for (var i = 0; i < matrix.rows; i++) {
      sum += Math.pow(matrix.get(i, j), 2) / divider;
    }
  }

  return Math.sqrt(sum);
}
function scaleAll(matrix, scale) {
  for (var i = 0; i < matrix.rows; i++) {
    for (var j = 0; j < matrix.columns; j++) {
      matrix.set(i, j, matrix.get(i, j) / scale);
    }
  }
}
// CONCATENATED MODULE: ./node_modules/ml-matrix/src/inspect.js
function inspectMatrix() {
  var indent = ' '.repeat(2);
  var indentData = ' '.repeat(4);
  return "".concat(this.constructor.name, " {\n").concat(indent, "[\n").concat(indentData).concat(inspectData(this, indentData), "\n").concat(indent, "]\n").concat(indent, "rows: ").concat(this.rows, "\n").concat(indent, "columns: ").concat(this.columns, "\n}");
}
var maxRows = 15;
var maxColumns = 10;
var maxNumSize = 8;

function inspectData(matrix, indent) {
  var rows = matrix.rows,
      columns = matrix.columns;
  var maxI = Math.min(rows, maxRows);
  var maxJ = Math.min(columns, maxColumns);
  var result = [];

  for (var i = 0; i < maxI; i++) {
    var line = [];

    for (var j = 0; j < maxJ; j++) {
      line.push(formatNumber(matrix.get(i, j)));
    }

    result.push("".concat(line.join(' ')));
  }

  if (maxJ !== columns) {
    result[result.length - 1] += " ... ".concat(columns - maxColumns, " more columns");
  }

  if (maxI !== rows) {
    result.push("... ".concat(rows - maxRows, " more rows"));
  }

  return result.join("\n".concat(indent));
}

function formatNumber(num) {
  var numStr = String(num);

  if (numStr.length <= maxNumSize) {
    return numStr.padEnd(maxNumSize, ' ');
  }

  var precise = num.toPrecision(maxNumSize - 2);

  if (precise.length <= maxNumSize) {
    return precise;
  }

  var exponential = num.toExponential(maxNumSize - 2);
  var eIndex = exponential.indexOf('e');
  var e = exponential.substring(eIndex);
  return exponential.substring(0, maxNumSize - e.length) + e;
}
// CONCATENATED MODULE: ./node_modules/ml-matrix/src/mathOperations.js
function installMathOperations(AbstractMatrix, Matrix) {
  AbstractMatrix.prototype.add = function add(value) {
    if (typeof value === 'number') return this.addS(value);
    return this.addM(value);
  };

  AbstractMatrix.prototype.addS = function addS(value) {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) + value);
      }
    }

    return this;
  };

  AbstractMatrix.prototype.addM = function addM(matrix) {
    matrix = Matrix.checkMatrix(matrix);

    if (this.rows !== matrix.rows || this.columns !== matrix.columns) {
      throw new RangeError('Matrices dimensions must be equal');
    }

    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) + matrix.get(i, j));
      }
    }

    return this;
  };

  AbstractMatrix.add = function add(matrix, value) {
    var newMatrix = new Matrix(matrix);
    return newMatrix.add(value);
  };

  AbstractMatrix.prototype.sub = function sub(value) {
    if (typeof value === 'number') return this.subS(value);
    return this.subM(value);
  };

  AbstractMatrix.prototype.subS = function subS(value) {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) - value);
      }
    }

    return this;
  };

  AbstractMatrix.prototype.subM = function subM(matrix) {
    matrix = Matrix.checkMatrix(matrix);

    if (this.rows !== matrix.rows || this.columns !== matrix.columns) {
      throw new RangeError('Matrices dimensions must be equal');
    }

    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) - matrix.get(i, j));
      }
    }

    return this;
  };

  AbstractMatrix.sub = function sub(matrix, value) {
    var newMatrix = new Matrix(matrix);
    return newMatrix.sub(value);
  };

  AbstractMatrix.prototype.subtract = AbstractMatrix.prototype.sub;
  AbstractMatrix.prototype.subtractS = AbstractMatrix.prototype.subS;
  AbstractMatrix.prototype.subtractM = AbstractMatrix.prototype.subM;
  AbstractMatrix.subtract = AbstractMatrix.sub;

  AbstractMatrix.prototype.mul = function mul(value) {
    if (typeof value === 'number') return this.mulS(value);
    return this.mulM(value);
  };

  AbstractMatrix.prototype.mulS = function mulS(value) {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) * value);
      }
    }

    return this;
  };

  AbstractMatrix.prototype.mulM = function mulM(matrix) {
    matrix = Matrix.checkMatrix(matrix);

    if (this.rows !== matrix.rows || this.columns !== matrix.columns) {
      throw new RangeError('Matrices dimensions must be equal');
    }

    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) * matrix.get(i, j));
      }
    }

    return this;
  };

  AbstractMatrix.mul = function mul(matrix, value) {
    var newMatrix = new Matrix(matrix);
    return newMatrix.mul(value);
  };

  AbstractMatrix.prototype.multiply = AbstractMatrix.prototype.mul;
  AbstractMatrix.prototype.multiplyS = AbstractMatrix.prototype.mulS;
  AbstractMatrix.prototype.multiplyM = AbstractMatrix.prototype.mulM;
  AbstractMatrix.multiply = AbstractMatrix.mul;

  AbstractMatrix.prototype.div = function div(value) {
    if (typeof value === 'number') return this.divS(value);
    return this.divM(value);
  };

  AbstractMatrix.prototype.divS = function divS(value) {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) / value);
      }
    }

    return this;
  };

  AbstractMatrix.prototype.divM = function divM(matrix) {
    matrix = Matrix.checkMatrix(matrix);

    if (this.rows !== matrix.rows || this.columns !== matrix.columns) {
      throw new RangeError('Matrices dimensions must be equal');
    }

    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) / matrix.get(i, j));
      }
    }

    return this;
  };

  AbstractMatrix.div = function div(matrix, value) {
    var newMatrix = new Matrix(matrix);
    return newMatrix.div(value);
  };

  AbstractMatrix.prototype.divide = AbstractMatrix.prototype.div;
  AbstractMatrix.prototype.divideS = AbstractMatrix.prototype.divS;
  AbstractMatrix.prototype.divideM = AbstractMatrix.prototype.divM;
  AbstractMatrix.divide = AbstractMatrix.div;

  AbstractMatrix.prototype.mod = function mod(value) {
    if (typeof value === 'number') return this.modS(value);
    return this.modM(value);
  };

  AbstractMatrix.prototype.modS = function modS(value) {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) % value);
      }
    }

    return this;
  };

  AbstractMatrix.prototype.modM = function modM(matrix) {
    matrix = Matrix.checkMatrix(matrix);

    if (this.rows !== matrix.rows || this.columns !== matrix.columns) {
      throw new RangeError('Matrices dimensions must be equal');
    }

    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) % matrix.get(i, j));
      }
    }

    return this;
  };

  AbstractMatrix.mod = function mod(matrix, value) {
    var newMatrix = new Matrix(matrix);
    return newMatrix.mod(value);
  };

  AbstractMatrix.prototype.modulus = AbstractMatrix.prototype.mod;
  AbstractMatrix.prototype.modulusS = AbstractMatrix.prototype.modS;
  AbstractMatrix.prototype.modulusM = AbstractMatrix.prototype.modM;
  AbstractMatrix.modulus = AbstractMatrix.mod;

  AbstractMatrix.prototype.and = function and(value) {
    if (typeof value === 'number') return this.andS(value);
    return this.andM(value);
  };

  AbstractMatrix.prototype.andS = function andS(value) {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) & value);
      }
    }

    return this;
  };

  AbstractMatrix.prototype.andM = function andM(matrix) {
    matrix = Matrix.checkMatrix(matrix);

    if (this.rows !== matrix.rows || this.columns !== matrix.columns) {
      throw new RangeError('Matrices dimensions must be equal');
    }

    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) & matrix.get(i, j));
      }
    }

    return this;
  };

  AbstractMatrix.and = function and(matrix, value) {
    var newMatrix = new Matrix(matrix);
    return newMatrix.and(value);
  };

  AbstractMatrix.prototype.or = function or(value) {
    if (typeof value === 'number') return this.orS(value);
    return this.orM(value);
  };

  AbstractMatrix.prototype.orS = function orS(value) {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) | value);
      }
    }

    return this;
  };

  AbstractMatrix.prototype.orM = function orM(matrix) {
    matrix = Matrix.checkMatrix(matrix);

    if (this.rows !== matrix.rows || this.columns !== matrix.columns) {
      throw new RangeError('Matrices dimensions must be equal');
    }

    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) | matrix.get(i, j));
      }
    }

    return this;
  };

  AbstractMatrix.or = function or(matrix, value) {
    var newMatrix = new Matrix(matrix);
    return newMatrix.or(value);
  };

  AbstractMatrix.prototype.xor = function xor(value) {
    if (typeof value === 'number') return this.xorS(value);
    return this.xorM(value);
  };

  AbstractMatrix.prototype.xorS = function xorS(value) {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) ^ value);
      }
    }

    return this;
  };

  AbstractMatrix.prototype.xorM = function xorM(matrix) {
    matrix = Matrix.checkMatrix(matrix);

    if (this.rows !== matrix.rows || this.columns !== matrix.columns) {
      throw new RangeError('Matrices dimensions must be equal');
    }

    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) ^ matrix.get(i, j));
      }
    }

    return this;
  };

  AbstractMatrix.xor = function xor(matrix, value) {
    var newMatrix = new Matrix(matrix);
    return newMatrix.xor(value);
  };

  AbstractMatrix.prototype.leftShift = function leftShift(value) {
    if (typeof value === 'number') return this.leftShiftS(value);
    return this.leftShiftM(value);
  };

  AbstractMatrix.prototype.leftShiftS = function leftShiftS(value) {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) << value);
      }
    }

    return this;
  };

  AbstractMatrix.prototype.leftShiftM = function leftShiftM(matrix) {
    matrix = Matrix.checkMatrix(matrix);

    if (this.rows !== matrix.rows || this.columns !== matrix.columns) {
      throw new RangeError('Matrices dimensions must be equal');
    }

    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) << matrix.get(i, j));
      }
    }

    return this;
  };

  AbstractMatrix.leftShift = function leftShift(matrix, value) {
    var newMatrix = new Matrix(matrix);
    return newMatrix.leftShift(value);
  };

  AbstractMatrix.prototype.signPropagatingRightShift = function signPropagatingRightShift(value) {
    if (typeof value === 'number') return this.signPropagatingRightShiftS(value);
    return this.signPropagatingRightShiftM(value);
  };

  AbstractMatrix.prototype.signPropagatingRightShiftS = function signPropagatingRightShiftS(value) {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) >> value);
      }
    }

    return this;
  };

  AbstractMatrix.prototype.signPropagatingRightShiftM = function signPropagatingRightShiftM(matrix) {
    matrix = Matrix.checkMatrix(matrix);

    if (this.rows !== matrix.rows || this.columns !== matrix.columns) {
      throw new RangeError('Matrices dimensions must be equal');
    }

    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) >> matrix.get(i, j));
      }
    }

    return this;
  };

  AbstractMatrix.signPropagatingRightShift = function signPropagatingRightShift(matrix, value) {
    var newMatrix = new Matrix(matrix);
    return newMatrix.signPropagatingRightShift(value);
  };

  AbstractMatrix.prototype.rightShift = function rightShift(value) {
    if (typeof value === 'number') return this.rightShiftS(value);
    return this.rightShiftM(value);
  };

  AbstractMatrix.prototype.rightShiftS = function rightShiftS(value) {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) >>> value);
      }
    }

    return this;
  };

  AbstractMatrix.prototype.rightShiftM = function rightShiftM(matrix) {
    matrix = Matrix.checkMatrix(matrix);

    if (this.rows !== matrix.rows || this.columns !== matrix.columns) {
      throw new RangeError('Matrices dimensions must be equal');
    }

    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) >>> matrix.get(i, j));
      }
    }

    return this;
  };

  AbstractMatrix.rightShift = function rightShift(matrix, value) {
    var newMatrix = new Matrix(matrix);
    return newMatrix.rightShift(value);
  };

  AbstractMatrix.prototype.zeroFillRightShift = AbstractMatrix.prototype.rightShift;
  AbstractMatrix.prototype.zeroFillRightShiftS = AbstractMatrix.prototype.rightShiftS;
  AbstractMatrix.prototype.zeroFillRightShiftM = AbstractMatrix.prototype.rightShiftM;
  AbstractMatrix.zeroFillRightShift = AbstractMatrix.rightShift;

  AbstractMatrix.prototype.not = function not() {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        this.set(i, j, ~this.get(i, j));
      }
    }

    return this;
  };

  AbstractMatrix.not = function not(matrix) {
    var newMatrix = new Matrix(matrix);
    return newMatrix.not();
  };

  AbstractMatrix.prototype.abs = function abs() {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        this.set(i, j, Math.abs(this.get(i, j)));
      }
    }

    return this;
  };

  AbstractMatrix.abs = function abs(matrix) {
    var newMatrix = new Matrix(matrix);
    return newMatrix.abs();
  };

  AbstractMatrix.prototype.acos = function acos() {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        this.set(i, j, Math.acos(this.get(i, j)));
      }
    }

    return this;
  };

  AbstractMatrix.acos = function acos(matrix) {
    var newMatrix = new Matrix(matrix);
    return newMatrix.acos();
  };

  AbstractMatrix.prototype.acosh = function acosh() {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        this.set(i, j, Math.acosh(this.get(i, j)));
      }
    }

    return this;
  };

  AbstractMatrix.acosh = function acosh(matrix) {
    var newMatrix = new Matrix(matrix);
    return newMatrix.acosh();
  };

  AbstractMatrix.prototype.asin = function asin() {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        this.set(i, j, Math.asin(this.get(i, j)));
      }
    }

    return this;
  };

  AbstractMatrix.asin = function asin(matrix) {
    var newMatrix = new Matrix(matrix);
    return newMatrix.asin();
  };

  AbstractMatrix.prototype.asinh = function asinh() {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        this.set(i, j, Math.asinh(this.get(i, j)));
      }
    }

    return this;
  };

  AbstractMatrix.asinh = function asinh(matrix) {
    var newMatrix = new Matrix(matrix);
    return newMatrix.asinh();
  };

  AbstractMatrix.prototype.atan = function atan() {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        this.set(i, j, Math.atan(this.get(i, j)));
      }
    }

    return this;
  };

  AbstractMatrix.atan = function atan(matrix) {
    var newMatrix = new Matrix(matrix);
    return newMatrix.atan();
  };

  AbstractMatrix.prototype.atanh = function atanh() {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        this.set(i, j, Math.atanh(this.get(i, j)));
      }
    }

    return this;
  };

  AbstractMatrix.atanh = function atanh(matrix) {
    var newMatrix = new Matrix(matrix);
    return newMatrix.atanh();
  };

  AbstractMatrix.prototype.cbrt = function cbrt() {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        this.set(i, j, Math.cbrt(this.get(i, j)));
      }
    }

    return this;
  };

  AbstractMatrix.cbrt = function cbrt(matrix) {
    var newMatrix = new Matrix(matrix);
    return newMatrix.cbrt();
  };

  AbstractMatrix.prototype.ceil = function ceil() {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        this.set(i, j, Math.ceil(this.get(i, j)));
      }
    }

    return this;
  };

  AbstractMatrix.ceil = function ceil(matrix) {
    var newMatrix = new Matrix(matrix);
    return newMatrix.ceil();
  };

  AbstractMatrix.prototype.clz32 = function clz32() {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        this.set(i, j, Math.clz32(this.get(i, j)));
      }
    }

    return this;
  };

  AbstractMatrix.clz32 = function clz32(matrix) {
    var newMatrix = new Matrix(matrix);
    return newMatrix.clz32();
  };

  AbstractMatrix.prototype.cos = function cos() {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        this.set(i, j, Math.cos(this.get(i, j)));
      }
    }

    return this;
  };

  AbstractMatrix.cos = function cos(matrix) {
    var newMatrix = new Matrix(matrix);
    return newMatrix.cos();
  };

  AbstractMatrix.prototype.cosh = function cosh() {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        this.set(i, j, Math.cosh(this.get(i, j)));
      }
    }

    return this;
  };

  AbstractMatrix.cosh = function cosh(matrix) {
    var newMatrix = new Matrix(matrix);
    return newMatrix.cosh();
  };

  AbstractMatrix.prototype.exp = function exp() {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        this.set(i, j, Math.exp(this.get(i, j)));
      }
    }

    return this;
  };

  AbstractMatrix.exp = function exp(matrix) {
    var newMatrix = new Matrix(matrix);
    return newMatrix.exp();
  };

  AbstractMatrix.prototype.expm1 = function expm1() {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        this.set(i, j, Math.expm1(this.get(i, j)));
      }
    }

    return this;
  };

  AbstractMatrix.expm1 = function expm1(matrix) {
    var newMatrix = new Matrix(matrix);
    return newMatrix.expm1();
  };

  AbstractMatrix.prototype.floor = function floor() {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        this.set(i, j, Math.floor(this.get(i, j)));
      }
    }

    return this;
  };

  AbstractMatrix.floor = function floor(matrix) {
    var newMatrix = new Matrix(matrix);
    return newMatrix.floor();
  };

  AbstractMatrix.prototype.fround = function fround() {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        this.set(i, j, Math.fround(this.get(i, j)));
      }
    }

    return this;
  };

  AbstractMatrix.fround = function fround(matrix) {
    var newMatrix = new Matrix(matrix);
    return newMatrix.fround();
  };

  AbstractMatrix.prototype.log = function log() {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        this.set(i, j, Math.log(this.get(i, j)));
      }
    }

    return this;
  };

  AbstractMatrix.log = function log(matrix) {
    var newMatrix = new Matrix(matrix);
    return newMatrix.log();
  };

  AbstractMatrix.prototype.log1p = function log1p() {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        this.set(i, j, Math.log1p(this.get(i, j)));
      }
    }

    return this;
  };

  AbstractMatrix.log1p = function log1p(matrix) {
    var newMatrix = new Matrix(matrix);
    return newMatrix.log1p();
  };

  AbstractMatrix.prototype.log10 = function log10() {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        this.set(i, j, Math.log10(this.get(i, j)));
      }
    }

    return this;
  };

  AbstractMatrix.log10 = function log10(matrix) {
    var newMatrix = new Matrix(matrix);
    return newMatrix.log10();
  };

  AbstractMatrix.prototype.log2 = function log2() {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        this.set(i, j, Math.log2(this.get(i, j)));
      }
    }

    return this;
  };

  AbstractMatrix.log2 = function log2(matrix) {
    var newMatrix = new Matrix(matrix);
    return newMatrix.log2();
  };

  AbstractMatrix.prototype.round = function round() {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        this.set(i, j, Math.round(this.get(i, j)));
      }
    }

    return this;
  };

  AbstractMatrix.round = function round(matrix) {
    var newMatrix = new Matrix(matrix);
    return newMatrix.round();
  };

  AbstractMatrix.prototype.sign = function sign() {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        this.set(i, j, Math.sign(this.get(i, j)));
      }
    }

    return this;
  };

  AbstractMatrix.sign = function sign(matrix) {
    var newMatrix = new Matrix(matrix);
    return newMatrix.sign();
  };

  AbstractMatrix.prototype.sin = function sin() {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        this.set(i, j, Math.sin(this.get(i, j)));
      }
    }

    return this;
  };

  AbstractMatrix.sin = function sin(matrix) {
    var newMatrix = new Matrix(matrix);
    return newMatrix.sin();
  };

  AbstractMatrix.prototype.sinh = function sinh() {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        this.set(i, j, Math.sinh(this.get(i, j)));
      }
    }

    return this;
  };

  AbstractMatrix.sinh = function sinh(matrix) {
    var newMatrix = new Matrix(matrix);
    return newMatrix.sinh();
  };

  AbstractMatrix.prototype.sqrt = function sqrt() {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        this.set(i, j, Math.sqrt(this.get(i, j)));
      }
    }

    return this;
  };

  AbstractMatrix.sqrt = function sqrt(matrix) {
    var newMatrix = new Matrix(matrix);
    return newMatrix.sqrt();
  };

  AbstractMatrix.prototype.tan = function tan() {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        this.set(i, j, Math.tan(this.get(i, j)));
      }
    }

    return this;
  };

  AbstractMatrix.tan = function tan(matrix) {
    var newMatrix = new Matrix(matrix);
    return newMatrix.tan();
  };

  AbstractMatrix.prototype.tanh = function tanh() {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        this.set(i, j, Math.tanh(this.get(i, j)));
      }
    }

    return this;
  };

  AbstractMatrix.tanh = function tanh(matrix) {
    var newMatrix = new Matrix(matrix);
    return newMatrix.tanh();
  };

  AbstractMatrix.prototype.trunc = function trunc() {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        this.set(i, j, Math.trunc(this.get(i, j)));
      }
    }

    return this;
  };

  AbstractMatrix.trunc = function trunc(matrix) {
    var newMatrix = new Matrix(matrix);
    return newMatrix.trunc();
  };

  AbstractMatrix.pow = function pow(matrix, arg0) {
    var newMatrix = new Matrix(matrix);
    return newMatrix.pow(arg0);
  };

  AbstractMatrix.prototype.pow = function pow(value) {
    if (typeof value === 'number') return this.powS(value);
    return this.powM(value);
  };

  AbstractMatrix.prototype.powS = function powS(value) {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        this.set(i, j, Math.pow(this.get(i, j), value));
      }
    }

    return this;
  };

  AbstractMatrix.prototype.powM = function powM(matrix) {
    matrix = Matrix.checkMatrix(matrix);

    if (this.rows !== matrix.rows || this.columns !== matrix.columns) {
      throw new RangeError('Matrices dimensions must be equal');
    }

    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        this.set(i, j, Math.pow(this.get(i, j), matrix.get(i, j)));
      }
    }

    return this;
  };
}
// CONCATENATED MODULE: ./node_modules/ml-matrix/src/matrix.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return matrix_AbstractMatrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return matrix_Matrix; });
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var matrix_AbstractMatrix =
/*#__PURE__*/
function () {
  function AbstractMatrix() {
    _classCallCheck(this, AbstractMatrix);
  }

  _createClass(AbstractMatrix, [{
    key: "apply",
    value: function apply(callback) {
      if (typeof callback !== 'function') {
        throw new TypeError('callback must be a function');
      }

      for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.columns; j++) {
          callback.call(this, i, j);
        }
      }

      return this;
    }
  }, {
    key: "to1DArray",
    value: function to1DArray() {
      var array = [];

      for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.columns; j++) {
          array.push(this.get(i, j));
        }
      }

      return array;
    }
  }, {
    key: "to2DArray",
    value: function to2DArray() {
      var copy = [];

      for (var i = 0; i < this.rows; i++) {
        copy.push([]);

        for (var j = 0; j < this.columns; j++) {
          copy[i].push(this.get(i, j));
        }
      }

      return copy;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.to2DArray();
    }
  }, {
    key: "isRowVector",
    value: function isRowVector() {
      return this.rows === 1;
    }
  }, {
    key: "isColumnVector",
    value: function isColumnVector() {
      return this.columns === 1;
    }
  }, {
    key: "isVector",
    value: function isVector() {
      return this.rows === 1 || this.columns === 1;
    }
  }, {
    key: "isSquare",
    value: function isSquare() {
      return this.rows === this.columns;
    }
  }, {
    key: "isSymmetric",
    value: function isSymmetric() {
      if (this.isSquare()) {
        for (var i = 0; i < this.rows; i++) {
          for (var j = 0; j <= i; j++) {
            if (this.get(i, j) !== this.get(j, i)) {
              return false;
            }
          }
        }

        return true;
      }

      return false;
    }
  }, {
    key: "isEchelonForm",
    value: function isEchelonForm() {
      var i = 0;
      var j = 0;
      var previousColumn = -1;
      var isEchelonForm = true;
      var checked = false;

      while (i < this.rows && isEchelonForm) {
        j = 0;
        checked = false;

        while (j < this.columns && checked === false) {
          if (this.get(i, j) === 0) {
            j++;
          } else if (this.get(i, j) === 1 && j > previousColumn) {
            checked = true;
            previousColumn = j;
          } else {
            isEchelonForm = false;
            checked = true;
          }
        }

        i++;
      }

      return isEchelonForm;
    }
  }, {
    key: "isReducedEchelonForm",
    value: function isReducedEchelonForm() {
      var i = 0;
      var j = 0;
      var previousColumn = -1;
      var isReducedEchelonForm = true;
      var checked = false;

      while (i < this.rows && isReducedEchelonForm) {
        j = 0;
        checked = false;

        while (j < this.columns && checked === false) {
          if (this.get(i, j) === 0) {
            j++;
          } else if (this.get(i, j) === 1 && j > previousColumn) {
            checked = true;
            previousColumn = j;
          } else {
            isReducedEchelonForm = false;
            checked = true;
          }
        }

        for (var k = j + 1; k < this.rows; k++) {
          if (this.get(i, k) !== 0) {
            isReducedEchelonForm = false;
          }
        }

        i++;
      }

      return isReducedEchelonForm;
    }
  }, {
    key: "echelonForm",
    value: function echelonForm() {
      var result = this.clone();
      var h = 0;
      var k = 0;

      while (h < result.rows && k < result.columns) {
        var iMax = h;

        for (var i = h; i < result.rows; i++) {
          if (result.get(i, k) > result.get(iMax, k)) {
            iMax = i;
          }
        }

        if (result.get(iMax, k) === 0) {
          k++;
        } else {
          result.swapRows(h, iMax);
          var tmp = result.get(h, k);

          for (var j = k; j < result.columns; j++) {
            result.set(h, j, result.get(h, j) / tmp);
          }

          for (var _i = h + 1; _i < result.rows; _i++) {
            var factor = result.get(_i, k) / result.get(h, k);
            result.set(_i, k, 0);

            for (var _j = k + 1; _j < result.columns; _j++) {
              result.set(_i, _j, result.get(_i, _j) - result.get(h, _j) * factor);
            }
          }

          h++;
          k++;
        }
      }

      return result;
    }
  }, {
    key: "reducedEchelonForm",
    value: function reducedEchelonForm() {
      var result = this.echelonForm();
      var m = result.columns;
      var n = result.rows;
      var h = n - 1;

      while (h >= 0) {
        if (result.maxRow(h) === 0) {
          h--;
        } else {
          var p = 0;
          var pivot = false;

          while (p < n && pivot === false) {
            if (result.get(h, p) === 1) {
              pivot = true;
            } else {
              p++;
            }
          }

          for (var i = 0; i < h; i++) {
            var factor = result.get(i, p);

            for (var j = p; j < m; j++) {
              var tmp = result.get(i, j) - factor * result.get(h, j);
              result.set(i, j, tmp);
            }
          }

          h--;
        }
      }

      return result;
    }
  }, {
    key: "set",
    value: function set() {
      throw new Error('set method is unimplemented');
    }
  }, {
    key: "get",
    value: function get() {
      throw new Error('get method is unimplemented');
    }
  }, {
    key: "repeat",
    value: function repeat() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (_typeof(options) !== 'object') {
        throw new TypeError('options must be an object');
      }

      var _options$rows = options.rows,
          rows = _options$rows === void 0 ? 1 : _options$rows,
          _options$columns = options.columns,
          columns = _options$columns === void 0 ? 1 : _options$columns;

      if (!Number.isInteger(rows) || rows <= 0) {
        throw new TypeError('rows must be a positive integer');
      }

      if (!Number.isInteger(columns) || columns <= 0) {
        throw new TypeError('columns must be a positive integer');
      }

      var matrix = new matrix_Matrix(this.rows * rows, this.columns * columns);

      for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
          matrix.setSubMatrix(this, this.rows * i, this.columns * j);
        }
      }

      return matrix;
    }
  }, {
    key: "fill",
    value: function fill(value) {
      for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.columns; j++) {
          this.set(i, j, value);
        }
      }

      return this;
    }
  }, {
    key: "neg",
    value: function neg() {
      return this.mulS(-1);
    }
  }, {
    key: "getRow",
    value: function getRow(index) {
      Object(util["f" /* checkRowIndex */])(this, index);
      var row = [];

      for (var i = 0; i < this.columns; i++) {
        row.push(this.get(index, i));
      }

      return row;
    }
  }, {
    key: "getRowVector",
    value: function getRowVector(index) {
      return matrix_Matrix.rowVector(this.getRow(index));
    }
  }, {
    key: "setRow",
    value: function setRow(index, array) {
      Object(util["f" /* checkRowIndex */])(this, index);
      array = Object(util["h" /* checkRowVector */])(this, array);

      for (var i = 0; i < this.columns; i++) {
        this.set(index, i, array[i]);
      }

      return this;
    }
  }, {
    key: "swapRows",
    value: function swapRows(row1, row2) {
      Object(util["f" /* checkRowIndex */])(this, row1);
      Object(util["f" /* checkRowIndex */])(this, row2);

      for (var i = 0; i < this.columns; i++) {
        var temp = this.get(row1, i);
        this.set(row1, i, this.get(row2, i));
        this.set(row2, i, temp);
      }

      return this;
    }
  }, {
    key: "getColumn",
    value: function getColumn(index) {
      Object(util["a" /* checkColumnIndex */])(this, index);
      var column = [];

      for (var i = 0; i < this.rows; i++) {
        column.push(this.get(i, index));
      }

      return column;
    }
  }, {
    key: "getColumnVector",
    value: function getColumnVector(index) {
      return matrix_Matrix.columnVector(this.getColumn(index));
    }
  }, {
    key: "setColumn",
    value: function setColumn(index, array) {
      Object(util["a" /* checkColumnIndex */])(this, index);
      array = Object(util["c" /* checkColumnVector */])(this, array);

      for (var i = 0; i < this.rows; i++) {
        this.set(i, index, array[i]);
      }

      return this;
    }
  }, {
    key: "swapColumns",
    value: function swapColumns(column1, column2) {
      Object(util["a" /* checkColumnIndex */])(this, column1);
      Object(util["a" /* checkColumnIndex */])(this, column2);

      for (var i = 0; i < this.rows; i++) {
        var temp = this.get(i, column1);
        this.set(i, column1, this.get(i, column2));
        this.set(i, column2, temp);
      }

      return this;
    }
  }, {
    key: "addRowVector",
    value: function addRowVector(vector) {
      vector = Object(util["h" /* checkRowVector */])(this, vector);

      for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.columns; j++) {
          this.set(i, j, this.get(i, j) + vector[j]);
        }
      }

      return this;
    }
  }, {
    key: "subRowVector",
    value: function subRowVector(vector) {
      vector = Object(util["h" /* checkRowVector */])(this, vector);

      for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.columns; j++) {
          this.set(i, j, this.get(i, j) - vector[j]);
        }
      }

      return this;
    }
  }, {
    key: "mulRowVector",
    value: function mulRowVector(vector) {
      vector = Object(util["h" /* checkRowVector */])(this, vector);

      for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.columns; j++) {
          this.set(i, j, this.get(i, j) * vector[j]);
        }
      }

      return this;
    }
  }, {
    key: "divRowVector",
    value: function divRowVector(vector) {
      vector = Object(util["h" /* checkRowVector */])(this, vector);

      for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.columns; j++) {
          this.set(i, j, this.get(i, j) / vector[j]);
        }
      }

      return this;
    }
  }, {
    key: "addColumnVector",
    value: function addColumnVector(vector) {
      vector = Object(util["c" /* checkColumnVector */])(this, vector);

      for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.columns; j++) {
          this.set(i, j, this.get(i, j) + vector[i]);
        }
      }

      return this;
    }
  }, {
    key: "subColumnVector",
    value: function subColumnVector(vector) {
      vector = Object(util["c" /* checkColumnVector */])(this, vector);

      for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.columns; j++) {
          this.set(i, j, this.get(i, j) - vector[i]);
        }
      }

      return this;
    }
  }, {
    key: "mulColumnVector",
    value: function mulColumnVector(vector) {
      vector = Object(util["c" /* checkColumnVector */])(this, vector);

      for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.columns; j++) {
          this.set(i, j, this.get(i, j) * vector[i]);
        }
      }

      return this;
    }
  }, {
    key: "divColumnVector",
    value: function divColumnVector(vector) {
      vector = Object(util["c" /* checkColumnVector */])(this, vector);

      for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.columns; j++) {
          this.set(i, j, this.get(i, j) / vector[i]);
        }
      }

      return this;
    }
  }, {
    key: "mulRow",
    value: function mulRow(index, value) {
      Object(util["f" /* checkRowIndex */])(this, index);

      for (var i = 0; i < this.columns; i++) {
        this.set(index, i, this.get(index, i) * value);
      }

      return this;
    }
  }, {
    key: "mulColumn",
    value: function mulColumn(index, value) {
      Object(util["a" /* checkColumnIndex */])(this, index);

      for (var i = 0; i < this.rows; i++) {
        this.set(i, index, this.get(i, index) * value);
      }

      return this;
    }
  }, {
    key: "max",
    value: function max() {
      var v = this.get(0, 0);

      for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.columns; j++) {
          if (this.get(i, j) > v) {
            v = this.get(i, j);
          }
        }
      }

      return v;
    }
  }, {
    key: "maxIndex",
    value: function maxIndex() {
      var v = this.get(0, 0);
      var idx = [0, 0];

      for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.columns; j++) {
          if (this.get(i, j) > v) {
            v = this.get(i, j);
            idx[0] = i;
            idx[1] = j;
          }
        }
      }

      return idx;
    }
  }, {
    key: "min",
    value: function min() {
      var v = this.get(0, 0);

      for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.columns; j++) {
          if (this.get(i, j) < v) {
            v = this.get(i, j);
          }
        }
      }

      return v;
    }
  }, {
    key: "minIndex",
    value: function minIndex() {
      var v = this.get(0, 0);
      var idx = [0, 0];

      for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.columns; j++) {
          if (this.get(i, j) < v) {
            v = this.get(i, j);
            idx[0] = i;
            idx[1] = j;
          }
        }
      }

      return idx;
    }
  }, {
    key: "maxRow",
    value: function maxRow(row) {
      Object(util["f" /* checkRowIndex */])(this, row);
      var v = this.get(row, 0);

      for (var i = 1; i < this.columns; i++) {
        if (this.get(row, i) > v) {
          v = this.get(row, i);
        }
      }

      return v;
    }
  }, {
    key: "maxRowIndex",
    value: function maxRowIndex(row) {
      Object(util["f" /* checkRowIndex */])(this, row);
      var v = this.get(row, 0);
      var idx = [row, 0];

      for (var i = 1; i < this.columns; i++) {
        if (this.get(row, i) > v) {
          v = this.get(row, i);
          idx[1] = i;
        }
      }

      return idx;
    }
  }, {
    key: "minRow",
    value: function minRow(row) {
      Object(util["f" /* checkRowIndex */])(this, row);
      var v = this.get(row, 0);

      for (var i = 1; i < this.columns; i++) {
        if (this.get(row, i) < v) {
          v = this.get(row, i);
        }
      }

      return v;
    }
  }, {
    key: "minRowIndex",
    value: function minRowIndex(row) {
      Object(util["f" /* checkRowIndex */])(this, row);
      var v = this.get(row, 0);
      var idx = [row, 0];

      for (var i = 1; i < this.columns; i++) {
        if (this.get(row, i) < v) {
          v = this.get(row, i);
          idx[1] = i;
        }
      }

      return idx;
    }
  }, {
    key: "maxColumn",
    value: function maxColumn(column) {
      Object(util["a" /* checkColumnIndex */])(this, column);
      var v = this.get(0, column);

      for (var i = 1; i < this.rows; i++) {
        if (this.get(i, column) > v) {
          v = this.get(i, column);
        }
      }

      return v;
    }
  }, {
    key: "maxColumnIndex",
    value: function maxColumnIndex(column) {
      Object(util["a" /* checkColumnIndex */])(this, column);
      var v = this.get(0, column);
      var idx = [0, column];

      for (var i = 1; i < this.rows; i++) {
        if (this.get(i, column) > v) {
          v = this.get(i, column);
          idx[0] = i;
        }
      }

      return idx;
    }
  }, {
    key: "minColumn",
    value: function minColumn(column) {
      Object(util["a" /* checkColumnIndex */])(this, column);
      var v = this.get(0, column);

      for (var i = 1; i < this.rows; i++) {
        if (this.get(i, column) < v) {
          v = this.get(i, column);
        }
      }

      return v;
    }
  }, {
    key: "minColumnIndex",
    value: function minColumnIndex(column) {
      Object(util["a" /* checkColumnIndex */])(this, column);
      var v = this.get(0, column);
      var idx = [0, column];

      for (var i = 1; i < this.rows; i++) {
        if (this.get(i, column) < v) {
          v = this.get(i, column);
          idx[0] = i;
        }
      }

      return idx;
    }
  }, {
    key: "diag",
    value: function diag() {
      var min = Math.min(this.rows, this.columns);
      var diag = [];

      for (var i = 0; i < min; i++) {
        diag.push(this.get(i, i));
      }

      return diag;
    }
  }, {
    key: "norm",
    value: function norm() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'frobenius';
      var result = 0;

      if (type === 'max') {
        return this.max();
      } else if (type === 'frobenius') {
        for (var i = 0; i < this.rows; i++) {
          for (var j = 0; j < this.columns; j++) {
            result = result + this.get(i, j) * this.get(i, j);
          }
        }

        return Math.sqrt(result);
      } else {
        throw new RangeError("unknown norm type: ".concat(type));
      }
    }
  }, {
    key: "cumulativeSum",
    value: function cumulativeSum() {
      var sum = 0;

      for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.columns; j++) {
          sum += this.get(i, j);
          this.set(i, j, sum);
        }
      }

      return this;
    }
  }, {
    key: "dot",
    value: function dot(vector2) {
      if (AbstractMatrix.isMatrix(vector2)) vector2 = vector2.to1DArray();
      var vector1 = this.to1DArray();

      if (vector1.length !== vector2.length) {
        throw new RangeError('vectors do not have the same size');
      }

      var dot = 0;

      for (var i = 0; i < vector1.length; i++) {
        dot += vector1[i] * vector2[i];
      }

      return dot;
    }
  }, {
    key: "mmul",
    value: function mmul(other) {
      other = matrix_Matrix.checkMatrix(other);
      var m = this.rows;
      var n = this.columns;
      var p = other.columns;
      var result = new matrix_Matrix(m, p);
      var Bcolj = new Float64Array(n);

      for (var j = 0; j < p; j++) {
        for (var k = 0; k < n; k++) {
          Bcolj[k] = other.get(k, j);
        }

        for (var i = 0; i < m; i++) {
          var s = 0;

          for (k = 0; k < n; k++) {
            s += this.get(i, k) * Bcolj[k];
          }

          result.set(i, j, s);
        }
      }

      return result;
    }
  }, {
    key: "strassen2x2",
    value: function strassen2x2(other) {
      other = matrix_Matrix.checkMatrix(other);
      var result = new matrix_Matrix(2, 2);
      var a11 = this.get(0, 0);
      var b11 = other.get(0, 0);
      var a12 = this.get(0, 1);
      var b12 = other.get(0, 1);
      var a21 = this.get(1, 0);
      var b21 = other.get(1, 0);
      var a22 = this.get(1, 1);
      var b22 = other.get(1, 1); // Compute intermediate values.

      var m1 = (a11 + a22) * (b11 + b22);
      var m2 = (a21 + a22) * b11;
      var m3 = a11 * (b12 - b22);
      var m4 = a22 * (b21 - b11);
      var m5 = (a11 + a12) * b22;
      var m6 = (a21 - a11) * (b11 + b12);
      var m7 = (a12 - a22) * (b21 + b22); // Combine intermediate values into the output.

      var c00 = m1 + m4 - m5 + m7;
      var c01 = m3 + m5;
      var c10 = m2 + m4;
      var c11 = m1 - m2 + m3 + m6;
      result.set(0, 0, c00);
      result.set(0, 1, c01);
      result.set(1, 0, c10);
      result.set(1, 1, c11);
      return result;
    }
  }, {
    key: "strassen3x3",
    value: function strassen3x3(other) {
      other = matrix_Matrix.checkMatrix(other);
      var result = new matrix_Matrix(3, 3);
      var a00 = this.get(0, 0);
      var a01 = this.get(0, 1);
      var a02 = this.get(0, 2);
      var a10 = this.get(1, 0);
      var a11 = this.get(1, 1);
      var a12 = this.get(1, 2);
      var a20 = this.get(2, 0);
      var a21 = this.get(2, 1);
      var a22 = this.get(2, 2);
      var b00 = other.get(0, 0);
      var b01 = other.get(0, 1);
      var b02 = other.get(0, 2);
      var b10 = other.get(1, 0);
      var b11 = other.get(1, 1);
      var b12 = other.get(1, 2);
      var b20 = other.get(2, 0);
      var b21 = other.get(2, 1);
      var b22 = other.get(2, 2);
      var m1 = (a00 + a01 + a02 - a10 - a11 - a21 - a22) * b11;
      var m2 = (a00 - a10) * (-b01 + b11);
      var m3 = a11 * (-b00 + b01 + b10 - b11 - b12 - b20 + b22);
      var m4 = (-a00 + a10 + a11) * (b00 - b01 + b11);
      var m5 = (a10 + a11) * (-b00 + b01);
      var m6 = a00 * b00;
      var m7 = (-a00 + a20 + a21) * (b00 - b02 + b12);
      var m8 = (-a00 + a20) * (b02 - b12);
      var m9 = (a20 + a21) * (-b00 + b02);
      var m10 = (a00 + a01 + a02 - a11 - a12 - a20 - a21) * b12;
      var m11 = a21 * (-b00 + b02 + b10 - b11 - b12 - b20 + b21);
      var m12 = (-a02 + a21 + a22) * (b11 + b20 - b21);
      var m13 = (a02 - a22) * (b11 - b21);
      var m14 = a02 * b20;
      var m15 = (a21 + a22) * (-b20 + b21);
      var m16 = (-a02 + a11 + a12) * (b12 + b20 - b22);
      var m17 = (a02 - a12) * (b12 - b22);
      var m18 = (a11 + a12) * (-b20 + b22);
      var m19 = a01 * b10;
      var m20 = a12 * b21;
      var m21 = a10 * b02;
      var m22 = a20 * b01;
      var m23 = a22 * b22;
      var c00 = m6 + m14 + m19;
      var c01 = m1 + m4 + m5 + m6 + m12 + m14 + m15;
      var c02 = m6 + m7 + m9 + m10 + m14 + m16 + m18;
      var c10 = m2 + m3 + m4 + m6 + m14 + m16 + m17;
      var c11 = m2 + m4 + m5 + m6 + m20;
      var c12 = m14 + m16 + m17 + m18 + m21;
      var c20 = m6 + m7 + m8 + m11 + m12 + m13 + m14;
      var c21 = m12 + m13 + m14 + m15 + m22;
      var c22 = m6 + m7 + m8 + m9 + m23;
      result.set(0, 0, c00);
      result.set(0, 1, c01);
      result.set(0, 2, c02);
      result.set(1, 0, c10);
      result.set(1, 1, c11);
      result.set(1, 2, c12);
      result.set(2, 0, c20);
      result.set(2, 1, c21);
      result.set(2, 2, c22);
      return result;
    }
  }, {
    key: "mmulStrassen",
    value: function mmulStrassen(y) {
      y = matrix_Matrix.checkMatrix(y);
      var x = this.clone();
      var r1 = x.rows;
      var c1 = x.columns;
      var r2 = y.rows;
      var c2 = y.columns;

      if (c1 !== r2) {
        // eslint-disable-next-line no-console
        console.warn("Multiplying ".concat(r1, " x ").concat(c1, " and ").concat(r2, " x ").concat(c2, " matrix: dimensions do not match."));
      } // Put a matrix into the top left of a matrix of zeros.
      // `rows` and `cols` are the dimensions of the output matrix.


      function embed(mat, rows, cols) {
        var r = mat.rows;
        var c = mat.columns;

        if (r === rows && c === cols) {
          return mat;
        } else {
          var resultat = AbstractMatrix.zeros(rows, cols);
          resultat = resultat.setSubMatrix(mat, 0, 0);
          return resultat;
        }
      } // Make sure both matrices are the same size.
      // This is exclusively for simplicity:
      // this algorithm can be implemented with matrices of different sizes.


      var r = Math.max(r1, r2);
      var c = Math.max(c1, c2);
      x = embed(x, r, c);
      y = embed(y, r, c); // Our recursive multiplication function.

      function blockMult(a, b, rows, cols) {
        // For small matrices, resort to naive multiplication.
        if (rows <= 512 || cols <= 512) {
          return a.mmul(b); // a is equivalent to this
        } // Apply dynamic padding.


        if (rows % 2 === 1 && cols % 2 === 1) {
          a = embed(a, rows + 1, cols + 1);
          b = embed(b, rows + 1, cols + 1);
        } else if (rows % 2 === 1) {
          a = embed(a, rows + 1, cols);
          b = embed(b, rows + 1, cols);
        } else if (cols % 2 === 1) {
          a = embed(a, rows, cols + 1);
          b = embed(b, rows, cols + 1);
        }

        var halfRows = parseInt(a.rows / 2, 10);
        var halfCols = parseInt(a.columns / 2, 10); // Subdivide input matrices.

        var a11 = a.subMatrix(0, halfRows - 1, 0, halfCols - 1);
        var b11 = b.subMatrix(0, halfRows - 1, 0, halfCols - 1);
        var a12 = a.subMatrix(0, halfRows - 1, halfCols, a.columns - 1);
        var b12 = b.subMatrix(0, halfRows - 1, halfCols, b.columns - 1);
        var a21 = a.subMatrix(halfRows, a.rows - 1, 0, halfCols - 1);
        var b21 = b.subMatrix(halfRows, b.rows - 1, 0, halfCols - 1);
        var a22 = a.subMatrix(halfRows, a.rows - 1, halfCols, a.columns - 1);
        var b22 = b.subMatrix(halfRows, b.rows - 1, halfCols, b.columns - 1); // Compute intermediate values.

        var m1 = blockMult(AbstractMatrix.add(a11, a22), AbstractMatrix.add(b11, b22), halfRows, halfCols);
        var m2 = blockMult(AbstractMatrix.add(a21, a22), b11, halfRows, halfCols);
        var m3 = blockMult(a11, AbstractMatrix.sub(b12, b22), halfRows, halfCols);
        var m4 = blockMult(a22, AbstractMatrix.sub(b21, b11), halfRows, halfCols);
        var m5 = blockMult(AbstractMatrix.add(a11, a12), b22, halfRows, halfCols);
        var m6 = blockMult(AbstractMatrix.sub(a21, a11), AbstractMatrix.add(b11, b12), halfRows, halfCols);
        var m7 = blockMult(AbstractMatrix.sub(a12, a22), AbstractMatrix.add(b21, b22), halfRows, halfCols); // Combine intermediate values into the output.

        var c11 = AbstractMatrix.add(m1, m4);
        c11.sub(m5);
        c11.add(m7);
        var c12 = AbstractMatrix.add(m3, m5);
        var c21 = AbstractMatrix.add(m2, m4);
        var c22 = AbstractMatrix.sub(m1, m2);
        c22.add(m3);
        c22.add(m6); // Crop output to the desired size (undo dynamic padding).

        var resultat = AbstractMatrix.zeros(2 * c11.rows, 2 * c11.columns);
        resultat = resultat.setSubMatrix(c11, 0, 0);
        resultat = resultat.setSubMatrix(c12, c11.rows, 0);
        resultat = resultat.setSubMatrix(c21, 0, c11.columns);
        resultat = resultat.setSubMatrix(c22, c11.rows, c11.columns);
        return resultat.subMatrix(0, rows - 1, 0, cols - 1);
      }

      return blockMult(x, y, r, c);
    }
  }, {
    key: "scaleRows",
    value: function scaleRows() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (_typeof(options) !== 'object') {
        throw new TypeError('options must be an object');
      }

      var _options$min = options.min,
          min = _options$min === void 0 ? 0 : _options$min,
          _options$max = options.max,
          max = _options$max === void 0 ? 1 : _options$max;
      if (!Number.isFinite(min)) throw new TypeError('min must be a number');
      if (!Number.isFinite(max)) throw new TypeError('max must be a number');
      if (min >= max) throw new RangeError('min must be smaller than max');
      var newMatrix = new matrix_Matrix(this.rows, this.columns);

      for (var i = 0; i < this.rows; i++) {
        var row = this.getRow(i);
        ml_array_rescale_lib_es6(row, {
          min: min,
          max: max,
          output: row
        });
        newMatrix.setRow(i, row);
      }

      return newMatrix;
    }
  }, {
    key: "scaleColumns",
    value: function scaleColumns() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (_typeof(options) !== 'object') {
        throw new TypeError('options must be an object');
      }

      var _options$min2 = options.min,
          min = _options$min2 === void 0 ? 0 : _options$min2,
          _options$max2 = options.max,
          max = _options$max2 === void 0 ? 1 : _options$max2;
      if (!Number.isFinite(min)) throw new TypeError('min must be a number');
      if (!Number.isFinite(max)) throw new TypeError('max must be a number');
      if (min >= max) throw new RangeError('min must be smaller than max');
      var newMatrix = new matrix_Matrix(this.rows, this.columns);

      for (var i = 0; i < this.columns; i++) {
        var column = this.getColumn(i);
        ml_array_rescale_lib_es6(column, {
          min: min,
          max: max,
          output: column
        });
        newMatrix.setColumn(i, column);
      }

      return newMatrix;
    }
  }, {
    key: "flipRows",
    value: function flipRows() {
      var middle = Math.ceil(this.columns / 2);

      for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < middle; j++) {
          var first = this.get(i, j);
          var last = this.get(i, this.columns - 1 - j);
          this.set(i, j, last);
          this.set(i, this.columns - 1 - j, first);
        }
      }

      return this;
    }
  }, {
    key: "flipColumns",
    value: function flipColumns() {
      var middle = Math.ceil(this.rows / 2);

      for (var j = 0; j < this.columns; j++) {
        for (var i = 0; i < middle; i++) {
          var first = this.get(i, j);
          var last = this.get(this.rows - 1 - i, j);
          this.set(i, j, last);
          this.set(this.rows - 1 - i, j, first);
        }
      }

      return this;
    }
  }, {
    key: "kroneckerProduct",
    value: function kroneckerProduct(other) {
      other = matrix_Matrix.checkMatrix(other);
      var m = this.rows;
      var n = this.columns;
      var p = other.rows;
      var q = other.columns;
      var result = new matrix_Matrix(m * p, n * q);

      for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
          for (var k = 0; k < p; k++) {
            for (var l = 0; l < q; l++) {
              result.set(p * i + k, q * j + l, this.get(i, j) * other.get(k, l));
            }
          }
        }
      }

      return result;
    }
  }, {
    key: "transpose",
    value: function transpose() {
      var result = new matrix_Matrix(this.columns, this.rows);

      for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.columns; j++) {
          result.set(j, i, this.get(i, j));
        }
      }

      return result;
    }
  }, {
    key: "sortRows",
    value: function sortRows() {
      var compareFunction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : compareNumbers;

      for (var i = 0; i < this.rows; i++) {
        this.setRow(i, this.getRow(i).sort(compareFunction));
      }

      return this;
    }
  }, {
    key: "sortColumns",
    value: function sortColumns() {
      var compareFunction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : compareNumbers;

      for (var i = 0; i < this.columns; i++) {
        this.setColumn(i, this.getColumn(i).sort(compareFunction));
      }

      return this;
    }
  }, {
    key: "subMatrix",
    value: function subMatrix(startRow, endRow, startColumn, endColumn) {
      Object(util["e" /* checkRange */])(this, startRow, endRow, startColumn, endColumn);
      var newMatrix = new matrix_Matrix(endRow - startRow + 1, endColumn - startColumn + 1);

      for (var i = startRow; i <= endRow; i++) {
        for (var j = startColumn; j <= endColumn; j++) {
          newMatrix.set(i - startRow, j - startColumn, this.get(i, j));
        }
      }

      return newMatrix;
    }
  }, {
    key: "subMatrixRow",
    value: function subMatrixRow(indices, startColumn, endColumn) {
      if (startColumn === undefined) startColumn = 0;
      if (endColumn === undefined) endColumn = this.columns - 1;

      if (startColumn > endColumn || startColumn < 0 || startColumn >= this.columns || endColumn < 0 || endColumn >= this.columns) {
        throw new RangeError('Argument out of range');
      }

      var newMatrix = new matrix_Matrix(indices.length, endColumn - startColumn + 1);

      for (var i = 0; i < indices.length; i++) {
        for (var j = startColumn; j <= endColumn; j++) {
          if (indices[i] < 0 || indices[i] >= this.rows) {
            throw new RangeError("Row index out of range: ".concat(indices[i]));
          }

          newMatrix.set(i, j - startColumn, this.get(indices[i], j));
        }
      }

      return newMatrix;
    }
  }, {
    key: "subMatrixColumn",
    value: function subMatrixColumn(indices, startRow, endRow) {
      if (startRow === undefined) startRow = 0;
      if (endRow === undefined) endRow = this.rows - 1;

      if (startRow > endRow || startRow < 0 || startRow >= this.rows || endRow < 0 || endRow >= this.rows) {
        throw new RangeError('Argument out of range');
      }

      var newMatrix = new matrix_Matrix(endRow - startRow + 1, indices.length);

      for (var i = 0; i < indices.length; i++) {
        for (var j = startRow; j <= endRow; j++) {
          if (indices[i] < 0 || indices[i] >= this.columns) {
            throw new RangeError("Column index out of range: ".concat(indices[i]));
          }

          newMatrix.set(j - startRow, i, this.get(j, indices[i]));
        }
      }

      return newMatrix;
    }
  }, {
    key: "setSubMatrix",
    value: function setSubMatrix(matrix, startRow, startColumn) {
      matrix = matrix_Matrix.checkMatrix(matrix);
      var endRow = startRow + matrix.rows - 1;
      var endColumn = startColumn + matrix.columns - 1;
      Object(util["e" /* checkRange */])(this, startRow, endRow, startColumn, endColumn);

      for (var i = 0; i < matrix.rows; i++) {
        for (var j = 0; j < matrix.columns; j++) {
          this.set(startRow + i, startColumn + j, matrix.get(i, j));
        }
      }

      return this;
    }
  }, {
    key: "selection",
    value: function selection(rowIndices, columnIndices) {
      var indices = Object(util["d" /* checkIndices */])(this, rowIndices, columnIndices);
      var newMatrix = new matrix_Matrix(rowIndices.length, columnIndices.length);

      for (var i = 0; i < indices.row.length; i++) {
        var rowIndex = indices.row[i];

        for (var j = 0; j < indices.column.length; j++) {
          var columnIndex = indices.column[j];
          newMatrix.set(i, j, this.get(rowIndex, columnIndex));
        }
      }

      return newMatrix;
    }
  }, {
    key: "trace",
    value: function trace() {
      var min = Math.min(this.rows, this.columns);
      var trace = 0;

      for (var i = 0; i < min; i++) {
        trace += this.get(i, i);
      }

      return trace;
    }
  }, {
    key: "clone",
    value: function clone() {
      var newMatrix = new matrix_Matrix(this.rows, this.columns);

      for (var row = 0; row < this.rows; row++) {
        for (var column = 0; column < this.columns; column++) {
          newMatrix.set(row, column, this.get(row, column));
        }
      }

      return newMatrix;
    }
  }, {
    key: "sum",
    value: function sum(by) {
      switch (by) {
        case 'row':
          return sumByRow(this);

        case 'column':
          return sumByColumn(this);

        case undefined:
          return sumAll(this);

        default:
          throw new Error("invalid option: ".concat(by));
      }
    }
  }, {
    key: "product",
    value: function product(by) {
      switch (by) {
        case 'row':
          return productByRow(this);

        case 'column':
          return productByColumn(this);

        case undefined:
          return productAll(this);

        default:
          throw new Error("invalid option: ".concat(by));
      }
    }
  }, {
    key: "mean",
    value: function mean(by) {
      var sum = this.sum(by);

      switch (by) {
        case 'row':
          {
            for (var i = 0; i < this.rows; i++) {
              sum[i] /= this.columns;
            }

            return sum;
          }

        case 'column':
          {
            for (var _i2 = 0; _i2 < this.columns; _i2++) {
              sum[_i2] /= this.rows;
            }

            return sum;
          }

        case undefined:
          return sum / this.size;

        default:
          throw new Error("invalid option: ".concat(by));
      }
    }
  }, {
    key: "variance",
    value: function variance(by) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (_typeof(by) === 'object') {
        options = by;
        by = undefined;
      }

      if (_typeof(options) !== 'object') {
        throw new TypeError('options must be an object');
      }

      var _options = options,
          _options$unbiased = _options.unbiased,
          unbiased = _options$unbiased === void 0 ? true : _options$unbiased,
          _options$mean = _options.mean,
          mean = _options$mean === void 0 ? this.mean(by) : _options$mean;

      if (typeof unbiased !== 'boolean') {
        throw new TypeError('unbiased must be a boolean');
      }

      switch (by) {
        case 'row':
          {
            if (!Array.isArray(mean)) {
              throw new TypeError('mean must be an array');
            }

            return varianceByRow(this, unbiased, mean);
          }

        case 'column':
          {
            if (!Array.isArray(mean)) {
              throw new TypeError('mean must be an array');
            }

            return varianceByColumn(this, unbiased, mean);
          }

        case undefined:
          {
            if (typeof mean !== 'number') {
              throw new TypeError('mean must be a number');
            }

            return varianceAll(this, unbiased, mean);
          }

        default:
          throw new Error("invalid option: ".concat(by));
      }
    }
  }, {
    key: "standardDeviation",
    value: function standardDeviation(by, options) {
      if (_typeof(by) === 'object') {
        options = by;
        by = undefined;
      }

      var variance = this.variance(by, options);

      if (by === undefined) {
        return Math.sqrt(variance);
      } else {
        for (var i = 0; i < variance.length; i++) {
          variance[i] = Math.sqrt(variance[i]);
        }

        return variance;
      }
    }
  }, {
    key: "center",
    value: function center(by) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (_typeof(by) === 'object') {
        options = by;
        by = undefined;
      }

      if (_typeof(options) !== 'object') {
        throw new TypeError('options must be an object');
      }

      var _options2 = options,
          _options2$center = _options2.center,
          center = _options2$center === void 0 ? this.mean(by) : _options2$center;

      switch (by) {
        case 'row':
          {
            if (!Array.isArray(center)) {
              throw new TypeError('center must be an array');
            }

            centerByRow(this, center);
            return this;
          }

        case 'column':
          {
            if (!Array.isArray(center)) {
              throw new TypeError('center must be an array');
            }

            centerByColumn(this, center);
            return this;
          }

        case undefined:
          {
            if (typeof center !== 'number') {
              throw new TypeError('center must be a number');
            }

            centerAll(this, center);
            return this;
          }

        default:
          throw new Error("invalid option: ".concat(by));
      }
    }
  }, {
    key: "scale",
    value: function scale(by) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (_typeof(by) === 'object') {
        options = by;
        by = undefined;
      }

      if (_typeof(options) !== 'object') {
        throw new TypeError('options must be an object');
      }

      var scale = options.scale;

      switch (by) {
        case 'row':
          {
            if (scale === undefined) {
              scale = getScaleByRow(this);
            } else if (!Array.isArray(scale)) {
              throw new TypeError('scale must be an array');
            }

            scaleByRow(this, scale);
            return this;
          }

        case 'column':
          {
            if (scale === undefined) {
              scale = getScaleByColumn(this);
            } else if (!Array.isArray(scale)) {
              throw new TypeError('scale must be an array');
            }

            scaleByColumn(this, scale);
            return this;
          }

        case undefined:
          {
            if (scale === undefined) {
              scale = getScaleAll(this);
            } else if (typeof scale !== 'number') {
              throw new TypeError('scale must be a number');
            }

            scaleAll(this, scale);
            return this;
          }

        default:
          throw new Error("invalid option: ".concat(by));
      }
    }
  }, {
    key: "size",
    get: function get() {
      return this.rows * this.columns;
    }
  }], [{
    key: "from1DArray",
    value: function from1DArray(newRows, newColumns, newData) {
      var length = newRows * newColumns;

      if (length !== newData.length) {
        throw new RangeError('data length does not match given dimensions');
      }

      var newMatrix = new matrix_Matrix(newRows, newColumns);

      for (var row = 0; row < newRows; row++) {
        for (var column = 0; column < newColumns; column++) {
          newMatrix.set(row, column, newData[row * newColumns + column]);
        }
      }

      return newMatrix;
    }
  }, {
    key: "rowVector",
    value: function rowVector(newData) {
      var vector = new matrix_Matrix(1, newData.length);

      for (var i = 0; i < newData.length; i++) {
        vector.set(0, i, newData[i]);
      }

      return vector;
    }
  }, {
    key: "columnVector",
    value: function columnVector(newData) {
      var vector = new matrix_Matrix(newData.length, 1);

      for (var i = 0; i < newData.length; i++) {
        vector.set(i, 0, newData[i]);
      }

      return vector;
    }
  }, {
    key: "zeros",
    value: function zeros(rows, columns) {
      return new matrix_Matrix(rows, columns);
    }
  }, {
    key: "ones",
    value: function ones(rows, columns) {
      return new matrix_Matrix(rows, columns).fill(1);
    }
  }, {
    key: "rand",
    value: function rand(rows, columns) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (_typeof(options) !== 'object') {
        throw new TypeError('options must be an object');
      }

      var _options$random = options.random,
          random = _options$random === void 0 ? Math.random : _options$random;
      var matrix = new matrix_Matrix(rows, columns);

      for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
          matrix.set(i, j, random());
        }
      }

      return matrix;
    }
  }, {
    key: "randInt",
    value: function randInt(rows, columns) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (_typeof(options) !== 'object') {
        throw new TypeError('options must be an object');
      }

      var _options$min3 = options.min,
          min = _options$min3 === void 0 ? 0 : _options$min3,
          _options$max3 = options.max,
          max = _options$max3 === void 0 ? 1000 : _options$max3,
          _options$random2 = options.random,
          random = _options$random2 === void 0 ? Math.random : _options$random2;
      if (!Number.isInteger(min)) throw new TypeError('min must be an integer');
      if (!Number.isInteger(max)) throw new TypeError('max must be an integer');
      if (min >= max) throw new RangeError('min must be smaller than max');
      var interval = max - min;
      var matrix = new matrix_Matrix(rows, columns);

      for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
          var value = min + Math.round(random() * interval);
          matrix.set(i, j, value);
        }
      }

      return matrix;
    }
  }, {
    key: "eye",
    value: function eye(rows, columns, value) {
      if (columns === undefined) columns = rows;
      if (value === undefined) value = 1;
      var min = Math.min(rows, columns);
      var matrix = this.zeros(rows, columns);

      for (var i = 0; i < min; i++) {
        matrix.set(i, i, value);
      }

      return matrix;
    }
  }, {
    key: "diag",
    value: function diag(data, rows, columns) {
      var l = data.length;
      if (rows === undefined) rows = l;
      if (columns === undefined) columns = rows;
      var min = Math.min(l, rows, columns);
      var matrix = this.zeros(rows, columns);

      for (var i = 0; i < min; i++) {
        matrix.set(i, i, data[i]);
      }

      return matrix;
    }
  }, {
    key: "min",
    value: function min(matrix1, matrix2) {
      matrix1 = this.checkMatrix(matrix1);
      matrix2 = this.checkMatrix(matrix2);
      var rows = matrix1.rows;
      var columns = matrix1.columns;
      var result = new matrix_Matrix(rows, columns);

      for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
          result.set(i, j, Math.min(matrix1.get(i, j), matrix2.get(i, j)));
        }
      }

      return result;
    }
  }, {
    key: "max",
    value: function max(matrix1, matrix2) {
      matrix1 = this.checkMatrix(matrix1);
      matrix2 = this.checkMatrix(matrix2);
      var rows = matrix1.rows;
      var columns = matrix1.columns;
      var result = new this(rows, columns);

      for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
          result.set(i, j, Math.max(matrix1.get(i, j), matrix2.get(i, j)));
        }
      }

      return result;
    }
  }, {
    key: "checkMatrix",
    value: function checkMatrix(value) {
      return AbstractMatrix.isMatrix(value) ? value : new matrix_Matrix(value);
    }
  }, {
    key: "isMatrix",
    value: function isMatrix(value) {
      return value != null && value.klass === 'Matrix';
    }
  }]);

  return AbstractMatrix;
}();
matrix_AbstractMatrix.prototype.klass = 'Matrix';

if (typeof Symbol !== 'undefined') {
  matrix_AbstractMatrix.prototype[Symbol["for"]('nodejs.util.inspect.custom')] = inspectMatrix;
}

function compareNumbers(a, b) {
  return a - b;
} // Synonyms


matrix_AbstractMatrix.random = matrix_AbstractMatrix.rand;
matrix_AbstractMatrix.randomInt = matrix_AbstractMatrix.randInt;
matrix_AbstractMatrix.diagonal = matrix_AbstractMatrix.diag;
matrix_AbstractMatrix.prototype.diagonal = matrix_AbstractMatrix.prototype.diag;
matrix_AbstractMatrix.identity = matrix_AbstractMatrix.eye;
matrix_AbstractMatrix.prototype.negate = matrix_AbstractMatrix.prototype.neg;
matrix_AbstractMatrix.prototype.tensorProduct = matrix_AbstractMatrix.prototype.kroneckerProduct;

var matrix_Matrix =
/*#__PURE__*/
function (_AbstractMatrix) {
  _inherits(Matrix, _AbstractMatrix);

  function Matrix(nRows, nColumns) {
    var _this;

    _classCallCheck(this, Matrix);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Matrix).call(this));

    if (Matrix.isMatrix(nRows)) {
      return _possibleConstructorReturn(_this, nRows.clone());
    } else if (Number.isInteger(nRows) && nRows > 0) {
      // Create an empty matrix
      _this.data = [];

      if (Number.isInteger(nColumns) && nColumns > 0) {
        for (var i = 0; i < nRows; i++) {
          _this.data.push(new Float64Array(nColumns));
        }
      } else {
        throw new TypeError('nColumns must be a positive integer');
      }
    } else if (Array.isArray(nRows)) {
      // Copy the values from the 2D array
      var arrayData = nRows;
      nRows = arrayData.length;
      nColumns = arrayData[0].length;

      if (typeof nColumns !== 'number' || nColumns === 0) {
        throw new TypeError('Data must be a 2D array with at least one element');
      }

      _this.data = [];

      for (var _i3 = 0; _i3 < nRows; _i3++) {
        if (arrayData[_i3].length !== nColumns) {
          throw new RangeError('Inconsistent array dimensions');
        }

        _this.data.push(Float64Array.from(arrayData[_i3]));
      }
    } else {
      throw new TypeError('First argument must be a positive number or an array');
    }

    _this.rows = nRows;
    _this.columns = nColumns;
    return _possibleConstructorReturn(_this, _assertThisInitialized(_this));
  }

  _createClass(Matrix, [{
    key: "set",
    value: function set(rowIndex, columnIndex, value) {
      this.data[rowIndex][columnIndex] = value;
      return this;
    }
  }, {
    key: "get",
    value: function get(rowIndex, columnIndex) {
      return this.data[rowIndex][columnIndex];
    }
  }, {
    key: "removeRow",
    value: function removeRow(index) {
      Object(util["f" /* checkRowIndex */])(this, index);

      if (this.rows === 1) {
        throw new RangeError('A matrix cannot have less than one row');
      }

      this.data.splice(index, 1);
      this.rows -= 1;
      return this;
    }
  }, {
    key: "addRow",
    value: function addRow(index, array) {
      if (array === undefined) {
        array = index;
        index = this.rows;
      }

      Object(util["f" /* checkRowIndex */])(this, index, true);
      array = Float64Array.from(Object(util["h" /* checkRowVector */])(this, array, true));
      this.data.splice(index, 0, array);
      this.rows += 1;
      return this;
    }
  }, {
    key: "removeColumn",
    value: function removeColumn(index) {
      Object(util["a" /* checkColumnIndex */])(this, index);

      if (this.columns === 1) {
        throw new RangeError('A matrix cannot have less than one column');
      }

      for (var i = 0; i < this.rows; i++) {
        var newRow = new Float64Array(this.columns - 1);

        for (var j = 0; j < index; j++) {
          newRow[j] = this.data[i][j];
        }

        for (var _j2 = index + 1; _j2 < this.columns; _j2++) {
          newRow[_j2 - 1] = this.data[i][_j2];
        }

        this.data[i] = newRow;
      }

      this.columns -= 1;
      return this;
    }
  }, {
    key: "addColumn",
    value: function addColumn(index, array) {
      if (typeof array === 'undefined') {
        array = index;
        index = this.columns;
      }

      Object(util["a" /* checkColumnIndex */])(this, index, true);
      array = Object(util["c" /* checkColumnVector */])(this, array);

      for (var i = 0; i < this.rows; i++) {
        var newRow = new Float64Array(this.columns + 1);
        var j = 0;

        for (; j < index; j++) {
          newRow[j] = this.data[i][j];
        }

        newRow[j++] = array[i];

        for (; j < this.columns + 1; j++) {
          newRow[j] = this.data[i][j - 1];
        }

        this.data[i] = newRow;
      }

      this.columns += 1;
      return this;
    }
  }]);

  return Matrix;
}(matrix_AbstractMatrix);


installMathOperations(matrix_AbstractMatrix, matrix_Matrix);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return checkRowIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return checkColumnIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return checkRowVector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return checkColumnVector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return checkIndices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return checkRowIndices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return checkColumnIndices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return checkRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return newArray; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * @private
 * Check that a row index is not out of bounds
 * @param {Matrix} matrix
 * @param {number} index
 * @param {boolean} [outer]
 */
function checkRowIndex(matrix, index, outer) {
  var max = outer ? matrix.rows : matrix.rows - 1;

  if (index < 0 || index > max) {
    throw new RangeError('Row index out of range');
  }
}
/**
 * @private
 * Check that a column index is not out of bounds
 * @param {Matrix} matrix
 * @param {number} index
 * @param {boolean} [outer]
 */

function checkColumnIndex(matrix, index, outer) {
  var max = outer ? matrix.columns : matrix.columns - 1;

  if (index < 0 || index > max) {
    throw new RangeError('Column index out of range');
  }
}
/**
 * @private
 * Check that the provided vector is an array with the right length
 * @param {Matrix} matrix
 * @param {Array|Matrix} vector
 * @return {Array}
 * @throws {RangeError}
 */

function checkRowVector(matrix, vector) {
  if (vector.to1DArray) {
    vector = vector.to1DArray();
  }

  if (vector.length !== matrix.columns) {
    throw new RangeError('vector size must be the same as the number of columns');
  }

  return vector;
}
/**
 * @private
 * Check that the provided vector is an array with the right length
 * @param {Matrix} matrix
 * @param {Array|Matrix} vector
 * @return {Array}
 * @throws {RangeError}
 */

function checkColumnVector(matrix, vector) {
  if (vector.to1DArray) {
    vector = vector.to1DArray();
  }

  if (vector.length !== matrix.rows) {
    throw new RangeError('vector size must be the same as the number of rows');
  }

  return vector;
}
function checkIndices(matrix, rowIndices, columnIndices) {
  return {
    row: checkRowIndices(matrix, rowIndices),
    column: checkColumnIndices(matrix, columnIndices)
  };
}
function checkRowIndices(matrix, rowIndices) {
  if (_typeof(rowIndices) !== 'object') {
    throw new TypeError('unexpected type for row indices');
  }

  var rowOut = rowIndices.some(function (r) {
    return r < 0 || r >= matrix.rows;
  });

  if (rowOut) {
    throw new RangeError('row indices are out of range');
  }

  if (!Array.isArray(rowIndices)) rowIndices = Array.from(rowIndices);
  return rowIndices;
}
function checkColumnIndices(matrix, columnIndices) {
  if (_typeof(columnIndices) !== 'object') {
    throw new TypeError('unexpected type for column indices');
  }

  var columnOut = columnIndices.some(function (c) {
    return c < 0 || c >= matrix.columns;
  });

  if (columnOut) {
    throw new RangeError('column indices are out of range');
  }

  if (!Array.isArray(columnIndices)) columnIndices = Array.from(columnIndices);
  return columnIndices;
}
function checkRange(matrix, startRow, endRow, startColumn, endColumn) {
  if (arguments.length !== 5) {
    throw new RangeError('expected 4 arguments');
  }

  checkNumber('startRow', startRow);
  checkNumber('endRow', endRow);
  checkNumber('startColumn', startColumn);
  checkNumber('endColumn', endColumn);

  if (startRow > endRow || startColumn > endColumn || startRow < 0 || startRow >= matrix.rows || endRow < 0 || endRow >= matrix.rows || startColumn < 0 || startColumn >= matrix.columns || endColumn < 0 || endColumn >= matrix.columns) {
    throw new RangeError('Submatrix indices are out of range');
  }
}
function newArray(length) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var array = [];

  for (var i = 0; i < length; i++) {
    array.push(value);
  }

  return array;
}

function checkNumber(name, value) {
  if (typeof value !== 'number') {
    throw new TypeError("".concat(name, " must be a number"));
  }
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self // eslint-disable-next-line no-new-func
: Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(6);

module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function (it) {
  return _typeof(it) === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(59)('wks');

var uid = __webpack_require__(36);

var _Symbol = __webpack_require__(3).Symbol;

var USE_SYMBOL = typeof _Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(24);

var min = Math.min;

module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WrapperMatrix2D; });
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var WrapperMatrix2D =
/*#__PURE__*/
function (_AbstractMatrix) {
  _inherits(WrapperMatrix2D, _AbstractMatrix);

  function WrapperMatrix2D(data) {
    var _this;

    _classCallCheck(this, WrapperMatrix2D);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WrapperMatrix2D).call(this));
    _this.data = data;
    _this.rows = data.length;
    _this.columns = data[0].length;
    return _this;
  }

  _createClass(WrapperMatrix2D, [{
    key: "set",
    value: function set(rowIndex, columnIndex, value) {
      this.data[rowIndex][columnIndex] = value;
      return this;
    }
  }, {
    key: "get",
    value: function get(rowIndex, columnIndex) {
      return this.data[rowIndex][columnIndex];
    }
  }]);

  return WrapperMatrix2D;
}(_matrix__WEBPACK_IMPORTED_MODULE_0__[/* AbstractMatrix */ "a"]);



/***/ }),
/* 10 */
/***/ (function(module, exports) {

var core = module.exports = {
  version: '2.6.9'
};
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(4)(function () {
  return Object.defineProperty({}, 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(5);

var IE8_DOM_DEFINE = __webpack_require__(101);

var toPrimitive = __webpack_require__(33);

var dP = Object.defineProperty;
exports.f = __webpack_require__(11) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseView; });
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var BaseView =
/*#__PURE__*/
function (_AbstractMatrix) {
  _inherits(BaseView, _AbstractMatrix);

  function BaseView(matrix, rows, columns) {
    var _this;

    _classCallCheck(this, BaseView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BaseView).call(this));
    _this.matrix = matrix;
    _this.rows = rows;
    _this.columns = columns;
    return _this;
  }

  return BaseView;
}(_matrix__WEBPACK_IMPORTED_MODULE_0__[/* AbstractMatrix */ "a"]);



/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(30);

module.exports = function (it) {
  return Object(defined(it));
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);

var hide = __webpack_require__(18);

var has = __webpack_require__(17);

var SRC = __webpack_require__(36)('src');

var $toString = __webpack_require__(143);

var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(10).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));

  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  } // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative

})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);

var fails = __webpack_require__(4);

var defined = __webpack_require__(30);

var quot = /"/g; // B.2.3.2.1 CreateHTML(string, tag, attribute, value)

var createHTML = function createHTML(string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};

module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(12);

var createDesc = __webpack_require__(35);

module.exports = __webpack_require__(11) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(54);

var defined = __webpack_require__(30);

module.exports = function (it) {
  return IObject(defined(it));
};

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hypotenuse; });
function hypotenuse(a, b) {
  var r = 0;

  if (Math.abs(a) > Math.abs(b)) {
    r = b / a;
    return Math.abs(a) * Math.sqrt(1 + r * r);
  }

  if (b !== 0) {
    r = a / b;
    return Math.abs(b) * Math.sqrt(1 + r * r);
  }

  return 0;
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__(4);

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () {
      /* empty */
    }, 1) : method.call(null);
  });
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(23);

module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;

  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };

    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };

    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }

  return function ()
  /* ...args */
  {
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;

module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(55);

var createDesc = __webpack_require__(35);

var toIObject = __webpack_require__(19);

var toPrimitive = __webpack_require__(33);

var has = __webpack_require__(17);

var IE8_DOM_DEFINE = __webpack_require__(101);

var gOPD = Object.getOwnPropertyDescriptor;
exports.f = __webpack_require__(11) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) {
    /* empty */
  }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(0);

var core = __webpack_require__(10);

var fails = __webpack_require__(4);

module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () {
    fn(1);
  }), 'Object', exp);
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(22);

var IObject = __webpack_require__(54);

var toObject = __webpack_require__(14);

var toLength = __webpack_require__(8);

var asc = __webpack_require__(117);

module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;

    for (; length > index; index++) {
      if (NO_HOLES || index in self) {
        val = self[index];
        res = f(val, index, O);

        if (TYPE) {
          if (IS_MAP) result[index] = res; // map
          else if (res) switch (TYPE) {
              case 3:
                return true;
              // some

              case 5:
                return val;
              // find

              case 6:
                return index;
              // findIndex

              case 2:
                result.push(val);
              // filter
            } else if (IS_EVERY) return false; // every
        }
      }
    }

    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingularValueDecomposition; });
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var SingularValueDecomposition =
/*#__PURE__*/
function () {
  function SingularValueDecomposition(value) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, SingularValueDecomposition);

    value = _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].checkMatrix(value);
    var m = value.rows;
    var n = value.columns;
    var _options$computeLeftS = options.computeLeftSingularVectors,
        computeLeftSingularVectors = _options$computeLeftS === void 0 ? true : _options$computeLeftS,
        _options$computeRight = options.computeRightSingularVectors,
        computeRightSingularVectors = _options$computeRight === void 0 ? true : _options$computeRight,
        _options$autoTranspos = options.autoTranspose,
        autoTranspose = _options$autoTranspos === void 0 ? false : _options$autoTranspos;
    var wantu = Boolean(computeLeftSingularVectors);
    var wantv = Boolean(computeRightSingularVectors);
    var swapped = false;
    var a;

    if (m < n) {
      if (!autoTranspose) {
        a = value.clone(); // eslint-disable-next-line no-console

        console.warn('Computing SVD on a matrix with more columns than rows. Consider enabling autoTranspose');
      } else {
        a = value.transpose();
        m = a.rows;
        n = a.columns;
        swapped = true;
        var aux = wantu;
        wantu = wantv;
        wantv = aux;
      }
    } else {
      a = value.clone();
    }

    var nu = Math.min(m, n);
    var ni = Math.min(m + 1, n);
    var s = new Float64Array(ni);
    var U = new _matrix__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"](m, nu);
    var V = new _matrix__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"](n, n);
    var e = new Float64Array(n);
    var work = new Float64Array(m);
    var si = new Float64Array(ni);

    for (var i = 0; i < ni; i++) {
      si[i] = i;
    }

    var nct = Math.min(m - 1, n);
    var nrt = Math.max(0, Math.min(n - 2, m));
    var mrc = Math.max(nct, nrt);

    for (var k = 0; k < mrc; k++) {
      if (k < nct) {
        s[k] = 0;

        for (var _i = k; _i < m; _i++) {
          s[k] = Object(_util__WEBPACK_IMPORTED_MODULE_2__[/* hypotenuse */ "a"])(s[k], a.get(_i, k));
        }

        if (s[k] !== 0) {
          if (a.get(k, k) < 0) {
            s[k] = -s[k];
          }

          for (var _i2 = k; _i2 < m; _i2++) {
            a.set(_i2, k, a.get(_i2, k) / s[k]);
          }

          a.set(k, k, a.get(k, k) + 1);
        }

        s[k] = -s[k];
      }

      for (var j = k + 1; j < n; j++) {
        if (k < nct && s[k] !== 0) {
          var t = 0;

          for (var _i3 = k; _i3 < m; _i3++) {
            t += a.get(_i3, k) * a.get(_i3, j);
          }

          t = -t / a.get(k, k);

          for (var _i4 = k; _i4 < m; _i4++) {
            a.set(_i4, j, a.get(_i4, j) + t * a.get(_i4, k));
          }
        }

        e[j] = a.get(k, j);
      }

      if (wantu && k < nct) {
        for (var _i5 = k; _i5 < m; _i5++) {
          U.set(_i5, k, a.get(_i5, k));
        }
      }

      if (k < nrt) {
        e[k] = 0;

        for (var _i6 = k + 1; _i6 < n; _i6++) {
          e[k] = Object(_util__WEBPACK_IMPORTED_MODULE_2__[/* hypotenuse */ "a"])(e[k], e[_i6]);
        }

        if (e[k] !== 0) {
          if (e[k + 1] < 0) {
            e[k] = 0 - e[k];
          }

          for (var _i7 = k + 1; _i7 < n; _i7++) {
            e[_i7] /= e[k];
          }

          e[k + 1] += 1;
        }

        e[k] = -e[k];

        if (k + 1 < m && e[k] !== 0) {
          for (var _i8 = k + 1; _i8 < m; _i8++) {
            work[_i8] = 0;
          }

          for (var _i9 = k + 1; _i9 < m; _i9++) {
            for (var _j = k + 1; _j < n; _j++) {
              work[_i9] += e[_j] * a.get(_i9, _j);
            }
          }

          for (var _j2 = k + 1; _j2 < n; _j2++) {
            var _t = -e[_j2] / e[k + 1];

            for (var _i10 = k + 1; _i10 < m; _i10++) {
              a.set(_i10, _j2, a.get(_i10, _j2) + _t * work[_i10]);
            }
          }
        }

        if (wantv) {
          for (var _i11 = k + 1; _i11 < n; _i11++) {
            V.set(_i11, k, e[_i11]);
          }
        }
      }
    }

    var p = Math.min(n, m + 1);

    if (nct < n) {
      s[nct] = a.get(nct, nct);
    }

    if (m < p) {
      s[p - 1] = 0;
    }

    if (nrt + 1 < p) {
      e[nrt] = a.get(nrt, p - 1);
    }

    e[p - 1] = 0;

    if (wantu) {
      for (var _j3 = nct; _j3 < nu; _j3++) {
        for (var _i12 = 0; _i12 < m; _i12++) {
          U.set(_i12, _j3, 0);
        }

        U.set(_j3, _j3, 1);
      }

      for (var _k = nct - 1; _k >= 0; _k--) {
        if (s[_k] !== 0) {
          for (var _j4 = _k + 1; _j4 < nu; _j4++) {
            var _t2 = 0;

            for (var _i13 = _k; _i13 < m; _i13++) {
              _t2 += U.get(_i13, _k) * U.get(_i13, _j4);
            }

            _t2 = -_t2 / U.get(_k, _k);

            for (var _i14 = _k; _i14 < m; _i14++) {
              U.set(_i14, _j4, U.get(_i14, _j4) + _t2 * U.get(_i14, _k));
            }
          }

          for (var _i15 = _k; _i15 < m; _i15++) {
            U.set(_i15, _k, -U.get(_i15, _k));
          }

          U.set(_k, _k, 1 + U.get(_k, _k));

          for (var _i16 = 0; _i16 < _k - 1; _i16++) {
            U.set(_i16, _k, 0);
          }
        } else {
          for (var _i17 = 0; _i17 < m; _i17++) {
            U.set(_i17, _k, 0);
          }

          U.set(_k, _k, 1);
        }
      }
    }

    if (wantv) {
      for (var _k2 = n - 1; _k2 >= 0; _k2--) {
        if (_k2 < nrt && e[_k2] !== 0) {
          for (var _j5 = _k2 + 1; _j5 < n; _j5++) {
            var _t3 = 0;

            for (var _i18 = _k2 + 1; _i18 < n; _i18++) {
              _t3 += V.get(_i18, _k2) * V.get(_i18, _j5);
            }

            _t3 = -_t3 / V.get(_k2 + 1, _k2);

            for (var _i19 = _k2 + 1; _i19 < n; _i19++) {
              V.set(_i19, _j5, V.get(_i19, _j5) + _t3 * V.get(_i19, _k2));
            }
          }
        }

        for (var _i20 = 0; _i20 < n; _i20++) {
          V.set(_i20, _k2, 0);
        }

        V.set(_k2, _k2, 1);
      }
    }

    var pp = p - 1;
    var iter = 0;
    var eps = Number.EPSILON;

    while (p > 0) {
      var _k3 = void 0,
          kase = void 0;

      for (_k3 = p - 2; _k3 >= -1; _k3--) {
        if (_k3 === -1) {
          break;
        }

        var alpha = Number.MIN_VALUE + eps * Math.abs(s[_k3] + Math.abs(s[_k3 + 1]));

        if (Math.abs(e[_k3]) <= alpha || Number.isNaN(e[_k3])) {
          e[_k3] = 0;
          break;
        }
      }

      if (_k3 === p - 2) {
        kase = 4;
      } else {
        var ks = void 0;

        for (ks = p - 1; ks >= _k3; ks--) {
          if (ks === _k3) {
            break;
          }

          var _t4 = (ks !== p ? Math.abs(e[ks]) : 0) + (ks !== _k3 + 1 ? Math.abs(e[ks - 1]) : 0);

          if (Math.abs(s[ks]) <= eps * _t4) {
            s[ks] = 0;
            break;
          }
        }

        if (ks === _k3) {
          kase = 3;
        } else if (ks === p - 1) {
          kase = 1;
        } else {
          kase = 2;
          _k3 = ks;
        }
      }

      _k3++;

      switch (kase) {
        case 1:
          {
            var f = e[p - 2];
            e[p - 2] = 0;

            for (var _j6 = p - 2; _j6 >= _k3; _j6--) {
              var _t5 = Object(_util__WEBPACK_IMPORTED_MODULE_2__[/* hypotenuse */ "a"])(s[_j6], f);

              var cs = s[_j6] / _t5;
              var sn = f / _t5;
              s[_j6] = _t5;

              if (_j6 !== _k3) {
                f = -sn * e[_j6 - 1];
                e[_j6 - 1] = cs * e[_j6 - 1];
              }

              if (wantv) {
                for (var _i21 = 0; _i21 < n; _i21++) {
                  _t5 = cs * V.get(_i21, _j6) + sn * V.get(_i21, p - 1);
                  V.set(_i21, p - 1, -sn * V.get(_i21, _j6) + cs * V.get(_i21, p - 1));
                  V.set(_i21, _j6, _t5);
                }
              }
            }

            break;
          }

        case 2:
          {
            var _f = e[_k3 - 1];
            e[_k3 - 1] = 0;

            for (var _j7 = _k3; _j7 < p; _j7++) {
              var _t6 = Object(_util__WEBPACK_IMPORTED_MODULE_2__[/* hypotenuse */ "a"])(s[_j7], _f);

              var _cs = s[_j7] / _t6;

              var _sn = _f / _t6;

              s[_j7] = _t6;
              _f = -_sn * e[_j7];
              e[_j7] = _cs * e[_j7];

              if (wantu) {
                for (var _i22 = 0; _i22 < m; _i22++) {
                  _t6 = _cs * U.get(_i22, _j7) + _sn * U.get(_i22, _k3 - 1);
                  U.set(_i22, _k3 - 1, -_sn * U.get(_i22, _j7) + _cs * U.get(_i22, _k3 - 1));
                  U.set(_i22, _j7, _t6);
                }
              }
            }

            break;
          }

        case 3:
          {
            var scale = Math.max(Math.abs(s[p - 1]), Math.abs(s[p - 2]), Math.abs(e[p - 2]), Math.abs(s[_k3]), Math.abs(e[_k3]));
            var sp = s[p - 1] / scale;
            var spm1 = s[p - 2] / scale;
            var epm1 = e[p - 2] / scale;
            var sk = s[_k3] / scale;
            var ek = e[_k3] / scale;
            var b = ((spm1 + sp) * (spm1 - sp) + epm1 * epm1) / 2;
            var c = sp * epm1 * (sp * epm1);
            var shift = 0;

            if (b !== 0 || c !== 0) {
              if (b < 0) {
                shift = 0 - Math.sqrt(b * b + c);
              } else {
                shift = Math.sqrt(b * b + c);
              }

              shift = c / (b + shift);
            }

            var _f2 = (sk + sp) * (sk - sp) + shift;

            var g = sk * ek;

            for (var _j8 = _k3; _j8 < p - 1; _j8++) {
              var _t7 = Object(_util__WEBPACK_IMPORTED_MODULE_2__[/* hypotenuse */ "a"])(_f2, g);

              if (_t7 === 0) _t7 = Number.MIN_VALUE;

              var _cs2 = _f2 / _t7;

              var _sn2 = g / _t7;

              if (_j8 !== _k3) {
                e[_j8 - 1] = _t7;
              }

              _f2 = _cs2 * s[_j8] + _sn2 * e[_j8];
              e[_j8] = _cs2 * e[_j8] - _sn2 * s[_j8];
              g = _sn2 * s[_j8 + 1];
              s[_j8 + 1] = _cs2 * s[_j8 + 1];

              if (wantv) {
                for (var _i23 = 0; _i23 < n; _i23++) {
                  _t7 = _cs2 * V.get(_i23, _j8) + _sn2 * V.get(_i23, _j8 + 1);
                  V.set(_i23, _j8 + 1, -_sn2 * V.get(_i23, _j8) + _cs2 * V.get(_i23, _j8 + 1));
                  V.set(_i23, _j8, _t7);
                }
              }

              _t7 = Object(_util__WEBPACK_IMPORTED_MODULE_2__[/* hypotenuse */ "a"])(_f2, g);
              if (_t7 === 0) _t7 = Number.MIN_VALUE;
              _cs2 = _f2 / _t7;
              _sn2 = g / _t7;
              s[_j8] = _t7;
              _f2 = _cs2 * e[_j8] + _sn2 * s[_j8 + 1];
              s[_j8 + 1] = -_sn2 * e[_j8] + _cs2 * s[_j8 + 1];
              g = _sn2 * e[_j8 + 1];
              e[_j8 + 1] = _cs2 * e[_j8 + 1];

              if (wantu && _j8 < m - 1) {
                for (var _i24 = 0; _i24 < m; _i24++) {
                  _t7 = _cs2 * U.get(_i24, _j8) + _sn2 * U.get(_i24, _j8 + 1);
                  U.set(_i24, _j8 + 1, -_sn2 * U.get(_i24, _j8) + _cs2 * U.get(_i24, _j8 + 1));
                  U.set(_i24, _j8, _t7);
                }
              }
            }

            e[p - 2] = _f2;
            iter = iter + 1;
            break;
          }

        case 4:
          {
            if (s[_k3] <= 0) {
              s[_k3] = s[_k3] < 0 ? -s[_k3] : 0;

              if (wantv) {
                for (var _i25 = 0; _i25 <= pp; _i25++) {
                  V.set(_i25, _k3, -V.get(_i25, _k3));
                }
              }
            }

            while (_k3 < pp) {
              if (s[_k3] >= s[_k3 + 1]) {
                break;
              }

              var _t8 = s[_k3];
              s[_k3] = s[_k3 + 1];
              s[_k3 + 1] = _t8;

              if (wantv && _k3 < n - 1) {
                for (var _i26 = 0; _i26 < n; _i26++) {
                  _t8 = V.get(_i26, _k3 + 1);
                  V.set(_i26, _k3 + 1, V.get(_i26, _k3));
                  V.set(_i26, _k3, _t8);
                }
              }

              if (wantu && _k3 < m - 1) {
                for (var _i27 = 0; _i27 < m; _i27++) {
                  _t8 = U.get(_i27, _k3 + 1);
                  U.set(_i27, _k3 + 1, U.get(_i27, _k3));
                  U.set(_i27, _k3, _t8);
                }
              }

              _k3++;
            }

            iter = 0;
            p--;
            break;
          }
        // no default
      }
    }

    if (swapped) {
      var tmp = V;
      V = U;
      U = tmp;
    }

    this.m = m;
    this.n = n;
    this.s = s;
    this.U = U;
    this.V = V;
  }

  _createClass(SingularValueDecomposition, [{
    key: "solve",
    value: function solve(value) {
      var Y = value;
      var e = this.threshold;
      var scols = this.s.length;
      var Ls = _matrix__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"].zeros(scols, scols);

      for (var i = 0; i < scols; i++) {
        if (Math.abs(this.s[i]) <= e) {
          Ls.set(i, i, 0);
        } else {
          Ls.set(i, i, 1 / this.s[i]);
        }
      }

      var U = this.U;
      var V = this.rightSingularVectors;
      var VL = V.mmul(Ls);
      var vrows = V.rows;
      var urows = U.rows;
      var VLU = _matrix__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"].zeros(vrows, urows);

      for (var _i28 = 0; _i28 < vrows; _i28++) {
        for (var j = 0; j < urows; j++) {
          var sum = 0;

          for (var k = 0; k < scols; k++) {
            sum += VL.get(_i28, k) * U.get(j, k);
          }

          VLU.set(_i28, j, sum);
        }
      }

      return VLU.mmul(Y);
    }
  }, {
    key: "solveForDiagonal",
    value: function solveForDiagonal(value) {
      return this.solve(_matrix__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"].diag(value));
    }
  }, {
    key: "inverse",
    value: function inverse() {
      var V = this.V;
      var e = this.threshold;
      var vrows = V.rows;
      var vcols = V.columns;
      var X = new _matrix__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"](vrows, this.s.length);

      for (var i = 0; i < vrows; i++) {
        for (var j = 0; j < vcols; j++) {
          if (Math.abs(this.s[j]) > e) {
            X.set(i, j, V.get(i, j) / this.s[j]);
          }
        }
      }

      var U = this.U;
      var urows = U.rows;
      var ucols = U.columns;
      var Y = new _matrix__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"](vrows, urows);

      for (var _i29 = 0; _i29 < vrows; _i29++) {
        for (var _j9 = 0; _j9 < urows; _j9++) {
          var sum = 0;

          for (var k = 0; k < ucols; k++) {
            sum += X.get(_i29, k) * U.get(_j9, k);
          }

          Y.set(_i29, _j9, sum);
        }
      }

      return Y;
    }
  }, {
    key: "condition",
    get: function get() {
      return this.s[0] / this.s[Math.min(this.m, this.n) - 1];
    }
  }, {
    key: "norm2",
    get: function get() {
      return this.s[0];
    }
  }, {
    key: "rank",
    get: function get() {
      var tol = Math.max(this.m, this.n) * this.s[0] * Number.EPSILON;
      var r = 0;
      var s = this.s;

      for (var i = 0, ii = s.length; i < ii; i++) {
        if (s[i] > tol) {
          r++;
        }
      }

      return r;
    }
  }, {
    key: "diagonal",
    get: function get() {
      return Array.from(this.s);
    }
  }, {
    key: "threshold",
    get: function get() {
      return Number.EPSILON / 2 * Math.max(this.m, this.n) * this.s[0];
    }
  }, {
    key: "leftSingularVectors",
    get: function get() {
      return this.U;
    }
  }, {
    key: "rightSingularVectors",
    get: function get() {
      return this.V;
    }
  }, {
    key: "diagonalMatrix",
    get: function get() {
      return _matrix__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"].diag(this.s);
    }
  }]);

  return SingularValueDecomposition;
}();



/***/ }),
/* 29 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

if (__webpack_require__(11)) {
  var LIBRARY = __webpack_require__(37);

  var global = __webpack_require__(3);

  var fails = __webpack_require__(4);

  var $export = __webpack_require__(0);

  var $typed = __webpack_require__(70);

  var $buffer = __webpack_require__(95);

  var ctx = __webpack_require__(22);

  var anInstance = __webpack_require__(50);

  var propertyDesc = __webpack_require__(35);

  var hide = __webpack_require__(18);

  var redefineAll = __webpack_require__(51);

  var toInteger = __webpack_require__(24);

  var toLength = __webpack_require__(8);

  var toIndex = __webpack_require__(128);

  var toAbsoluteIndex = __webpack_require__(39);

  var toPrimitive = __webpack_require__(33);

  var has = __webpack_require__(17);

  var classof = __webpack_require__(56);

  var isObject = __webpack_require__(6);

  var toObject = __webpack_require__(14);

  var isArrayIter = __webpack_require__(87);

  var create = __webpack_require__(40);

  var getPrototypeOf = __webpack_require__(42);

  var gOPN = __webpack_require__(41).f;

  var getIterFn = __webpack_require__(89);

  var uid = __webpack_require__(36);

  var wks = __webpack_require__(7);

  var createArrayMethod = __webpack_require__(27);

  var createArrayIncludes = __webpack_require__(60);

  var speciesConstructor = __webpack_require__(57);

  var ArrayIterators = __webpack_require__(91);

  var Iterators = __webpack_require__(48);

  var $iterDetect = __webpack_require__(63);

  var setSpecies = __webpack_require__(49);

  var arrayFill = __webpack_require__(90);

  var arrayCopyWithin = __webpack_require__(119);

  var $DP = __webpack_require__(12);

  var $GOPD = __webpack_require__(25);

  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError = global.RangeError;
  var TypeError = global.TypeError;
  var Uint8Array = global.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR = wks('iterator');
  var TAG = wks('toStringTag');
  var TYPED_CONSTRUCTOR = uid('typed_constructor');
  var DEF_CONSTRUCTOR = uid('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';
  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });
  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });
  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });

  var toOffset = function toOffset(it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function validate(it) {
    if (isObject(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function allocate(C, length) {
    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    }

    return new C(length);
  };

  var speciesFromList = function speciesFromList(O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function fromList(C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);

    while (length > index) {
      result[index] = list[index++];
    }

    return result;
  };

  var addGetter = function addGetter(it, key, internal) {
    dP(it, key, {
      get: function get() {
        return this._d[internal];
      }
    });
  };

  var $from = function from(source
  /* , mapfn, thisArg */
  ) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;

    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      }

      O = values;
    }

    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);

    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }

    return result;
  };

  var $of = function of()
  /* ...items */
  {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);

    while (length > index) {
      result[index] = arguments[index++];
    }

    return result;
  }; // iOS Safari 6.x fails here


  var TO_LOCALE_BUG = !!Uint8Array && fails(function () {
    arrayToLocaleString.call(new Uint8Array(1));
  });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start
    /* , end */
    ) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn
    /* , thisArg */
    ) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value
    /* , start, end */
    ) {
      // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn
    /* , thisArg */
    ) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate
    /* , thisArg */
    ) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate
    /* , thisArg */
    ) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn
    /* , thisArg */
    ) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement
    /* , fromIndex */
    ) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement
    /* , fromIndex */
    ) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) {
      // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement
    /* , fromIndex */
    ) {
      // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn
    /* , thisArg */
    ) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn
    /* , initialValue */
    ) {
      // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn
    /* , initialValue */
    ) {
      // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;

      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      }

      return that;
    },
    some: function some(callbackfn
    /* , thisArg */
    ) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(O.buffer, O.byteOffset + $begin * O.BYTES_PER_ELEMENT, toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin));
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike
  /* , offset */
  ) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);

    while (index < len) {
      this[offset + index] = src[index++];
    }
  };

  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function isTAIndex(target, key) {
    return isObject(target) && target[TYPED_ARRAY] && _typeof(key) != 'symbol' && key in target && String(+key) == String(key);
  };

  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true)) ? propertyDesc(2, target[key]) : gOPD(target, key);
  };

  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true)) && isObject(desc) && has(desc, 'value') && !has(desc, 'get') && !has(desc, 'set') // TODO: add validation descriptor w/o calling accessors
    && !desc.configurable && (!has(desc, 'writable') || desc.writable) && (!has(desc, 'enumerable') || desc.enumerable)) {
      target[key] = desc.value;
      return target;
    }

    return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () {
    arrayToString.call({});
  })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function constructor() {
      /* noop */
    },
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function get() {
      return this[TYPED_ARRAY];
    }
  }); // eslint-disable-next-line max-statements

  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];

    var getter = function getter(that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };

    var setter = function setter(that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };

    var addElement = function addElement(that, index) {
      dP(that, index, {
        get: function get() {
          return getter(this, index);
        },
        set: function set(value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };

    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;

        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;

          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }

          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }

        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });

        while (index < length) {
          addElement(that, index++);
        }
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new

      new TypedArray(null); // eslint-disable-line no-new

      new TypedArray(1.5); // eslint-disable-line no-new

      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass; // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645

        if (!isObject(data)) return new Base(toIndex(data));

        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined ? new Base(data, toOffset($offset, BYTES), $length) : $offset !== undefined ? new Base(data, toOffset($offset, BYTES)) : new Base(data);
        }

        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }

    var $nativeIterator = TypedArrayPrototype[ITERATOR];
    var CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function get() {
          return NAME;
        }
      });
    }

    O[NAME] = TypedArray;
    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);
    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });
    $export($export.S + $export.F * fails(function () {
      Base.of.call(TypedArray, 1);
    }), NAME, {
      from: $from,
      of: $of
    });
    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);
    $export($export.P, NAME, proto);
    setSpecies(NAME);
    $export($export.P + $export.F * FORCED_SET, NAME, {
      set: $set
    });
    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);
    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;
    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, {
      slice: $slice
    });
    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, {
      toLocaleString: $toLocaleString
    });
    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () {
  /* empty */
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toString = Object.prototype.toString;

function isAnyArray(object) {
  return toString.call(object).endsWith('Array]');
}

module.exports = isAnyArray;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(6); // instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string


module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var META = __webpack_require__(36)('meta');

var isObject = __webpack_require__(6);

var has = __webpack_require__(17);

var setDesc = __webpack_require__(12).f;

var id = 0;

var isExtensible = Object.isExtensible || function () {
  return true;
};

var FREEZE = !__webpack_require__(4)(function () {
  return isExtensible(Object.preventExtensions({}));
});

var setMeta = function setMeta(it) {
  setDesc(it, META, {
    value: {
      i: 'O' + ++id,
      // object ID
      w: {} // weak collections IDs

    }
  });
};

var fastKey = function fastKey(it, create) {
  // return primitive with prefix
  if (!isObject(it)) return _typeof(it) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;

  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F'; // not necessary to add metadata

    if (!create) return 'E'; // add missing metadata

    setMeta(it); // return object ID
  }

  return it[META].i;
};

var getWeak = function getWeak(it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true; // not necessary to add metadata

    if (!create) return false; // add missing metadata

    setMeta(it); // return hash weak collections IDs
  }

  return it[META].w;
}; // add metadata on freeze-family methods calling


var onFreeze = function onFreeze(it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};

var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/***/ }),
/* 36 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();

module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = false;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(103);

var enumBugKeys = __webpack_require__(74);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(24);

var max = Math.max;
var min = Math.min;

module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(5);

var dPs = __webpack_require__(104);

var enumBugKeys = __webpack_require__(74);

var IE_PROTO = __webpack_require__(73)('IE_PROTO');

var Empty = function Empty() {
  /* empty */
};

var PROTOTYPE = 'prototype'; // Create object with fake `null` prototype: use iframe Object with cleared prototype

var _createDict = function createDict() {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(71)('iframe');

  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';

  __webpack_require__(75).appendChild(iframe);

  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);

  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  _createDict = iframeDocument.F;

  while (i--) {
    delete _createDict[PROTOTYPE][enumBugKeys[i]];
  }

  return _createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;

  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

    result[IE_PROTO] = O;
  } else result = _createDict();

  return Properties === undefined ? result : dPs(result, Properties);
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(103);

var hiddenKeys = __webpack_require__(74).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(17);

var toObject = __webpack_require__(14);

var IE_PROTO = __webpack_require__(73)('IE_PROTO');

var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];

  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  }

  return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(7)('unscopables');

var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(18)(ArrayProto, UNSCOPABLES, {});

module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(6);

module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LuDecomposition; });
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var LuDecomposition =
/*#__PURE__*/
function () {
  function LuDecomposition(matrix) {
    _classCallCheck(this, LuDecomposition);

    matrix = _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].checkMatrix(matrix);
    var lu = matrix.clone();
    var rows = lu.rows;
    var columns = lu.columns;
    var pivotVector = new Float64Array(rows);
    var pivotSign = 1;
    var i, j, k, p, s, t, v;
    var LUcolj, kmax;

    for (i = 0; i < rows; i++) {
      pivotVector[i] = i;
    }

    LUcolj = new Float64Array(rows);

    for (j = 0; j < columns; j++) {
      for (i = 0; i < rows; i++) {
        LUcolj[i] = lu.get(i, j);
      }

      for (i = 0; i < rows; i++) {
        kmax = Math.min(i, j);
        s = 0;

        for (k = 0; k < kmax; k++) {
          s += lu.get(i, k) * LUcolj[k];
        }

        LUcolj[i] -= s;
        lu.set(i, j, LUcolj[i]);
      }

      p = j;

      for (i = j + 1; i < rows; i++) {
        if (Math.abs(LUcolj[i]) > Math.abs(LUcolj[p])) {
          p = i;
        }
      }

      if (p !== j) {
        for (k = 0; k < columns; k++) {
          t = lu.get(p, k);
          lu.set(p, k, lu.get(j, k));
          lu.set(j, k, t);
        }

        v = pivotVector[p];
        pivotVector[p] = pivotVector[j];
        pivotVector[j] = v;
        pivotSign = -pivotSign;
      }

      if (j < rows && lu.get(j, j) !== 0) {
        for (i = j + 1; i < rows; i++) {
          lu.set(i, j, lu.get(i, j) / lu.get(j, j));
        }
      }
    }

    this.LU = lu;
    this.pivotVector = pivotVector;
    this.pivotSign = pivotSign;
  }

  _createClass(LuDecomposition, [{
    key: "isSingular",
    value: function isSingular() {
      var data = this.LU;
      var col = data.columns;

      for (var j = 0; j < col; j++) {
        if (data.get(j, j) === 0) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "solve",
    value: function solve(value) {
      value = _matrix__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"].checkMatrix(value);
      var lu = this.LU;
      var rows = lu.rows;

      if (rows !== value.rows) {
        throw new Error('Invalid matrix dimensions');
      }

      if (this.isSingular()) {
        throw new Error('LU matrix is singular');
      }

      var count = value.columns;
      var X = value.subMatrixRow(this.pivotVector, 0, count - 1);
      var columns = lu.columns;
      var i, j, k;

      for (k = 0; k < columns; k++) {
        for (i = k + 1; i < columns; i++) {
          for (j = 0; j < count; j++) {
            X.set(i, j, X.get(i, j) - X.get(k, j) * lu.get(i, k));
          }
        }
      }

      for (k = columns - 1; k >= 0; k--) {
        for (j = 0; j < count; j++) {
          X.set(k, j, X.get(k, j) / lu.get(k, k));
        }

        for (i = 0; i < k; i++) {
          for (j = 0; j < count; j++) {
            X.set(i, j, X.get(i, j) - X.get(k, j) * lu.get(i, k));
          }
        }
      }

      return X;
    }
  }, {
    key: "determinant",
    get: function get() {
      var data = this.LU;

      if (!data.isSquare()) {
        throw new Error('Matrix must be square');
      }

      var determinant = this.pivotSign;
      var col = data.columns;

      for (var j = 0; j < col; j++) {
        determinant *= data.get(j, j);
      }

      return determinant;
    }
  }, {
    key: "lowerTriangularMatrix",
    get: function get() {
      var data = this.LU;
      var rows = data.rows;
      var columns = data.columns;
      var X = new _matrix__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"](rows, columns);

      for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
          if (i > j) {
            X.set(i, j, data.get(i, j));
          } else if (i === j) {
            X.set(i, j, 1);
          } else {
            X.set(i, j, 0);
          }
        }
      }

      return X;
    }
  }, {
    key: "upperTriangularMatrix",
    get: function get() {
      var data = this.LU;
      var rows = data.rows;
      var columns = data.columns;
      var X = new _matrix__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"](rows, columns);

      for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
          if (i <= j) {
            X.set(i, j, data.get(i, j));
          } else {
            X.set(i, j, 0);
          }
        }
      }

      return X;
    }
  }, {
    key: "pivotPermutationVector",
    get: function get() {
      return Array.from(this.pivotVector);
    }
  }]);

  return LuDecomposition;
}();



/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(12).f;

var has = __webpack_require__(17);

var TAG = __webpack_require__(7)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
    configurable: true,
    value: tag
  });
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);

var defined = __webpack_require__(30);

var fails = __webpack_require__(4);

var spaces = __webpack_require__(77);

var space = '[' + spaces + ']';
var non = "\u200B\x85";
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function exporter(KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
}; // 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim


var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(3);

var dP = __webpack_require__(12);

var DESCRIPTORS = __webpack_require__(11);

var SPECIES = __webpack_require__(7)('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function get() {
      return this;
    }
  });
};

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
    throw TypeError(name + ': incorrect invocation!');
  }

  return it;
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(15);

module.exports = function (target, src, safe) {
  for (var key in src) {
    redefine(target, key, src[key], safe);
  }

  return target;
};

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredEuclidean", function() { return squaredEuclidean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euclidean", function() { return euclidean; });
function squaredEuclidean(p, q) {
  var d = 0;

  for (var i = 0; i < p.length; i++) {
    d += (p[i] - q[i]) * (p[i] - q[i]);
  }

  return d;
}
function euclidean(p, q) {
  return Math.sqrt(squaredEuclidean(p, q));
}

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/ml-matrix/src/matrix.js + 6 modules
var src_matrix = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/ml-matrix/src/util.js
var util = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/ml-matrix/src/views/base.js
var base = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/ml-matrix/src/views/column.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var column_MatrixColumnView =
/*#__PURE__*/
function (_BaseView) {
  _inherits(MatrixColumnView, _BaseView);

  function MatrixColumnView(matrix, column) {
    var _this;

    _classCallCheck(this, MatrixColumnView);

    Object(util["a" /* checkColumnIndex */])(matrix, column);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(MatrixColumnView).call(this, matrix, matrix.rows, 1));
    _this.column = column;
    return _this;
  }

  _createClass(MatrixColumnView, [{
    key: "set",
    value: function set(rowIndex, columnIndex, value) {
      this.matrix.set(rowIndex, this.column, value);
      return this;
    }
  }, {
    key: "get",
    value: function get(rowIndex) {
      return this.matrix.get(rowIndex, this.column);
    }
  }]);

  return MatrixColumnView;
}(base["a" /* default */]);


// CONCATENATED MODULE: ./node_modules/ml-matrix/src/views/columnSelection.js
function columnSelection_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { columnSelection_typeof = function _typeof(obj) { return typeof obj; }; } else { columnSelection_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return columnSelection_typeof(obj); }

function columnSelection_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function columnSelection_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function columnSelection_createClass(Constructor, protoProps, staticProps) { if (protoProps) columnSelection_defineProperties(Constructor.prototype, protoProps); if (staticProps) columnSelection_defineProperties(Constructor, staticProps); return Constructor; }

function columnSelection_possibleConstructorReturn(self, call) { if (call && (columnSelection_typeof(call) === "object" || typeof call === "function")) { return call; } return columnSelection_assertThisInitialized(self); }

function columnSelection_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function columnSelection_getPrototypeOf(o) { columnSelection_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return columnSelection_getPrototypeOf(o); }

function columnSelection_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) columnSelection_setPrototypeOf(subClass, superClass); }

function columnSelection_setPrototypeOf(o, p) { columnSelection_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return columnSelection_setPrototypeOf(o, p); }




var columnSelection_MatrixColumnSelectionView =
/*#__PURE__*/
function (_BaseView) {
  columnSelection_inherits(MatrixColumnSelectionView, _BaseView);

  function MatrixColumnSelectionView(matrix, columnIndices) {
    var _this;

    columnSelection_classCallCheck(this, MatrixColumnSelectionView);

    columnIndices = Object(util["b" /* checkColumnIndices */])(matrix, columnIndices);
    _this = columnSelection_possibleConstructorReturn(this, columnSelection_getPrototypeOf(MatrixColumnSelectionView).call(this, matrix, matrix.rows, columnIndices.length));
    _this.columnIndices = columnIndices;
    return _this;
  }

  columnSelection_createClass(MatrixColumnSelectionView, [{
    key: "set",
    value: function set(rowIndex, columnIndex, value) {
      this.matrix.set(rowIndex, this.columnIndices[columnIndex], value);
      return this;
    }
  }, {
    key: "get",
    value: function get(rowIndex, columnIndex) {
      return this.matrix.get(rowIndex, this.columnIndices[columnIndex]);
    }
  }]);

  return MatrixColumnSelectionView;
}(base["a" /* default */]);


// CONCATENATED MODULE: ./node_modules/ml-matrix/src/views/flipColumn.js
function flipColumn_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { flipColumn_typeof = function _typeof(obj) { return typeof obj; }; } else { flipColumn_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return flipColumn_typeof(obj); }

function flipColumn_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function flipColumn_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function flipColumn_createClass(Constructor, protoProps, staticProps) { if (protoProps) flipColumn_defineProperties(Constructor.prototype, protoProps); if (staticProps) flipColumn_defineProperties(Constructor, staticProps); return Constructor; }

function flipColumn_possibleConstructorReturn(self, call) { if (call && (flipColumn_typeof(call) === "object" || typeof call === "function")) { return call; } return flipColumn_assertThisInitialized(self); }

function flipColumn_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function flipColumn_getPrototypeOf(o) { flipColumn_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return flipColumn_getPrototypeOf(o); }

function flipColumn_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) flipColumn_setPrototypeOf(subClass, superClass); }

function flipColumn_setPrototypeOf(o, p) { flipColumn_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return flipColumn_setPrototypeOf(o, p); }



var MatrixFlipColumnView =
/*#__PURE__*/
function (_BaseView) {
  flipColumn_inherits(MatrixFlipColumnView, _BaseView);

  function MatrixFlipColumnView(matrix) {
    flipColumn_classCallCheck(this, MatrixFlipColumnView);

    return flipColumn_possibleConstructorReturn(this, flipColumn_getPrototypeOf(MatrixFlipColumnView).call(this, matrix, matrix.rows, matrix.columns));
  }

  flipColumn_createClass(MatrixFlipColumnView, [{
    key: "set",
    value: function set(rowIndex, columnIndex, value) {
      this.matrix.set(rowIndex, this.columns - columnIndex - 1, value);
      return this;
    }
  }, {
    key: "get",
    value: function get(rowIndex, columnIndex) {
      return this.matrix.get(rowIndex, this.columns - columnIndex - 1);
    }
  }]);

  return MatrixFlipColumnView;
}(base["a" /* default */]);


// CONCATENATED MODULE: ./node_modules/ml-matrix/src/views/flipRow.js
function flipRow_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { flipRow_typeof = function _typeof(obj) { return typeof obj; }; } else { flipRow_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return flipRow_typeof(obj); }

function flipRow_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function flipRow_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function flipRow_createClass(Constructor, protoProps, staticProps) { if (protoProps) flipRow_defineProperties(Constructor.prototype, protoProps); if (staticProps) flipRow_defineProperties(Constructor, staticProps); return Constructor; }

function flipRow_possibleConstructorReturn(self, call) { if (call && (flipRow_typeof(call) === "object" || typeof call === "function")) { return call; } return flipRow_assertThisInitialized(self); }

function flipRow_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function flipRow_getPrototypeOf(o) { flipRow_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return flipRow_getPrototypeOf(o); }

function flipRow_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) flipRow_setPrototypeOf(subClass, superClass); }

function flipRow_setPrototypeOf(o, p) { flipRow_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return flipRow_setPrototypeOf(o, p); }



var MatrixFlipRowView =
/*#__PURE__*/
function (_BaseView) {
  flipRow_inherits(MatrixFlipRowView, _BaseView);

  function MatrixFlipRowView(matrix) {
    flipRow_classCallCheck(this, MatrixFlipRowView);

    return flipRow_possibleConstructorReturn(this, flipRow_getPrototypeOf(MatrixFlipRowView).call(this, matrix, matrix.rows, matrix.columns));
  }

  flipRow_createClass(MatrixFlipRowView, [{
    key: "set",
    value: function set(rowIndex, columnIndex, value) {
      this.matrix.set(this.rows - rowIndex - 1, columnIndex, value);
      return this;
    }
  }, {
    key: "get",
    value: function get(rowIndex, columnIndex) {
      return this.matrix.get(this.rows - rowIndex - 1, columnIndex);
    }
  }]);

  return MatrixFlipRowView;
}(base["a" /* default */]);


// CONCATENATED MODULE: ./node_modules/ml-matrix/src/views/row.js
function row_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { row_typeof = function _typeof(obj) { return typeof obj; }; } else { row_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return row_typeof(obj); }

function row_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function row_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function row_createClass(Constructor, protoProps, staticProps) { if (protoProps) row_defineProperties(Constructor.prototype, protoProps); if (staticProps) row_defineProperties(Constructor, staticProps); return Constructor; }

function row_possibleConstructorReturn(self, call) { if (call && (row_typeof(call) === "object" || typeof call === "function")) { return call; } return row_assertThisInitialized(self); }

function row_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function row_getPrototypeOf(o) { row_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return row_getPrototypeOf(o); }

function row_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) row_setPrototypeOf(subClass, superClass); }

function row_setPrototypeOf(o, p) { row_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return row_setPrototypeOf(o, p); }




var row_MatrixRowView =
/*#__PURE__*/
function (_BaseView) {
  row_inherits(MatrixRowView, _BaseView);

  function MatrixRowView(matrix, row) {
    var _this;

    row_classCallCheck(this, MatrixRowView);

    Object(util["f" /* checkRowIndex */])(matrix, row);
    _this = row_possibleConstructorReturn(this, row_getPrototypeOf(MatrixRowView).call(this, matrix, 1, matrix.columns));
    _this.row = row;
    return _this;
  }

  row_createClass(MatrixRowView, [{
    key: "set",
    value: function set(rowIndex, columnIndex, value) {
      this.matrix.set(this.row, columnIndex, value);
      return this;
    }
  }, {
    key: "get",
    value: function get(rowIndex, columnIndex) {
      return this.matrix.get(this.row, columnIndex);
    }
  }]);

  return MatrixRowView;
}(base["a" /* default */]);


// CONCATENATED MODULE: ./node_modules/ml-matrix/src/views/rowSelection.js
function rowSelection_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { rowSelection_typeof = function _typeof(obj) { return typeof obj; }; } else { rowSelection_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return rowSelection_typeof(obj); }

function rowSelection_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function rowSelection_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function rowSelection_createClass(Constructor, protoProps, staticProps) { if (protoProps) rowSelection_defineProperties(Constructor.prototype, protoProps); if (staticProps) rowSelection_defineProperties(Constructor, staticProps); return Constructor; }

function rowSelection_possibleConstructorReturn(self, call) { if (call && (rowSelection_typeof(call) === "object" || typeof call === "function")) { return call; } return rowSelection_assertThisInitialized(self); }

function rowSelection_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function rowSelection_getPrototypeOf(o) { rowSelection_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return rowSelection_getPrototypeOf(o); }

function rowSelection_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) rowSelection_setPrototypeOf(subClass, superClass); }

function rowSelection_setPrototypeOf(o, p) { rowSelection_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return rowSelection_setPrototypeOf(o, p); }




var rowSelection_MatrixRowSelectionView =
/*#__PURE__*/
function (_BaseView) {
  rowSelection_inherits(MatrixRowSelectionView, _BaseView);

  function MatrixRowSelectionView(matrix, rowIndices) {
    var _this;

    rowSelection_classCallCheck(this, MatrixRowSelectionView);

    rowIndices = Object(util["g" /* checkRowIndices */])(matrix, rowIndices);
    _this = rowSelection_possibleConstructorReturn(this, rowSelection_getPrototypeOf(MatrixRowSelectionView).call(this, matrix, rowIndices.length, matrix.columns));
    _this.rowIndices = rowIndices;
    return _this;
  }

  rowSelection_createClass(MatrixRowSelectionView, [{
    key: "set",
    value: function set(rowIndex, columnIndex, value) {
      this.matrix.set(this.rowIndices[rowIndex], columnIndex, value);
      return this;
    }
  }, {
    key: "get",
    value: function get(rowIndex, columnIndex) {
      return this.matrix.get(this.rowIndices[rowIndex], columnIndex);
    }
  }]);

  return MatrixRowSelectionView;
}(base["a" /* default */]);


// CONCATENATED MODULE: ./node_modules/ml-matrix/src/views/selection.js
function selection_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { selection_typeof = function _typeof(obj) { return typeof obj; }; } else { selection_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return selection_typeof(obj); }

function selection_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function selection_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function selection_createClass(Constructor, protoProps, staticProps) { if (protoProps) selection_defineProperties(Constructor.prototype, protoProps); if (staticProps) selection_defineProperties(Constructor, staticProps); return Constructor; }

function selection_possibleConstructorReturn(self, call) { if (call && (selection_typeof(call) === "object" || typeof call === "function")) { return call; } return selection_assertThisInitialized(self); }

function selection_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function selection_getPrototypeOf(o) { selection_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return selection_getPrototypeOf(o); }

function selection_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) selection_setPrototypeOf(subClass, superClass); }

function selection_setPrototypeOf(o, p) { selection_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return selection_setPrototypeOf(o, p); }




var selection_MatrixSelectionView =
/*#__PURE__*/
function (_BaseView) {
  selection_inherits(MatrixSelectionView, _BaseView);

  function MatrixSelectionView(matrix, rowIndices, columnIndices) {
    var _this;

    selection_classCallCheck(this, MatrixSelectionView);

    var indices = Object(util["d" /* checkIndices */])(matrix, rowIndices, columnIndices);
    _this = selection_possibleConstructorReturn(this, selection_getPrototypeOf(MatrixSelectionView).call(this, matrix, indices.row.length, indices.column.length));
    _this.rowIndices = indices.row;
    _this.columnIndices = indices.column;
    return _this;
  }

  selection_createClass(MatrixSelectionView, [{
    key: "set",
    value: function set(rowIndex, columnIndex, value) {
      this.matrix.set(this.rowIndices[rowIndex], this.columnIndices[columnIndex], value);
      return this;
    }
  }, {
    key: "get",
    value: function get(rowIndex, columnIndex) {
      return this.matrix.get(this.rowIndices[rowIndex], this.columnIndices[columnIndex]);
    }
  }]);

  return MatrixSelectionView;
}(base["a" /* default */]);


// CONCATENATED MODULE: ./node_modules/ml-matrix/src/views/sub.js
function sub_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { sub_typeof = function _typeof(obj) { return typeof obj; }; } else { sub_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return sub_typeof(obj); }

function sub_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function sub_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function sub_createClass(Constructor, protoProps, staticProps) { if (protoProps) sub_defineProperties(Constructor.prototype, protoProps); if (staticProps) sub_defineProperties(Constructor, staticProps); return Constructor; }

function sub_possibleConstructorReturn(self, call) { if (call && (sub_typeof(call) === "object" || typeof call === "function")) { return call; } return sub_assertThisInitialized(self); }

function sub_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function sub_getPrototypeOf(o) { sub_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return sub_getPrototypeOf(o); }

function sub_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) sub_setPrototypeOf(subClass, superClass); }

function sub_setPrototypeOf(o, p) { sub_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return sub_setPrototypeOf(o, p); }




var sub_MatrixSubView =
/*#__PURE__*/
function (_BaseView) {
  sub_inherits(MatrixSubView, _BaseView);

  function MatrixSubView(matrix, startRow, endRow, startColumn, endColumn) {
    var _this;

    sub_classCallCheck(this, MatrixSubView);

    Object(util["e" /* checkRange */])(matrix, startRow, endRow, startColumn, endColumn);
    _this = sub_possibleConstructorReturn(this, sub_getPrototypeOf(MatrixSubView).call(this, matrix, endRow - startRow + 1, endColumn - startColumn + 1));
    _this.startRow = startRow;
    _this.startColumn = startColumn;
    return _this;
  }

  sub_createClass(MatrixSubView, [{
    key: "set",
    value: function set(rowIndex, columnIndex, value) {
      this.matrix.set(this.startRow + rowIndex, this.startColumn + columnIndex, value);
      return this;
    }
  }, {
    key: "get",
    value: function get(rowIndex, columnIndex) {
      return this.matrix.get(this.startRow + rowIndex, this.startColumn + columnIndex);
    }
  }]);

  return MatrixSubView;
}(base["a" /* default */]);


// EXTERNAL MODULE: ./node_modules/ml-matrix/src/views/transpose.js
var transpose = __webpack_require__(134);

// CONCATENATED MODULE: ./node_modules/ml-matrix/src/views/index.js









// CONCATENATED MODULE: ./node_modules/ml-matrix/src/wrap/WrapperMatrix1D.js
function WrapperMatrix1D_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { WrapperMatrix1D_typeof = function _typeof(obj) { return typeof obj; }; } else { WrapperMatrix1D_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return WrapperMatrix1D_typeof(obj); }

function WrapperMatrix1D_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function WrapperMatrix1D_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function WrapperMatrix1D_createClass(Constructor, protoProps, staticProps) { if (protoProps) WrapperMatrix1D_defineProperties(Constructor.prototype, protoProps); if (staticProps) WrapperMatrix1D_defineProperties(Constructor, staticProps); return Constructor; }

function WrapperMatrix1D_possibleConstructorReturn(self, call) { if (call && (WrapperMatrix1D_typeof(call) === "object" || typeof call === "function")) { return call; } return WrapperMatrix1D_assertThisInitialized(self); }

function WrapperMatrix1D_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function WrapperMatrix1D_getPrototypeOf(o) { WrapperMatrix1D_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return WrapperMatrix1D_getPrototypeOf(o); }

function WrapperMatrix1D_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) WrapperMatrix1D_setPrototypeOf(subClass, superClass); }

function WrapperMatrix1D_setPrototypeOf(o, p) { WrapperMatrix1D_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return WrapperMatrix1D_setPrototypeOf(o, p); }



var WrapperMatrix1D =
/*#__PURE__*/
function (_AbstractMatrix) {
  WrapperMatrix1D_inherits(WrapperMatrix1D, _AbstractMatrix);

  function WrapperMatrix1D(data) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    WrapperMatrix1D_classCallCheck(this, WrapperMatrix1D);

    var _options$rows = options.rows,
        rows = _options$rows === void 0 ? 1 : _options$rows;

    if (data.length % rows !== 0) {
      throw new Error('the data length is not divisible by the number of rows');
    }

    _this = WrapperMatrix1D_possibleConstructorReturn(this, WrapperMatrix1D_getPrototypeOf(WrapperMatrix1D).call(this));
    _this.rows = rows;
    _this.columns = data.length / rows;
    _this.data = data;
    return _this;
  }

  WrapperMatrix1D_createClass(WrapperMatrix1D, [{
    key: "set",
    value: function set(rowIndex, columnIndex, value) {
      var index = this._calculateIndex(rowIndex, columnIndex);

      this.data[index] = value;
      return this;
    }
  }, {
    key: "get",
    value: function get(rowIndex, columnIndex) {
      var index = this._calculateIndex(rowIndex, columnIndex);

      return this.data[index];
    }
  }, {
    key: "_calculateIndex",
    value: function _calculateIndex(row, column) {
      return row * this.columns + column;
    }
  }]);

  return WrapperMatrix1D;
}(src_matrix["a" /* AbstractMatrix */]);


// EXTERNAL MODULE: ./node_modules/ml-matrix/src/wrap/WrapperMatrix2D.js
var WrapperMatrix2D = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/ml-matrix/src/wrap/wrap.js


function wrap(array, options) {
  if (Array.isArray(array)) {
    if (array[0] && Array.isArray(array[0])) {
      return new WrapperMatrix2D["a" /* default */](array);
    } else {
      return new WrapperMatrix1D(array, options);
    }
  } else {
    throw new Error('the argument is not an array');
  }
}
// EXTERNAL MODULE: ./node_modules/ml-matrix/src/decompositions.js
var decompositions = __webpack_require__(99);

// EXTERNAL MODULE: ./node_modules/ml-matrix/src/dc/lu.js
var lu = __webpack_require__(45);

// CONCATENATED MODULE: ./node_modules/ml-matrix/src/determinant.js



function determinant(matrix) {
  matrix = src_matrix["b" /* default */].checkMatrix(matrix);

  if (matrix.isSquare()) {
    var a, b, c, d;

    if (matrix.columns === 2) {
      // 2 x 2 matrix
      a = matrix.get(0, 0);
      b = matrix.get(0, 1);
      c = matrix.get(1, 0);
      d = matrix.get(1, 1);
      return a * d - b * c;
    } else if (matrix.columns === 3) {
      // 3 x 3 matrix
      var subMatrix0, subMatrix1, subMatrix2;
      subMatrix0 = new selection_MatrixSelectionView(matrix, [1, 2], [1, 2]);
      subMatrix1 = new selection_MatrixSelectionView(matrix, [1, 2], [0, 2]);
      subMatrix2 = new selection_MatrixSelectionView(matrix, [1, 2], [0, 1]);
      a = matrix.get(0, 0);
      b = matrix.get(0, 1);
      c = matrix.get(0, 2);
      return a * determinant(subMatrix0) - b * determinant(subMatrix1) + c * determinant(subMatrix2);
    } else {
      // general purpose determinant using the LU decomposition
      return new lu["a" /* default */](matrix).determinant;
    }
  } else {
    throw Error('determinant can only be calculated for a square matrix');
  }
}
// EXTERNAL MODULE: ./node_modules/ml-matrix/src/dc/svd.js
var dc_svd = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/ml-matrix/src/linearDependencies.js



function xrange(n, exception) {
  var range = [];

  for (var i = 0; i < n; i++) {
    if (i !== exception) {
      range.push(i);
    }
  }

  return range;
}

function dependenciesOneRow(error, matrix, index) {
  var thresholdValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10e-10;
  var thresholdError = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 10e-10;

  if (error > thresholdError) {
    return new Array(matrix.rows + 1).fill(0);
  } else {
    var returnArray = matrix.addRow(index, [0]);

    for (var i = 0; i < returnArray.rows; i++) {
      if (Math.abs(returnArray.get(i, 0)) < thresholdValue) {
        returnArray.set(i, 0, 0);
      }
    }

    return returnArray.to1DArray();
  }
}

function linearDependencies(matrix) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$thresholdVal = options.thresholdValue,
      thresholdValue = _options$thresholdVal === void 0 ? 10e-10 : _options$thresholdVal,
      _options$thresholdErr = options.thresholdError,
      thresholdError = _options$thresholdErr === void 0 ? 10e-10 : _options$thresholdErr;
  matrix = src_matrix["b" /* default */].checkMatrix(matrix);
  var n = matrix.rows;
  var results = new src_matrix["b" /* default */](n, n);

  for (var i = 0; i < n; i++) {
    var b = src_matrix["b" /* default */].columnVector(matrix.getRow(i));
    var Abis = matrix.subMatrixRow(xrange(n, i)).transpose();
    var svd = new dc_svd["a" /* default */](Abis);
    var x = svd.solve(b);
    var error = src_matrix["b" /* default */].sub(b, Abis.mmul(x)).abs().max();
    results.setRow(i, dependenciesOneRow(error, x, i, thresholdValue, thresholdError));
  }

  return results;
}
// EXTERNAL MODULE: ./node_modules/ml-matrix/src/pseudoInverse.js
var pseudoInverse = __webpack_require__(135);

// CONCATENATED MODULE: ./node_modules/ml-matrix/src/covariance.js
function covariance_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { covariance_typeof = function _typeof(obj) { return typeof obj; }; } else { covariance_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return covariance_typeof(obj); }


function covariance_covariance(xMatrix) {
  var yMatrix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : xMatrix;
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  xMatrix = src_matrix["b" /* default */].checkMatrix(xMatrix);
  var yIsSame = false;

  if (covariance_typeof(yMatrix) === 'object' && !src_matrix["b" /* default */].isMatrix(yMatrix) && !Array.isArray(yMatrix)) {
    options = yMatrix;
    yMatrix = xMatrix;
    yIsSame = true;
  } else {
    yMatrix = src_matrix["b" /* default */].checkMatrix(yMatrix);
  }

  if (xMatrix.rows !== yMatrix.rows) {
    throw new TypeError('Both matrices must have the same number of rows');
  }

  var _options = options,
      _options$center = _options.center,
      center = _options$center === void 0 ? true : _options$center;

  if (center) {
    xMatrix = xMatrix.center('column');

    if (!yIsSame) {
      yMatrix = yMatrix.center('column');
    }
  }

  var covariance = xMatrix.transpose().mmul(yMatrix);

  for (var i = 0; i < covariance.rows; i++) {
    for (var j = 0; j < covariance.columns; j++) {
      covariance.set(i, j, covariance.get(i, j) * (1 / (xMatrix.rows - 1)));
    }
  }

  return covariance;
}
// CONCATENATED MODULE: ./node_modules/ml-matrix/src/correlation.js
function correlation_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { correlation_typeof = function _typeof(obj) { return typeof obj; }; } else { correlation_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return correlation_typeof(obj); }


function correlation_correlation(xMatrix) {
  var yMatrix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : xMatrix;
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  xMatrix = src_matrix["b" /* default */].checkMatrix(xMatrix);
  var yIsSame = false;

  if (correlation_typeof(yMatrix) === 'object' && !src_matrix["b" /* default */].isMatrix(yMatrix) && !Array.isArray(yMatrix)) {
    options = yMatrix;
    yMatrix = xMatrix;
    yIsSame = true;
  } else {
    yMatrix = src_matrix["b" /* default */].checkMatrix(yMatrix);
  }

  if (xMatrix.rows !== yMatrix.rows) {
    throw new TypeError('Both matrices must have the same number of rows');
  }

  var _options = options,
      _options$center = _options.center,
      center = _options$center === void 0 ? true : _options$center,
      _options$scale = _options.scale,
      scale = _options$scale === void 0 ? true : _options$scale;

  if (center) {
    xMatrix.center('column');

    if (!yIsSame) {
      yMatrix.center('column');
    }
  }

  if (scale) {
    xMatrix.scale('column');

    if (!yIsSame) {
      yMatrix.scale('column');
    }
  }

  var sdx = xMatrix.standardDeviation('column', {
    unbiased: true
  });
  var sdy = yIsSame ? sdx : yMatrix.standardDeviation('column', {
    unbiased: true
  });
  var correlation = xMatrix.transpose().mmul(yMatrix);

  for (var i = 0; i < correlation.rows; i++) {
    for (var j = 0; j < correlation.columns; j++) {
      correlation.set(i, j, correlation.get(i, j) * (1 / (sdx[i] * sdy[j])) * (1 / (xMatrix.rows - 1)));
    }
  }

  return correlation;
}
// EXTERNAL MODULE: ./node_modules/ml-matrix/src/dc/util.js
var dc_util = __webpack_require__(20);

// CONCATENATED MODULE: ./node_modules/ml-matrix/src/dc/evd.js
function evd_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function evd_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function evd_createClass(Constructor, protoProps, staticProps) { if (protoProps) evd_defineProperties(Constructor.prototype, protoProps); if (staticProps) evd_defineProperties(Constructor, staticProps); return Constructor; }





var evd_EigenvalueDecomposition =
/*#__PURE__*/
function () {
  function EigenvalueDecomposition(matrix) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    evd_classCallCheck(this, EigenvalueDecomposition);

    var _options$assumeSymmet = options.assumeSymmetric,
        assumeSymmetric = _options$assumeSymmet === void 0 ? false : _options$assumeSymmet;
    matrix = WrapperMatrix2D["a" /* default */].checkMatrix(matrix);

    if (!matrix.isSquare()) {
      throw new Error('Matrix is not a square matrix');
    }

    var n = matrix.columns;
    var V = new src_matrix["b" /* default */](n, n);
    var d = new Float64Array(n);
    var e = new Float64Array(n);
    var value = matrix;
    var i, j;
    var isSymmetric = false;

    if (assumeSymmetric) {
      isSymmetric = true;
    } else {
      isSymmetric = matrix.isSymmetric();
    }

    if (isSymmetric) {
      for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
          V.set(i, j, value.get(i, j));
        }
      }

      tred2(n, e, d, V);
      tql2(n, e, d, V);
    } else {
      var H = new src_matrix["b" /* default */](n, n);
      var ort = new Float64Array(n);

      for (j = 0; j < n; j++) {
        for (i = 0; i < n; i++) {
          H.set(i, j, value.get(i, j));
        }
      }

      orthes(n, H, ort, V);
      hqr2(n, e, d, V, H);
    }

    this.n = n;
    this.e = e;
    this.d = d;
    this.V = V;
  }

  evd_createClass(EigenvalueDecomposition, [{
    key: "realEigenvalues",
    get: function get() {
      return Array.from(this.d);
    }
  }, {
    key: "imaginaryEigenvalues",
    get: function get() {
      return Array.from(this.e);
    }
  }, {
    key: "eigenvectorMatrix",
    get: function get() {
      return this.V;
    }
  }, {
    key: "diagonalMatrix",
    get: function get() {
      var n = this.n;
      var e = this.e;
      var d = this.d;
      var X = new src_matrix["b" /* default */](n, n);
      var i, j;

      for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
          X.set(i, j, 0);
        }

        X.set(i, i, d[i]);

        if (e[i] > 0) {
          X.set(i, i + 1, e[i]);
        } else if (e[i] < 0) {
          X.set(i, i - 1, e[i]);
        }
      }

      return X;
    }
  }]);

  return EigenvalueDecomposition;
}();



function tred2(n, e, d, V) {
  var f, g, h, i, j, k, hh, scale;

  for (j = 0; j < n; j++) {
    d[j] = V.get(n - 1, j);
  }

  for (i = n - 1; i > 0; i--) {
    scale = 0;
    h = 0;

    for (k = 0; k < i; k++) {
      scale = scale + Math.abs(d[k]);
    }

    if (scale === 0) {
      e[i] = d[i - 1];

      for (j = 0; j < i; j++) {
        d[j] = V.get(i - 1, j);
        V.set(i, j, 0);
        V.set(j, i, 0);
      }
    } else {
      for (k = 0; k < i; k++) {
        d[k] /= scale;
        h += d[k] * d[k];
      }

      f = d[i - 1];
      g = Math.sqrt(h);

      if (f > 0) {
        g = -g;
      }

      e[i] = scale * g;
      h = h - f * g;
      d[i - 1] = f - g;

      for (j = 0; j < i; j++) {
        e[j] = 0;
      }

      for (j = 0; j < i; j++) {
        f = d[j];
        V.set(j, i, f);
        g = e[j] + V.get(j, j) * f;

        for (k = j + 1; k <= i - 1; k++) {
          g += V.get(k, j) * d[k];
          e[k] += V.get(k, j) * f;
        }

        e[j] = g;
      }

      f = 0;

      for (j = 0; j < i; j++) {
        e[j] /= h;
        f += e[j] * d[j];
      }

      hh = f / (h + h);

      for (j = 0; j < i; j++) {
        e[j] -= hh * d[j];
      }

      for (j = 0; j < i; j++) {
        f = d[j];
        g = e[j];

        for (k = j; k <= i - 1; k++) {
          V.set(k, j, V.get(k, j) - (f * e[k] + g * d[k]));
        }

        d[j] = V.get(i - 1, j);
        V.set(i, j, 0);
      }
    }

    d[i] = h;
  }

  for (i = 0; i < n - 1; i++) {
    V.set(n - 1, i, V.get(i, i));
    V.set(i, i, 1);
    h = d[i + 1];

    if (h !== 0) {
      for (k = 0; k <= i; k++) {
        d[k] = V.get(k, i + 1) / h;
      }

      for (j = 0; j <= i; j++) {
        g = 0;

        for (k = 0; k <= i; k++) {
          g += V.get(k, i + 1) * V.get(k, j);
        }

        for (k = 0; k <= i; k++) {
          V.set(k, j, V.get(k, j) - g * d[k]);
        }
      }
    }

    for (k = 0; k <= i; k++) {
      V.set(k, i + 1, 0);
    }
  }

  for (j = 0; j < n; j++) {
    d[j] = V.get(n - 1, j);
    V.set(n - 1, j, 0);
  }

  V.set(n - 1, n - 1, 1);
  e[0] = 0;
}

function tql2(n, e, d, V) {
  var g, h, i, j, k, l, m, p, r, dl1, c, c2, c3, el1, s, s2, iter;

  for (i = 1; i < n; i++) {
    e[i - 1] = e[i];
  }

  e[n - 1] = 0;
  var f = 0;
  var tst1 = 0;
  var eps = Number.EPSILON;

  for (l = 0; l < n; l++) {
    tst1 = Math.max(tst1, Math.abs(d[l]) + Math.abs(e[l]));
    m = l;

    while (m < n) {
      if (Math.abs(e[m]) <= eps * tst1) {
        break;
      }

      m++;
    }

    if (m > l) {
      iter = 0;

      do {
        iter = iter + 1;
        g = d[l];
        p = (d[l + 1] - g) / (2 * e[l]);
        r = Object(dc_util["a" /* hypotenuse */])(p, 1);

        if (p < 0) {
          r = -r;
        }

        d[l] = e[l] / (p + r);
        d[l + 1] = e[l] * (p + r);
        dl1 = d[l + 1];
        h = g - d[l];

        for (i = l + 2; i < n; i++) {
          d[i] -= h;
        }

        f = f + h;
        p = d[m];
        c = 1;
        c2 = c;
        c3 = c;
        el1 = e[l + 1];
        s = 0;
        s2 = 0;

        for (i = m - 1; i >= l; i--) {
          c3 = c2;
          c2 = c;
          s2 = s;
          g = c * e[i];
          h = c * p;
          r = Object(dc_util["a" /* hypotenuse */])(p, e[i]);
          e[i + 1] = s * r;
          s = e[i] / r;
          c = p / r;
          p = c * d[i] - s * g;
          d[i + 1] = h + s * (c * g + s * d[i]);

          for (k = 0; k < n; k++) {
            h = V.get(k, i + 1);
            V.set(k, i + 1, s * V.get(k, i) + c * h);
            V.set(k, i, c * V.get(k, i) - s * h);
          }
        }

        p = -s * s2 * c3 * el1 * e[l] / dl1;
        e[l] = s * p;
        d[l] = c * p;
      } while (Math.abs(e[l]) > eps * tst1);
    }

    d[l] = d[l] + f;
    e[l] = 0;
  }

  for (i = 0; i < n - 1; i++) {
    k = i;
    p = d[i];

    for (j = i + 1; j < n; j++) {
      if (d[j] < p) {
        k = j;
        p = d[j];
      }
    }

    if (k !== i) {
      d[k] = d[i];
      d[i] = p;

      for (j = 0; j < n; j++) {
        p = V.get(j, i);
        V.set(j, i, V.get(j, k));
        V.set(j, k, p);
      }
    }
  }
}

function orthes(n, H, ort, V) {
  var low = 0;
  var high = n - 1;
  var f, g, h, i, j, m;
  var scale;

  for (m = low + 1; m <= high - 1; m++) {
    scale = 0;

    for (i = m; i <= high; i++) {
      scale = scale + Math.abs(H.get(i, m - 1));
    }

    if (scale !== 0) {
      h = 0;

      for (i = high; i >= m; i--) {
        ort[i] = H.get(i, m - 1) / scale;
        h += ort[i] * ort[i];
      }

      g = Math.sqrt(h);

      if (ort[m] > 0) {
        g = -g;
      }

      h = h - ort[m] * g;
      ort[m] = ort[m] - g;

      for (j = m; j < n; j++) {
        f = 0;

        for (i = high; i >= m; i--) {
          f += ort[i] * H.get(i, j);
        }

        f = f / h;

        for (i = m; i <= high; i++) {
          H.set(i, j, H.get(i, j) - f * ort[i]);
        }
      }

      for (i = 0; i <= high; i++) {
        f = 0;

        for (j = high; j >= m; j--) {
          f += ort[j] * H.get(i, j);
        }

        f = f / h;

        for (j = m; j <= high; j++) {
          H.set(i, j, H.get(i, j) - f * ort[j]);
        }
      }

      ort[m] = scale * ort[m];
      H.set(m, m - 1, scale * g);
    }
  }

  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      V.set(i, j, i === j ? 1 : 0);
    }
  }

  for (m = high - 1; m >= low + 1; m--) {
    if (H.get(m, m - 1) !== 0) {
      for (i = m + 1; i <= high; i++) {
        ort[i] = H.get(i, m - 1);
      }

      for (j = m; j <= high; j++) {
        g = 0;

        for (i = m; i <= high; i++) {
          g += ort[i] * V.get(i, j);
        }

        g = g / ort[m] / H.get(m, m - 1);

        for (i = m; i <= high; i++) {
          V.set(i, j, V.get(i, j) + g * ort[i]);
        }
      }
    }
  }
}

function hqr2(nn, e, d, V, H) {
  var n = nn - 1;
  var low = 0;
  var high = nn - 1;
  var eps = Number.EPSILON;
  var exshift = 0;
  var norm = 0;
  var p = 0;
  var q = 0;
  var r = 0;
  var s = 0;
  var z = 0;
  var iter = 0;
  var i, j, k, l, m, t, w, x, y;
  var ra, sa, vr, vi;
  var notlast, cdivres;

  for (i = 0; i < nn; i++) {
    if (i < low || i > high) {
      d[i] = H.get(i, i);
      e[i] = 0;
    }

    for (j = Math.max(i - 1, 0); j < nn; j++) {
      norm = norm + Math.abs(H.get(i, j));
    }
  }

  while (n >= low) {
    l = n;

    while (l > low) {
      s = Math.abs(H.get(l - 1, l - 1)) + Math.abs(H.get(l, l));

      if (s === 0) {
        s = norm;
      }

      if (Math.abs(H.get(l, l - 1)) < eps * s) {
        break;
      }

      l--;
    }

    if (l === n) {
      H.set(n, n, H.get(n, n) + exshift);
      d[n] = H.get(n, n);
      e[n] = 0;
      n--;
      iter = 0;
    } else if (l === n - 1) {
      w = H.get(n, n - 1) * H.get(n - 1, n);
      p = (H.get(n - 1, n - 1) - H.get(n, n)) / 2;
      q = p * p + w;
      z = Math.sqrt(Math.abs(q));
      H.set(n, n, H.get(n, n) + exshift);
      H.set(n - 1, n - 1, H.get(n - 1, n - 1) + exshift);
      x = H.get(n, n);

      if (q >= 0) {
        z = p >= 0 ? p + z : p - z;
        d[n - 1] = x + z;
        d[n] = d[n - 1];

        if (z !== 0) {
          d[n] = x - w / z;
        }

        e[n - 1] = 0;
        e[n] = 0;
        x = H.get(n, n - 1);
        s = Math.abs(x) + Math.abs(z);
        p = x / s;
        q = z / s;
        r = Math.sqrt(p * p + q * q);
        p = p / r;
        q = q / r;

        for (j = n - 1; j < nn; j++) {
          z = H.get(n - 1, j);
          H.set(n - 1, j, q * z + p * H.get(n, j));
          H.set(n, j, q * H.get(n, j) - p * z);
        }

        for (i = 0; i <= n; i++) {
          z = H.get(i, n - 1);
          H.set(i, n - 1, q * z + p * H.get(i, n));
          H.set(i, n, q * H.get(i, n) - p * z);
        }

        for (i = low; i <= high; i++) {
          z = V.get(i, n - 1);
          V.set(i, n - 1, q * z + p * V.get(i, n));
          V.set(i, n, q * V.get(i, n) - p * z);
        }
      } else {
        d[n - 1] = x + p;
        d[n] = x + p;
        e[n - 1] = z;
        e[n] = -z;
      }

      n = n - 2;
      iter = 0;
    } else {
      x = H.get(n, n);
      y = 0;
      w = 0;

      if (l < n) {
        y = H.get(n - 1, n - 1);
        w = H.get(n, n - 1) * H.get(n - 1, n);
      }

      if (iter === 10) {
        exshift += x;

        for (i = low; i <= n; i++) {
          H.set(i, i, H.get(i, i) - x);
        }

        s = Math.abs(H.get(n, n - 1)) + Math.abs(H.get(n - 1, n - 2));
        x = y = 0.75 * s;
        w = -0.4375 * s * s;
      }

      if (iter === 30) {
        s = (y - x) / 2;
        s = s * s + w;

        if (s > 0) {
          s = Math.sqrt(s);

          if (y < x) {
            s = -s;
          }

          s = x - w / ((y - x) / 2 + s);

          for (i = low; i <= n; i++) {
            H.set(i, i, H.get(i, i) - s);
          }

          exshift += s;
          x = y = w = 0.964;
        }
      }

      iter = iter + 1;
      m = n - 2;

      while (m >= l) {
        z = H.get(m, m);
        r = x - z;
        s = y - z;
        p = (r * s - w) / H.get(m + 1, m) + H.get(m, m + 1);
        q = H.get(m + 1, m + 1) - z - r - s;
        r = H.get(m + 2, m + 1);
        s = Math.abs(p) + Math.abs(q) + Math.abs(r);
        p = p / s;
        q = q / s;
        r = r / s;

        if (m === l) {
          break;
        }

        if (Math.abs(H.get(m, m - 1)) * (Math.abs(q) + Math.abs(r)) < eps * (Math.abs(p) * (Math.abs(H.get(m - 1, m - 1)) + Math.abs(z) + Math.abs(H.get(m + 1, m + 1))))) {
          break;
        }

        m--;
      }

      for (i = m + 2; i <= n; i++) {
        H.set(i, i - 2, 0);

        if (i > m + 2) {
          H.set(i, i - 3, 0);
        }
      }

      for (k = m; k <= n - 1; k++) {
        notlast = k !== n - 1;

        if (k !== m) {
          p = H.get(k, k - 1);
          q = H.get(k + 1, k - 1);
          r = notlast ? H.get(k + 2, k - 1) : 0;
          x = Math.abs(p) + Math.abs(q) + Math.abs(r);

          if (x !== 0) {
            p = p / x;
            q = q / x;
            r = r / x;
          }
        }

        if (x === 0) {
          break;
        }

        s = Math.sqrt(p * p + q * q + r * r);

        if (p < 0) {
          s = -s;
        }

        if (s !== 0) {
          if (k !== m) {
            H.set(k, k - 1, -s * x);
          } else if (l !== m) {
            H.set(k, k - 1, -H.get(k, k - 1));
          }

          p = p + s;
          x = p / s;
          y = q / s;
          z = r / s;
          q = q / p;
          r = r / p;

          for (j = k; j < nn; j++) {
            p = H.get(k, j) + q * H.get(k + 1, j);

            if (notlast) {
              p = p + r * H.get(k + 2, j);
              H.set(k + 2, j, H.get(k + 2, j) - p * z);
            }

            H.set(k, j, H.get(k, j) - p * x);
            H.set(k + 1, j, H.get(k + 1, j) - p * y);
          }

          for (i = 0; i <= Math.min(n, k + 3); i++) {
            p = x * H.get(i, k) + y * H.get(i, k + 1);

            if (notlast) {
              p = p + z * H.get(i, k + 2);
              H.set(i, k + 2, H.get(i, k + 2) - p * r);
            }

            H.set(i, k, H.get(i, k) - p);
            H.set(i, k + 1, H.get(i, k + 1) - p * q);
          }

          for (i = low; i <= high; i++) {
            p = x * V.get(i, k) + y * V.get(i, k + 1);

            if (notlast) {
              p = p + z * V.get(i, k + 2);
              V.set(i, k + 2, V.get(i, k + 2) - p * r);
            }

            V.set(i, k, V.get(i, k) - p);
            V.set(i, k + 1, V.get(i, k + 1) - p * q);
          }
        }
      }
    }
  }

  if (norm === 0) {
    return;
  }

  for (n = nn - 1; n >= 0; n--) {
    p = d[n];
    q = e[n];

    if (q === 0) {
      l = n;
      H.set(n, n, 1);

      for (i = n - 1; i >= 0; i--) {
        w = H.get(i, i) - p;
        r = 0;

        for (j = l; j <= n; j++) {
          r = r + H.get(i, j) * H.get(j, n);
        }

        if (e[i] < 0) {
          z = w;
          s = r;
        } else {
          l = i;

          if (e[i] === 0) {
            H.set(i, n, w !== 0 ? -r / w : -r / (eps * norm));
          } else {
            x = H.get(i, i + 1);
            y = H.get(i + 1, i);
            q = (d[i] - p) * (d[i] - p) + e[i] * e[i];
            t = (x * s - z * r) / q;
            H.set(i, n, t);
            H.set(i + 1, n, Math.abs(x) > Math.abs(z) ? (-r - w * t) / x : (-s - y * t) / z);
          }

          t = Math.abs(H.get(i, n));

          if (eps * t * t > 1) {
            for (j = i; j <= n; j++) {
              H.set(j, n, H.get(j, n) / t);
            }
          }
        }
      }
    } else if (q < 0) {
      l = n - 1;

      if (Math.abs(H.get(n, n - 1)) > Math.abs(H.get(n - 1, n))) {
        H.set(n - 1, n - 1, q / H.get(n, n - 1));
        H.set(n - 1, n, -(H.get(n, n) - p) / H.get(n, n - 1));
      } else {
        cdivres = cdiv(0, -H.get(n - 1, n), H.get(n - 1, n - 1) - p, q);
        H.set(n - 1, n - 1, cdivres[0]);
        H.set(n - 1, n, cdivres[1]);
      }

      H.set(n, n - 1, 0);
      H.set(n, n, 1);

      for (i = n - 2; i >= 0; i--) {
        ra = 0;
        sa = 0;

        for (j = l; j <= n; j++) {
          ra = ra + H.get(i, j) * H.get(j, n - 1);
          sa = sa + H.get(i, j) * H.get(j, n);
        }

        w = H.get(i, i) - p;

        if (e[i] < 0) {
          z = w;
          r = ra;
          s = sa;
        } else {
          l = i;

          if (e[i] === 0) {
            cdivres = cdiv(-ra, -sa, w, q);
            H.set(i, n - 1, cdivres[0]);
            H.set(i, n, cdivres[1]);
          } else {
            x = H.get(i, i + 1);
            y = H.get(i + 1, i);
            vr = (d[i] - p) * (d[i] - p) + e[i] * e[i] - q * q;
            vi = (d[i] - p) * 2 * q;

            if (vr === 0 && vi === 0) {
              vr = eps * norm * (Math.abs(w) + Math.abs(q) + Math.abs(x) + Math.abs(y) + Math.abs(z));
            }

            cdivres = cdiv(x * r - z * ra + q * sa, x * s - z * sa - q * ra, vr, vi);
            H.set(i, n - 1, cdivres[0]);
            H.set(i, n, cdivres[1]);

            if (Math.abs(x) > Math.abs(z) + Math.abs(q)) {
              H.set(i + 1, n - 1, (-ra - w * H.get(i, n - 1) + q * H.get(i, n)) / x);
              H.set(i + 1, n, (-sa - w * H.get(i, n) - q * H.get(i, n - 1)) / x);
            } else {
              cdivres = cdiv(-r - y * H.get(i, n - 1), -s - y * H.get(i, n), z, q);
              H.set(i + 1, n - 1, cdivres[0]);
              H.set(i + 1, n, cdivres[1]);
            }
          }

          t = Math.max(Math.abs(H.get(i, n - 1)), Math.abs(H.get(i, n)));

          if (eps * t * t > 1) {
            for (j = i; j <= n; j++) {
              H.set(j, n - 1, H.get(j, n - 1) / t);
              H.set(j, n, H.get(j, n) / t);
            }
          }
        }
      }
    }
  }

  for (i = 0; i < nn; i++) {
    if (i < low || i > high) {
      for (j = i; j < nn; j++) {
        V.set(i, j, H.get(i, j));
      }
    }
  }

  for (j = nn - 1; j >= low; j--) {
    for (i = low; i <= high; i++) {
      z = 0;

      for (k = low; k <= Math.min(j, high); k++) {
        z = z + V.get(i, k) * H.get(k, j);
      }

      V.set(i, j, z);
    }
  }
}

function cdiv(xr, xi, yr, yi) {
  var r, d;

  if (Math.abs(yr) > Math.abs(yi)) {
    r = yi / yr;
    d = yr + r * yi;
    return [(xr + r * xi) / d, (xi - r * xr) / d];
  } else {
    r = yr / yi;
    d = yi + r * yr;
    return [(r * xr + xi) / d, (r * xi - xr) / d];
  }
}
// CONCATENATED MODULE: ./node_modules/ml-matrix/src/dc/cholesky.js
function cholesky_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function cholesky_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function cholesky_createClass(Constructor, protoProps, staticProps) { if (protoProps) cholesky_defineProperties(Constructor.prototype, protoProps); if (staticProps) cholesky_defineProperties(Constructor, staticProps); return Constructor; }




var cholesky_CholeskyDecomposition =
/*#__PURE__*/
function () {
  function CholeskyDecomposition(value) {
    cholesky_classCallCheck(this, CholeskyDecomposition);

    value = WrapperMatrix2D["a" /* default */].checkMatrix(value);

    if (!value.isSymmetric()) {
      throw new Error('Matrix is not symmetric');
    }

    var a = value;
    var dimension = a.rows;
    var l = new src_matrix["b" /* default */](dimension, dimension);
    var positiveDefinite = true;
    var i, j, k;

    for (j = 0; j < dimension; j++) {
      var d = 0;

      for (k = 0; k < j; k++) {
        var s = 0;

        for (i = 0; i < k; i++) {
          s += l.get(k, i) * l.get(j, i);
        }

        s = (a.get(j, k) - s) / l.get(k, k);
        l.set(j, k, s);
        d = d + s * s;
      }

      d = a.get(j, j) - d;
      positiveDefinite &= d > 0;
      l.set(j, j, Math.sqrt(Math.max(d, 0)));

      for (k = j + 1; k < dimension; k++) {
        l.set(j, k, 0);
      }
    }

    if (!positiveDefinite) {
      throw new Error('Matrix is not positive definite');
    }

    this.L = l;
  }

  cholesky_createClass(CholeskyDecomposition, [{
    key: "solve",
    value: function solve(value) {
      value = WrapperMatrix2D["a" /* default */].checkMatrix(value);
      var l = this.L;
      var dimension = l.rows;

      if (value.rows !== dimension) {
        throw new Error('Matrix dimensions do not match');
      }

      var count = value.columns;
      var B = value.clone();
      var i, j, k;

      for (k = 0; k < dimension; k++) {
        for (j = 0; j < count; j++) {
          for (i = 0; i < k; i++) {
            B.set(k, j, B.get(k, j) - B.get(i, j) * l.get(k, i));
          }

          B.set(k, j, B.get(k, j) / l.get(k, k));
        }
      }

      for (k = dimension - 1; k >= 0; k--) {
        for (j = 0; j < count; j++) {
          for (i = k + 1; i < dimension; i++) {
            B.set(k, j, B.get(k, j) - B.get(i, j) * l.get(i, k));
          }

          B.set(k, j, B.get(k, j) / l.get(k, k));
        }
      }

      return B;
    }
  }, {
    key: "lowerTriangularMatrix",
    get: function get() {
      return this.L;
    }
  }]);

  return CholeskyDecomposition;
}();


// EXTERNAL MODULE: ./node_modules/ml-matrix/src/dc/qr.js
var qr = __webpack_require__(58);

// CONCATENATED MODULE: ./node_modules/ml-matrix/src/dc/nipals.js
function nipals_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var nipals_nipals = function nipals(X) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  nipals_classCallCheck(this, nipals);

  X = WrapperMatrix2D["a" /* default */].checkMatrix(X);
  var Y = options.Y;
  var _options$scaleScores = options.scaleScores,
      scaleScores = _options$scaleScores === void 0 ? false : _options$scaleScores,
      _options$maxIteration = options.maxIterations,
      maxIterations = _options$maxIteration === void 0 ? 1000 : _options$maxIteration,
      _options$terminationC = options.terminationCriteria,
      terminationCriteria = _options$terminationC === void 0 ? 1e-10 : _options$terminationC;
  var u;

  if (Y) {
    if (Array.isArray(Y) && typeof Y[0] === 'number') {
      Y = src_matrix["b" /* default */].columnVector(Y);
    } else {
      Y = WrapperMatrix2D["a" /* default */].checkMatrix(Y);
    }

    if (!Y.isColumnVector() || Y.rows !== X.rows) {
      throw new Error('Y must be a column vector of length X.rows');
    }

    u = Y;
  } else {
    u = X.getColumnVector(0);
  }

  var diff = 1;
  var t, q, w, tOld;

  for (var counter = 0; counter < maxIterations && diff > terminationCriteria; counter++) {
    w = X.transpose().mmul(u).div(u.transpose().mmul(u).get(0, 0));
    w = w.div(w.norm());
    t = X.mmul(w).div(w.transpose().mmul(w).get(0, 0));

    if (counter > 0) {
      diff = t.clone().sub(tOld).pow(2).sum();
    }

    tOld = t.clone();

    if (Y) {
      q = Y.transpose().mmul(t).div(t.transpose().mmul(t).get(0, 0));
      q = q.div(q.norm());
      u = Y.mmul(q).div(q.transpose().mmul(q).get(0, 0));
    } else {
      u = t;
    }
  }

  if (Y) {
    var p = X.transpose().mmul(t).div(t.transpose().mmul(t).get(0, 0));
    p = p.div(p.norm());
    var xResidual = X.clone().sub(t.clone().mmul(p.transpose()));
    var residual = u.transpose().mmul(t).div(t.transpose().mmul(t).get(0, 0));
    var yResidual = Y.clone().sub(t.clone().mulS(residual.get(0, 0)).mmul(q.transpose()));
    this.t = t;
    this.p = p.transpose();
    this.w = w.transpose();
    this.q = q;
    this.u = u;
    this.s = t.transpose().mmul(t);
    this.xResidual = xResidual;
    this.yResidual = yResidual;
    this.betas = residual;
  } else {
    this.w = w.transpose();
    this.s = t.transpose().mmul(t).sqrt();

    if (scaleScores) {
      this.t = t.clone().div(this.s.get(0, 0));
    } else {
      this.t = t;
    }

    this.xResidual = X.sub(t.mmul(w.transpose()));
  }
};


// CONCATENATED MODULE: ./node_modules/ml-matrix/src/index.js
/* concated harmony reexport AbstractMatrix */__webpack_require__.d(__webpack_exports__, "AbstractMatrix", function() { return src_matrix["a" /* AbstractMatrix */]; });
/* concated harmony reexport default */__webpack_require__.d(__webpack_exports__, "default", function() { return src_matrix["b" /* default */]; });
/* concated harmony reexport Matrix */__webpack_require__.d(__webpack_exports__, "Matrix", function() { return src_matrix["b" /* default */]; });
/* concated harmony reexport MatrixColumnView */__webpack_require__.d(__webpack_exports__, "MatrixColumnView", function() { return column_MatrixColumnView; });
/* concated harmony reexport MatrixColumnSelectionView */__webpack_require__.d(__webpack_exports__, "MatrixColumnSelectionView", function() { return columnSelection_MatrixColumnSelectionView; });
/* concated harmony reexport MatrixFlipColumnView */__webpack_require__.d(__webpack_exports__, "MatrixFlipColumnView", function() { return MatrixFlipColumnView; });
/* concated harmony reexport MatrixFlipRowView */__webpack_require__.d(__webpack_exports__, "MatrixFlipRowView", function() { return MatrixFlipRowView; });
/* concated harmony reexport MatrixRowView */__webpack_require__.d(__webpack_exports__, "MatrixRowView", function() { return row_MatrixRowView; });
/* concated harmony reexport MatrixRowSelectionView */__webpack_require__.d(__webpack_exports__, "MatrixRowSelectionView", function() { return rowSelection_MatrixRowSelectionView; });
/* concated harmony reexport MatrixSelectionView */__webpack_require__.d(__webpack_exports__, "MatrixSelectionView", function() { return selection_MatrixSelectionView; });
/* concated harmony reexport MatrixSubView */__webpack_require__.d(__webpack_exports__, "MatrixSubView", function() { return sub_MatrixSubView; });
/* concated harmony reexport MatrixTransposeView */__webpack_require__.d(__webpack_exports__, "MatrixTransposeView", function() { return transpose["a" /* default */]; });
/* concated harmony reexport wrap */__webpack_require__.d(__webpack_exports__, "wrap", function() { return wrap; });
/* concated harmony reexport WrapperMatrix1D */__webpack_require__.d(__webpack_exports__, "WrapperMatrix1D", function() { return WrapperMatrix1D; });
/* concated harmony reexport WrapperMatrix2D */__webpack_require__.d(__webpack_exports__, "WrapperMatrix2D", function() { return WrapperMatrix2D["a" /* default */]; });
/* concated harmony reexport solve */__webpack_require__.d(__webpack_exports__, "solve", function() { return decompositions["b" /* solve */]; });
/* concated harmony reexport inverse */__webpack_require__.d(__webpack_exports__, "inverse", function() { return decompositions["a" /* inverse */]; });
/* concated harmony reexport determinant */__webpack_require__.d(__webpack_exports__, "determinant", function() { return determinant; });
/* concated harmony reexport linearDependencies */__webpack_require__.d(__webpack_exports__, "linearDependencies", function() { return linearDependencies; });
/* concated harmony reexport pseudoInverse */__webpack_require__.d(__webpack_exports__, "pseudoInverse", function() { return pseudoInverse["a" /* pseudoInverse */]; });
/* concated harmony reexport covariance */__webpack_require__.d(__webpack_exports__, "covariance", function() { return covariance_covariance; });
/* concated harmony reexport correlation */__webpack_require__.d(__webpack_exports__, "correlation", function() { return correlation_correlation; });
/* concated harmony reexport SingularValueDecomposition */__webpack_require__.d(__webpack_exports__, "SingularValueDecomposition", function() { return dc_svd["a" /* default */]; });
/* concated harmony reexport SVD */__webpack_require__.d(__webpack_exports__, "SVD", function() { return dc_svd["a" /* default */]; });
/* concated harmony reexport EigenvalueDecomposition */__webpack_require__.d(__webpack_exports__, "EigenvalueDecomposition", function() { return evd_EigenvalueDecomposition; });
/* concated harmony reexport EVD */__webpack_require__.d(__webpack_exports__, "EVD", function() { return evd_EigenvalueDecomposition; });
/* concated harmony reexport CholeskyDecomposition */__webpack_require__.d(__webpack_exports__, "CholeskyDecomposition", function() { return cholesky_CholeskyDecomposition; });
/* concated harmony reexport CHO */__webpack_require__.d(__webpack_exports__, "CHO", function() { return cholesky_CholeskyDecomposition; });
/* concated harmony reexport LuDecomposition */__webpack_require__.d(__webpack_exports__, "LuDecomposition", function() { return lu["a" /* default */]; });
/* concated harmony reexport LU */__webpack_require__.d(__webpack_exports__, "LU", function() { return lu["a" /* default */]; });
/* concated harmony reexport QrDecomposition */__webpack_require__.d(__webpack_exports__, "QrDecomposition", function() { return qr["a" /* default */]; });
/* concated harmony reexport QR */__webpack_require__.d(__webpack_exports__, "QR", function() { return qr["a" /* default */]; });
/* concated harmony reexport Nipals */__webpack_require__.d(__webpack_exports__, "Nipals", function() { return nipals_nipals; });
/* concated harmony reexport NIPALS */__webpack_require__.d(__webpack_exports__, "NIPALS", function() { return nipals_nipals; });


















/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(29); // eslint-disable-next-line no-prototype-builtins


module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 55 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(29);

var TAG = __webpack_require__(7)('toStringTag'); // ES3 wrong here


var ARG = cof(function () {
  return arguments;
}()) == 'Arguments'; // fallback for IE11 Script Access Denied error

var tryGet = function tryGet(it, key) {
  try {
    return it[key];
  } catch (e) {
    /* empty */
  }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
  : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T // builtinTag case
  : ARG ? cof(O) // ES3 arguments fallback
  : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(5);

var aFunction = __webpack_require__(23);

var SPECIES = __webpack_require__(7)('species');

module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrDecomposition; });
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var QrDecomposition =
/*#__PURE__*/
function () {
  function QrDecomposition(value) {
    _classCallCheck(this, QrDecomposition);

    value = _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].checkMatrix(value);
    var qr = value.clone();
    var m = value.rows;
    var n = value.columns;
    var rdiag = new Float64Array(n);
    var i, j, k, s;

    for (k = 0; k < n; k++) {
      var nrm = 0;

      for (i = k; i < m; i++) {
        nrm = Object(_util__WEBPACK_IMPORTED_MODULE_2__[/* hypotenuse */ "a"])(nrm, qr.get(i, k));
      }

      if (nrm !== 0) {
        if (qr.get(k, k) < 0) {
          nrm = -nrm;
        }

        for (i = k; i < m; i++) {
          qr.set(i, k, qr.get(i, k) / nrm);
        }

        qr.set(k, k, qr.get(k, k) + 1);

        for (j = k + 1; j < n; j++) {
          s = 0;

          for (i = k; i < m; i++) {
            s += qr.get(i, k) * qr.get(i, j);
          }

          s = -s / qr.get(k, k);

          for (i = k; i < m; i++) {
            qr.set(i, j, qr.get(i, j) + s * qr.get(i, k));
          }
        }
      }

      rdiag[k] = -nrm;
    }

    this.QR = qr;
    this.Rdiag = rdiag;
  }

  _createClass(QrDecomposition, [{
    key: "solve",
    value: function solve(value) {
      value = _matrix__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"].checkMatrix(value);
      var qr = this.QR;
      var m = qr.rows;

      if (value.rows !== m) {
        throw new Error('Matrix row dimensions must agree');
      }

      if (!this.isFullRank()) {
        throw new Error('Matrix is rank deficient');
      }

      var count = value.columns;
      var X = value.clone();
      var n = qr.columns;
      var i, j, k, s;

      for (k = 0; k < n; k++) {
        for (j = 0; j < count; j++) {
          s = 0;

          for (i = k; i < m; i++) {
            s += qr.get(i, k) * X.get(i, j);
          }

          s = -s / qr.get(k, k);

          for (i = k; i < m; i++) {
            X.set(i, j, X.get(i, j) + s * qr.get(i, k));
          }
        }
      }

      for (k = n - 1; k >= 0; k--) {
        for (j = 0; j < count; j++) {
          X.set(k, j, X.get(k, j) / this.Rdiag[k]);
        }

        for (i = 0; i < k; i++) {
          for (j = 0; j < count; j++) {
            X.set(i, j, X.get(i, j) - X.get(k, j) * qr.get(i, k));
          }
        }
      }

      return X.subMatrix(0, n - 1, 0, count - 1);
    }
  }, {
    key: "isFullRank",
    value: function isFullRank() {
      var columns = this.QR.columns;

      for (var i = 0; i < columns; i++) {
        if (this.Rdiag[i] === 0) {
          return false;
        }
      }

      return true;
    }
  }, {
    key: "upperTriangularMatrix",
    get: function get() {
      var qr = this.QR;
      var n = qr.columns;
      var X = new _matrix__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"](n, n);
      var i, j;

      for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
          if (i < j) {
            X.set(i, j, qr.get(i, j));
          } else if (i === j) {
            X.set(i, j, this.Rdiag[i]);
          } else {
            X.set(i, j, 0);
          }
        }
      }

      return X;
    }
  }, {
    key: "orthogonalMatrix",
    get: function get() {
      var qr = this.QR;
      var rows = qr.rows;
      var columns = qr.columns;
      var X = new _matrix__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"](rows, columns);
      var i, j, k, s;

      for (k = columns - 1; k >= 0; k--) {
        for (i = 0; i < rows; i++) {
          X.set(i, k, 0);
        }

        X.set(k, k, 1);

        for (j = k; j < columns; j++) {
          if (qr.get(k, k) !== 0) {
            s = 0;

            for (i = k; i < rows; i++) {
              s += qr.get(i, k) * X.get(i, j);
            }

            s = -s / qr[k][k];

            for (i = k; i < rows; i++) {
              X.set(i, j, X.get(i, j) + s * qr.get(i, k));
            }
          }
        }
      }

      return X;
    }
  }]);

  return QrDecomposition;
}();



/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(10);

var global = __webpack_require__(3);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(37) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(19);

var toLength = __webpack_require__(8);

var toAbsoluteIndex = __webpack_require__(39);

module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare

      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      }
    }
    return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 61 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(29);

module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(7)('iterator');

var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();

  riter['return'] = function () {
    SAFE_CLOSING = true;
  }; // eslint-disable-next-line no-throw-literal


  Array.from(riter, function () {
    throw 2;
  });
} catch (e) {
  /* empty */
}

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;

  try {
    var arr = [7];
    var iter = arr[ITERATOR]();

    iter.next = function () {
      return {
        done: safe = true
      };
    };

    arr[ITERATOR] = function () {
      return iter;
    };

    exec(arr);
  } catch (e) {
    /* empty */
  }

  return safe;
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 21.2.5.3 get RegExp.prototype.flags

var anObject = __webpack_require__(5);

module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var classof = __webpack_require__(56);

var builtinExec = RegExp.prototype.exec; // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec

module.exports = function (R, S) {
  var exec = R.exec;

  if (typeof exec === 'function') {
    var result = exec.call(R, S);

    if (_typeof(result) !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }

    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }

  return builtinExec.call(R, S);
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(121);

var redefine = __webpack_require__(15);

var hide = __webpack_require__(18);

var fails = __webpack_require__(4);

var defined = __webpack_require__(30);

var wks = __webpack_require__(7);

var regexpExec = __webpack_require__(92);

var SPECIES = wks('species');
var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;

  re.exec = function () {
    var result = [];
    result.groups = {
      a: '7'
    };
    return result;
  };

  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;

  re.exec = function () {
    return originalExec.apply(this, arguments);
  };

  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
}();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};

    O[SYMBOL] = function () {
      return 7;
    };

    return ''[KEY](O) != 7;
  });
  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    re.exec = function () {
      execCalled = true;
      return null;
    };

    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};

      re.constructor[SPECIES] = function () {
        return re;
      };
    }

    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS || KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(defined, SYMBOL, ''[KEY], function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return {
            done: true,
            value: nativeRegExpMethod.call(regexp, str, arg2)
          };
        }

        return {
          done: true,
          value: nativeMethod.call(str, regexp, arg2)
        };
      }

      return {
        done: false
      };
    });
    var strfn = fns[0];
    var rxfn = fns[1];
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2 // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
    // 21.2.5.11 RegExp.prototype[@@split](string, limit)
    ? function (string, arg) {
      return rxfn.call(string, this, arg);
    } // 21.2.5.6 RegExp.prototype[@@match](string)
    // 21.2.5.9 RegExp.prototype[@@search](string)
    : function (string) {
      return rxfn.call(string, this);
    });
  }
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(22);

var call = __webpack_require__(116);

var isArrayIter = __webpack_require__(87);

var anObject = __webpack_require__(5);

var toLength = __webpack_require__(8);

var getIterFn = __webpack_require__(89);

var BREAK = {};
var RETURN = {};

var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () {
    return iterable;
  } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!'); // fast case for arrays with default iterator

  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};

exports.BREAK = BREAK;
exports.RETURN = RETURN;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);

var navigator = global.navigator;
module.exports = navigator && navigator.userAgent || '';

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(3);

var $export = __webpack_require__(0);

var redefine = __webpack_require__(15);

var redefineAll = __webpack_require__(51);

var meta = __webpack_require__(34);

var forOf = __webpack_require__(67);

var anInstance = __webpack_require__(50);

var isObject = __webpack_require__(6);

var fails = __webpack_require__(4);

var $iterDetect = __webpack_require__(63);

var setToStringTag = __webpack_require__(46);

var inheritIfRequired = __webpack_require__(78);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};

  var fixMethod = function fixMethod(KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY, KEY == 'delete' ? function (a) {
      return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'has' ? function has(a) {
      return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'get' ? function get(a) {
      return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'add' ? function add(a) {
      fn.call(this, a === 0 ? 0 : a);
      return this;
    } : function set(a, b) {
      fn.call(this, a === 0 ? 0 : a, b);
      return this;
    });
  };

  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C(); // early implementations not supports chaining

    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance; // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false

    var THROWS_ON_PRIMITIVES = fails(function () {
      instance.has(1);
    }); // most early implementations doesn't supports iterables, most modern - not close it correctly

    var ACCEPT_ITERABLES = $iterDetect(function (iter) {
      new C(iter);
    }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same

    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;

      while (index--) {
        $instance[ADDER](index, index);
      }

      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER); // weak collections should not contains .clear method

    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);
  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);
  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);
  return C;
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);

var hide = __webpack_require__(18);

var uid = __webpack_require__(36);

var TYPED = uid('typed_array');
var VIEW = uid('view');
var ABV = !!(global.ArrayBuffer && global.DataView);
var CONSTR = ABV;
var i = 0;
var l = 9;
var Typed;
var TypedArrayConstructors = 'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'.split(',');

while (i < l) {
  if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(6);

var document = __webpack_require__(3).document; // typeof document.createElement is 'object' in old IE


var is = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(7);

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(59)('keys');

var uid = __webpack_require__(36);

module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 74 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(3).document;

module.exports = document && document.documentElement;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.

/* eslint-disable no-proto */
var isObject = __webpack_require__(6);

var anObject = __webpack_require__(5);

var check = function check(O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};

module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
  function (test, buggy, set) {
    try {
      set = __webpack_require__(22)(Function.call, __webpack_require__(25).f(Object.prototype, '__proto__').set, 2);
      set(test, []);
      buggy = !(test instanceof Array);
    } catch (e) {
      buggy = true;
    }

    return function setPrototypeOf(O, proto) {
      check(O, proto);
      if (buggy) O.__proto__ = proto;else set(O, proto);
      return O;
    };
  }({}, false) : undefined),
  check: check
};

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = "\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003" + "\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(6);

var setPrototypeOf = __webpack_require__(76).set;

module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;

  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  }

  return that;
};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toInteger = __webpack_require__(24);

var defined = __webpack_require__(30);

module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");

  for (; n > 0; (n >>>= 1) && (str += str)) {
    if (n & 1) res += str;
  }

  return res;
};

/***/ }),
/* 80 */
/***/ (function(module, exports) {

// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};

/***/ }),
/* 81 */
/***/ (function(module, exports) {

// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = !$expm1 // Old FF bug
|| $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168 // Tor Browser bug
|| $expm1(-2e-17) != -2e-17 ? function expm1(x) {
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(24);

var defined = __webpack_require__(30); // true  -> String#at
// false -> String#codePointAt


module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LIBRARY = __webpack_require__(37);

var $export = __webpack_require__(0);

var redefine = __webpack_require__(15);

var hide = __webpack_require__(18);

var Iterators = __webpack_require__(48);

var $iterCreate = __webpack_require__(115);

var setToStringTag = __webpack_require__(46);

var getPrototypeOf = __webpack_require__(42);

var ITERATOR = __webpack_require__(7)('iterator');

var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`

var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function returnThis() {
  return this;
};

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);

  var getMethod = function getMethod(kind) {
    if (!BUGGY && kind in proto) return proto[kind];

    switch (kind) {
      case KEYS:
        return function keys() {
          return new Constructor(this, kind);
        };

      case VALUES:
        return function values() {
          return new Constructor(this, kind);
        };
    }

    return function entries() {
      return new Constructor(this, kind);
    };
  };

  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype; // Fix native

  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));

    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true); // fix for some old engines

      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  } // fix Array#{values, @@iterator}.name in V8 / FF


  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;

    $default = function values() {
      return $native.call(this);
    };
  } // Define iterator


  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  } // Plug for library


  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;

  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }

  return methods;
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(85);

var defined = __webpack_require__(30);

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(6);

var cof = __webpack_require__(29);

var MATCH = __webpack_require__(7)('match');

module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__(7)('match');

module.exports = function (KEY) {
  var re = /./;

  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) {
      /* empty */
    }
  }

  return true;
};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(48);

var ITERATOR = __webpack_require__(7)('iterator');

var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $defineProperty = __webpack_require__(12);

var createDesc = __webpack_require__(35);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));else object[index] = value;
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(56);

var ITERATOR = __webpack_require__(7)('iterator');

var Iterators = __webpack_require__(48);

module.exports = __webpack_require__(10).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)


var toObject = __webpack_require__(14);

var toAbsoluteIndex = __webpack_require__(39);

var toLength = __webpack_require__(8);

module.exports = function fill(value
/* , start = 0, end = @length */
) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);

  while (endPos > index) {
    O[index++] = value;
  }

  return O;
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var addToUnscopables = __webpack_require__(43);

var step = __webpack_require__(120);

var Iterators = __webpack_require__(48);

var toIObject = __webpack_require__(19); // 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()


module.exports = __webpack_require__(83)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target

  this._i = 0; // next index

  this._k = kind; // kind
  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;

  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }

  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values'); // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)

Iterators.Arguments = Iterators.Array;
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__(64);

var nativeExec = RegExp.prototype.exec; // This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.

var nativeReplace = String.prototype.replace;
var patchedExec = nativeExec;
var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
}(); // nonparticipating capturing group, copied from es5-shim's String#split patch.


var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }

    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];
    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }

    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var at = __webpack_require__(82)(true); // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex


module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(22);

var invoke = __webpack_require__(109);

var html = __webpack_require__(75);

var cel = __webpack_require__(71);

var global = __webpack_require__(3);

var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function run() {
  var id = +this; // eslint-disable-next-line no-prototype-builtins

  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var listener = function listener(event) {
  run.call(event.data);
}; // Node.js 0.9+ & IE10+ has setImmediate, otherwise:


if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;

    while (arguments.length > i) {
      args.push(arguments[i++]);
    }

    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };

    defer(counter);
    return counter;
  };

  clearTask = function clearImmediate(id) {
    delete queue[id];
  }; // Node.js 0.8-


  if (__webpack_require__(29)(process) == 'process') {
    defer = function defer(id) {
      process.nextTick(ctx(run, id, 1));
    }; // Sphere (JS game engine) Dispatch API

  } else if (Dispatch && Dispatch.now) {
    defer = function defer(id) {
      Dispatch.now(ctx(run, id, 1));
    }; // Browsers with MessageChannel, includes WebWorkers

  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1); // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function defer(id) {
      global.postMessage(id + '', '*');
    };

    global.addEventListener('message', listener, false); // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function defer(id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    }; // Rest old browsers

  } else {
    defer = function defer(id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}

module.exports = {
  set: setTask,
  clear: clearTask
};

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(3);

var DESCRIPTORS = __webpack_require__(11);

var LIBRARY = __webpack_require__(37);

var $typed = __webpack_require__(70);

var hide = __webpack_require__(18);

var redefineAll = __webpack_require__(51);

var fails = __webpack_require__(4);

var anInstance = __webpack_require__(50);

var toInteger = __webpack_require__(24);

var toLength = __webpack_require__(8);

var toIndex = __webpack_require__(128);

var gOPN = __webpack_require__(41).f;

var dP = __webpack_require__(12).f;

var arrayFill = __webpack_require__(90);

var setToStringTag = __webpack_require__(46);

var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length!';
var WRONG_INDEX = 'Wrong index!';
var $ArrayBuffer = global[ARRAY_BUFFER];
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError; // eslint-disable-next-line no-shadow-restricted-names

var Infinity = global.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = 'buffer';
var BYTE_LENGTH = 'byteLength';
var BYTE_OFFSET = 'byteOffset';
var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET; // IEEE754 conversions based on https://github.com/feross/ieee754

function packIEEE754(value, mLen, nBytes) {
  var buffer = new Array(nBytes);
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var i = 0;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  var e, m, c;
  value = abs(value); // eslint-disable-next-line no-self-compare

  if (value != value || value === Infinity) {
    // eslint-disable-next-line no-self-compare
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);

    if (value * (c = pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }

    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }

    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8) {
    ;
  }

  e = e << mLen | m;
  eLen += mLen;

  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8) {
    ;
  }

  buffer[--i] |= s * 128;
  return buffer;
}

function unpackIEEE754(buffer, mLen, nBytes) {
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = eLen - 7;
  var i = nBytes - 1;
  var s = buffer[i--];
  var e = s & 127;
  var m;
  s >>= 7;

  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8) {
    ;
  }

  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;

  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8) {
    ;
  }

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  }

  return (s ? -1 : 1) * m * pow(2, e - mLen);
}

function unpackI32(bytes) {
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}

function packI8(it) {
  return [it & 0xff];
}

function packI16(it) {
  return [it & 0xff, it >> 8 & 0xff];
}

function packI32(it) {
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
}

function packF64(it) {
  return packIEEE754(it, 52, 8);
}

function packF32(it) {
  return packIEEE754(it, 23, 4);
}

function addGetter(C, key, internal) {
  dP(C[PROTOTYPE], key, {
    get: function get() {
      return this[internal];
    }
  });
}

function get(view, bytes, index, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
}

function set(view, bytes, index, conversion, value, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = conversion(+value);

  for (var i = 0; i < bytes; i++) {
    store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
  }
}

if (!$typed.ABV) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    this._b = arrayFill.call(new Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH];
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset
    /* , littleEndian */
    ) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset
    /* , littleEndian */
    ) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset
    /* , littleEndian */
    ) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset
    /* , littleEndian */
    ) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset
    /* , littleEndian */
    ) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset
    /* , littleEndian */
    ) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value
    /* , littleEndian */
    ) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value
    /* , littleEndian */
    ) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value
    /* , littleEndian */
    ) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value
    /* , littleEndian */
    ) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value
    /* , littleEndian */
    ) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value
    /* , littleEndian */
    ) {
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if (!fails(function () {
    $ArrayBuffer(1);
  }) || !fails(function () {
    new $ArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new $ArrayBuffer(); // eslint-disable-line no-new

    new $ArrayBuffer(1.5); // eslint-disable-line no-new

    new $ArrayBuffer(NaN); // eslint-disable-line no-new

    return $ArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new BaseBuffer(toIndex(length));
    };

    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];

    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
    }

    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
  } // iOS Safari 7.x bug


  var view = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}

setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;

/***/ }),
/* 96 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self // eslint-disable-next-line no-new-func
: Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ }),
/* 97 */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function (it) {
  return _typeof(it) === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(133)(function () {
  return Object.defineProperty({}, 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return solve; });
/* harmony import */ var _dc_lu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var _dc_qr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58);
/* harmony import */ var _dc_svd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28);
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);





function inverse(matrix) {
  var useSVD = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  matrix = _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].checkMatrix(matrix);

  if (useSVD) {
    return new _dc_svd__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"](matrix).inverse();
  } else {
    return solve(matrix, _matrix__WEBPACK_IMPORTED_MODULE_3__[/* default */ "b"].eye(matrix.rows));
  }
}
function solve(leftHandSide, rightHandSide) {
  var useSVD = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  leftHandSide = _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].checkMatrix(leftHandSide);
  rightHandSide = _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].checkMatrix(rightHandSide);

  if (useSVD) {
    return new _dc_svd__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"](leftHandSide).solve(rightHandSide);
  } else {
    return leftHandSide.isSquare() ? new _dc_lu__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"](leftHandSide).solve(rightHandSide) : new _dc_qr__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"](leftHandSide).solve(rightHandSide);
  }
}

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = __webpack_require__(53),
    Matrix = _require.Matrix,
    MatrixTransposeView = _require.MatrixTransposeView;

var GaussianKernel = __webpack_require__(326);

var PolynomialKernel = __webpack_require__(327);

var SigmoidKernel = __webpack_require__(328);

var ANOVAKernel = __webpack_require__(329);

var CauchyKernel = __webpack_require__(330);

var ExponentialKernel = __webpack_require__(331);

var HistogramKernel = __webpack_require__(332);

var LaplacianKernel = __webpack_require__(333);

var MultiquadraticKernel = __webpack_require__(334);

var RationalKernel = __webpack_require__(335);

var kernelType = {
  gaussian: GaussianKernel,
  rbf: GaussianKernel,
  polynomial: PolynomialKernel,
  poly: PolynomialKernel,
  anova: ANOVAKernel,
  cauchy: CauchyKernel,
  exponential: ExponentialKernel,
  histogram: HistogramKernel,
  min: HistogramKernel,
  laplacian: LaplacianKernel,
  multiquadratic: MultiquadraticKernel,
  rational: RationalKernel,
  sigmoid: SigmoidKernel,
  mlp: SigmoidKernel
};

var Kernel =
/*#__PURE__*/
function () {
  function Kernel(type, options) {
    _classCallCheck(this, Kernel);

    this.kernelType = type;
    if (type === 'linear') return;

    if (typeof type === 'string') {
      type = type.toLowerCase();
      var KernelConstructor = kernelType[type];

      if (KernelConstructor) {
        this.kernelFunction = new KernelConstructor(options);
      } else {
        throw new Error("unsupported kernel type: ".concat(type));
      }
    } else if (_typeof(type) === 'object' && typeof type.compute === 'function') {
      this.kernelFunction = type;
    } else {
      throw new TypeError('first argument must be a valid kernel type or instance');
    }
  }

  _createClass(Kernel, [{
    key: "compute",
    value: function compute(inputs, landmarks) {
      inputs = Matrix.checkMatrix(inputs);

      if (landmarks === undefined) {
        landmarks = inputs;
      } else {
        landmarks = Matrix.checkMatrix(landmarks);
      }

      if (this.kernelType === 'linear') {
        return inputs.mmul(new MatrixTransposeView(landmarks));
      }

      var kernelMatrix = new Matrix(inputs.rows, landmarks.rows);

      if (inputs === landmarks) {
        // fast path, matrix is symmetric
        for (var i = 0; i < inputs.rows; i++) {
          for (var j = i; j < inputs.rows; j++) {
            var value = this.kernelFunction.compute(inputs.getRow(i), inputs.getRow(j));
            kernelMatrix.set(i, j, value);
            kernelMatrix.set(j, i, value);
          }
        }
      } else {
        for (var _i = 0; _i < inputs.rows; _i++) {
          for (var _j = 0; _j < landmarks.rows; _j++) {
            kernelMatrix.set(_i, _j, this.kernelFunction.compute(inputs.getRow(_i), landmarks.getRow(_j)));
          }
        }
      }

      return kernelMatrix;
    }
  }]);

  return Kernel;
}();

module.exports = Kernel;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(11) && !__webpack_require__(4)(function () {
  return Object.defineProperty(__webpack_require__(71)('div'), 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);

var core = __webpack_require__(10);

var LIBRARY = __webpack_require__(37);

var wksExt = __webpack_require__(72);

var defineProperty = __webpack_require__(12).f;

module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, {
    value: wksExt.f(name)
  });
};

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(17);

var toIObject = __webpack_require__(19);

var arrayIndexOf = __webpack_require__(60)(false);

var IE_PROTO = __webpack_require__(73)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) {
    if (key != IE_PROTO) has(O, key) && result.push(key);
  } // Don't enum bug & hidden keys


  while (names.length > i) {
    if (has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
  }

  return result;
};

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(12);

var anObject = __webpack_require__(5);

var getKeys = __webpack_require__(38);

module.exports = __webpack_require__(11) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;

  while (length > i) {
    dP.f(O, P = keys[i++], Properties[P]);
  }

  return O;
};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(19);

var gOPN = __webpack_require__(41).f;

var toString = {}.toString;
var windowNames = (typeof window === "undefined" ? "undefined" : _typeof(window)) == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function getWindowNames(it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 19.1.2.1 Object.assign(target, source, ...)

var DESCRIPTORS = __webpack_require__(11);

var getKeys = __webpack_require__(38);

var gOPS = __webpack_require__(61);

var pIE = __webpack_require__(55);

var toObject = __webpack_require__(14);

var IObject = __webpack_require__(54);

var $assign = Object.assign; // should work with symbols and should have deterministic property order (V8 bug)

module.exports = !$assign || __webpack_require__(4)(function () {
  var A = {};
  var B = {}; // eslint-disable-next-line no-undef

  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) {
    B[k] = k;
  });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) {
  // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;

  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;

    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  }

  return T;
} : $assign;

/***/ }),
/* 107 */
/***/ (function(module, exports) {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var aFunction = __webpack_require__(23);

var isObject = __webpack_require__(6);

var invoke = __webpack_require__(109);

var arraySlice = [].slice;
var factories = {};

var construct = function construct(F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) {
      n[i] = 'a[' + i + ']';
    } // eslint-disable-next-line no-new-func


    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  }

  return factories[len](F, args);
};

module.exports = Function.bind || function bind(that
/* , ...args */
) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);

  var bound = function bound()
  /* args... */
  {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };

  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};

/***/ }),
/* 109 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;

  switch (args.length) {
    case 0:
      return un ? fn() : fn.call(that);

    case 1:
      return un ? fn(args[0]) : fn.call(that, args[0]);

    case 2:
      return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);

    case 3:
      return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);

    case 4:
      return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
  }

  return fn.apply(that, args);
};

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var $parseInt = __webpack_require__(3).parseInt;

var $trim = __webpack_require__(47).trim;

var ws = __webpack_require__(77);

var hex = /^[-+]?0[xX]/;
module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, radix >>> 0 || (hex.test(string) ? 16 : 10));
} : $parseInt;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var $parseFloat = __webpack_require__(3).parseFloat;

var $trim = __webpack_require__(47).trim;

module.exports = 1 / $parseFloat(__webpack_require__(77) + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var cof = __webpack_require__(29);

module.exports = function (it, msg) {
  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
  return +it;
};

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(6);

var floor = Math.floor;

module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};

/***/ }),
/* 114 */
/***/ (function(module, exports) {

// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var create = __webpack_require__(40);

var descriptor = __webpack_require__(35);

var setToStringTag = __webpack_require__(46);

var IteratorPrototype = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()

__webpack_require__(18)(IteratorPrototype, __webpack_require__(7)('iterator'), function () {
  return this;
});

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, {
    next: descriptor(1, next)
  });
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(5);

module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value); // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(233);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(23);

var toObject = __webpack_require__(14);

var IObject = __webpack_require__(54);

var toLength = __webpack_require__(8);

module.exports = function (that, callbackfn, aLen, memo, isRight) {
  aFunction(callbackfn);
  var O = toObject(that);
  var self = IObject(O);
  var length = toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }

    index += i;

    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }

  for (; isRight ? index >= 0 : length > index; index += i) {
    if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
  }

  return memo;
};

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)


var toObject = __webpack_require__(14);

var toAbsoluteIndex = __webpack_require__(39);

var toLength = __webpack_require__(8);

module.exports = [].copyWithin || function copyWithin(target
/* = 0 */
, start
/* = 0, end = @length */
) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;

  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }

  while (count-- > 0) {
    if (from in O) O[to] = O[from];else delete O[to];
    to += inc;
    from += inc;
  }

  return O;
};

/***/ }),
/* 120 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return {
    value: value,
    done: !!done
  };
};

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpExec = __webpack_require__(92);

__webpack_require__(0)({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(11) && /./g.flags != 'g') __webpack_require__(12).f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(64)
});

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LIBRARY = __webpack_require__(37);

var global = __webpack_require__(3);

var ctx = __webpack_require__(22);

var classof = __webpack_require__(56);

var $export = __webpack_require__(0);

var isObject = __webpack_require__(6);

var aFunction = __webpack_require__(23);

var anInstance = __webpack_require__(50);

var forOf = __webpack_require__(67);

var speciesConstructor = __webpack_require__(57);

var task = __webpack_require__(94).set;

var microtask = __webpack_require__(253)();

var newPromiseCapabilityModule = __webpack_require__(124);

var perform = __webpack_require__(254);

var userAgent = __webpack_require__(68);

var promiseResolve = __webpack_require__(125);

var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';

var empty = function empty() {
  /* empty */
};

var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;
var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);

    var FakePromise = (promise.constructor = {})[__webpack_require__(7)('species')] = function (exec) {
      exec(empty, empty);
    }; // unhandled rejections tracking support, NodeJS Promise without it fails @@species test


    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // we can't detect it synchronously, so just check versions
    && v8.indexOf('6.6') !== 0 && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) {
    /* empty */
  }
}(); // helpers

var isThenable = function isThenable(it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function notify(promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;

    var run = function run(reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;

      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }

          if (handler === true) result = value;else {
            if (domain) domain.enter();
            result = handler(value); // may throw

            if (domain) {
              domain.exit();
              exited = true;
            }
          }

          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };

    while (chain.length > i) {
      run(chain[i++]);
    } // variable length - can't use forEach


    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};

var onUnhandled = function onUnhandled(promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;

    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({
            promise: promise,
            reason: value
          });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      }); // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should

      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    }

    promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};

var isUnhandled = function isUnhandled(promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};

var onHandleUnhandled = function onHandleUnhandled(promise) {
  task.call(global, function () {
    var handler;

    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({
        promise: promise,
        reason: promise._v
      });
    }
  });
};

var $reject = function $reject(value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap

  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};

var $resolve = function $resolve(value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap

  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");

    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = {
          _w: promise,
          _d: false
        }; // wrap

        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({
      _w: promise,
      _d: false
    }, e); // wrap
  }
}; // constructor polyfill


if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);

    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  }; // eslint-disable-next-line no-unused-vars


  Internal = function Promise(executor) {
    this._c = []; // <- awaiting reactions

    this._a = undefined; // <- checked in isUnhandled reactions

    this._s = 0; // <- state

    this._d = false; // <- done

    this._v = undefined; // <- value

    this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled

    this._n = false; // <- notify
  };

  Internal.prototype = __webpack_require__(51)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;

      this._c.push(reaction);

      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function _catch(onRejected) {
      return this.then(undefined, onRejected);
    }
  });

  OwnPromiseCapability = function OwnPromiseCapability() {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };

  newPromiseCapabilityModule.f = newPromiseCapability = function newPromiseCapability(C) {
    return C === $Promise || C === Wrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {
  Promise: $Promise
});

__webpack_require__(46)($Promise, PROMISE);

__webpack_require__(49)(PROMISE);

Wrapper = __webpack_require__(10)[PROMISE]; // statics

$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(63)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 25.4.1.5 NewPromiseCapability(C)

var aFunction = __webpack_require__(23);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(5);

var isObject = __webpack_require__(6);

var newPromiseCapability = __webpack_require__(124);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dP = __webpack_require__(12).f;

var create = __webpack_require__(40);

var redefineAll = __webpack_require__(51);

var ctx = __webpack_require__(22);

var anInstance = __webpack_require__(50);

var forOf = __webpack_require__(67);

var $iterDefine = __webpack_require__(83);

var step = __webpack_require__(120);

var setSpecies = __webpack_require__(49);

var DESCRIPTORS = __webpack_require__(11);

var fastKey = __webpack_require__(34).fastKey;

var validate = __webpack_require__(44);

var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function getEntry(that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index]; // frozen object case

  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME; // collection type

      that._i = create(null); // index

      that._f = undefined; // first entry

      that._l = undefined; // last entry

      that[SIZE] = 0; // size

      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }

        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function _delete(key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);

        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        }

        return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn
      /* , that = undefined */
      ) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;

        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this); // revert to the last existing entry

          while (entry && entry.r) {
            entry = entry.p;
          }
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function get() {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function def(that, key, value) {
    var entry = getEntry(that, key);
    var prev, index; // change existing entry

    if (entry) {
      entry.v = value; // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true),
        // <- index
        k: key,
        // <- key
        v: value,
        // <- value
        p: prev = that._l,
        // <- previous entry
        n: undefined,
        // <- next entry
        r: false // <- removed

      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++; // add to index

      if (index !== 'F') that._i[index] = entry;
    }

    return that;
  },
  getEntry: getEntry,
  setStrong: function setStrong(C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target

      this._k = kind; // kind

      this._l = undefined; // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l; // revert to the last existing entry

      while (entry && entry.r) {
        entry = entry.p;
      } // get next entry


      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      } // return step by kind


      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true); // add [@@species], 23.1.2.2, 23.2.2.2

    setSpecies(NAME);
  }
};

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var redefineAll = __webpack_require__(51);

var getWeak = __webpack_require__(34).getWeak;

var anObject = __webpack_require__(5);

var isObject = __webpack_require__(6);

var anInstance = __webpack_require__(50);

var forOf = __webpack_require__(67);

var createArrayMethod = __webpack_require__(27);

var $has = __webpack_require__(17);

var validate = __webpack_require__(44);

var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0; // fallback for uncaught frozen keys

var uncaughtFrozenStore = function uncaughtFrozenStore(that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};

var UncaughtFrozenStore = function UncaughtFrozenStore() {
  this.a = [];
};

var findUncaughtFrozen = function findUncaughtFrozen(store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};

UncaughtFrozenStore.prototype = {
  get: function get(key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function has(key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function set(key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;else this.a.push([key, value]);
  },
  'delete': function _delete(key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};
module.exports = {
  getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME; // collection type

      that._i = id++; // collection id

      that._l = undefined; // leak store for uncaught frozen objects

      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function _delete(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function def(that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/ecma262/#sec-toindex
var toInteger = __webpack_require__(24);

var toLength = __webpack_require__(8);

module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(41);

var gOPS = __webpack_require__(61);

var anObject = __webpack_require__(5);

var Reflect = __webpack_require__(3).Reflect;

module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-string-pad-start-end
var toLength = __webpack_require__(8);

var repeat = __webpack_require__(79);

var defined = __webpack_require__(30);

module.exports = function (that, maxLength, fillString, left) {
  var S = String(defined(that));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(11);

var getKeys = __webpack_require__(38);

var toIObject = __webpack_require__(19);

var isEnum = __webpack_require__(55).f;

module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;

    while (length > i) {
      key = keys[i++];

      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }

    return result;
  };
};

/***/ }),
/* 132 */
/***/ (function(module, exports) {

var core = module.exports = {
  version: '2.6.9'
};
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ }),
/* 133 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatrixTransposeView; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var MatrixTransposeView =
/*#__PURE__*/
function (_BaseView) {
  _inherits(MatrixTransposeView, _BaseView);

  function MatrixTransposeView(matrix) {
    _classCallCheck(this, MatrixTransposeView);

    return _possibleConstructorReturn(this, _getPrototypeOf(MatrixTransposeView).call(this, matrix, matrix.columns, matrix.rows));
  }

  _createClass(MatrixTransposeView, [{
    key: "set",
    value: function set(rowIndex, columnIndex, value) {
      this.matrix.set(columnIndex, rowIndex, value);
      return this;
    }
  }, {
    key: "get",
    value: function get(rowIndex, columnIndex) {
      return this.matrix.get(columnIndex, rowIndex);
    }
  }]);

  return MatrixTransposeView;
}(_base__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);



/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pseudoInverse; });
/* harmony import */ var _dc_svd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


function pseudoInverse(matrix) {
  var threshold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.EPSILON;
  matrix = _matrix__WEBPACK_IMPORTED_MODULE_1__[/* default */ "b"].checkMatrix(matrix);
  var svdSolution = new _dc_svd__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"](matrix, {
    autoTranspose: true
  });
  var U = svdSolution.leftSingularVectors;
  var V = svdSolution.rightSingularVectors;
  var s = svdSolution.diagonal;

  for (var i = 0; i < s.length; i++) {
    if (Math.abs(s[i]) > threshold) {
      s[i] = 1.0 / s[i];
    } else {
      s[i] = 0.0;
    }
  }

  return V.mmul(_matrix__WEBPACK_IMPORTED_MODULE_1__[/* default */ "b"].diag(s).mmul(U.transpose()));
}

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

(function () {
  function a(d) {
    for (var e = 0, f = d.length - 1, g = void 0, h = void 0, i = void 0, j = c(e, f); !0;) {
      if (f <= e) return d[j];
      if (f == e + 1) return d[e] > d[f] && b(d, e, f), d[j];

      for (g = c(e, f), d[g] > d[f] && b(d, g, f), d[e] > d[f] && b(d, e, f), d[g] > d[e] && b(d, g, e), b(d, g, e + 1), h = e + 1, i = f; !0;) {
        do {
          h++;
        } while (d[e] > d[h]);

        do {
          i--;
        } while (d[i] > d[e]);

        if (i < h) break;
        b(d, h, i);
      }

      b(d, e, i), i <= j && (e = h), i >= j && (f = i - 1);
    }
  }

  var b = function b(d, e, f) {
    var _ref;

    return _ref = [d[f], d[e]], d[e] = _ref[0], d[f] = _ref[1], _ref;
  },
      c = function c(d, e) {
    return ~~((d + e) / 2);
  };

   true && module.exports ? module.exports = a : window.median = a;
})();

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {__webpack_require__(139);

function MLRegression() {
  var lib = __webpack_require__(336);

  return lib;
} //Rajas

global.MLRegression = MLRegression;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(138)))

/***/ }),
/* 138 */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(140);

var _global = _interopRequireDefault(__webpack_require__(313));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

if (_global["default"]._babelPolyfill && typeof console !== "undefined" && console.warn) {
  console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended " + "and may have consequences if different versions of the polyfills are applied sequentially. " + "If you do need to load the polyfill more than once, use @babel/polyfill/noConflict " + "instead to bypass the warning.");
}

_global["default"]._babelPolyfill = true;

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(141);

__webpack_require__(284);

__webpack_require__(286);

__webpack_require__(289);

__webpack_require__(291);

__webpack_require__(293);

__webpack_require__(295);

__webpack_require__(297);

__webpack_require__(299);

__webpack_require__(301);

__webpack_require__(303);

__webpack_require__(305);

__webpack_require__(307);

__webpack_require__(311);

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(142);

__webpack_require__(145);

__webpack_require__(146);

__webpack_require__(147);

__webpack_require__(148);

__webpack_require__(149);

__webpack_require__(150);

__webpack_require__(151);

__webpack_require__(152);

__webpack_require__(153);

__webpack_require__(154);

__webpack_require__(155);

__webpack_require__(156);

__webpack_require__(157);

__webpack_require__(158);

__webpack_require__(159);

__webpack_require__(160);

__webpack_require__(161);

__webpack_require__(162);

__webpack_require__(163);

__webpack_require__(164);

__webpack_require__(165);

__webpack_require__(166);

__webpack_require__(167);

__webpack_require__(168);

__webpack_require__(169);

__webpack_require__(170);

__webpack_require__(171);

__webpack_require__(172);

__webpack_require__(173);

__webpack_require__(174);

__webpack_require__(175);

__webpack_require__(176);

__webpack_require__(177);

__webpack_require__(178);

__webpack_require__(179);

__webpack_require__(180);

__webpack_require__(181);

__webpack_require__(182);

__webpack_require__(183);

__webpack_require__(184);

__webpack_require__(185);

__webpack_require__(186);

__webpack_require__(188);

__webpack_require__(189);

__webpack_require__(190);

__webpack_require__(191);

__webpack_require__(192);

__webpack_require__(193);

__webpack_require__(194);

__webpack_require__(195);

__webpack_require__(196);

__webpack_require__(197);

__webpack_require__(198);

__webpack_require__(199);

__webpack_require__(200);

__webpack_require__(201);

__webpack_require__(202);

__webpack_require__(203);

__webpack_require__(204);

__webpack_require__(205);

__webpack_require__(206);

__webpack_require__(207);

__webpack_require__(208);

__webpack_require__(209);

__webpack_require__(210);

__webpack_require__(211);

__webpack_require__(212);

__webpack_require__(213);

__webpack_require__(214);

__webpack_require__(215);

__webpack_require__(216);

__webpack_require__(217);

__webpack_require__(218);

__webpack_require__(219);

__webpack_require__(220);

__webpack_require__(221);

__webpack_require__(223);

__webpack_require__(224);

__webpack_require__(226);

__webpack_require__(227);

__webpack_require__(228);

__webpack_require__(229);

__webpack_require__(230);

__webpack_require__(231);

__webpack_require__(232);

__webpack_require__(234);

__webpack_require__(235);

__webpack_require__(236);

__webpack_require__(237);

__webpack_require__(238);

__webpack_require__(239);

__webpack_require__(240);

__webpack_require__(241);

__webpack_require__(242);

__webpack_require__(243);

__webpack_require__(244);

__webpack_require__(245);

__webpack_require__(246);

__webpack_require__(91);

__webpack_require__(247);

__webpack_require__(121);

__webpack_require__(248);

__webpack_require__(122);

__webpack_require__(249);

__webpack_require__(250);

__webpack_require__(251);

__webpack_require__(252);

__webpack_require__(123);

__webpack_require__(255);

__webpack_require__(256);

__webpack_require__(257);

__webpack_require__(258);

__webpack_require__(259);

__webpack_require__(260);

__webpack_require__(261);

__webpack_require__(262);

__webpack_require__(263);

__webpack_require__(264);

__webpack_require__(265);

__webpack_require__(266);

__webpack_require__(267);

__webpack_require__(268);

__webpack_require__(269);

__webpack_require__(270);

__webpack_require__(271);

__webpack_require__(272);

__webpack_require__(273);

__webpack_require__(274);

__webpack_require__(275);

__webpack_require__(276);

__webpack_require__(277);

__webpack_require__(278);

__webpack_require__(279);

__webpack_require__(280);

__webpack_require__(281);

__webpack_require__(282);

__webpack_require__(283);

module.exports = __webpack_require__(10);

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // ECMAScript 6 symbols shim

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var global = __webpack_require__(3);

var has = __webpack_require__(17);

var DESCRIPTORS = __webpack_require__(11);

var $export = __webpack_require__(0);

var redefine = __webpack_require__(15);

var META = __webpack_require__(34).KEY;

var $fails = __webpack_require__(4);

var shared = __webpack_require__(59);

var setToStringTag = __webpack_require__(46);

var uid = __webpack_require__(36);

var wks = __webpack_require__(7);

var wksExt = __webpack_require__(72);

var wksDefine = __webpack_require__(102);

var enumKeys = __webpack_require__(144);

var isArray = __webpack_require__(62);

var anObject = __webpack_require__(5);

var isObject = __webpack_require__(6);

var toObject = __webpack_require__(14);

var toIObject = __webpack_require__(19);

var toPrimitive = __webpack_require__(33);

var createDesc = __webpack_require__(35);

var _create = __webpack_require__(40);

var gOPNExt = __webpack_require__(105);

var $GOPD = __webpack_require__(25);

var $GOPS = __webpack_require__(61);

var $DP = __webpack_require__(12);

var $keys = __webpack_require__(38);

var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;

var _stringify = $JSON && $JSON.stringify;

var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject; // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173

var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687

var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function get() {
      return dP(this, 'a', {
        value: 7
      }).a;
    }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function wrap(tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);

  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && _typeof($Symbol.iterator) == 'symbol' ? function (it) {
  return _typeof(it) == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);

  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, {
        enumerable: createDesc(0, false)
      });
    }

    return setSymbolDesc(it, key, D);
  }

  return dP(it, key, D);
};

var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;

  while (l > i) {
    $defineProperty(it, key = keys[i++], P[key]);
  }

  return it;
};

var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};

var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};

var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;

  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  }

  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;

  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  }

  return result;
}; // 19.4.1.1 Symbol([description])


if (!USE_NATIVE) {
  $Symbol = function _Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);

    var $set = function $set(value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };

    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, {
      configurable: true,
      set: $set
    });
    return wrap(tag);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });
  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(41).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(55).f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(37)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {
  Symbol: $Symbol
});

for (var es6Symbols = // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j = 0; es6Symbols.length > j;) {
  wks(es6Symbols[j++]);
}

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) {
  wksDefine(wellKnownSymbols[k++]);
}

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function _for(key) {
    return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');

    for (var key in SymbolRegistry) {
      if (SymbolRegistry[key] === sym) return key;
    }
  },
  useSetter: function useSetter() {
    setter = true;
  },
  useSimple: function useSimple() {
    setter = false;
  }
});
$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
}); // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443

var FAILS_ON_PRIMITIVES = $fails(function () {
  $GOPS.f(1);
});
$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
}); // 24.3.2 JSON.stringify(value [, replacer [, space]])

$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol(); // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols

  return _stringify([S]) != '[null]' || _stringify({
    a: S
  }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;

    while (arguments.length > i) {
      args.push(arguments[i++]);
    }

    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined

    if (!isArray(replacer)) replacer = function replacer(key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
}); // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)

$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(18)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf); // 19.4.3.5 Symbol.prototype[@@toStringTag]

setToStringTag($Symbol, 'Symbol'); // 20.2.1.9 Math[@@toStringTag]

setToStringTag(Math, 'Math', true); // 24.3.3 JSON[@@toStringTag]

setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(59)('native-function-to-string', Function.toString);

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(38);

var gOPS = __webpack_require__(61);

var pIE = __webpack_require__(55);

module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;

  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;

    while (symbols.length > i) {
      if (isEnum.call(it, key = symbols[i++])) result.push(key);
    }
  }

  return result;
};

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0); // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])


$export($export.S, 'Object', {
  create: __webpack_require__(40)
});

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0); // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)


$export($export.S + $export.F * !__webpack_require__(11), 'Object', {
  defineProperty: __webpack_require__(12).f
});

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0); // 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)


$export($export.S + $export.F * !__webpack_require__(11), 'Object', {
  defineProperties: __webpack_require__(104)
});

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(19);

var $getOwnPropertyDescriptor = __webpack_require__(25).f;

__webpack_require__(26)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(14);

var $getPrototypeOf = __webpack_require__(42);

__webpack_require__(26)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(14);

var $keys = __webpack_require__(38);

__webpack_require__(26)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(26)('getOwnPropertyNames', function () {
  return __webpack_require__(105).f;
});

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(6);

var meta = __webpack_require__(34).onFreeze;

__webpack_require__(26)('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.17 Object.seal(O)
var isObject = __webpack_require__(6);

var meta = __webpack_require__(34).onFreeze;

__webpack_require__(26)('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.15 Object.preventExtensions(O)
var isObject = __webpack_require__(6);

var meta = __webpack_require__(34).onFreeze;

__webpack_require__(26)('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.12 Object.isFrozen(O)
var isObject = __webpack_require__(6);

__webpack_require__(26)('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.13 Object.isSealed(O)
var isObject = __webpack_require__(6);

__webpack_require__(26)('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.11 Object.isExtensible(O)
var isObject = __webpack_require__(6);

__webpack_require__(26)('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(0);

$export($export.S + $export.F, 'Object', {
  assign: __webpack_require__(106)
});

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.10 Object.is(value1, value2)
var $export = __webpack_require__(0);

$export($export.S, 'Object', {
  is: __webpack_require__(107)
});

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(0);

$export($export.S, 'Object', {
  setPrototypeOf: __webpack_require__(76).set
});

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 19.1.3.6 Object.prototype.toString()

var classof = __webpack_require__(56);

var test = {};
test[__webpack_require__(7)('toStringTag')] = 'z';

if (test + '' != '[object z]') {
  __webpack_require__(15)(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = __webpack_require__(0);

$export($export.P, 'Function', {
  bind: __webpack_require__(108)
});

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(12).f;

var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name'; // 19.2.4.2 name

NAME in FProto || __webpack_require__(11) && dP(FProto, NAME, {
  configurable: true,
  get: function get() {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(6);

var getPrototypeOf = __webpack_require__(42);

var HAS_INSTANCE = __webpack_require__(7)('hasInstance');

var FunctionProto = Function.prototype; // 19.2.3.6 Function.prototype[@@hasInstance](V)

if (!(HAS_INSTANCE in FunctionProto)) __webpack_require__(12).f(FunctionProto, HAS_INSTANCE, {
  value: function value(O) {
    if (typeof this != 'function' || !isObject(O)) return false;
    if (!isObject(this.prototype)) return O instanceof this; // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:

    while (O = getPrototypeOf(O)) {
      if (this.prototype === O) return true;
    }

    return false;
  }
});

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);

var $parseInt = __webpack_require__(110); // 18.2.5 parseInt(string, radix)


$export($export.G + $export.F * (parseInt != $parseInt), {
  parseInt: $parseInt
});

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);

var $parseFloat = __webpack_require__(111); // 18.2.4 parseFloat(string)


$export($export.G + $export.F * (parseFloat != $parseFloat), {
  parseFloat: $parseFloat
});

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(3);

var has = __webpack_require__(17);

var cof = __webpack_require__(29);

var inheritIfRequired = __webpack_require__(78);

var toPrimitive = __webpack_require__(33);

var fails = __webpack_require__(4);

var gOPN = __webpack_require__(41).f;

var gOPD = __webpack_require__(25).f;

var dP = __webpack_require__(12).f;

var $trim = __webpack_require__(47).trim;

var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype; // Opera ~12 has broken Object#toString

var BROKEN_COF = cof(__webpack_require__(40)(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype; // 7.1.3 ToNumber(argument)

var toNumber = function toNumber(argument) {
  var it = toPrimitive(argument, false);

  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;

    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66:
        case 98:
          radix = 2;
          maxCode = 49;
          break;
        // fast equal /^0b[01]+$/i

        case 79:
        case 111:
          radix = 8;
          maxCode = 55;
          break;
        // fast equal /^0o[0-7]+$/i

        default:
          return +it;
      }

      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i); // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols

        if (code < 48 || code > maxCode) return NaN;
      }

      return parseInt(digits, radix);
    }
  }

  return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number // check on 1..constructor(foo) case
    && (BROKEN_COF ? fails(function () {
      proto.valueOf.call(that);
    }) : cof(that) != NUMBER) ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };

  for (var keys = __webpack_require__(11) ? gOPN(Base) : ( // ES3:
  'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' + // ES6 (in case, if modules with ES6 Number statics required before):
  'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' + 'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger').split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }

  $Number.prototype = proto;
  proto.constructor = $Number;

  __webpack_require__(15)(global, NUMBER, $Number);
}

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);

var toInteger = __webpack_require__(24);

var aNumberValue = __webpack_require__(112);

var repeat = __webpack_require__(79);

var $toFixed = 1.0.toFixed;
var floor = Math.floor;
var data = [0, 0, 0, 0, 0, 0];
var ERROR = 'Number.toFixed: incorrect invocation!';
var ZERO = '0';

var multiply = function multiply(n, c) {
  var i = -1;
  var c2 = c;

  while (++i < 6) {
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};

var divide = function divide(n) {
  var i = 6;
  var c = 0;

  while (--i >= 0) {
    c += data[i];
    data[i] = floor(c / n);
    c = c % n * 1e7;
  }
};

var numToString = function numToString() {
  var i = 6;
  var s = '';

  while (--i >= 0) {
    if (s !== '' || i === 0 || data[i] !== 0) {
      var t = String(data[i]);
      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
  }

  return s;
};

var pow = function pow(x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};

var log = function log(x) {
  var n = 0;
  var x2 = x;

  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }

  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  }

  return n;
};

$export($export.P + $export.F * (!!$toFixed && (0.00008.toFixed(3) !== '0.000' || 0.9.toFixed(0) !== '1' || 1.255.toFixed(2) !== '1.25' || 1000000000000000128.0.toFixed(0) !== '1000000000000000128') || !__webpack_require__(4)(function () {
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits) {
    var x = aNumberValue(this, ERROR);
    var f = toInteger(fractionDigits);
    var s = '';
    var m = ZERO;
    var e, z, j, k;
    if (f < 0 || f > 20) throw RangeError(ERROR); // eslint-disable-next-line no-self-compare

    if (x != x) return 'NaN';
    if (x <= -1e21 || x >= 1e21) return String(x);

    if (x < 0) {
      s = '-';
      x = -x;
    }

    if (x > 1e-21) {
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;

      if (e > 0) {
        multiply(0, z);
        j = f;

        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }

        multiply(pow(10, j, 1), 0);
        j = e - 1;

        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }

        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + repeat.call(ZERO, f);
      }
    }

    if (f > 0) {
      k = m.length;
      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    }

    return m;
  }
});

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);

var $fails = __webpack_require__(4);

var aNumberValue = __webpack_require__(112);

var $toPrecision = 1.0.toPrecision;
$export($export.P + $export.F * ($fails(function () {
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !$fails(function () {
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision) {
    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
  }
});

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.1 Number.EPSILON
var $export = __webpack_require__(0);

$export($export.S, 'Number', {
  EPSILON: Math.pow(2, -52)
});

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.2 Number.isFinite(number)
var $export = __webpack_require__(0);

var _isFinite = __webpack_require__(3).isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(0);

$export($export.S, 'Number', {
  isInteger: __webpack_require__(113)
});

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(0);

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.5 Number.isSafeInteger(number)
var $export = __webpack_require__(0);

var isInteger = __webpack_require__(113);

var abs = Math.abs;
$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = __webpack_require__(0);

$export($export.S, 'Number', {
  MAX_SAFE_INTEGER: 0x1fffffffffffff
});

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = __webpack_require__(0);

$export($export.S, 'Number', {
  MIN_SAFE_INTEGER: -0x1fffffffffffff
});

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);

var $parseFloat = __webpack_require__(111); // 20.1.2.12 Number.parseFloat(string)


$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', {
  parseFloat: $parseFloat
});

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);

var $parseInt = __webpack_require__(110); // 20.1.2.13 Number.parseInt(string, radix)


$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', {
  parseInt: $parseInt
});

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.3 Math.acosh(x)
var $export = __webpack_require__(0);

var log1p = __webpack_require__(114);

var sqrt = Math.sqrt;
var $acosh = Math.acosh;
$export($export.S + $export.F * !($acosh // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
&& Math.floor($acosh(Number.MAX_VALUE)) == 710 // Tor Browser bug: Math.acosh(Infinity) -> NaN
&& $acosh(Infinity) == Infinity), 'Math', {
  acosh: function acosh(x) {
    return (x = +x) < 1 ? NaN : x > 94906265.62425156 ? Math.log(x) + Math.LN2 : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.5 Math.asinh(x)
var $export = __webpack_require__(0);

var $asinh = Math.asinh;

function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
} // Tor Browser bug: Math.asinh(0) -> -0


$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {
  asinh: asinh
});

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.7 Math.atanh(x)
var $export = __webpack_require__(0);

var $atanh = Math.atanh; // Tor Browser bug: Math.atanh(-0) -> 0

$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x) {
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.9 Math.cbrt(x)
var $export = __webpack_require__(0);

var sign = __webpack_require__(80);

$export($export.S, 'Math', {
  cbrt: function cbrt(x) {
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.11 Math.clz32(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  clz32: function clz32(x) {
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.12 Math.cosh(x)
var $export = __webpack_require__(0);

var exp = Math.exp;
$export($export.S, 'Math', {
  cosh: function cosh(x) {
    return (exp(x = +x) + exp(-x)) / 2;
  }
});

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.14 Math.expm1(x)
var $export = __webpack_require__(0);

var $expm1 = __webpack_require__(81);

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', {
  expm1: $expm1
});

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.16 Math.fround(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  fround: __webpack_require__(187)
});

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.16 Math.fround(x)
var sign = __webpack_require__(80);

var pow = Math.pow;
var EPSILON = pow(2, -52);
var EPSILON32 = pow(2, -23);
var MAX32 = pow(2, 127) * (2 - EPSILON32);
var MIN32 = pow(2, -126);

var roundTiesToEven = function roundTiesToEven(n) {
  return n + 1 / EPSILON - 1 / EPSILON;
};

module.exports = Math.fround || function fround(x) {
  var $abs = Math.abs(x);
  var $sign = sign(x);
  var a, result;
  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
  a = (1 + EPSILON32 / EPSILON) * $abs;
  result = a - (a - $abs); // eslint-disable-next-line no-self-compare

  if (result > MAX32 || result != result) return $sign * Infinity;
  return $sign * result;
};

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = __webpack_require__(0);

var abs = Math.abs;
$export($export.S, 'Math', {
  hypot: function hypot(value1, value2) {
    // eslint-disable-line no-unused-vars
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;

    while (i < aLen) {
      arg = abs(arguments[i++]);

      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }

    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.18 Math.imul(x, y)
var $export = __webpack_require__(0);

var $imul = Math.imul; // some WebKit versions fails with big numbers, some has wrong arity

$export($export.S + $export.F * __webpack_require__(4)(function () {
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y) {
    var UINT16 = 0xffff;
    var xn = +x;
    var yn = +y;
    var xl = UINT16 & xn;
    var yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.21 Math.log10(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.20 Math.log1p(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  log1p: __webpack_require__(114)
});

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.22 Math.log2(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.28 Math.sign(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  sign: __webpack_require__(80)
});

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.30 Math.sinh(x)
var $export = __webpack_require__(0);

var expm1 = __webpack_require__(81);

var exp = Math.exp; // V8 near Chromium 38 has a problem with very small numbers

$export($export.S + $export.F * __webpack_require__(4)(function () {
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x) {
    return Math.abs(x = +x) < 1 ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.33 Math.tanh(x)
var $export = __webpack_require__(0);

var expm1 = __webpack_require__(81);

var exp = Math.exp;
$export($export.S, 'Math', {
  tanh: function tanh(x) {
    var a = expm1(x = +x);
    var b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.34 Math.trunc(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);

var toAbsoluteIndex = __webpack_require__(39);

var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint; // length should be 1, old FF problem

$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x) {
    // eslint-disable-line no-unused-vars
    var res = [];
    var aLen = arguments.length;
    var i = 0;
    var code;

    while (aLen > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000 ? fromCharCode(code) : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00));
    }

    return res.join('');
  }
});

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);

var toIObject = __webpack_require__(19);

var toLength = __webpack_require__(8);

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite) {
    var tpl = toIObject(callSite.raw);
    var len = toLength(tpl.length);
    var aLen = arguments.length;
    var res = [];
    var i = 0;

    while (len > i) {
      res.push(String(tpl[i++]));
      if (i < aLen) res.push(String(arguments[i]));
    }

    return res.join('');
  }
});

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 21.1.3.25 String.prototype.trim()

__webpack_require__(47)('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $at = __webpack_require__(82)(true); // 21.1.3.27 String.prototype[@@iterator]()


__webpack_require__(83)(String, 'String', function (iterated) {
  this._t = String(iterated); // target

  this._i = 0; // next index
  // 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return {
    value: undefined,
    done: true
  };
  point = $at(O, index);
  this._i += point.length;
  return {
    value: point,
    done: false
  };
});

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);

var $at = __webpack_require__(82)(false);

$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos) {
    return $at(this, pos);
  }
});

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])


var $export = __webpack_require__(0);

var toLength = __webpack_require__(8);

var context = __webpack_require__(84);

var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];
$export($export.P + $export.F * __webpack_require__(86)(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString
  /* , endPosition = @length */
  ) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith ? $endsWith.call(that, search, end) : that.slice(end - search.length, end) === search;
  }
});

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)


var $export = __webpack_require__(0);

var context = __webpack_require__(84);

var INCLUDES = 'includes';
$export($export.P + $export.F * __webpack_require__(86)(INCLUDES), 'String', {
  includes: function includes(searchString
  /* , position = 0 */
  ) {
    return !!~context(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: __webpack_require__(79)
});

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])


var $export = __webpack_require__(0);

var toLength = __webpack_require__(8);

var context = __webpack_require__(84);

var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];
$export($export.P + $export.F * __webpack_require__(86)(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString
  /* , position = 0 */
  ) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith ? $startsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
  }
});

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // B.2.3.2 String.prototype.anchor(name)

__webpack_require__(16)('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // B.2.3.3 String.prototype.big()

__webpack_require__(16)('big', function (createHTML) {
  return function big() {
    return createHTML(this, 'big', '', '');
  };
});

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // B.2.3.4 String.prototype.blink()

__webpack_require__(16)('blink', function (createHTML) {
  return function blink() {
    return createHTML(this, 'blink', '', '');
  };
});

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // B.2.3.5 String.prototype.bold()

__webpack_require__(16)('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // B.2.3.6 String.prototype.fixed()

__webpack_require__(16)('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // B.2.3.7 String.prototype.fontcolor(color)

__webpack_require__(16)('fontcolor', function (createHTML) {
  return function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  };
});

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // B.2.3.8 String.prototype.fontsize(size)

__webpack_require__(16)('fontsize', function (createHTML) {
  return function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  };
});

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // B.2.3.9 String.prototype.italics()

__webpack_require__(16)('italics', function (createHTML) {
  return function italics() {
    return createHTML(this, 'i', '', '');
  };
});

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // B.2.3.10 String.prototype.link(url)

__webpack_require__(16)('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // B.2.3.11 String.prototype.small()

__webpack_require__(16)('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // B.2.3.12 String.prototype.strike()

__webpack_require__(16)('strike', function (createHTML) {
  return function strike() {
    return createHTML(this, 'strike', '', '');
  };
});

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // B.2.3.13 String.prototype.sub()

__webpack_require__(16)('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // B.2.3.14 String.prototype.sup()

__webpack_require__(16)('sup', function (createHTML) {
  return function sup() {
    return createHTML(this, 'sup', '', '');
  };
});

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__(0);

$export($export.S, 'Date', {
  now: function now() {
    return new Date().getTime();
  }
});

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);

var toObject = __webpack_require__(14);

var toPrimitive = __webpack_require__(33);

$export($export.P + $export.F * __webpack_require__(4)(function () {
  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({
    toISOString: function toISOString() {
      return 1;
    }
  }) !== 1;
}), 'Date', {
  // eslint-disable-next-line no-unused-vars
  toJSON: function toJSON(key) {
    var O = toObject(this);
    var pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export = __webpack_require__(0);

var toISOString = __webpack_require__(222); // PhantomJS / old WebKit has a broken implementations


$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
  toISOString: toISOString
});

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()

var fails = __webpack_require__(4);

var getTime = Date.prototype.getTime;
var $toISOString = Date.prototype.toISOString;

var lz = function lz(num) {
  return num > 9 ? num : '0' + num;
}; // PhantomJS / old WebKit has a broken implementations


module.exports = fails(function () {
  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails(function () {
  $toISOString.call(new Date(NaN));
}) ? function toISOString() {
  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
  var d = this;
  var y = d.getUTCFullYear();
  var m = d.getUTCMilliseconds();
  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) + '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) + 'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) + ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
} : $toISOString;

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;

if (new Date(NaN) + '' != INVALID_DATE) {
  __webpack_require__(15)(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this); // eslint-disable-next-line no-self-compare

    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

var TO_PRIMITIVE = __webpack_require__(7)('toPrimitive');

var proto = Date.prototype;
if (!(TO_PRIMITIVE in proto)) __webpack_require__(18)(proto, TO_PRIMITIVE, __webpack_require__(225));

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(5);

var toPrimitive = __webpack_require__(33);

var NUMBER = 'number';

module.exports = function (hint) {
  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
  return toPrimitive(anObject(this), hint != NUMBER);
};

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(0);

$export($export.S, 'Array', {
  isArray: __webpack_require__(62)
});

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ctx = __webpack_require__(22);

var $export = __webpack_require__(0);

var toObject = __webpack_require__(14);

var call = __webpack_require__(116);

var isArrayIter = __webpack_require__(87);

var toLength = __webpack_require__(8);

var createProperty = __webpack_require__(88);

var getIterFn = __webpack_require__(89);

$export($export.S + $export.F * !__webpack_require__(63)(function (iter) {
  Array.from(iter);
}), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike
  /* , mapfn = undefined, thisArg = undefined */
  ) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2); // if object isn't iterable or it's array with default iterator - use simple case

    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);

      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }

    result.length = index;
    return result;
  }
});

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);

var createProperty = __webpack_require__(88); // WebKit Array.of isn't generic


$export($export.S + $export.F * __webpack_require__(4)(function () {
  function F() {
    /* empty */
  }

  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of()
  /* ...args */
  {
    var index = 0;
    var aLen = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(aLen);

    while (aLen > index) {
      createProperty(result, index, arguments[index++]);
    }

    result.length = aLen;
    return result;
  }
});

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 22.1.3.13 Array.prototype.join(separator)

var $export = __webpack_require__(0);

var toIObject = __webpack_require__(19);

var arrayJoin = [].join; // fallback for not array-like strings

$export($export.P + $export.F * (__webpack_require__(54) != Object || !__webpack_require__(21)(arrayJoin)), 'Array', {
  join: function join(separator) {
    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
  }
});

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);

var html = __webpack_require__(75);

var cof = __webpack_require__(29);

var toAbsoluteIndex = __webpack_require__(39);

var toLength = __webpack_require__(8);

var arraySlice = [].slice; // fallback for not array-like ES3 strings and DOM objects

$export($export.P + $export.F * __webpack_require__(4)(function () {
  if (html) arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end) {
    var len = toLength(this.length);
    var klass = cof(this);
    end = end === undefined ? len : end;
    if (klass == 'Array') return arraySlice.call(this, begin, end);
    var start = toAbsoluteIndex(begin, len);
    var upTo = toAbsoluteIndex(end, len);
    var size = toLength(upTo - start);
    var cloned = new Array(size);
    var i = 0;

    for (; i < size; i++) {
      cloned[i] = klass == 'String' ? this.charAt(start + i) : this[start + i];
    }

    return cloned;
  }
});

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);

var aFunction = __webpack_require__(23);

var toObject = __webpack_require__(14);

var fails = __webpack_require__(4);

var $sort = [].sort;
var test = [1, 2, 3];
$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null); // Old WebKit
}) || !__webpack_require__(21)($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined ? $sort.call(toObject(this)) : $sort.call(toObject(this), aFunction(comparefn));
  }
});

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);

var $forEach = __webpack_require__(27)(0);

var STRICT = __webpack_require__(21)([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn
  /* , thisArg */
  ) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(6);

var isArray = __webpack_require__(62);

var SPECIES = __webpack_require__(7)('species');

module.exports = function (original) {
  var C;

  if (isArray(original)) {
    C = original.constructor; // cross-realm fallback

    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;

    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  }

  return C === undefined ? Array : C;
};

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);

var $map = __webpack_require__(27)(1);

$export($export.P + $export.F * !__webpack_require__(21)([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn
  /* , thisArg */
  ) {
    return $map(this, callbackfn, arguments[1]);
  }
});

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);

var $filter = __webpack_require__(27)(2);

$export($export.P + $export.F * !__webpack_require__(21)([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn
  /* , thisArg */
  ) {
    return $filter(this, callbackfn, arguments[1]);
  }
});

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);

var $some = __webpack_require__(27)(3);

$export($export.P + $export.F * !__webpack_require__(21)([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn
  /* , thisArg */
  ) {
    return $some(this, callbackfn, arguments[1]);
  }
});

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);

var $every = __webpack_require__(27)(4);

$export($export.P + $export.F * !__webpack_require__(21)([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn
  /* , thisArg */
  ) {
    return $every(this, callbackfn, arguments[1]);
  }
});

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);

var $reduce = __webpack_require__(118);

$export($export.P + $export.F * !__webpack_require__(21)([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn
  /* , initialValue */
  ) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);

var $reduce = __webpack_require__(118);

$export($export.P + $export.F * !__webpack_require__(21)([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn
  /* , initialValue */
  ) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);

var $indexOf = __webpack_require__(60)(false);

var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;
$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(21)($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement
  /* , fromIndex = 0 */
  ) {
    return NEGATIVE_ZERO // convert -0 to +0
    ? $native.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments[1]);
  }
});

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);

var toIObject = __webpack_require__(19);

var toInteger = __webpack_require__(24);

var toLength = __webpack_require__(8);

var $native = [].lastIndexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;
$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(21)($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement
  /* , fromIndex = @[*-1] */
  ) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
    var O = toIObject(this);
    var length = toLength(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
    if (index < 0) index = length + index;

    for (; index >= 0; index--) {
      if (index in O) if (O[index] === searchElement) return index || 0;
    }

    return -1;
  }
});

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = __webpack_require__(0);

$export($export.P, 'Array', {
  copyWithin: __webpack_require__(119)
});

__webpack_require__(43)('copyWithin');

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__(0);

$export($export.P, 'Array', {
  fill: __webpack_require__(90)
});

__webpack_require__(43)('fill');

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)

var $export = __webpack_require__(0);

var $find = __webpack_require__(27)(5);

var KEY = 'find';
var forced = true; // Shouldn't skip holes

if (KEY in []) Array(1)[KEY](function () {
  forced = false;
});
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn
  /* , that = undefined */
  ) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(43)(KEY);

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)

var $export = __webpack_require__(0);

var $find = __webpack_require__(27)(6);

var KEY = 'findIndex';
var forced = true; // Shouldn't skip holes

if (KEY in []) Array(1)[KEY](function () {
  forced = false;
});
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn
  /* , that = undefined */
  ) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(43)(KEY);

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(49)('Array');

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);

var inheritIfRequired = __webpack_require__(78);

var dP = __webpack_require__(12).f;

var gOPN = __webpack_require__(41).f;

var isRegExp = __webpack_require__(85);

var $flags = __webpack_require__(64);

var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g; // "new" creates a new object, old webkit buggy here

var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__(11) && (!CORRECT_NEW || __webpack_require__(4)(function () {
  re2[__webpack_require__(7)('match')] = false; // RegExp constructor can alter flags and IsRegExp works correct with @@match

  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p : inheritIfRequired(CORRECT_NEW ? new Base(piRE && !fiU ? p.source : p, f) : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f), tiRE ? this : proto, $RegExp);
  };

  var proxy = function proxy(key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function get() {
        return Base[key];
      },
      set: function set(it) {
        Base[key] = it;
      }
    });
  };

  for (var keys = gOPN(Base), i = 0; keys.length > i;) {
    proxy(keys[i++]);
  }

  proto.constructor = $RegExp;
  $RegExp.prototype = proto;

  __webpack_require__(15)(global, 'RegExp', $RegExp);
}

__webpack_require__(49)('RegExp');

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(122);

var anObject = __webpack_require__(5);

var $flags = __webpack_require__(64);

var DESCRIPTORS = __webpack_require__(11);

var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function define(fn) {
  __webpack_require__(15)(RegExp.prototype, TO_STRING, fn, true);
}; // 21.2.5.14 RegExp.prototype.toString()


if (__webpack_require__(4)(function () {
  return $toString.call({
    source: 'a',
    flags: 'b'
  }) != '/a/b';
})) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/', 'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  }); // FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(5);

var toLength = __webpack_require__(8);

var advanceStringIndex = __webpack_require__(93);

var regExpExec = __webpack_require__(65); // @@match logic


__webpack_require__(66)('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [// `String.prototype.match` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.match
  function match(regexp) {
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, // `RegExp.prototype[@@match]` method
  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
  function (regexp) {
    var res = maybeCallNative($match, regexp, this);
    if (res.done) return res.value;
    var rx = anObject(regexp);
    var S = String(this);
    if (!rx.global) return regExpExec(rx, S);
    var fullUnicode = rx.unicode;
    rx.lastIndex = 0;
    var A = [];
    var n = 0;
    var result;

    while ((result = regExpExec(rx, S)) !== null) {
      var matchStr = String(result[0]);
      A[n] = matchStr;
      if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      n++;
    }

    return n === 0 ? null : A;
  }];
});

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(5);

var toObject = __webpack_require__(14);

var toLength = __webpack_require__(8);

var toInteger = __webpack_require__(24);

var advanceStringIndex = __webpack_require__(93);

var regExpExec = __webpack_require__(65);

var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function maybeToString(it) {
  return it === undefined ? it : String(it);
}; // @@replace logic


__webpack_require__(66)('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [// `String.prototype.replace` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.replace
  function replace(searchValue, replaceValue) {
    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined ? fn.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue);
  }, // `RegExp.prototype[@@replace]` method
  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
  function (regexp, replaceValue) {
    var res = maybeCallNative($replace, regexp, this, replaceValue);
    if (res.done) return res.value;
    var rx = anObject(regexp);
    var S = String(this);
    var functionalReplace = typeof replaceValue === 'function';
    if (!functionalReplace) replaceValue = String(replaceValue);
    var global = rx.global;

    if (global) {
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
    }

    var results = [];

    while (true) {
      var result = regExpExec(rx, S);
      if (result === null) break;
      results.push(result);
      if (!global) break;
      var matchStr = String(result[0]);
      if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
    }

    var accumulatedResult = '';
    var nextSourcePosition = 0;

    for (var i = 0; i < results.length; i++) {
      result = results[i];
      var matched = String(result[0]);
      var position = max(min(toInteger(result.index), S.length), 0);
      var captures = []; // NOTE: This is equivalent to
      //   captures = result.slice(1).map(maybeToString)
      // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
      // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
      // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.

      for (var j = 1; j < result.length; j++) {
        captures.push(maybeToString(result[j]));
      }

      var namedCaptures = result.groups;

      if (functionalReplace) {
        var replacerArgs = [matched].concat(captures, position, S);
        if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
        var replacement = String(replaceValue.apply(undefined, replacerArgs));
      } else {
        replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
      }

      if (position >= nextSourcePosition) {
        accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
        nextSourcePosition = position + matched.length;
      }
    }

    return accumulatedResult + S.slice(nextSourcePosition);
  }]; // https://tc39.github.io/ecma262/#sec-getsubstitution

  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;

    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }

    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;

      switch (ch.charAt(0)) {
        case '$':
          return '$';

        case '&':
          return matched;

        case '`':
          return str.slice(0, position);

        case "'":
          return str.slice(tailPos);

        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;

        default:
          // \d\d?
          var n = +ch;
          if (n === 0) return match;

          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }

          capture = captures[n - 1];
      }

      return capture === undefined ? '' : capture;
    });
  }
});

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(5);

var sameValue = __webpack_require__(107);

var regExpExec = __webpack_require__(65); // @@search logic


__webpack_require__(66)('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
  return [// `String.prototype.search` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.search
  function search(regexp) {
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[SEARCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  }, // `RegExp.prototype[@@search]` method
  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
  function (regexp) {
    var res = maybeCallNative($search, regexp, this);
    if (res.done) return res.value;
    var rx = anObject(regexp);
    var S = String(this);
    var previousLastIndex = rx.lastIndex;
    if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
    var result = regExpExec(rx, S);
    if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
    return result === null ? -1 : result.index;
  }];
});

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__(85);

var anObject = __webpack_require__(5);

var speciesConstructor = __webpack_require__(57);

var advanceStringIndex = __webpack_require__(93);

var toLength = __webpack_require__(8);

var callRegExpExec = __webpack_require__(65);

var regexpExec = __webpack_require__(92);

var fails = __webpack_require__(4);

var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff; // babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError

var SUPPORTS_Y = !fails(function () {
  RegExp(MAX_UINT32, 'y');
}); // @@split logic

__webpack_require__(66)('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;

  if ('abbc'[$SPLIT](/(b)*/)[1] == 'c' || 'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 || 'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 || '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 || '.'[$SPLIT](/()()/)[LENGTH] > 1 || ''[$SPLIT](/.?/)[LENGTH]) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function internalSplit(separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return []; // If `separator` is not a regex, use native split

      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0; // Make `global` and avoid `lastIndex` issues by working with a copy

      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;

      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];

        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }

        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }

      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));

      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    }; // Chakra, V8

  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function internalSplit(separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [// `String.prototype.split` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.split
  function split(separator, limit) {
    var O = defined(this);
    var splitter = separator == undefined ? undefined : separator[SPLIT];
    return splitter !== undefined ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
  }, // `RegExp.prototype[@@split]` method
  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
  //
  // NOTE: This cannot be properly polyfilled in engines that don't support
  // the 'y' flag.
  function (regexp, limit) {
    var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
    if (res.done) return res.value;
    var rx = anObject(regexp);
    var S = String(this);
    var C = speciesConstructor(rx, RegExp);
    var unicodeMatching = rx.unicode;
    var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (SUPPORTS_Y ? 'y' : 'g'); // ^(? + rx + ) is needed, in combination with some S slicing, to
    // simulate the 'y' flag.

    var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
    var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
    if (lim === 0) return [];
    if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
    var p = 0;
    var q = 0;
    var A = [];

    while (q < S.length) {
      splitter.lastIndex = SUPPORTS_Y ? q : 0;
      var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
      var e;

      if (z === null || (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p) {
        q = advanceStringIndex(S, q, unicodeMatching);
      } else {
        A.push(S.slice(p, q));
        if (A.length === lim) return A;

        for (var i = 1; i <= z.length - 1; i++) {
          A.push(z[i]);
          if (A.length === lim) return A;
        }

        q = p = e;
      }
    }

    A.push(S.slice(p));
    return A;
  }];
});

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);

var macrotask = __webpack_require__(94).set;

var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(29)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function flush() {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();

    while (head) {
      fn = head.fn;
      head = head.next;

      try {
        fn();
      } catch (e) {
        if (head) notify();else last = undefined;
        throw e;
      }
    }

    last = undefined;
    if (parent) parent.enter();
  }; // Node.js


  if (isNode) {
    notify = function notify() {
      process.nextTick(flush);
    }; // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339

  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, {
      characterData: true
    }); // eslint-disable-line no-new

    notify = function notify() {
      node.data = toggle = !toggle;
    }; // environments with maybe non-completely correct, but existent Promise

  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);

    notify = function notify() {
      promise.then(flush);
    }; // for other environments - macrotask based on:
    // - setImmediate
    // - MessageChannel
    // - window.postMessag
    // - onreadystatechange
    // - setTimeout

  } else {
    notify = function notify() {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = {
      fn: fn,
      next: undefined
    };
    if (last) last.next = task;

    if (!head) {
      head = task;
      notify();
    }

    last = task;
  };
};

/***/ }),
/* 254 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return {
      e: false,
      v: exec()
    };
  } catch (e) {
    return {
      e: true,
      v: e
    };
  }
};

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var strong = __webpack_require__(126);

var validate = __webpack_require__(44);

var MAP = 'Map'; // 23.1 Map Objects

module.exports = __webpack_require__(69)(MAP, function (get) {
  return function Map() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var strong = __webpack_require__(126);

var validate = __webpack_require__(44);

var SET = 'Set'; // 23.2 Set Objects

module.exports = __webpack_require__(69)(SET, function (get) {
  return function Set() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(3);

var each = __webpack_require__(27)(0);

var redefine = __webpack_require__(15);

var meta = __webpack_require__(34);

var assign = __webpack_require__(106);

var weak = __webpack_require__(127);

var isObject = __webpack_require__(6);

var validate = __webpack_require__(44);

var NATIVE_WEAK_MAP = __webpack_require__(44);

var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var InternalMap;

var wrapper = function wrapper(get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
}; // 23.3 WeakMap Objects

var $WeakMap = module.exports = __webpack_require__(69)(WEAK_MAP, wrapper, methods, weak, true, true); // IE11 WeakMap frozen keys fix


if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();

        var result = this._f[key](a, b);

        return key == 'set' ? this : result; // store all the rest on native weakmap
      }

      return method.call(this, a, b);
    });
  });
}

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var weak = __webpack_require__(127);

var validate = __webpack_require__(44);

var WEAK_SET = 'WeakSet'; // 23.4 WeakSet Objects

__webpack_require__(69)(WEAK_SET, function (get) {
  return function WeakSet() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value) {
    return weak.def(validate(this, WEAK_SET), value, true);
  }
}, weak, false, true);

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);

var $typed = __webpack_require__(70);

var buffer = __webpack_require__(95);

var anObject = __webpack_require__(5);

var toAbsoluteIndex = __webpack_require__(39);

var toLength = __webpack_require__(8);

var isObject = __webpack_require__(6);

var ArrayBuffer = __webpack_require__(3).ArrayBuffer;

var speciesConstructor = __webpack_require__(57);

var $ArrayBuffer = buffer.ArrayBuffer;
var $DataView = buffer.DataView;
var $isView = $typed.ABV && ArrayBuffer.isView;
var $slice = $ArrayBuffer.prototype.slice;
var VIEW = $typed.VIEW;
var ARRAY_BUFFER = 'ArrayBuffer';
$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), {
  ArrayBuffer: $ArrayBuffer
});
$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it) {
    return $isView && $isView(it) || isObject(it) && VIEW in it;
  }
});
$export($export.P + $export.U + $export.F * __webpack_require__(4)(function () {
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end) {
    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix

    var len = anObject(this).byteLength;
    var first = toAbsoluteIndex(start, len);
    var fin = toAbsoluteIndex(end === undefined ? len : end, len);
    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));
    var viewS = new $DataView(this);
    var viewT = new $DataView(result);
    var index = 0;

    while (first < fin) {
      viewT.setUint8(index++, viewS.getUint8(first++));
    }

    return result;
  }
});

__webpack_require__(49)(ARRAY_BUFFER);

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);

$export($export.G + $export.W + $export.F * !__webpack_require__(70).ABV, {
  DataView: __webpack_require__(95).DataView
});

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(31)('Int8', 1, function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(31)('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(31)('Uint8', 1, function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(31)('Int16', 2, function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(31)('Uint16', 2, function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(31)('Int32', 4, function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(31)('Uint32', 4, function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(31)('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(31)('Float64', 8, function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = __webpack_require__(0);

var aFunction = __webpack_require__(23);

var anObject = __webpack_require__(5);

var rApply = (__webpack_require__(3).Reflect || {}).apply;
var fApply = Function.apply; // MS Edge argumentsList argument is optional

$export($export.S + $export.F * !__webpack_require__(4)(function () {
  rApply(function () {
    /* empty */
  });
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target);
    var L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(0);

var create = __webpack_require__(40);

var aFunction = __webpack_require__(23);

var anObject = __webpack_require__(5);

var isObject = __webpack_require__(6);

var fails = __webpack_require__(4);

var bind = __webpack_require__(108);

var rConstruct = (__webpack_require__(3).Reflect || {}).construct; // MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it

var NEW_TARGET_BUG = fails(function () {
  function F() {
    /* empty */
  }

  return !(rConstruct(function () {
    /* empty */
  }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () {
    /* empty */
  });
});
$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args
  /* , newTarget */
  ) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);

    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0:
          return new Target();

        case 1:
          return new Target(args[0]);

        case 2:
          return new Target(args[0], args[1]);

        case 3:
          return new Target(args[0], args[1], args[2]);

        case 4:
          return new Target(args[0], args[1], args[2], args[3]);
      } // w/o altered newTarget, lot of arguments case


      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    } // with altered newTarget, not support built-in constructors


    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = __webpack_require__(12);

var $export = __webpack_require__(0);

var anObject = __webpack_require__(5);

var toPrimitive = __webpack_require__(33); // MS Edge has broken Reflect.defineProperty - throwing instead of returning false


$export($export.S + $export.F * __webpack_require__(4)(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP.f({}, 1, {
    value: 1
  }), 1, {
    value: 2
  });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);

    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = __webpack_require__(0);

var gOPD = __webpack_require__(25).f;

var anObject = __webpack_require__(5);

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 26.1.5 Reflect.enumerate(target)

var $export = __webpack_require__(0);

var anObject = __webpack_require__(5);

var Enumerate = function Enumerate(iterated) {
  this._t = anObject(iterated); // target

  this._i = 0; // next index

  var keys = this._k = []; // keys

  var key;

  for (key in iterated) {
    keys.push(key);
  }
};

__webpack_require__(115)(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;

  do {
    if (that._i >= keys.length) return {
      value: undefined,
      done: true
    };
  } while (!((key = keys[that._i++]) in that._t));

  return {
    value: key,
    done: false
  };
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = __webpack_require__(25);

var getPrototypeOf = __webpack_require__(42);

var has = __webpack_require__(17);

var $export = __webpack_require__(0);

var isObject = __webpack_require__(6);

var anObject = __webpack_require__(5);

function get(target, propertyKey
/* , receiver */
) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value') ? desc.value : desc.get !== undefined ? desc.get.call(receiver) : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', {
  get: get
});

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = __webpack_require__(25);

var $export = __webpack_require__(0);

var anObject = __webpack_require__(5);

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.8 Reflect.getPrototypeOf(target)
var $export = __webpack_require__(0);

var getProto = __webpack_require__(42);

var anObject = __webpack_require__(5);

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});

/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.9 Reflect.has(target, propertyKey)
var $export = __webpack_require__(0);

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.10 Reflect.isExtensible(target)
var $export = __webpack_require__(0);

var anObject = __webpack_require__(5);

var $isExtensible = Object.isExtensible;
$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});

/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.11 Reflect.ownKeys(target)
var $export = __webpack_require__(0);

$export($export.S, 'Reflect', {
  ownKeys: __webpack_require__(129)
});

/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.12 Reflect.preventExtensions(target)
var $export = __webpack_require__(0);

var anObject = __webpack_require__(5);

var $preventExtensions = Object.preventExtensions;
$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);

    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});

/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = __webpack_require__(12);

var gOPD = __webpack_require__(25);

var getPrototypeOf = __webpack_require__(42);

var has = __webpack_require__(17);

var $export = __webpack_require__(0);

var createDesc = __webpack_require__(35);

var anObject = __webpack_require__(5);

var isObject = __webpack_require__(6);

function set(target, propertyKey, V
/* , receiver */
) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD.f(anObject(target), propertyKey);
  var existingDescriptor, proto;

  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }

    ownDesc = createDesc(0);
  }

  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;

    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      dP.f(receiver, propertyKey, existingDescriptor);
    } else dP.f(receiver, propertyKey, createDesc(0, V));

    return true;
  }

  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', {
  set: set
});

/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = __webpack_require__(0);

var setProto = __webpack_require__(76);

if (setProto) $export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);

    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});

/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(285);

module.exports = __webpack_require__(10).Array.includes;

/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // https://github.com/tc39/Array.prototype.includes

var $export = __webpack_require__(0);

var $includes = __webpack_require__(60)(true);

$export($export.P, 'Array', {
  includes: function includes(el
  /* , fromIndex = 0 */
  ) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(43)('includes');

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(287);

module.exports = __webpack_require__(10).Array.flatMap;

/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap

var $export = __webpack_require__(0);

var flattenIntoArray = __webpack_require__(288);

var toObject = __webpack_require__(14);

var toLength = __webpack_require__(8);

var aFunction = __webpack_require__(23);

var arraySpeciesCreate = __webpack_require__(117);

$export($export.P, 'Array', {
  flatMap: function flatMap(callbackfn
  /* , thisArg */
  ) {
    var O = toObject(this);
    var sourceLen, A;
    aFunction(callbackfn);
    sourceLen = toLength(O.length);
    A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
    return A;
  }
});

__webpack_require__(43)('flatMap');

/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray

var isArray = __webpack_require__(62);

var isObject = __webpack_require__(6);

var toLength = __webpack_require__(8);

var ctx = __webpack_require__(22);

var IS_CONCAT_SPREADABLE = __webpack_require__(7)('isConcatSpreadable');

function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
  var element, spreadable;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];
      spreadable = false;

      if (isObject(element)) {
        spreadable = element[IS_CONCAT_SPREADABLE];
        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
      }

      if (spreadable && depth > 0) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
        target[targetIndex] = element;
      }

      targetIndex++;
    }

    sourceIndex++;
  }

  return targetIndex;
}

module.exports = flattenIntoArray;

/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(290);

module.exports = __webpack_require__(10).String.padStart;

/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // https://github.com/tc39/proposal-string-pad-start-end

var $export = __webpack_require__(0);

var $pad = __webpack_require__(130);

var userAgent = __webpack_require__(68); // https://github.com/zloirock/core-js/issues/280


var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);
$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padStart: function padStart(maxLength
  /* , fillString = ' ' */
  ) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});

/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(292);

module.exports = __webpack_require__(10).String.padEnd;

/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // https://github.com/tc39/proposal-string-pad-start-end

var $export = __webpack_require__(0);

var $pad = __webpack_require__(130);

var userAgent = __webpack_require__(68); // https://github.com/zloirock/core-js/issues/280


var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);
$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padEnd: function padEnd(maxLength
  /* , fillString = ' ' */
  ) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});

/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(294);

module.exports = __webpack_require__(10).String.trimLeft;

/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // https://github.com/sebmarkbage/ecmascript-string-left-right-trim

__webpack_require__(47)('trimLeft', function ($trim) {
  return function trimLeft() {
    return $trim(this, 1);
  };
}, 'trimStart');

/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(296);

module.exports = __webpack_require__(10).String.trimRight;

/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // https://github.com/sebmarkbage/ecmascript-string-left-right-trim

__webpack_require__(47)('trimRight', function ($trim) {
  return function trimRight() {
    return $trim(this, 2);
  };
}, 'trimEnd');

/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(298);

module.exports = __webpack_require__(72).f('asyncIterator');

/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(102)('asyncIterator');

/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(300);

module.exports = __webpack_require__(10).Object.getOwnPropertyDescriptors;

/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__(0);

var ownKeys = __webpack_require__(129);

var toIObject = __webpack_require__(19);

var gOPD = __webpack_require__(25);

var createProperty = __webpack_require__(88);

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;

    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }

    return result;
  }
});

/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(302);

module.exports = __webpack_require__(10).Object.values;

/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(0);

var $values = __webpack_require__(131)(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});

/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(304);

module.exports = __webpack_require__(10).Object.entries;

/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(0);

var $entries = __webpack_require__(131)(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});

/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(123);

__webpack_require__(306);

module.exports = __webpack_require__(10).Promise['finally'];

/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally


var $export = __webpack_require__(0);

var core = __webpack_require__(10);

var global = __webpack_require__(3);

var speciesConstructor = __webpack_require__(57);

var promiseResolve = __webpack_require__(125);

$export($export.P + $export.R, 'Promise', {
  'finally': function _finally(onFinally) {
    var C = speciesConstructor(this, core.Promise || global.Promise);
    var isFunction = typeof onFinally == 'function';
    return this.then(isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () {
        return x;
      });
    } : onFinally, isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () {
        throw e;
      });
    } : onFinally);
  }
});

/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(308);

__webpack_require__(309);

__webpack_require__(310);

module.exports = __webpack_require__(10);

/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

// ie9- setTimeout & setInterval additional parameters fix
var global = __webpack_require__(3);

var $export = __webpack_require__(0);

var userAgent = __webpack_require__(68);

var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

var wrap = function wrap(set) {
  return function (fn, time
  /* , ...args */
  ) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : false;
    return set(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
    } : fn, time);
  };
};

$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout: wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});

/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);

var $task = __webpack_require__(94);

$export($export.G + $export.B, {
  setImmediate: $task.set,
  clearImmediate: $task.clear
});

/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(91);

var getKeys = __webpack_require__(38);

var redefine = __webpack_require__(15);

var global = __webpack_require__(3);

var hide = __webpack_require__(18);

var Iterators = __webpack_require__(48);

var wks = __webpack_require__(7);

var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;
var DOMIterables = {
  CSSRuleList: true,
  // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true,
  // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true,
  // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;

  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) {
      if (!proto[key]) redefine(proto, key, $iterators[key], true);
    }
  }
}

/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;

      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
( false ? undefined : _typeof(module)) === "object" ? module.exports : {});

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(312)(module)))

/***/ }),
/* 312 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(314);

module.exports = __webpack_require__(132).global;

/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-global
var $export = __webpack_require__(315);

$export($export.G, {
  global: __webpack_require__(96)
});

/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(96);

var core = __webpack_require__(132);

var ctx = __webpack_require__(316);

var hide = __webpack_require__(318);

var has = __webpack_require__(325);

var PROTOTYPE = 'prototype';

var $export = function $export(type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;

  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue; // export native or passed

    out = own ? target[key] : source[key]; // prevent global pollution for namespaces

    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global) // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? function (C) {
      var F = function F(a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0:
              return new C();

            case 1:
              return new C(a);

            case 2:
              return new C(a, b);
          }

          return new C(a, b, c);
        }

        return C.apply(this, arguments);
      };

      F[PROTOTYPE] = C[PROTOTYPE];
      return F; // make static versions for prototype methods
    }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out; // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%

    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out; // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%

      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
}; // type bitmap


$export.F = 1; // forced

$export.G = 2; // global

$export.S = 4; // static

$export.P = 8; // proto

$export.B = 16; // bind

$export.W = 32; // wrap

$export.U = 64; // safe

$export.R = 128; // real proto method for `library`

module.exports = $export;

/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(317);

module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;

  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };

    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };

    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }

  return function ()
  /* ...args */
  {
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 317 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(319);

var createDesc = __webpack_require__(324);

module.exports = __webpack_require__(98) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(320);

var IE8_DOM_DEFINE = __webpack_require__(321);

var toPrimitive = __webpack_require__(323);

var dP = Object.defineProperty;
exports.f = __webpack_require__(98) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(97);

module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(98) && !__webpack_require__(133)(function () {
  return Object.defineProperty(__webpack_require__(322)('div'), 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(97);

var document = __webpack_require__(96).document; // typeof document.createElement is 'object' in old IE


var is = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(97); // instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string


module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 324 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/***/ }),
/* 325 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = __webpack_require__(52),
    squaredEuclidean = _require.squaredEuclidean;

var defaultOptions = {
  sigma: 1
};

var GaussianKernel =
/*#__PURE__*/
function () {
  function GaussianKernel(options) {
    _classCallCheck(this, GaussianKernel);

    options = Object.assign({}, defaultOptions, options);
    this.sigma = options.sigma;
    this.divisor = 2 * options.sigma * options.sigma;
  }

  _createClass(GaussianKernel, [{
    key: "compute",
    value: function compute(x, y) {
      var distance = squaredEuclidean(x, y);
      return Math.exp(-distance / this.divisor);
    }
  }]);

  return GaussianKernel;
}();

module.exports = GaussianKernel;

/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var defaultOptions = {
  degree: 1,
  constant: 1,
  scale: 1
};

var PolynomialKernel =
/*#__PURE__*/
function () {
  function PolynomialKernel(options) {
    _classCallCheck(this, PolynomialKernel);

    options = Object.assign({}, defaultOptions, options);
    this.degree = options.degree;
    this.constant = options.constant;
    this.scale = options.scale;
  }

  _createClass(PolynomialKernel, [{
    key: "compute",
    value: function compute(x, y) {
      var sum = 0;

      for (var i = 0; i < x.length; i++) {
        sum += x[i] * y[i];
      }

      return Math.pow(this.scale * sum + this.constant, this.degree);
    }
  }]);

  return PolynomialKernel;
}();

module.exports = PolynomialKernel;

/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var defaultOptions = {
  alpha: 0.01,
  constant: -Math.E
};

var SigmoidKernel =
/*#__PURE__*/
function () {
  function SigmoidKernel(options) {
    _classCallCheck(this, SigmoidKernel);

    options = Object.assign({}, defaultOptions, options);
    this.alpha = options.alpha;
    this.constant = options.constant;
  }

  _createClass(SigmoidKernel, [{
    key: "compute",
    value: function compute(x, y) {
      var sum = 0;

      for (var i = 0; i < x.length; i++) {
        sum += x[i] * y[i];
      }

      return Math.tanh(this.alpha * sum + this.constant);
    }
  }]);

  return SigmoidKernel;
}();

module.exports = SigmoidKernel;

/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var defaultOptions = {
  sigma: 1,
  degree: 1
};

var ANOVAKernel =
/*#__PURE__*/
function () {
  function ANOVAKernel(options) {
    _classCallCheck(this, ANOVAKernel);

    options = Object.assign({}, defaultOptions, options);
    this.sigma = options.sigma;
    this.degree = options.degree;
  }

  _createClass(ANOVAKernel, [{
    key: "compute",
    value: function compute(x, y) {
      var sum = 0;
      var len = Math.min(x.length, y.length);

      for (var i = 1; i <= len; ++i) {
        sum += Math.pow(Math.exp(-this.sigma * Math.pow(Math.pow(x[i - 1], i) - Math.pow(y[i - 1], i), 2)), this.degree);
      }

      return sum;
    }
  }]);

  return ANOVAKernel;
}();

module.exports = ANOVAKernel;

/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = __webpack_require__(52),
    squaredEuclidean = _require.squaredEuclidean;

var defaultOptions = {
  sigma: 1
};

var CauchyKernel =
/*#__PURE__*/
function () {
  function CauchyKernel(options) {
    _classCallCheck(this, CauchyKernel);

    options = Object.assign({}, defaultOptions, options);
    this.sigma = options.sigma;
  }

  _createClass(CauchyKernel, [{
    key: "compute",
    value: function compute(x, y) {
      return 1 / (1 + squaredEuclidean(x, y) / (this.sigma * this.sigma));
    }
  }]);

  return CauchyKernel;
}();

module.exports = CauchyKernel;

/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = __webpack_require__(52),
    euclidean = _require.euclidean;

var defaultOptions = {
  sigma: 1
};

var ExponentialKernel =
/*#__PURE__*/
function () {
  function ExponentialKernel(options) {
    _classCallCheck(this, ExponentialKernel);

    options = Object.assign({}, defaultOptions, options);
    this.sigma = options.sigma;
    this.divisor = 2 * options.sigma * options.sigma;
  }

  _createClass(ExponentialKernel, [{
    key: "compute",
    value: function compute(x, y) {
      var distance = euclidean(x, y);
      return Math.exp(-distance / this.divisor);
    }
  }]);

  return ExponentialKernel;
}();

module.exports = ExponentialKernel;

/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var HistogramIntersectionKernel =
/*#__PURE__*/
function () {
  function HistogramIntersectionKernel() {
    _classCallCheck(this, HistogramIntersectionKernel);
  }

  _createClass(HistogramIntersectionKernel, [{
    key: "compute",
    value: function compute(x, y) {
      var min = Math.min(x.length, y.length);
      var sum = 0;

      for (var i = 0; i < min; ++i) {
        sum += Math.min(x[i], y[i]);
      }

      return sum;
    }
  }]);

  return HistogramIntersectionKernel;
}();

module.exports = HistogramIntersectionKernel;

/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = __webpack_require__(52),
    euclidean = _require.euclidean;

var defaultOptions = {
  sigma: 1
};

var LaplacianKernel =
/*#__PURE__*/
function () {
  function LaplacianKernel(options) {
    _classCallCheck(this, LaplacianKernel);

    options = Object.assign({}, defaultOptions, options);
    this.sigma = options.sigma;
  }

  _createClass(LaplacianKernel, [{
    key: "compute",
    value: function compute(x, y) {
      var distance = euclidean(x, y);
      return Math.exp(-distance / this.sigma);
    }
  }]);

  return LaplacianKernel;
}();

module.exports = LaplacianKernel;

/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = __webpack_require__(52),
    squaredEuclidean = _require.squaredEuclidean;

var defaultOptions = {
  constant: 1
};

var MultiquadraticKernel =
/*#__PURE__*/
function () {
  function MultiquadraticKernel(options) {
    _classCallCheck(this, MultiquadraticKernel);

    options = Object.assign({}, defaultOptions, options);
    this.constant = options.constant;
  }

  _createClass(MultiquadraticKernel, [{
    key: "compute",
    value: function compute(x, y) {
      return Math.sqrt(squaredEuclidean(x, y) + this.constant * this.constant);
    }
  }]);

  return MultiquadraticKernel;
}();

module.exports = MultiquadraticKernel;

/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = __webpack_require__(52),
    squaredEuclidean = _require.squaredEuclidean;

var defaultOptions = {
  constant: 1
};

var RationalQuadraticKernel =
/*#__PURE__*/
function () {
  function RationalQuadraticKernel(options) {
    _classCallCheck(this, RationalQuadraticKernel);

    options = Object.assign({}, defaultOptions, options);
    this.constant = options.constant;
  }

  _createClass(RationalQuadraticKernel, [{
    key: "compute",
    value: function compute(x, y) {
      var distance = squaredEuclidean(x, y);
      return 1 - distance / (distance + this.constant);
    }
  }]);

  return RationalQuadraticKernel;
}();

module.exports = RationalQuadraticKernel;

/***/ }),
/* 336 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/ml-regression-base/src/maybeToPrecision.js
function maybeToPrecision(value, digits) {
  if (value < 0) {
    value = 0 - value;

    if (typeof digits === 'number') {
      return "- ".concat(value.toPrecision(digits));
    } else {
      return "- ".concat(value.toString());
    }
  } else {
    if (typeof digits === 'number') {
      return value.toPrecision(digits);
    } else {
      return value.toString();
    }
  }
}
// CONCATENATED MODULE: ./node_modules/ml-regression-base/src/index.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var BaseRegression =
/*#__PURE__*/
function () {
  function BaseRegression() {
    _classCallCheck(this, BaseRegression);

    if ((this instanceof BaseRegression ? this.constructor : void 0) === BaseRegression) {
      throw new Error('BaseRegression must be subclassed');
    }
  }

  _createClass(BaseRegression, [{
    key: "predict",
    value: function predict(x) {
      if (typeof x === 'number') {
        return this._predict(x);
      } else if (Array.isArray(x)) {
        var y = [];

        for (var i = 0; i < x.length; i++) {
          y.push(this._predict(x[i]));
        }

        return y;
      } else {
        throw new TypeError('x must be a number or array');
      }
    }
  }, {
    key: "_predict",
    value: function _predict() {
      throw new Error('_predict must be implemented');
    }
  }, {
    key: "train",
    value: function train() {// Do nothing for this package
    }
  }, {
    key: "toString",
    value: function toString() {
      return '';
    }
  }, {
    key: "toLaTeX",
    value: function toLaTeX() {
      return '';
    }
    /**
     * Return the correlation coefficient of determination (r) and chi-square.
     * @param {Array<number>} x
     * @param {Array<number>} y
     * @return {object}
     */

  }, {
    key: "score",
    value: function score(x, y) {
      if (!Array.isArray(x) || !Array.isArray(y) || x.length !== y.length) {
        throw new Error('x and y must be arrays of the same length');
      }

      var n = x.length;
      var y2 = new Array(n);

      for (var i = 0; i < n; i++) {
        y2[i] = this._predict(x[i]);
      }

      var xSum = 0;
      var ySum = 0;
      var chi2 = 0;
      var rmsd = 0;
      var xSquared = 0;
      var ySquared = 0;
      var xY = 0;

      for (var _i = 0; _i < n; _i++) {
        xSum += y2[_i];
        ySum += y[_i];
        xSquared += y2[_i] * y2[_i];
        ySquared += y[_i] * y[_i];
        xY += y2[_i] * y[_i];

        if (y[_i] !== 0) {
          chi2 += (y[_i] - y2[_i]) * (y[_i] - y2[_i]) / y[_i];
        }

        rmsd += (y[_i] - y2[_i]) * (y[_i] - y2[_i]);
      }

      var r = (n * xY - xSum * ySum) / Math.sqrt((n * xSquared - xSum * xSum) * (n * ySquared - ySum * ySum));
      return {
        r: r,
        r2: r * r,
        chi2: chi2,
        rmsd: Math.sqrt(rmsd / n)
      };
    }
  }]);

  return BaseRegression;
}();


// CONCATENATED MODULE: ./node_modules/ml-regression-base/src/checkArrayLength.js
function checkArraySize(x, y) {
  if (!Array.isArray(x) || !Array.isArray(y)) {
    throw new TypeError('x and y must be arrays');
  }

  if (x.length !== y.length) {
    throw new RangeError('x and y arrays must have the same length');
  }
}
// EXTERNAL MODULE: ./node_modules/ml-matrix/src/matrix.js + 6 modules
var matrix = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/ml-matrix/src/views/transpose.js
var transpose = __webpack_require__(134);

// EXTERNAL MODULE: ./node_modules/ml-matrix/src/decompositions.js
var decompositions = __webpack_require__(99);

// CONCATENATED MODULE: ./node_modules/ml-regression-polynomial/src/index.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function src_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function src_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function src_createClass(Constructor, protoProps, staticProps) { if (protoProps) src_defineProperties(Constructor.prototype, protoProps); if (staticProps) src_defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var src_PolynomialRegression =
/*#__PURE__*/
function (_BaseRegression) {
  _inherits(PolynomialRegression, _BaseRegression);

  function PolynomialRegression(x, y, degree) {
    var _this;

    src_classCallCheck(this, PolynomialRegression);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PolynomialRegression).call(this));

    if (x === true) {
      _this.degree = y.degree;
      _this.powers = y.powers;
      _this.coefficients = y.coefficients;
    } else {
      checkArraySize(x, y);
      regress(_assertThisInitialized(_this), x, y, degree);
    }

    return _this;
  }

  src_createClass(PolynomialRegression, [{
    key: "_predict",
    value: function _predict(x) {
      var y = 0;

      for (var k = 0; k < this.powers.length; k++) {
        y += this.coefficients[k] * Math.pow(x, this.powers[k]);
      }

      return y;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        name: 'polynomialRegression',
        degree: this.degree,
        powers: this.powers,
        coefficients: this.coefficients
      };
    }
  }, {
    key: "toString",
    value: function toString(precision) {
      return this._toFormula(precision, false);
    }
  }, {
    key: "toLaTeX",
    value: function toLaTeX(precision) {
      return this._toFormula(precision, true);
    }
  }, {
    key: "_toFormula",
    value: function _toFormula(precision, isLaTeX) {
      var sup = '^';
      var closeSup = '';
      var times = ' * ';

      if (isLaTeX) {
        sup = '^{';
        closeSup = '}';
        times = '';
      }

      var fn = '';
      var str = '';

      for (var k = 0; k < this.coefficients.length; k++) {
        str = '';

        if (this.coefficients[k] !== 0) {
          if (this.powers[k] === 0) {
            str = maybeToPrecision(this.coefficients[k], precision);
          } else {
            if (this.powers[k] === 1) {
              str = "".concat(maybeToPrecision(this.coefficients[k], precision) + times, "x");
            } else {
              str = "".concat(maybeToPrecision(this.coefficients[k], precision) + times, "x").concat(sup).concat(this.powers[k]).concat(closeSup);
            }
          }

          if (this.coefficients[k] > 0 && k !== this.coefficients.length - 1) {
            str = " + ".concat(str);
          } else if (k !== this.coefficients.length - 1) {
            str = " ".concat(str);
          }
        }

        fn = str + fn;
      }

      if (fn.charAt(0) === '+') {
        fn = fn.slice(1);
      }

      return "f(x) = ".concat(fn);
    }
  }], [{
    key: "load",
    value: function load(json) {
      if (json.name !== 'polynomialRegression') {
        throw new TypeError('not a polynomial regression model');
      }

      return new PolynomialRegression(true, json);
    }
  }]);

  return PolynomialRegression;
}(BaseRegression);



function regress(pr, x, y, degree) {
  var n = x.length;
  var powers;

  if (Array.isArray(degree)) {
    powers = degree;
    degree = powers.length;
  } else {
    degree++;
    powers = new Array(degree);

    for (var k = 0; k < degree; k++) {
      powers[k] = k;
    }
  }

  var F = new matrix["b" /* default */](n, degree);
  var Y = new matrix["b" /* default */]([y]);

  for (var _k = 0; _k < degree; _k++) {
    for (var i = 0; i < n; i++) {
      if (powers[_k] === 0) {
        F.set(i, _k, 1);
      } else {
        F.set(i, _k, Math.pow(x[i], powers[_k]));
      }
    }
  }

  var FT = new transpose["a" /* default */](F);
  var A = FT.mmul(F);
  var B = FT.mmul(new transpose["a" /* default */](Y));
  pr.degree = degree - 1;
  pr.powers = powers;
  pr.coefficients = Object(decompositions["b" /* solve */])(A, B).to1DArray();
}
// CONCATENATED MODULE: ./node_modules/ml-regression/src/regression/potential-regression.js
function potential_regression_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { potential_regression_typeof = function _typeof(obj) { return typeof obj; }; } else { potential_regression_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return potential_regression_typeof(obj); }

function potential_regression_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function potential_regression_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function potential_regression_createClass(Constructor, protoProps, staticProps) { if (protoProps) potential_regression_defineProperties(Constructor.prototype, protoProps); if (staticProps) potential_regression_defineProperties(Constructor, staticProps); return Constructor; }

function potential_regression_possibleConstructorReturn(self, call) { if (call && (potential_regression_typeof(call) === "object" || typeof call === "function")) { return call; } return potential_regression_assertThisInitialized(self); }

function potential_regression_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function potential_regression_getPrototypeOf(o) { potential_regression_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return potential_regression_getPrototypeOf(o); }

function potential_regression_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) potential_regression_setPrototypeOf(subClass, superClass); }

function potential_regression_setPrototypeOf(o, p) { potential_regression_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return potential_regression_setPrototypeOf(o, p); }



/*
 * Function that calculate the potential fit in the form f(x) = A*x^M
 * with a given M and return de A coefficient.
 *
 * @param {Vector} X - Vector of the x positions of the points.
 * @param {Vector} Y - Vector of the x positions of the points.
 * @param {Number} M - The exponent of the potential fit.
 * @return {Number} A - The A coefficient of the potential fit.
 */

var potential_regression_PotentialRegression =
/*#__PURE__*/
function (_BaseRegression) {
  potential_regression_inherits(PotentialRegression, _BaseRegression);

  /**
   * @constructor
   * @param x: Independent variable
   * @param y: Dependent variable
   * @param M
   */
  function PotentialRegression(x, y, M) {
    var _this;

    potential_regression_classCallCheck(this, PotentialRegression);

    _this = potential_regression_possibleConstructorReturn(this, potential_regression_getPrototypeOf(PotentialRegression).call(this));

    if (x === true) {
      // reloading model
      _this.A = y.A;
      _this.M = y.M;
    } else {
      var n = x.length;

      if (n !== y.length) {
        throw new RangeError('input and output array have a different length');
      }

      var linear = new src_PolynomialRegression(x, y, [M]);
      _this.A = linear.coefficients[0];
      _this.M = M;
    }

    return _this;
  }

  potential_regression_createClass(PotentialRegression, [{
    key: "_predict",
    value: function _predict(x) {
      return this.A * Math.pow(x, this.M);
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        name: 'potentialRegression',
        A: this.A,
        M: this.M
      };
    }
  }, {
    key: "toString",
    value: function toString(precision) {
      return "f(x) = ".concat(maybeToPrecision(this.A, precision), " * x^").concat(this.M);
    }
  }, {
    key: "toLaTeX",
    value: function toLaTeX(precision) {
      if (this.M >= 0) {
        return "f(x) = ".concat(maybeToPrecision(this.A, precision), "x^{").concat(this.M, "}");
      } else {
        return "f(x) = \\frac{".concat(maybeToPrecision(this.A, precision), "}{x^{").concat(-this.M, "}}");
      }
    }
  }], [{
    key: "load",
    value: function load(json) {
      if (json.name !== 'potentialRegression') {
        throw new TypeError('not a potential regression model');
      }

      return new PotentialRegression(true, json);
    }
  }]);

  return PotentialRegression;
}(BaseRegression);


// CONCATENATED MODULE: ./node_modules/ml-regression-simple-linear/src/index.js
function src_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { src_typeof = function _typeof(obj) { return typeof obj; }; } else { src_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return src_typeof(obj); }

function ml_regression_simple_linear_src_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ml_regression_simple_linear_src_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ml_regression_simple_linear_src_createClass(Constructor, protoProps, staticProps) { if (protoProps) ml_regression_simple_linear_src_defineProperties(Constructor.prototype, protoProps); if (staticProps) ml_regression_simple_linear_src_defineProperties(Constructor, staticProps); return Constructor; }

function src_possibleConstructorReturn(self, call) { if (call && (src_typeof(call) === "object" || typeof call === "function")) { return call; } return src_assertThisInitialized(self); }

function src_getPrototypeOf(o) { src_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return src_getPrototypeOf(o); }

function src_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function src_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) src_setPrototypeOf(subClass, superClass); }

function src_setPrototypeOf(o, p) { src_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return src_setPrototypeOf(o, p); }



var src_SimpleLinearRegression =
/*#__PURE__*/
function (_BaseRegression) {
  src_inherits(SimpleLinearRegression, _BaseRegression);

  function SimpleLinearRegression(x, y) {
    var _this;

    ml_regression_simple_linear_src_classCallCheck(this, SimpleLinearRegression);

    _this = src_possibleConstructorReturn(this, src_getPrototypeOf(SimpleLinearRegression).call(this));

    if (x === true) {
      _this.slope = y.slope;
      _this.intercept = y.intercept;
      _this.coefficients = [y.intercept, y.slope];
    } else {
      checkArraySize(x, y);
      src_regress(src_assertThisInitialized(_this), x, y);
    }

    return _this;
  }

  ml_regression_simple_linear_src_createClass(SimpleLinearRegression, [{
    key: "toJSON",
    value: function toJSON() {
      return {
        name: 'simpleLinearRegression',
        slope: this.slope,
        intercept: this.intercept
      };
    }
  }, {
    key: "_predict",
    value: function _predict(x) {
      return this.slope * x + this.intercept;
    }
  }, {
    key: "computeX",
    value: function computeX(y) {
      return (y - this.intercept) / this.slope;
    }
  }, {
    key: "toString",
    value: function toString(precision) {
      var result = 'f(x) = ';

      if (this.slope !== 0) {
        var xFactor = maybeToPrecision(this.slope, precision);
        result += "".concat(xFactor === '1' ? '' : "".concat(xFactor, " * "), "x");

        if (this.intercept !== 0) {
          var absIntercept = Math.abs(this.intercept);
          var operator = absIntercept === this.intercept ? '+' : '-';
          result += " ".concat(operator, " ").concat(maybeToPrecision(absIntercept, precision));
        }
      } else {
        result += maybeToPrecision(this.intercept, precision);
      }

      return result;
    }
  }, {
    key: "toLaTeX",
    value: function toLaTeX(precision) {
      return this.toString(precision);
    }
  }], [{
    key: "load",
    value: function load(json) {
      if (json.name !== 'simpleLinearRegression') {
        throw new TypeError('not a SLR model');
      }

      return new SimpleLinearRegression(true, json);
    }
  }]);

  return SimpleLinearRegression;
}(BaseRegression);



function src_regress(slr, x, y) {
  var n = x.length;
  var xSum = 0;
  var ySum = 0;
  var xSquared = 0;
  var xY = 0;

  for (var i = 0; i < n; i++) {
    xSum += x[i];
    ySum += y[i];
    xSquared += x[i] * x[i];
    xY += x[i] * y[i];
  }

  var numerator = n * xY - xSum * ySum;
  slr.slope = numerator / (n * xSquared - xSum * xSum);
  slr.intercept = 1 / n * ySum - slr.slope * (1 / n) * xSum;
  slr.coefficients = [slr.intercept, slr.slope];
}
// CONCATENATED MODULE: ./node_modules/ml-regression-exponential/src/index.js
function ml_regression_exponential_src_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ml_regression_exponential_src_typeof = function _typeof(obj) { return typeof obj; }; } else { ml_regression_exponential_src_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ml_regression_exponential_src_typeof(obj); }

function ml_regression_exponential_src_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ml_regression_exponential_src_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ml_regression_exponential_src_createClass(Constructor, protoProps, staticProps) { if (protoProps) ml_regression_exponential_src_defineProperties(Constructor.prototype, protoProps); if (staticProps) ml_regression_exponential_src_defineProperties(Constructor, staticProps); return Constructor; }

function ml_regression_exponential_src_possibleConstructorReturn(self, call) { if (call && (ml_regression_exponential_src_typeof(call) === "object" || typeof call === "function")) { return call; } return ml_regression_exponential_src_assertThisInitialized(self); }

function ml_regression_exponential_src_getPrototypeOf(o) { ml_regression_exponential_src_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ml_regression_exponential_src_getPrototypeOf(o); }

function ml_regression_exponential_src_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ml_regression_exponential_src_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ml_regression_exponential_src_setPrototypeOf(subClass, superClass); }

function ml_regression_exponential_src_setPrototypeOf(o, p) { ml_regression_exponential_src_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ml_regression_exponential_src_setPrototypeOf(o, p); }




var src_ExponentialRegression =
/*#__PURE__*/
function (_BaseRegression) {
  ml_regression_exponential_src_inherits(ExponentialRegression, _BaseRegression);

  function ExponentialRegression(x, y) {
    var _this;

    ml_regression_exponential_src_classCallCheck(this, ExponentialRegression);

    _this = ml_regression_exponential_src_possibleConstructorReturn(this, ml_regression_exponential_src_getPrototypeOf(ExponentialRegression).call(this));

    if (x === true) {
      _this.A = y.A;
      _this.B = y.B;
    } else {
      checkArraySize(x, y);
      ml_regression_exponential_src_regress(ml_regression_exponential_src_assertThisInitialized(_this), x, y);
    }

    return _this;
  }

  ml_regression_exponential_src_createClass(ExponentialRegression, [{
    key: "_predict",
    value: function _predict(input) {
      return this.B * Math.exp(input * this.A);
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        name: 'exponentialRegression',
        A: this.A,
        B: this.B
      };
    }
  }, {
    key: "toString",
    value: function toString(precision) {
      return "f(x) = ".concat(maybeToPrecision(this.B, precision), " * e^(").concat(maybeToPrecision(this.A, precision), " * x)");
    }
  }, {
    key: "toLaTeX",
    value: function toLaTeX(precision) {
      if (this.A >= 0) {
        return "f(x) = ".concat(maybeToPrecision(this.B, precision), "e^{").concat(maybeToPrecision(this.A, precision), "x}");
      } else {
        return "f(x) = \\frac{".concat(maybeToPrecision(this.B, precision), "}{e^{").concat(maybeToPrecision(-this.A, precision), "x}}");
      }
    }
  }], [{
    key: "load",
    value: function load(json) {
      if (json.name !== 'exponentialRegression') {
        throw new TypeError('not a exponential regression model');
      }

      return new ExponentialRegression(true, json);
    }
  }]);

  return ExponentialRegression;
}(BaseRegression);



function ml_regression_exponential_src_regress(er, x, y) {
  var n = x.length;
  var yl = new Array(n);

  for (var i = 0; i < n; i++) {
    yl[i] = Math.log(y[i]);
  }

  var linear = new src_SimpleLinearRegression(x, yl);
  er.A = linear.slope;
  er.B = Math.exp(linear.intercept);
}
// CONCATENATED MODULE: ./node_modules/ml-regression-power/src/index.js
function ml_regression_power_src_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ml_regression_power_src_typeof = function _typeof(obj) { return typeof obj; }; } else { ml_regression_power_src_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ml_regression_power_src_typeof(obj); }

function ml_regression_power_src_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ml_regression_power_src_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ml_regression_power_src_createClass(Constructor, protoProps, staticProps) { if (protoProps) ml_regression_power_src_defineProperties(Constructor.prototype, protoProps); if (staticProps) ml_regression_power_src_defineProperties(Constructor, staticProps); return Constructor; }

function ml_regression_power_src_possibleConstructorReturn(self, call) { if (call && (ml_regression_power_src_typeof(call) === "object" || typeof call === "function")) { return call; } return ml_regression_power_src_assertThisInitialized(self); }

function ml_regression_power_src_getPrototypeOf(o) { ml_regression_power_src_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ml_regression_power_src_getPrototypeOf(o); }

function ml_regression_power_src_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ml_regression_power_src_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ml_regression_power_src_setPrototypeOf(subClass, superClass); }

function ml_regression_power_src_setPrototypeOf(o, p) { ml_regression_power_src_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ml_regression_power_src_setPrototypeOf(o, p); }




var src_PowerRegression =
/*#__PURE__*/
function (_BaseRegression) {
  ml_regression_power_src_inherits(PowerRegression, _BaseRegression);

  function PowerRegression(x, y) {
    var _this;

    ml_regression_power_src_classCallCheck(this, PowerRegression);

    _this = ml_regression_power_src_possibleConstructorReturn(this, ml_regression_power_src_getPrototypeOf(PowerRegression).call(this));

    if (x === true) {
      // reloading model
      _this.A = y.A;
      _this.B = y.B;
    } else {
      checkArraySize(x, y);
      ml_regression_power_src_regress(ml_regression_power_src_assertThisInitialized(_this), x, y);
    }

    return _this;
  }

  ml_regression_power_src_createClass(PowerRegression, [{
    key: "_predict",
    value: function _predict(newInputs) {
      return this.A * Math.pow(newInputs, this.B);
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        name: 'powerRegression',
        A: this.A,
        B: this.B
      };
    }
  }, {
    key: "toString",
    value: function toString(precision) {
      return "f(x) = ".concat(maybeToPrecision(this.A, precision), " * x^").concat(maybeToPrecision(this.B, precision));
    }
  }, {
    key: "toLaTeX",
    value: function toLaTeX(precision) {
      var latex = '';

      if (this.B >= 0) {
        latex = "f(x) = ".concat(maybeToPrecision(this.A, precision), "x^{").concat(maybeToPrecision(this.B, precision), "}");
      } else {
        latex = "f(x) = \\frac{".concat(maybeToPrecision(this.A, precision), "}{x^{").concat(maybeToPrecision(-this.B, precision), "}}");
      }

      latex = latex.replace(/e([+-]?[0-9]+)/g, 'e^{$1}');
      return latex;
    }
  }], [{
    key: "load",
    value: function load(json) {
      if (json.name !== 'powerRegression') {
        throw new TypeError('not a power regression model');
      }

      return new PowerRegression(true, json);
    }
  }]);

  return PowerRegression;
}(BaseRegression);



function ml_regression_power_src_regress(pr, x, y) {
  var n = x.length;
  var xl = new Array(n);
  var yl = new Array(n);

  for (var i = 0; i < n; i++) {
    xl[i] = Math.log(x[i]);
    yl[i] = Math.log(y[i]);
  }

  var linear = new src_SimpleLinearRegression(xl, yl);
  pr.A = Math.exp(linear.intercept);
  pr.B = linear.slope;
}
// EXTERNAL MODULE: ./node_modules/ml-matrix/src/dc/svd.js
var dc_svd = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/ml-matrix/src/pseudoInverse.js
var pseudoInverse = __webpack_require__(135);

// CONCATENATED MODULE: ./node_modules/ml-regression-multivariate-linear/src/index.js
function ml_regression_multivariate_linear_src_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ml_regression_multivariate_linear_src_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ml_regression_multivariate_linear_src_createClass(Constructor, protoProps, staticProps) { if (protoProps) ml_regression_multivariate_linear_src_defineProperties(Constructor.prototype, protoProps); if (staticProps) ml_regression_multivariate_linear_src_defineProperties(Constructor, staticProps); return Constructor; }



var src_MultivariateLinearRegression =
/*#__PURE__*/
function () {
  function MultivariateLinearRegression(x, y) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    ml_regression_multivariate_linear_src_classCallCheck(this, MultivariateLinearRegression);

    var _options$intercept = options.intercept,
        intercept = _options$intercept === void 0 ? true : _options$intercept,
        _options$statistics = options.statistics,
        statistics = _options$statistics === void 0 ? true : _options$statistics;
    this.statistics = statistics;

    if (x === true) {
      this.weights = y.weights;
      this.inputs = y.inputs;
      this.outputs = y.outputs;
      this.intercept = y.intercept;
    } else {
      x = new matrix["b" /* default */](x);
      y = new matrix["b" /* default */](y);

      if (intercept) {
        x.addColumn(new Array(x.rows).fill(1));
      }

      var xt = x.transpose();
      var xx = xt.mmul(x);
      var xy = xt.mmul(y);
      var invxx = new dc_svd["a" /* default */](xx).inverse();
      var beta = xy.transpose().mmul(invxx).transpose();
      this.weights = beta.to2DArray();
      this.inputs = x.columns;
      this.outputs = y.columns;
      if (intercept) this.inputs--;
      this.intercept = intercept;

      if (statistics) {
        /*
         * Let's add some basic statistics about the beta's to be able to interpret them.
         * source: http://dept.stat.lsa.umich.edu/~kshedden/Courses/Stat401/Notes/401-multreg.pdf
         * validated against Excel Regression AddIn
         * test: "datamining statistics test"
         */
        var fittedValues = x.mmul(beta);
        var residuals = y.clone().addM(fittedValues.neg());
        var variance = residuals.to2DArray().map(function (ri) {
          return Math.pow(ri[0], 2);
        }).reduce(function (a, b) {
          return a + b;
        }) / (y.rows - x.columns);
        this.stdError = Math.sqrt(variance);
        this.stdErrorMatrix = Object(pseudoInverse["a" /* pseudoInverse */])(xx).mul(variance);
        this.stdErrors = this.stdErrorMatrix.diagonal().map(function (d) {
          return Math.sqrt(d);
        });
        this.tStats = this.weights.map(function (d, i) {
          return _this.stdErrors[i] === 0 ? 0 : d[0] / _this.stdErrors[i];
        });
      }
    }
  }

  ml_regression_multivariate_linear_src_createClass(MultivariateLinearRegression, [{
    key: "predict",
    value: function predict(x) {
      if (Array.isArray(x)) {
        if (typeof x[0] === 'number') {
          return this._predict(x);
        } else if (Array.isArray(x[0])) {
          var y = new Array(x.length);

          for (var i = 0; i < x.length; i++) {
            y[i] = this._predict(x[i]);
          }

          return y;
        }
      } else if (matrix["b" /* default */].isMatrix(x)) {
        var _y = new matrix["b" /* default */](x.rows, this.outputs);

        for (var _i = 0; _i < x.rows; _i++) {
          _y.setRow(_i, this._predict(x.getRow(_i)));
        }

        return _y;
      }

      throw new TypeError('x must be a matrix or array of numbers');
    }
  }, {
    key: "_predict",
    value: function _predict(x) {
      var result = new Array(this.outputs);

      if (this.intercept) {
        for (var i = 0; i < this.outputs; i++) {
          result[i] = this.weights[this.inputs][i];
        }
      } else {
        result.fill(0);
      }

      for (var _i2 = 0; _i2 < this.inputs; _i2++) {
        for (var j = 0; j < this.outputs; j++) {
          result[j] += this.weights[_i2][j] * x[_i2];
        }
      }

      return result;
    }
  }, {
    key: "score",
    value: function score() {
      throw new Error('score method is not implemented yet');
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var _this2 = this;

      return {
        name: 'multivariateLinearRegression',
        weights: this.weights,
        inputs: this.inputs,
        outputs: this.outputs,
        intercept: this.intercept,
        summary: this.statistics ? {
          regressionStatistics: {
            standardError: this.stdError,
            observations: this.outputs
          },
          variables: this.weights.map(function (d, i) {
            return {
              label: i === _this2.weights.length - 1 ? 'Intercept' : "X Variable ".concat(i + 1),
              coefficients: d,
              standardError: _this2.stdErrors[i],
              tStat: _this2.tStats[i]
            };
          })
        } : undefined
      };
    }
  }], [{
    key: "load",
    value: function load(model) {
      if (model.name !== 'multivariateLinearRegression') {
        throw new Error('not a MLR model');
      }

      return new MultivariateLinearRegression(true, model);
    }
  }]);

  return MultivariateLinearRegression;
}();


// EXTERNAL MODULE: ./node_modules/ml-kernel/src/kernel.js
var kernel = __webpack_require__(100);
var kernel_default = /*#__PURE__*/__webpack_require__.n(kernel);

// CONCATENATED MODULE: ./node_modules/ml-regression/src/regression/kernel-ridge-regression.js
function kernel_ridge_regression_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { kernel_ridge_regression_typeof = function _typeof(obj) { return typeof obj; }; } else { kernel_ridge_regression_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return kernel_ridge_regression_typeof(obj); }

function kernel_ridge_regression_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function kernel_ridge_regression_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function kernel_ridge_regression_createClass(Constructor, protoProps, staticProps) { if (protoProps) kernel_ridge_regression_defineProperties(Constructor.prototype, protoProps); if (staticProps) kernel_ridge_regression_defineProperties(Constructor, staticProps); return Constructor; }

function kernel_ridge_regression_possibleConstructorReturn(self, call) { if (call && (kernel_ridge_regression_typeof(call) === "object" || typeof call === "function")) { return call; } return kernel_ridge_regression_assertThisInitialized(self); }

function kernel_ridge_regression_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function kernel_ridge_regression_getPrototypeOf(o) { kernel_ridge_regression_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return kernel_ridge_regression_getPrototypeOf(o); }

function kernel_ridge_regression_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) kernel_ridge_regression_setPrototypeOf(subClass, superClass); }

function kernel_ridge_regression_setPrototypeOf(o, p) { kernel_ridge_regression_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return kernel_ridge_regression_setPrototypeOf(o, p); }




var defaultOptions = {
  lambda: 0.1,
  kernelType: 'gaussian',
  kernelOptions: {},
  computeCoefficient: false
}; // Implements the Kernel ridge regression algorithm.
// http://www.ics.uci.edu/~welling/classnotes/papers_class/Kernel-Ridge.pdf

var kernel_ridge_regression_KernelRidgeRegression =
/*#__PURE__*/
function (_BaseRegression) {
  kernel_ridge_regression_inherits(KernelRidgeRegression, _BaseRegression);

  function KernelRidgeRegression(inputs, outputs, options) {
    var _this;

    kernel_ridge_regression_classCallCheck(this, KernelRidgeRegression);

    _this = kernel_ridge_regression_possibleConstructorReturn(this, kernel_ridge_regression_getPrototypeOf(KernelRidgeRegression).call(this));

    if (inputs === true) {
      // reloading model
      _this.alpha = outputs.alpha;
      _this.inputs = outputs.inputs;
      _this.kernelType = outputs.kernelType;
      _this.kernelOptions = outputs.kernelOptions;
      _this.kernel = new kernel_default.a(outputs.kernelType, outputs.kernelOptions);
    } else {
      inputs = matrix["b" /* default */].checkMatrix(inputs);
      options = Object.assign({}, defaultOptions, options);
      var kernelFunction = new kernel_default.a(options.kernelType, options.kernelOptions);
      var K = kernelFunction.compute(inputs);
      var n = inputs.rows;
      K.add(matrix["b" /* default */].eye(n, n).mul(options.lambda));
      _this.alpha = Object(decompositions["b" /* solve */])(K, outputs);
      _this.inputs = inputs;
      _this.kernelType = options.kernelType;
      _this.kernelOptions = options.kernelOptions;
      _this.kernel = kernelFunction;
    }

    return _this;
  }

  kernel_ridge_regression_createClass(KernelRidgeRegression, [{
    key: "_predict",
    value: function _predict(newInputs) {
      return this.kernel.compute([newInputs], this.inputs).mmul(this.alpha).getRow(0);
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        name: 'kernelRidgeRegression',
        alpha: this.alpha,
        inputs: this.inputs,
        kernelType: this.kernelType,
        kernelOptions: this.kernelOptions
      };
    }
  }], [{
    key: "load",
    value: function load(json) {
      if (json.name !== 'kernelRidgeRegression') {
        throw new TypeError('not a KRR model');
      }

      return new KernelRidgeRegression(true, json);
    }
  }]);

  return KernelRidgeRegression;
}(BaseRegression);


// CONCATENATED MODULE: ./node_modules/ml-regression/src/regression/poly-fit-regression2d.js
function poly_fit_regression2d_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { poly_fit_regression2d_typeof = function _typeof(obj) { return typeof obj; }; } else { poly_fit_regression2d_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return poly_fit_regression2d_typeof(obj); }

function poly_fit_regression2d_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function poly_fit_regression2d_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function poly_fit_regression2d_createClass(Constructor, protoProps, staticProps) { if (protoProps) poly_fit_regression2d_defineProperties(Constructor.prototype, protoProps); if (staticProps) poly_fit_regression2d_defineProperties(Constructor, staticProps); return Constructor; }

function poly_fit_regression2d_possibleConstructorReturn(self, call) { if (call && (poly_fit_regression2d_typeof(call) === "object" || typeof call === "function")) { return call; } return poly_fit_regression2d_assertThisInitialized(self); }

function poly_fit_regression2d_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function poly_fit_regression2d_getPrototypeOf(o) { poly_fit_regression2d_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return poly_fit_regression2d_getPrototypeOf(o); }

function poly_fit_regression2d_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) poly_fit_regression2d_setPrototypeOf(subClass, superClass); }

function poly_fit_regression2d_setPrototypeOf(o, p) { poly_fit_regression2d_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return poly_fit_regression2d_setPrototypeOf(o, p); }



var poly_fit_regression2d_defaultOptions = {
  order: 2
}; // Implements the Kernel ridge regression algorithm.
// http://www.ics.uci.edu/~welling/classnotes/papers_class/Kernel-Ridge.pdf

var poly_fit_regression2d_PolynomialFitRegression2D =
/*#__PURE__*/
function (_BaseRegression) {
  poly_fit_regression2d_inherits(PolynomialFitRegression2D, _BaseRegression);

  /**
   * Constructor for the 2D polynomial fitting
   *
   * @param inputs
   * @param outputs
   * @param options
   * @constructor
   */
  function PolynomialFitRegression2D(inputs, outputs, options) {
    var _this;

    poly_fit_regression2d_classCallCheck(this, PolynomialFitRegression2D);

    _this = poly_fit_regression2d_possibleConstructorReturn(this, poly_fit_regression2d_getPrototypeOf(PolynomialFitRegression2D).call(this));

    if (inputs === true) {
      // reloading model
      _this.coefficients = matrix["b" /* default */].columnVector(outputs.coefficients);
      _this.order = outputs.order;

      if (outputs.r) {
        _this.r = outputs.r;
        _this.r2 = outputs.r2;
      }

      if (outputs.chi2) {
        _this.chi2 = outputs.chi2;
      }
    } else {
      options = Object.assign({}, poly_fit_regression2d_defaultOptions, options);
      _this.order = options.order;
      _this.coefficients = [];
      _this.X = inputs;
      _this.y = outputs;

      _this.train(_this.X, _this.y, options);
    }

    return _this;
  }
  /**
   * Function that fits the model given the data(X) and predictions(y).
   * The third argument is an object with the following options:
   * * order: order of the polynomial to fit.
   *
   * @param {Matrix} X - A matrix with n rows and 2 columns.
   * @param {Matrix} y - A vector of the prediction values.
   */


  poly_fit_regression2d_createClass(PolynomialFitRegression2D, [{
    key: "train",
    value: function train(X, y) {
      if (!matrix["b" /* default */].isMatrix(X)) X = new matrix["b" /* default */](X);
      if (!matrix["b" /* default */].isMatrix(y)) y = matrix["b" /* default */].columnVector(y);

      if (y.rows !== X.rows) {
        y = y.transpose();
      }

      if (X.columns !== 2) {
        throw new RangeError("You give X with ".concat(X.columns, " columns and it must be 2"));
      }

      if (X.rows !== y.rows) {
        throw new RangeError('X and y must have the same rows');
      }

      var examples = X.rows;
      var coefficients = (this.order + 2) * (this.order + 1) / 2;
      this.coefficients = new Array(coefficients);
      var x1 = X.getColumnVector(0);
      var x2 = X.getColumnVector(1);
      var scaleX1 = 1.0 / x1.clone().abs().max();
      var scaleX2 = 1.0 / x2.clone().abs().max();
      var scaleY = 1.0 / y.clone().abs().max();
      x1.mulColumn(0, scaleX1);
      x2.mulColumn(0, scaleX2);
      y.mulColumn(0, scaleY);
      var A = new matrix["b" /* default */](examples, coefficients);
      var col = 0;

      for (var i = 0; i <= this.order; ++i) {
        var limit = this.order - i;

        for (var j = 0; j <= limit; ++j) {
          var result = powColVector(x1, i).mulColumnVector(powColVector(x2, j));
          A.setColumn(col, result);
          col++;
        }
      }

      var svd = new dc_svd["a" /* default */](A.transpose(), {
        computeLeftSingularVectors: true,
        computeRightSingularVectors: true,
        autoTranspose: false
      });
      var qqs = matrix["b" /* default */].rowVector(svd.diagonal);
      qqs = qqs.apply(function (i, j) {
        if (this.get(i, j) >= 1e-15) this.set(i, j, 1 / this.get(i, j));else this.set(i, j, 0);
      });
      var qqs1 = matrix["b" /* default */].zeros(examples, coefficients);

      for (i = 0; i < coefficients; ++i) {
        qqs1.set(i, i, qqs.get(0, i));
      }

      qqs = qqs1;
      var U = svd.rightSingularVectors;
      var V = svd.leftSingularVectors;
      this.coefficients = V.mmul(qqs.transpose()).mmul(U.transpose()).mmul(y);
      col = 0;

      for (i = 0; i <= coefficients; ++i) {
        limit = this.order - i;

        for (j = 0; j <= limit; ++j) {
          this.coefficients.set(col, 0, this.coefficients.get(col, 0) * Math.pow(scaleX1, i) * Math.pow(scaleX2, j) / scaleY);
          col++;
        }
      }
    }
  }, {
    key: "_predict",
    value: function _predict(newInputs) {
      var x1 = newInputs[0];
      var x2 = newInputs[1];
      var y = 0;
      var column = 0;

      for (var i = 0; i <= this.order; i++) {
        for (var j = 0; j <= this.order - i; j++) {
          y += Math.pow(x1, i) * Math.pow(x2, j) * this.coefficients.get(column, 0);
          column++;
        }
      }

      return y;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        name: 'polyfit2D',
        order: this.order,
        coefficients: this.coefficients
      };
    }
  }], [{
    key: "load",
    value: function load(json) {
      if (json.name !== 'polyfit2D') {
        throw new TypeError('not a polyfit2D model');
      }

      return new PolynomialFitRegression2D(true, json);
    }
  }]);

  return PolynomialFitRegression2D;
}(BaseRegression);
/**
 * Function that given a column vector return this: vector^power
 *
 * @param x - Column vector.
 * @param power - Pow number.
 * @return {Suite|Matrix}
 */




function powColVector(x, power) {
  var result = x.clone();

  for (var i = 0; i < x.rows; ++i) {
    result.set(i, 0, Math.pow(result.get(i, 0), power));
  }

  return result;
}
// EXTERNAL MODULE: ./node_modules/median-quickselect/lib/median-quickselect.min.js
var median_quickselect_min = __webpack_require__(136);
var median_quickselect_min_default = /*#__PURE__*/__webpack_require__.n(median_quickselect_min);

// EXTERNAL MODULE: ./node_modules/is-any-array/src/index.js
var src = __webpack_require__(32);
var src_default = /*#__PURE__*/__webpack_require__.n(src);

// CONCATENATED MODULE: ./node_modules/ml-array-median/lib-es6/index.js


/**
 * Computes the median of the given values
 * @param {Array<number>} input
 * @return {number}
 */

function median(input) {
  if (!src_default()(input)) {
    throw new TypeError('input must be an array');
  }

  if (input.length === 0) {
    throw new TypeError('input must not be empty');
  }

  return median_quickselect_min_default()(input.slice());
}

/* harmony default export */ var lib_es6 = (median);
// CONCATENATED MODULE: ./node_modules/ml-regression-theil-sen/src/index.js
function ml_regression_theil_sen_src_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ml_regression_theil_sen_src_typeof = function _typeof(obj) { return typeof obj; }; } else { ml_regression_theil_sen_src_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ml_regression_theil_sen_src_typeof(obj); }

function ml_regression_theil_sen_src_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ml_regression_theil_sen_src_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ml_regression_theil_sen_src_createClass(Constructor, protoProps, staticProps) { if (protoProps) ml_regression_theil_sen_src_defineProperties(Constructor.prototype, protoProps); if (staticProps) ml_regression_theil_sen_src_defineProperties(Constructor, staticProps); return Constructor; }

function ml_regression_theil_sen_src_possibleConstructorReturn(self, call) { if (call && (ml_regression_theil_sen_src_typeof(call) === "object" || typeof call === "function")) { return call; } return ml_regression_theil_sen_src_assertThisInitialized(self); }

function ml_regression_theil_sen_src_getPrototypeOf(o) { ml_regression_theil_sen_src_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ml_regression_theil_sen_src_getPrototypeOf(o); }

function ml_regression_theil_sen_src_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ml_regression_theil_sen_src_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ml_regression_theil_sen_src_setPrototypeOf(subClass, superClass); }

function ml_regression_theil_sen_src_setPrototypeOf(o, p) { ml_regression_theil_sen_src_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ml_regression_theil_sen_src_setPrototypeOf(o, p); }




var src_TheilSenRegression =
/*#__PURE__*/
function (_BaseRegression) {
  ml_regression_theil_sen_src_inherits(TheilSenRegression, _BaseRegression);

  /**
   * Theil–Sen estimator
   * https://en.wikipedia.org/wiki/Theil%E2%80%93Sen_estimator
   * @param {Array<number>|boolean} x
   * @param {Array<number>|object} y
   * @constructor
   */
  function TheilSenRegression(x, y) {
    var _this;

    ml_regression_theil_sen_src_classCallCheck(this, TheilSenRegression);

    _this = ml_regression_theil_sen_src_possibleConstructorReturn(this, ml_regression_theil_sen_src_getPrototypeOf(TheilSenRegression).call(this));

    if (x === true) {
      // loads the model
      _this.slope = y.slope;
      _this.intercept = y.intercept;
      _this.coefficients = y.coefficients;
    } else {
      // creates the model
      checkArraySize(x, y);
      theilSen(ml_regression_theil_sen_src_assertThisInitialized(_this), x, y);
    }

    return _this;
  }

  ml_regression_theil_sen_src_createClass(TheilSenRegression, [{
    key: "toJSON",
    value: function toJSON() {
      return {
        name: 'TheilSenRegression',
        slope: this.slope,
        intercept: this.intercept
      };
    }
  }, {
    key: "_predict",
    value: function _predict(input) {
      return this.slope * input + this.intercept;
    }
  }, {
    key: "computeX",
    value: function computeX(input) {
      return (input - this.intercept) / this.slope;
    }
  }, {
    key: "toString",
    value: function toString(precision) {
      var result = 'f(x) = ';

      if (this.slope) {
        var xFactor = maybeToPrecision(this.slope, precision);
        result += "".concat(Math.abs(xFactor - 1) < 1e-5 ? '' : "".concat(xFactor, " * "), "x");

        if (this.intercept) {
          var absIntercept = Math.abs(this.intercept);
          var operator = absIntercept === this.intercept ? '+' : '-';
          result += " ".concat(operator, " ").concat(maybeToPrecision(absIntercept, precision));
        }
      } else {
        result += maybeToPrecision(this.intercept, precision);
      }

      return result;
    }
  }, {
    key: "toLaTeX",
    value: function toLaTeX(precision) {
      return this.toString(precision);
    }
  }], [{
    key: "load",
    value: function load(json) {
      if (json.name !== 'TheilSenRegression') {
        throw new TypeError('not a Theil-Sen model');
      }

      return new TheilSenRegression(true, json);
    }
  }]);

  return TheilSenRegression;
}(BaseRegression);



function theilSen(regression, x, y) {
  var len = x.length;
  var slopes = new Array(len * len);
  var count = 0;

  for (var i = 0; i < len; ++i) {
    for (var j = i + 1; j < len; ++j) {
      if (x[i] !== x[j]) {
        slopes[count++] = (y[j] - y[i]) / (x[j] - x[i]);
      }
    }
  }

  slopes.length = count;
  var medianSlope = lib_es6(slopes);
  var cuts = new Array(len);

  for (var _i = 0; _i < len; ++_i) {
    cuts[_i] = y[_i] - medianSlope * x[_i];
  }

  regression.slope = medianSlope;
  regression.intercept = lib_es6(cuts);
  regression.coefficients = [regression.intercept, regression.slope];
}
// CONCATENATED MODULE: ./node_modules/ml-regression-robust-polynomial/src/index.js
function ml_regression_robust_polynomial_src_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ml_regression_robust_polynomial_src_typeof = function _typeof(obj) { return typeof obj; }; } else { ml_regression_robust_polynomial_src_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ml_regression_robust_polynomial_src_typeof(obj); }

function ml_regression_robust_polynomial_src_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ml_regression_robust_polynomial_src_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ml_regression_robust_polynomial_src_createClass(Constructor, protoProps, staticProps) { if (protoProps) ml_regression_robust_polynomial_src_defineProperties(Constructor.prototype, protoProps); if (staticProps) ml_regression_robust_polynomial_src_defineProperties(Constructor, staticProps); return Constructor; }

function ml_regression_robust_polynomial_src_possibleConstructorReturn(self, call) { if (call && (ml_regression_robust_polynomial_src_typeof(call) === "object" || typeof call === "function")) { return call; } return ml_regression_robust_polynomial_src_assertThisInitialized(self); }

function ml_regression_robust_polynomial_src_getPrototypeOf(o) { ml_regression_robust_polynomial_src_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ml_regression_robust_polynomial_src_getPrototypeOf(o); }

function ml_regression_robust_polynomial_src_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ml_regression_robust_polynomial_src_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ml_regression_robust_polynomial_src_setPrototypeOf(subClass, superClass); }

function ml_regression_robust_polynomial_src_setPrototypeOf(o, p) { ml_regression_robust_polynomial_src_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ml_regression_robust_polynomial_src_setPrototypeOf(o, p); }



/**
 * @class RobustPolynomialRegression
 * @param {Array<number>} x
 * @param {Array<number>} y
 * @param {number} degree - polynomial degree
 */

var src_RobustPolynomialRegression =
/*#__PURE__*/
function (_BaseRegression) {
  ml_regression_robust_polynomial_src_inherits(RobustPolynomialRegression, _BaseRegression);

  function RobustPolynomialRegression(x, y, degree) {
    var _this;

    ml_regression_robust_polynomial_src_classCallCheck(this, RobustPolynomialRegression);

    _this = ml_regression_robust_polynomial_src_possibleConstructorReturn(this, ml_regression_robust_polynomial_src_getPrototypeOf(RobustPolynomialRegression).call(this));

    if (x === true) {
      _this.degree = y.degree;
      _this.powers = y.powers;
      _this.coefficients = y.coefficients;
    } else {
      checkArraySize(x, y);
      robustPolynomial(ml_regression_robust_polynomial_src_assertThisInitialized(_this), x, y, degree);
    }

    return _this;
  }

  ml_regression_robust_polynomial_src_createClass(RobustPolynomialRegression, [{
    key: "toJSON",
    value: function toJSON() {
      return {
        name: 'robustPolynomialRegression',
        degree: this.degree,
        powers: this.powers,
        coefficients: this.coefficients
      };
    }
  }, {
    key: "_predict",
    value: function _predict(x) {
      return src_predict(x, this.powers, this.coefficients);
    }
    /**
     * Display the formula
     * @param {number} precision - precision for the numbers
     * @return {string}
     */

  }, {
    key: "toString",
    value: function toString(precision) {
      return this._toFormula(precision, false);
    }
    /**
     * Display the formula in LaTeX format
     * @param {number} precision - precision for the numbers
     * @return {string}
     */

  }, {
    key: "toLaTeX",
    value: function toLaTeX(precision) {
      return this._toFormula(precision, true);
    }
  }, {
    key: "_toFormula",
    value: function _toFormula(precision, isLaTeX) {
      var sup = '^';
      var closeSup = '';
      var times = ' * ';

      if (isLaTeX) {
        sup = '^{';
        closeSup = '}';
        times = '';
      }

      var fn = '';
      var str = '';

      for (var k = 0; k < this.coefficients.length; k++) {
        str = '';

        if (this.coefficients[k] !== 0) {
          if (this.powers[k] === 0) {
            str = maybeToPrecision(this.coefficients[k], precision);
          } else {
            if (this.powers[k] === 1) {
              str = "".concat(maybeToPrecision(this.coefficients[k], precision) + times, "x");
            } else {
              str = "".concat(maybeToPrecision(this.coefficients[k], precision) + times, "x").concat(sup).concat(this.powers[k]).concat(closeSup);
            }
          }

          if (this.coefficients[k] > 0 && k !== this.coefficients.length - 1) {
            str = " + ".concat(str);
          } else if (k !== this.coefficients.length - 1) {
            str = " ".concat(str);
          }
        }

        fn = str + fn;
      }

      if (fn.charAt(0) === '+') {
        fn = fn.slice(1);
      }

      return "f(x) = ".concat(fn);
    }
  }], [{
    key: "load",
    value: function load(json) {
      if (json.name !== 'robustPolynomialRegression') {
        throw new TypeError('not a RobustPolynomialRegression model');
      }

      return new RobustPolynomialRegression(true, json);
    }
  }]);

  return RobustPolynomialRegression;
}(BaseRegression);



function robustPolynomial(regression, x, y, degree) {
  var powers = Array(degree).fill(0).map(function (_, index) {
    return index;
  });
  var tuples = getRandomTuples(x, y, degree);
  var min;

  for (var i = 0; i < tuples.length; i++) {
    var tuple = tuples[i];
    var coefficients = calcCoefficients(tuple, powers);
    var residuals = x.slice();

    for (var j = 0; j < x.length; j++) {
      residuals[j] = y[j] - src_predict(x[j], powers, coefficients);
      residuals[j] = {
        residual: residuals[j] * residuals[j],
        coefficients: coefficients
      };
    }

    var median = residualsMedian(residuals);

    if (!min || median.residual < min.residual) {
      min = median;
    }
  }

  regression.degree = degree;
  regression.powers = powers;
  regression.coefficients = min.coefficients;
}
/**
 * @ignore
 * @param {Array<number>} x
 * @param {Array<number>} y
 * @param {number} degree
 * @return {Array<{x:number,y:number}>}
 */


function getRandomTuples(x, y, degree) {
  var len = Math.floor(x.length / degree);
  var tuples = new Array(len);

  for (var i = 0; i < x.length; i++) {
    var pos = Math.floor(Math.random() * len);
    var counter = 0;

    while (counter < x.length) {
      if (!tuples[pos]) {
        tuples[pos] = [{
          x: x[i],
          y: y[i]
        }];
        break;
      } else if (tuples[pos].length < degree) {
        tuples[pos].push({
          x: x[i],
          y: y[i]
        });
        break;
      } else {
        counter++;
        pos = (pos + 1) % len;
      }
    }

    if (counter === x.length) {
      return tuples;
    }
  }

  return tuples;
}
/**
 * @ignore
 * @param {{x:number,y:number}} tuple
 * @param {Array<number>} powers
 * @return {Array<number>}
 */


function calcCoefficients(tuple, powers) {
  var X = tuple.slice();
  var Y = tuple.slice();

  for (var i = 0; i < X.length; i++) {
    Y[i] = [tuple[i].y];
    X[i] = new Array(powers.length);

    for (var j = 0; j < powers.length; j++) {
      X[i][j] = Math.pow(tuple[i].x, powers[j]);
    }
  }

  return Object(decompositions["b" /* solve */])(X, Y).to1DArray();
}

function src_predict(x, powers, coefficients) {
  var y = 0;

  for (var k = 0; k < powers.length; k++) {
    y += coefficients[k] * Math.pow(x, powers[k]);
  }

  return y;
}

function residualsMedian(residuals) {
  residuals.sort(function (a, b) {
    return a.residual - b.residual;
  });
  var l = residuals.length;
  var half = Math.floor(l / 2);
  return l % 2 === 0 ? residuals[half - 1] : residuals[half];
}
// CONCATENATED MODULE: ./node_modules/ml-regression/src/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NLR", function() { return NLR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonLinearRegression", function() { return NLR; });
/* concated harmony reexport SimpleLinearRegression */__webpack_require__.d(__webpack_exports__, "SimpleLinearRegression", function() { return src_SimpleLinearRegression; });
/* concated harmony reexport SLR */__webpack_require__.d(__webpack_exports__, "SLR", function() { return src_SimpleLinearRegression; });
/* concated harmony reexport PolynomialRegression */__webpack_require__.d(__webpack_exports__, "PolynomialRegression", function() { return src_PolynomialRegression; });
/* concated harmony reexport ExponentialRegression */__webpack_require__.d(__webpack_exports__, "ExponentialRegression", function() { return src_ExponentialRegression; });
/* concated harmony reexport PowerRegression */__webpack_require__.d(__webpack_exports__, "PowerRegression", function() { return src_PowerRegression; });
/* concated harmony reexport MultivariateLinearRegression */__webpack_require__.d(__webpack_exports__, "MultivariateLinearRegression", function() { return src_MultivariateLinearRegression; });
/* concated harmony reexport KernelRidgeRegression */__webpack_require__.d(__webpack_exports__, "KernelRidgeRegression", function() { return kernel_ridge_regression_KernelRidgeRegression; });
/* concated harmony reexport KRR */__webpack_require__.d(__webpack_exports__, "KRR", function() { return kernel_ridge_regression_KernelRidgeRegression; });
/* concated harmony reexport PolinomialFitting2D */__webpack_require__.d(__webpack_exports__, "PolinomialFitting2D", function() { return poly_fit_regression2d_PolynomialFitRegression2D; });
/* concated harmony reexport TheilSenRegression */__webpack_require__.d(__webpack_exports__, "TheilSenRegression", function() { return src_TheilSenRegression; });
/* concated harmony reexport RobustPolynomialRegression */__webpack_require__.d(__webpack_exports__, "RobustPolynomialRegression", function() { return src_RobustPolynomialRegression; });






var NLR = {
  PotentialRegression: potential_regression_PotentialRegression
};


 // robust regressions




/***/ })
/******/ ]);