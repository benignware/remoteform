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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/@babel/runtime/helpers/defineProperty.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nmodule.exports = _defineProperty;\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime/helpers/defineProperty.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/objectSpread.js":
/*!**************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineProperty = __webpack_require__(/*! ./defineProperty */ \"../node_modules/@babel/runtime/helpers/defineProperty.js\");\n\nfunction _objectSpread(target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i] != null ? arguments[i] : {};\n    var ownKeys = Object.keys(source);\n\n    if (typeof Object.getOwnPropertySymbols === 'function') {\n      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {\n        return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n      }));\n    }\n\n    ownKeys.forEach(function (key) {\n      defineProperty(target, key, source[key]);\n    });\n  }\n\n  return target;\n}\n\nmodule.exports = _objectSpread;\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime/helpers/objectSpread.js?");

/***/ }),

/***/ "../node_modules/get-form-data/es/index.js":
/*!*************************************************!*\
  !*** ../node_modules/get-form-data/es/index.js ***!
  \*************************************************/
/*! exports provided: default, getFieldData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getFormData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFieldData\", function() { return getFieldData; });\nvar NODE_LIST_CLASSES = {\n  '[object HTMLCollection]': true,\n  '[object NodeList]': true,\n  '[object RadioNodeList]': true\n\n  // .type values for elements which can appear in .elements and should be ignored\n};var IGNORED_ELEMENT_TYPES = {\n  'button': true,\n  'fieldset': true,\n  'reset': true,\n  'submit': true\n};\n\nvar CHECKED_INPUT_TYPES = {\n  'checkbox': true,\n  'radio': true\n};\n\nvar TRIM_RE = /^\\s+|\\s+$/g;\n\nvar slice = Array.prototype.slice;\nvar toString = Object.prototype.toString;\n\n/**\n * @param {HTMLFormElement} form\n * @param {Object} options\n * @return {Object.<string,(string|Array.<string>)>} an object containing\n *   submittable value(s) held in the form's .elements collection, with\n *   properties named as per element names or ids.\n */\n\nfunction getFormData(form) {\n  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { trim: false };\n\n  if (!form) {\n    throw new Error('A form is required by getFormData, was given form=' + form);\n  }\n\n  var data = {};\n  var elementName = void 0;\n  var elementNames = [];\n  var elementNameLookup = {};\n\n  // Get unique submittable element names for the form\n  for (var i = 0, l = form.elements.length; i < l; i++) {\n    var element = form.elements[i];\n    if (IGNORED_ELEMENT_TYPES[element.type] || element.disabled) {\n      continue;\n    }\n    elementName = element.name || element.id;\n    if (elementName && !elementNameLookup[elementName]) {\n      elementNames.push(elementName);\n      elementNameLookup[elementName] = true;\n    }\n  }\n\n  // Extract element data name-by-name for consistent handling of special cases\n  // around elements which contain multiple inputs.\n  for (var _i = 0, _l = elementNames.length; _i < _l; _i++) {\n    elementName = elementNames[_i];\n    var value = getFieldData(form, elementName, options);\n    if (value != null) {\n      data[elementName] = value;\n    }\n  }\n\n  return data;\n}\n\n/**\n * @param {HTMLFormElement} form\n * @param {string} fieldName\n * @param {Object} options\n * @return {(string|Array.<string>)} submittable value(s) in the form for a\n *   named element from its .elements collection, or null if there was no\n *   element with that name or the element had no submittable value(s).\n */\nfunction getFieldData(form, fieldName) {\n  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : { trim: false };\n\n  if (!form) {\n    throw new Error('A form is required by getFieldData, was given form=' + form);\n  }\n  if (!fieldName && toString.call(fieldName) !== '[object String]') {\n    throw new Error('A field name is required by getFieldData, was given fieldName=' + fieldName);\n  }\n\n  var element = form.elements[fieldName];\n  if (!element || element.disabled) {\n    return null;\n  }\n\n  if (!NODE_LIST_CLASSES[toString.call(element)]) {\n    return getFormElementValue(element, options.trim);\n  }\n\n  // Deal with multiple form controls which have the same name\n  var data = [];\n  var allRadios = true;\n  for (var i = 0, l = element.length; i < l; i++) {\n    if (element[i].disabled) {\n      continue;\n    }\n    if (allRadios && element[i].type !== 'radio') {\n      allRadios = false;\n    }\n    var value = getFormElementValue(element[i], options.trim);\n    if (value != null) {\n      data = data.concat(value);\n    }\n  }\n\n  // Special case for an element with multiple same-named inputs which were all\n  // radio buttons: if there was a selected value, only return the value.\n  if (allRadios && data.length === 1) {\n    return data[0];\n  }\n\n  return data.length > 0 ? data : null;\n}\n\n/**\n * @param {HTMLElement} element a form element.\n * @param {booleam} trim should values for text entry inputs be trimmed?\n * @return {(string|Array.<string>|File|Array.<File>)} the element's submittable\n *   value(s), or null if it had none.\n */\nfunction getFormElementValue(element, trim) {\n  var value = null;\n  var type = element.type;\n\n\n  if (type === 'select-one') {\n    if (element.options.length) {\n      value = element.options[element.selectedIndex].value;\n    }\n    return value;\n  }\n\n  if (type === 'select-multiple') {\n    value = [];\n    for (var i = 0, l = element.options.length; i < l; i++) {\n      if (element.options[i].selected) {\n        value.push(element.options[i].value);\n      }\n    }\n    if (value.length === 0) {\n      value = null;\n    }\n    return value;\n  }\n\n  // If a file input doesn't have a files attribute, fall through to using its\n  // value attribute.\n  if (type === 'file' && 'files' in element) {\n    if (element.multiple) {\n      value = slice.call(element.files);\n      if (value.length === 0) {\n        value = null;\n      }\n    } else {\n      // Should be null if not present, according to the spec\n      value = element.files[0];\n    }\n    return value;\n  }\n\n  if (!CHECKED_INPUT_TYPES[type]) {\n    value = trim ? element.value.replace(TRIM_RE, '') : element.value;\n  } else if (element.checked) {\n    value = element.value;\n  }\n\n  return value;\n}\n\n// For UMD build access to getFieldData\ngetFormData.getFieldData = getFieldData;\n\n//# sourceURL=webpack:///../node_modules/get-form-data/es/index.js?");

/***/ }),

/***/ "../node_modules/qs/lib/formats.js":
/*!*****************************************!*\
  !*** ../node_modules/qs/lib/formats.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar replace = String.prototype.replace;\nvar percentTwenties = /%20/g;\n\nmodule.exports = {\n    'default': 'RFC3986',\n    formatters: {\n        RFC1738: function (value) {\n            return replace.call(value, percentTwenties, '+');\n        },\n        RFC3986: function (value) {\n            return value;\n        }\n    },\n    RFC1738: 'RFC1738',\n    RFC3986: 'RFC3986'\n};\n\n\n//# sourceURL=webpack:///../node_modules/qs/lib/formats.js?");

/***/ }),

/***/ "../node_modules/qs/lib/index.js":
/*!***************************************!*\
  !*** ../node_modules/qs/lib/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stringify = __webpack_require__(/*! ./stringify */ \"../node_modules/qs/lib/stringify.js\");\nvar parse = __webpack_require__(/*! ./parse */ \"../node_modules/qs/lib/parse.js\");\nvar formats = __webpack_require__(/*! ./formats */ \"../node_modules/qs/lib/formats.js\");\n\nmodule.exports = {\n    formats: formats,\n    parse: parse,\n    stringify: stringify\n};\n\n\n//# sourceURL=webpack:///../node_modules/qs/lib/index.js?");

/***/ }),

/***/ "../node_modules/qs/lib/parse.js":
/*!***************************************!*\
  !*** ../node_modules/qs/lib/parse.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./utils */ \"../node_modules/qs/lib/utils.js\");\n\nvar has = Object.prototype.hasOwnProperty;\n\nvar defaults = {\n    allowDots: false,\n    allowPrototypes: false,\n    arrayLimit: 20,\n    charset: 'utf-8',\n    charsetSentinel: false,\n    comma: false,\n    decoder: utils.decode,\n    delimiter: '&',\n    depth: 5,\n    ignoreQueryPrefix: false,\n    interpretNumericEntities: false,\n    parameterLimit: 1000,\n    parseArrays: true,\n    plainObjects: false,\n    strictNullHandling: false\n};\n\nvar interpretNumericEntities = function (str) {\n    return str.replace(/&#(\\d+);/g, function ($0, numberStr) {\n        return String.fromCharCode(parseInt(numberStr, 10));\n    });\n};\n\n// This is what browsers will submit when the ✓ character occurs in an\n// application/x-www-form-urlencoded body and the encoding of the page containing\n// the form is iso-8859-1, or when the submitted form has an accept-charset\n// attribute of iso-8859-1. Presumably also with other charsets that do not contain\n// the ✓ character, such as us-ascii.\nvar isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')\n\n// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.\nvar charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')\n\nvar parseValues = function parseQueryStringValues(str, options) {\n    var obj = {};\n    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\\?/, '') : str;\n    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;\n    var parts = cleanStr.split(options.delimiter, limit);\n    var skipIndex = -1; // Keep track of where the utf8 sentinel was found\n    var i;\n\n    var charset = options.charset;\n    if (options.charsetSentinel) {\n        for (i = 0; i < parts.length; ++i) {\n            if (parts[i].indexOf('utf8=') === 0) {\n                if (parts[i] === charsetSentinel) {\n                    charset = 'utf-8';\n                } else if (parts[i] === isoSentinel) {\n                    charset = 'iso-8859-1';\n                }\n                skipIndex = i;\n                i = parts.length; // The eslint settings do not allow break;\n            }\n        }\n    }\n\n    for (i = 0; i < parts.length; ++i) {\n        if (i === skipIndex) {\n            continue;\n        }\n        var part = parts[i];\n\n        var bracketEqualsPos = part.indexOf(']=');\n        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;\n\n        var key, val;\n        if (pos === -1) {\n            key = options.decoder(part, defaults.decoder, charset);\n            val = options.strictNullHandling ? null : '';\n        } else {\n            key = options.decoder(part.slice(0, pos), defaults.decoder, charset);\n            val = options.decoder(part.slice(pos + 1), defaults.decoder, charset);\n        }\n\n        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {\n            val = interpretNumericEntities(val);\n        }\n\n        if (val && options.comma && val.indexOf(',') > -1) {\n            val = val.split(',');\n        }\n\n        if (has.call(obj, key)) {\n            obj[key] = utils.combine(obj[key], val);\n        } else {\n            obj[key] = val;\n        }\n    }\n\n    return obj;\n};\n\nvar parseObject = function (chain, val, options) {\n    var leaf = val;\n\n    for (var i = chain.length - 1; i >= 0; --i) {\n        var obj;\n        var root = chain[i];\n\n        if (root === '[]' && options.parseArrays) {\n            obj = [].concat(leaf);\n        } else {\n            obj = options.plainObjects ? Object.create(null) : {};\n            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;\n            var index = parseInt(cleanRoot, 10);\n            if (!options.parseArrays && cleanRoot === '') {\n                obj = { 0: leaf };\n            } else if (\n                !isNaN(index)\n                && root !== cleanRoot\n                && String(index) === cleanRoot\n                && index >= 0\n                && (options.parseArrays && index <= options.arrayLimit)\n            ) {\n                obj = [];\n                obj[index] = leaf;\n            } else {\n                obj[cleanRoot] = leaf;\n            }\n        }\n\n        leaf = obj;\n    }\n\n    return leaf;\n};\n\nvar parseKeys = function parseQueryStringKeys(givenKey, val, options) {\n    if (!givenKey) {\n        return;\n    }\n\n    // Transform dot notation to bracket notation\n    var key = options.allowDots ? givenKey.replace(/\\.([^.[]+)/g, '[$1]') : givenKey;\n\n    // The regex chunks\n\n    var brackets = /(\\[[^[\\]]*])/;\n    var child = /(\\[[^[\\]]*])/g;\n\n    // Get the parent\n\n    var segment = brackets.exec(key);\n    var parent = segment ? key.slice(0, segment.index) : key;\n\n    // Stash the parent if it exists\n\n    var keys = [];\n    if (parent) {\n        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties\n        if (!options.plainObjects && has.call(Object.prototype, parent)) {\n            if (!options.allowPrototypes) {\n                return;\n            }\n        }\n\n        keys.push(parent);\n    }\n\n    // Loop through children appending to the array until we hit depth\n\n    var i = 0;\n    while ((segment = child.exec(key)) !== null && i < options.depth) {\n        i += 1;\n        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {\n            if (!options.allowPrototypes) {\n                return;\n            }\n        }\n        keys.push(segment[1]);\n    }\n\n    // If there's a remainder, just add whatever is left\n\n    if (segment) {\n        keys.push('[' + key.slice(segment.index) + ']');\n    }\n\n    return parseObject(keys, val, options);\n};\n\nvar normalizeParseOptions = function normalizeParseOptions(opts) {\n    if (!opts) {\n        return defaults;\n    }\n\n    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {\n        throw new TypeError('Decoder has to be a function.');\n    }\n\n    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {\n        throw new Error('The charset option must be either utf-8, iso-8859-1, or undefined');\n    }\n    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;\n\n    return {\n        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,\n        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,\n        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,\n        charset: charset,\n        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,\n        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,\n        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,\n        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,\n        depth: typeof opts.depth === 'number' ? opts.depth : defaults.depth,\n        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,\n        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,\n        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,\n        parseArrays: opts.parseArrays !== false,\n        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,\n        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling\n    };\n};\n\nmodule.exports = function (str, opts) {\n    var options = normalizeParseOptions(opts);\n\n    if (str === '' || str === null || typeof str === 'undefined') {\n        return options.plainObjects ? Object.create(null) : {};\n    }\n\n    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;\n    var obj = options.plainObjects ? Object.create(null) : {};\n\n    // Iterate over the keys and setup the new object\n\n    var keys = Object.keys(tempObj);\n    for (var i = 0; i < keys.length; ++i) {\n        var key = keys[i];\n        var newObj = parseKeys(key, tempObj[key], options);\n        obj = utils.merge(obj, newObj, options);\n    }\n\n    return utils.compact(obj);\n};\n\n\n//# sourceURL=webpack:///../node_modules/qs/lib/parse.js?");

/***/ }),

/***/ "../node_modules/qs/lib/stringify.js":
/*!*******************************************!*\
  !*** ../node_modules/qs/lib/stringify.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./utils */ \"../node_modules/qs/lib/utils.js\");\nvar formats = __webpack_require__(/*! ./formats */ \"../node_modules/qs/lib/formats.js\");\nvar has = Object.prototype.hasOwnProperty;\n\nvar arrayPrefixGenerators = {\n    brackets: function brackets(prefix) { // eslint-disable-line func-name-matching\n        return prefix + '[]';\n    },\n    comma: 'comma',\n    indices: function indices(prefix, key) { // eslint-disable-line func-name-matching\n        return prefix + '[' + key + ']';\n    },\n    repeat: function repeat(prefix) { // eslint-disable-line func-name-matching\n        return prefix;\n    }\n};\n\nvar isArray = Array.isArray;\nvar push = Array.prototype.push;\nvar pushToArray = function (arr, valueOrArray) {\n    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);\n};\n\nvar toISO = Date.prototype.toISOString;\n\nvar defaults = {\n    addQueryPrefix: false,\n    allowDots: false,\n    charset: 'utf-8',\n    charsetSentinel: false,\n    delimiter: '&',\n    encode: true,\n    encoder: utils.encode,\n    encodeValuesOnly: false,\n    formatter: formats.formatters[formats['default']],\n    // deprecated\n    indices: false,\n    serializeDate: function serializeDate(date) { // eslint-disable-line func-name-matching\n        return toISO.call(date);\n    },\n    skipNulls: false,\n    strictNullHandling: false\n};\n\nvar stringify = function stringify( // eslint-disable-line func-name-matching\n    object,\n    prefix,\n    generateArrayPrefix,\n    strictNullHandling,\n    skipNulls,\n    encoder,\n    filter,\n    sort,\n    allowDots,\n    serializeDate,\n    formatter,\n    encodeValuesOnly,\n    charset\n) {\n    var obj = object;\n    if (typeof filter === 'function') {\n        obj = filter(prefix, obj);\n    } else if (obj instanceof Date) {\n        obj = serializeDate(obj);\n    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {\n        obj = obj.join(',');\n    }\n\n    if (obj === null) {\n        if (strictNullHandling) {\n            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset) : prefix;\n        }\n\n        obj = '';\n    }\n\n    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || utils.isBuffer(obj)) {\n        if (encoder) {\n            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset);\n            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset))];\n        }\n        return [formatter(prefix) + '=' + formatter(String(obj))];\n    }\n\n    var values = [];\n\n    if (typeof obj === 'undefined') {\n        return values;\n    }\n\n    var objKeys;\n    if (isArray(filter)) {\n        objKeys = filter;\n    } else {\n        var keys = Object.keys(obj);\n        objKeys = sort ? keys.sort(sort) : keys;\n    }\n\n    for (var i = 0; i < objKeys.length; ++i) {\n        var key = objKeys[i];\n\n        if (skipNulls && obj[key] === null) {\n            continue;\n        }\n\n        if (isArray(obj)) {\n            pushToArray(values, stringify(\n                obj[key],\n                typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix,\n                generateArrayPrefix,\n                strictNullHandling,\n                skipNulls,\n                encoder,\n                filter,\n                sort,\n                allowDots,\n                serializeDate,\n                formatter,\n                encodeValuesOnly,\n                charset\n            ));\n        } else {\n            pushToArray(values, stringify(\n                obj[key],\n                prefix + (allowDots ? '.' + key : '[' + key + ']'),\n                generateArrayPrefix,\n                strictNullHandling,\n                skipNulls,\n                encoder,\n                filter,\n                sort,\n                allowDots,\n                serializeDate,\n                formatter,\n                encodeValuesOnly,\n                charset\n            ));\n        }\n    }\n\n    return values;\n};\n\nvar normalizeStringifyOptions = function normalizeStringifyOptions(opts) {\n    if (!opts) {\n        return defaults;\n    }\n\n    if (opts.encoder !== null && opts.encoder !== undefined && typeof opts.encoder !== 'function') {\n        throw new TypeError('Encoder has to be a function.');\n    }\n\n    var charset = opts.charset || defaults.charset;\n    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {\n        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');\n    }\n\n    var format = formats['default'];\n    if (typeof opts.format !== 'undefined') {\n        if (!has.call(formats.formatters, opts.format)) {\n            throw new TypeError('Unknown format option provided.');\n        }\n        format = opts.format;\n    }\n    var formatter = formats.formatters[format];\n\n    var filter = defaults.filter;\n    if (typeof opts.filter === 'function' || isArray(opts.filter)) {\n        filter = opts.filter;\n    }\n\n    return {\n        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,\n        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,\n        charset: charset,\n        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,\n        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,\n        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,\n        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,\n        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,\n        filter: filter,\n        formatter: formatter,\n        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,\n        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,\n        sort: typeof opts.sort === 'function' ? opts.sort : null,\n        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling\n    };\n};\n\nmodule.exports = function (object, opts) {\n    var obj = object;\n    var options = normalizeStringifyOptions(opts);\n\n    var objKeys;\n    var filter;\n\n    if (typeof options.filter === 'function') {\n        filter = options.filter;\n        obj = filter('', obj);\n    } else if (isArray(options.filter)) {\n        filter = options.filter;\n        objKeys = filter;\n    }\n\n    var keys = [];\n\n    if (typeof obj !== 'object' || obj === null) {\n        return '';\n    }\n\n    var arrayFormat;\n    if (opts && opts.arrayFormat in arrayPrefixGenerators) {\n        arrayFormat = opts.arrayFormat;\n    } else if (opts && 'indices' in opts) {\n        arrayFormat = opts.indices ? 'indices' : 'repeat';\n    } else {\n        arrayFormat = 'indices';\n    }\n\n    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];\n\n    if (!objKeys) {\n        objKeys = Object.keys(obj);\n    }\n\n    if (options.sort) {\n        objKeys.sort(options.sort);\n    }\n\n    for (var i = 0; i < objKeys.length; ++i) {\n        var key = objKeys[i];\n\n        if (options.skipNulls && obj[key] === null) {\n            continue;\n        }\n        pushToArray(keys, stringify(\n            obj[key],\n            key,\n            generateArrayPrefix,\n            options.strictNullHandling,\n            options.skipNulls,\n            options.encode ? options.encoder : null,\n            options.filter,\n            options.sort,\n            options.allowDots,\n            options.serializeDate,\n            options.formatter,\n            options.encodeValuesOnly,\n            options.charset\n        ));\n    }\n\n    var joined = keys.join(options.delimiter);\n    var prefix = options.addQueryPrefix === true ? '?' : '';\n\n    if (options.charsetSentinel) {\n        if (options.charset === 'iso-8859-1') {\n            // encodeURIComponent('&#10003;'), the \"numeric entity\" representation of a checkmark\n            prefix += 'utf8=%26%2310003%3B&';\n        } else {\n            // encodeURIComponent('✓')\n            prefix += 'utf8=%E2%9C%93&';\n        }\n    }\n\n    return joined.length > 0 ? prefix + joined : '';\n};\n\n\n//# sourceURL=webpack:///../node_modules/qs/lib/stringify.js?");

/***/ }),

/***/ "../node_modules/qs/lib/utils.js":
/*!***************************************!*\
  !*** ../node_modules/qs/lib/utils.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar has = Object.prototype.hasOwnProperty;\nvar isArray = Array.isArray;\n\nvar hexTable = (function () {\n    var array = [];\n    for (var i = 0; i < 256; ++i) {\n        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());\n    }\n\n    return array;\n}());\n\nvar compactQueue = function compactQueue(queue) {\n    while (queue.length > 1) {\n        var item = queue.pop();\n        var obj = item.obj[item.prop];\n\n        if (isArray(obj)) {\n            var compacted = [];\n\n            for (var j = 0; j < obj.length; ++j) {\n                if (typeof obj[j] !== 'undefined') {\n                    compacted.push(obj[j]);\n                }\n            }\n\n            item.obj[item.prop] = compacted;\n        }\n    }\n};\n\nvar arrayToObject = function arrayToObject(source, options) {\n    var obj = options && options.plainObjects ? Object.create(null) : {};\n    for (var i = 0; i < source.length; ++i) {\n        if (typeof source[i] !== 'undefined') {\n            obj[i] = source[i];\n        }\n    }\n\n    return obj;\n};\n\nvar merge = function merge(target, source, options) {\n    if (!source) {\n        return target;\n    }\n\n    if (typeof source !== 'object') {\n        if (isArray(target)) {\n            target.push(source);\n        } else if (target && typeof target === 'object') {\n            if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {\n                target[source] = true;\n            }\n        } else {\n            return [target, source];\n        }\n\n        return target;\n    }\n\n    if (!target || typeof target !== 'object') {\n        return [target].concat(source);\n    }\n\n    var mergeTarget = target;\n    if (isArray(target) && !isArray(source)) {\n        mergeTarget = arrayToObject(target, options);\n    }\n\n    if (isArray(target) && isArray(source)) {\n        source.forEach(function (item, i) {\n            if (has.call(target, i)) {\n                var targetItem = target[i];\n                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {\n                    target[i] = merge(targetItem, item, options);\n                } else {\n                    target.push(item);\n                }\n            } else {\n                target[i] = item;\n            }\n        });\n        return target;\n    }\n\n    return Object.keys(source).reduce(function (acc, key) {\n        var value = source[key];\n\n        if (has.call(acc, key)) {\n            acc[key] = merge(acc[key], value, options);\n        } else {\n            acc[key] = value;\n        }\n        return acc;\n    }, mergeTarget);\n};\n\nvar assign = function assignSingleSource(target, source) {\n    return Object.keys(source).reduce(function (acc, key) {\n        acc[key] = source[key];\n        return acc;\n    }, target);\n};\n\nvar decode = function (str, decoder, charset) {\n    var strWithoutPlus = str.replace(/\\+/g, ' ');\n    if (charset === 'iso-8859-1') {\n        // unescape never throws, no try...catch needed:\n        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);\n    }\n    // utf-8\n    try {\n        return decodeURIComponent(strWithoutPlus);\n    } catch (e) {\n        return strWithoutPlus;\n    }\n};\n\nvar encode = function encode(str, defaultEncoder, charset) {\n    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.\n    // It has been adapted here for stricter adherence to RFC 3986\n    if (str.length === 0) {\n        return str;\n    }\n\n    var string = typeof str === 'string' ? str : String(str);\n\n    if (charset === 'iso-8859-1') {\n        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {\n            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';\n        });\n    }\n\n    var out = '';\n    for (var i = 0; i < string.length; ++i) {\n        var c = string.charCodeAt(i);\n\n        if (\n            c === 0x2D // -\n            || c === 0x2E // .\n            || c === 0x5F // _\n            || c === 0x7E // ~\n            || (c >= 0x30 && c <= 0x39) // 0-9\n            || (c >= 0x41 && c <= 0x5A) // a-z\n            || (c >= 0x61 && c <= 0x7A) // A-Z\n        ) {\n            out += string.charAt(i);\n            continue;\n        }\n\n        if (c < 0x80) {\n            out = out + hexTable[c];\n            continue;\n        }\n\n        if (c < 0x800) {\n            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);\n            continue;\n        }\n\n        if (c < 0xD800 || c >= 0xE000) {\n            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);\n            continue;\n        }\n\n        i += 1;\n        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));\n        out += hexTable[0xF0 | (c >> 18)]\n            + hexTable[0x80 | ((c >> 12) & 0x3F)]\n            + hexTable[0x80 | ((c >> 6) & 0x3F)]\n            + hexTable[0x80 | (c & 0x3F)];\n    }\n\n    return out;\n};\n\nvar compact = function compact(value) {\n    var queue = [{ obj: { o: value }, prop: 'o' }];\n    var refs = [];\n\n    for (var i = 0; i < queue.length; ++i) {\n        var item = queue[i];\n        var obj = item.obj[item.prop];\n\n        var keys = Object.keys(obj);\n        for (var j = 0; j < keys.length; ++j) {\n            var key = keys[j];\n            var val = obj[key];\n            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {\n                queue.push({ obj: obj, prop: key });\n                refs.push(val);\n            }\n        }\n    }\n\n    compactQueue(queue);\n\n    return value;\n};\n\nvar isRegExp = function isRegExp(obj) {\n    return Object.prototype.toString.call(obj) === '[object RegExp]';\n};\n\nvar isBuffer = function isBuffer(obj) {\n    if (!obj || typeof obj !== 'object') {\n        return false;\n    }\n\n    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));\n};\n\nvar combine = function combine(a, b) {\n    return [].concat(a, b);\n};\n\nmodule.exports = {\n    arrayToObject: arrayToObject,\n    assign: assign,\n    combine: combine,\n    compact: compact,\n    decode: decode,\n    encode: encode,\n    isBuffer: isBuffer,\n    isRegExp: isRegExp,\n    merge: merge\n};\n\n\n//# sourceURL=webpack:///../node_modules/qs/lib/utils.js?");

/***/ }),

/***/ "../node_modules/unique-selector/lib/getAttributes.js":
/*!************************************************************!*\
  !*** ../node_modules/unique-selector/lib/getAttributes.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getAttributes = getAttributes;\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\n/**\n * Returns the Attribute selectors of the element\n * @param  { DOM Element } element\n * @param  { Array } array of attributes to ignore\n * @return { Array }\n */\nfunction getAttributes(el) {\n  var attributesToIgnore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['id', 'class', 'length'];\n  var attributes = el.attributes;\n\n  var attrs = [].concat(_toConsumableArray(attributes));\n\n  return attrs.reduce(function (sum, next) {\n    if (!(attributesToIgnore.indexOf(next.nodeName) > -1)) {\n      sum.push('[' + next.nodeName + '=\"' + next.value + '\"]');\n    }\n    return sum;\n  }, []);\n}\n\n//# sourceURL=webpack:///../node_modules/unique-selector/lib/getAttributes.js?");

/***/ }),

/***/ "../node_modules/unique-selector/lib/getClasses.js":
/*!*********************************************************!*\
  !*** ../node_modules/unique-selector/lib/getClasses.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getClasses = getClasses;\nexports.getClassSelectors = getClassSelectors;\n/**\n * Get class names for an element\n *\n * @pararm { Element } el\n * @return { Array }\n */\nfunction getClasses(el) {\n  if (!el.hasAttribute('class')) {\n    return [];\n  }\n\n  try {\n    return Array.prototype.slice.call(el.classList);\n  } catch (e) {\n    var className = el.getAttribute('class');\n\n    // remove duplicate and leading/trailing whitespaces\n    className = className.trim().replace(/\\s+/g, ' ');\n\n    // split into separate classnames\n    return className.split(' ');\n  }\n}\n\n/**\n * Returns the Class selectors of the element\n * @param  { Object } element\n * @return { Array }\n */\nfunction getClassSelectors(el) {\n  var classList = getClasses(el).filter(Boolean);\n  return classList.map(function (cl) {\n    return '.' + cl;\n  });\n}\n\n//# sourceURL=webpack:///../node_modules/unique-selector/lib/getClasses.js?");

/***/ }),

/***/ "../node_modules/unique-selector/lib/getCombinations.js":
/*!**************************************************************!*\
  !*** ../node_modules/unique-selector/lib/getCombinations.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.getCombinations = getCombinations;\n/**\n * Recursively combinate items.\n * @param  { Array } result\n * @param  { Array } items\n * @param  { Array } data\n * @param  { Number } start\n * @param  { Number } end\n * @param  { Number } index\n * @param  { Number } k\n */\nfunction kCombinations(result, items, data, start, end, index, k) {\n    if (index === k) {\n        result.push(data.slice(0, index).join(''));\n        return;\n    }\n\n    for (var i = start; i <= end && end - i + 1 >= k - index; ++i) {\n        data[index] = items[i];\n        kCombinations(result, items, data, i + 1, end, index + 1, k);\n    }\n}\n\n/**\n * Returns all the possible selector combinations\n * @param  { Array } items\n * @param  { Number } k\n * @return { Array }\n */\nfunction getCombinations(items, k) {\n    var result = [],\n        n = items.length,\n        data = [];\n\n    for (var l = 1; l <= k; ++l) {\n        kCombinations(result, items, data, 0, n - 1, 0, l);\n    }\n\n    return result;\n}\n\n//# sourceURL=webpack:///../node_modules/unique-selector/lib/getCombinations.js?");

/***/ }),

/***/ "../node_modules/unique-selector/lib/getID.js":
/*!****************************************************!*\
  !*** ../node_modules/unique-selector/lib/getID.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getID = getID;\n/**\n * Returns the Tag of the element\n * @param  { Object } element\n * @return { String }\n */\nfunction getID(el) {\n  var id = el.getAttribute('id');\n\n  if (id !== null && id !== '') {\n    return '#' + id;\n  }\n  return null;\n}\n\n//# sourceURL=webpack:///../node_modules/unique-selector/lib/getID.js?");

/***/ }),

/***/ "../node_modules/unique-selector/lib/getNthChild.js":
/*!**********************************************************!*\
  !*** ../node_modules/unique-selector/lib/getNthChild.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getNthChild = getNthChild;\n\nvar _isElement = __webpack_require__(/*! ./isElement */ \"../node_modules/unique-selector/lib/isElement.js\");\n\n/**\n * Returns the selectors based on the position of the element relative to its siblings\n * @param  { Object } element\n * @return { Array }\n */\nfunction getNthChild(element) {\n  var counter = 0;\n  var k = void 0;\n  var sibling = void 0;\n  var parentNode = element.parentNode;\n\n\n  if (Boolean(parentNode)) {\n    var childNodes = parentNode.childNodes;\n\n    var len = childNodes.length;\n    for (k = 0; k < len; k++) {\n      sibling = childNodes[k];\n      if ((0, _isElement.isElement)(sibling)) {\n        counter++;\n        if (sibling === element) {\n          return ':nth-child(' + counter + ')';\n        }\n      }\n    }\n  }\n  return null;\n}\n\n//# sourceURL=webpack:///../node_modules/unique-selector/lib/getNthChild.js?");

/***/ }),

/***/ "../node_modules/unique-selector/lib/getParents.js":
/*!*********************************************************!*\
  !*** ../node_modules/unique-selector/lib/getParents.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getParents = getParents;\n\nvar _isElement = __webpack_require__(/*! ./isElement */ \"../node_modules/unique-selector/lib/isElement.js\");\n\n/**\n * Returns all the element and all of its parents\n * @param { DOM Element }\n * @return { Array of DOM elements }\n */\nfunction getParents(el) {\n  var parents = [];\n  var currentElement = el;\n  while ((0, _isElement.isElement)(currentElement)) {\n    parents.push(currentElement);\n    currentElement = currentElement.parentNode;\n  }\n\n  return parents;\n}\n\n//# sourceURL=webpack:///../node_modules/unique-selector/lib/getParents.js?");

/***/ }),

/***/ "../node_modules/unique-selector/lib/getTag.js":
/*!*****************************************************!*\
  !*** ../node_modules/unique-selector/lib/getTag.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getTag = getTag;\n/**\n * Returns the Tag of the element\n * @param  { Object } element\n * @return { String }\n */\nfunction getTag(el) {\n  return el.tagName.toLowerCase().replace(/:/g, '\\\\:');\n}\n\n//# sourceURL=webpack:///../node_modules/unique-selector/lib/getTag.js?");

/***/ }),

/***/ "../node_modules/unique-selector/lib/index.js":
/*!****************************************************!*\
  !*** ../node_modules/unique-selector/lib/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = unique;\n\nvar _getID = __webpack_require__(/*! ./getID */ \"../node_modules/unique-selector/lib/getID.js\");\n\nvar _getClasses = __webpack_require__(/*! ./getClasses */ \"../node_modules/unique-selector/lib/getClasses.js\");\n\nvar _getCombinations = __webpack_require__(/*! ./getCombinations */ \"../node_modules/unique-selector/lib/getCombinations.js\");\n\nvar _getAttributes = __webpack_require__(/*! ./getAttributes */ \"../node_modules/unique-selector/lib/getAttributes.js\");\n\nvar _getNthChild = __webpack_require__(/*! ./getNthChild */ \"../node_modules/unique-selector/lib/getNthChild.js\");\n\nvar _getTag = __webpack_require__(/*! ./getTag */ \"../node_modules/unique-selector/lib/getTag.js\");\n\nvar _isUnique = __webpack_require__(/*! ./isUnique */ \"../node_modules/unique-selector/lib/isUnique.js\");\n\nvar _getParents = __webpack_require__(/*! ./getParents */ \"../node_modules/unique-selector/lib/getParents.js\");\n\n/**\n * Returns all the selectors of the elmenet\n * @param  { Object } element\n * @return { Object }\n */\n/**\n * Expose `unique`\n */\n\nfunction getAllSelectors(el, selectors, attributesToIgnore) {\n  var funcs = {\n    'Tag': _getTag.getTag,\n    'NthChild': _getNthChild.getNthChild,\n    'Attributes': function Attributes(elem) {\n      return (0, _getAttributes.getAttributes)(elem, attributesToIgnore);\n    },\n    'Class': _getClasses.getClassSelectors,\n    'ID': _getID.getID\n  };\n\n  return selectors.reduce(function (res, next) {\n    res[next] = funcs[next](el);\n    return res;\n  }, {});\n}\n\n/**\n * Tests uniqueNess of the element inside its parent\n * @param  { Object } element\n * @param { String } Selectors\n * @return { Boolean }\n */\nfunction testUniqueness(element, selector) {\n  var parentNode = element.parentNode;\n\n  var elements = parentNode.querySelectorAll(selector);\n  return elements.length === 1 && elements[0] === element;\n}\n\n/**\n * Tests all selectors for uniqueness and returns the first unique selector.\n * @param  { Object } element\n * @param  { Array } selectors\n * @return { String }\n */\nfunction getFirstUnique(element, selectors) {\n  return selectors.find(testUniqueness.bind(null, element));\n}\n\n/**\n * Checks all the possible selectors of an element to find one unique and return it\n * @param  { Object } element\n * @param  { Array } items\n * @param  { String } tag\n * @return { String }\n */\nfunction getUniqueCombination(element, items, tag) {\n  var combinations = (0, _getCombinations.getCombinations)(items, 3),\n      firstUnique = getFirstUnique(element, combinations);\n\n  if (Boolean(firstUnique)) {\n    return firstUnique;\n  }\n\n  if (Boolean(tag)) {\n    combinations = combinations.map(function (combination) {\n      return tag + combination;\n    });\n    firstUnique = getFirstUnique(element, combinations);\n\n    if (Boolean(firstUnique)) {\n      return firstUnique;\n    }\n  }\n\n  return null;\n}\n\n/**\n * Returns a uniqueSelector based on the passed options\n * @param  { DOM } element\n * @param  { Array } options\n * @return { String }\n */\nfunction getUniqueSelector(element, selectorTypes, attributesToIgnore) {\n  var foundSelector = void 0;\n\n  var elementSelectors = getAllSelectors(element, selectorTypes, attributesToIgnore);\n\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = selectorTypes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var selectorType = _step.value;\n      var ID = elementSelectors.ID,\n          Tag = elementSelectors.Tag,\n          Classes = elementSelectors.Class,\n          Attributes = elementSelectors.Attributes,\n          NthChild = elementSelectors.NthChild;\n\n      switch (selectorType) {\n        case 'ID':\n          if (Boolean(ID) && testUniqueness(element, ID)) {\n            return ID;\n          }\n          break;\n\n        case 'Tag':\n          if (Boolean(Tag) && testUniqueness(element, Tag)) {\n            return Tag;\n          }\n          break;\n\n        case 'Class':\n          if (Boolean(Classes) && Classes.length) {\n            foundSelector = getUniqueCombination(element, Classes, Tag);\n            if (foundSelector) {\n              return foundSelector;\n            }\n          }\n          break;\n\n        case 'Attributes':\n          if (Boolean(Attributes) && Attributes.length) {\n            foundSelector = getUniqueCombination(element, Attributes, Tag);\n            if (foundSelector) {\n              return foundSelector;\n            }\n          }\n          break;\n\n        case 'NthChild':\n          if (Boolean(NthChild)) {\n            return NthChild;\n          }\n      }\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator.return) {\n        _iterator.return();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n\n  return '*';\n}\n\n/**\n * Generate unique CSS selector for given DOM element\n *\n * @param {Element} el\n * @return {String}\n * @api private\n */\n\nfunction unique(el) {\n  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  var _options$selectorType = options.selectorTypes,\n      selectorTypes = _options$selectorType === undefined ? ['ID', 'Class', 'Tag', 'NthChild'] : _options$selectorType,\n      _options$attributesTo = options.attributesToIgnore,\n      attributesToIgnore = _options$attributesTo === undefined ? ['id', 'class', 'length'] : _options$attributesTo;\n\n  var allSelectors = [];\n  var parents = (0, _getParents.getParents)(el);\n\n  var _iteratorNormalCompletion2 = true;\n  var _didIteratorError2 = false;\n  var _iteratorError2 = undefined;\n\n  try {\n    for (var _iterator2 = parents[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n      var elem = _step2.value;\n\n      var selector = getUniqueSelector(elem, selectorTypes, attributesToIgnore);\n      if (Boolean(selector)) {\n        allSelectors.push(selector);\n      }\n    }\n  } catch (err) {\n    _didIteratorError2 = true;\n    _iteratorError2 = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion2 && _iterator2.return) {\n        _iterator2.return();\n      }\n    } finally {\n      if (_didIteratorError2) {\n        throw _iteratorError2;\n      }\n    }\n  }\n\n  var selectors = [];\n  var _iteratorNormalCompletion3 = true;\n  var _didIteratorError3 = false;\n  var _iteratorError3 = undefined;\n\n  try {\n    for (var _iterator3 = allSelectors[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {\n      var it = _step3.value;\n\n      selectors.unshift(it);\n      var _selector = selectors.join(' > ');\n      if ((0, _isUnique.isUnique)(el, _selector)) {\n        return _selector;\n      }\n    }\n  } catch (err) {\n    _didIteratorError3 = true;\n    _iteratorError3 = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion3 && _iterator3.return) {\n        _iterator3.return();\n      }\n    } finally {\n      if (_didIteratorError3) {\n        throw _iteratorError3;\n      }\n    }\n  }\n\n  return null;\n}\n\n//# sourceURL=webpack:///../node_modules/unique-selector/lib/index.js?");

/***/ }),

/***/ "../node_modules/unique-selector/lib/isElement.js":
/*!********************************************************!*\
  !*** ../node_modules/unique-selector/lib/isElement.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nexports.isElement = isElement;\n/**\n * Determines if the passed el is a DOM element\n */\nfunction isElement(el) {\n  var isElem = void 0;\n\n  if ((typeof HTMLElement === 'undefined' ? 'undefined' : _typeof(HTMLElement)) === 'object') {\n    isElem = el instanceof HTMLElement;\n  } else {\n    isElem = !!el && (typeof el === 'undefined' ? 'undefined' : _typeof(el)) === 'object' && el.nodeType === 1 && typeof el.nodeName === 'string';\n  }\n  return isElem;\n}\n\n//# sourceURL=webpack:///../node_modules/unique-selector/lib/isElement.js?");

/***/ }),

/***/ "../node_modules/unique-selector/lib/isUnique.js":
/*!*******************************************************!*\
  !*** ../node_modules/unique-selector/lib/isUnique.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.isUnique = isUnique;\n/**\n * Checks if the selector is unique\n * @param  { Object } element\n * @param  { String } selector\n * @return { Array }\n */\nfunction isUnique(el, selector) {\n  if (!Boolean(selector)) return false;\n  var elems = el.ownerDocument.querySelectorAll(selector);\n  return elems.length === 1 && elems[0] === el;\n}\n\n//# sourceURL=webpack:///../node_modules/unique-selector/lib/isUnique.js?");

/***/ }),

/***/ "../node_modules/webpack/buildin/global.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///../node_modules/webpack/buildin/global.js?");

/***/ }),

/***/ "../test/fixtures/index.html":
/*!***********************************!*\
  !*** ../test/fixtures/index.html ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"index.html\";\n\n//# sourceURL=webpack:///../test/fixtures/index.html?");

/***/ }),

/***/ "../test/fixtures/update.html":
/*!************************************!*\
  !*** ../test/fixtures/update.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"update.html\";\n\n//# sourceURL=webpack:///../test/fixtures/update.html?");

/***/ }),

/***/ "./remoteform.js":
/*!***********************!*\
  !*** ./remoteform.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ \"../node_modules/@babel/runtime/helpers/objectSpread.js\");\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var unique_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! unique-selector */ \"../node_modules/unique-selector/lib/index.js\");\n/* harmony import */ var unique_selector__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(unique_selector__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! qs */ \"../node_modules/qs/lib/index.js\");\n/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var get_form_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! get-form-data */ \"../node_modules/get-form-data/es/index.js\");\n\n\n\n // Find the closest matching ancestor\n\nvar closest = function closest(el, selector) {\n  // Detect vendor name\n  var matches = ['webkit', 'ms'].map(function (prefix) {\n    return prefix + 'Matches';\n  }).find(function (name) {\n    return el[name];\n  }) || 'matches'; // Traverse dom to find the closest element\n\n  while (el.parentElement) {\n    if (typeof selector === 'string' && el[matches](selector) || selector instanceof window.HTMLElement && el === selector) {\n      return el;\n    }\n\n    el = el.parentElement;\n  }\n\n  return null;\n};\n\nvar createSubmitHandler = function createSubmitHandler(selector, options) {\n  return function (event) {\n    var formElement = event.target;\n    var formData = Object(get_form_data__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(formElement);\n    var targetElement = closest(event.target, selector);\n    var url = formElement.getAttribute('action') || '.';\n    var request = options.request;\n    request.method = (formElement.getAttribute('method') || request.method).toUpperCase();\n    request.headers = Object.assign({}, request.method === 'POST' && {\n      'X-remoteform': '*',\n      'Accept': 'application/json, application/xml, text/plain, text/html, *.*',\n      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'\n    }, request.headers);\n\n    if (request.method === 'POST') {\n      request.body = qs__WEBPACK_IMPORTED_MODULE_2___default.a.stringify(formData);\n    } // TODO: For get requests, merge url with query params\n\n\n    if (targetElement) {\n      var remoteSelector = options.remoteSelector || unique_selector__WEBPACK_IMPORTED_MODULE_1___default()(targetElement);\n      fetch(url, request).then(function (response) {\n        response.text().then(function (html) {\n          // Parse html\n          var dom = document.createElement('div');\n          dom.innerHTML = html; // Find element\n\n          var remoteElement = dom.querySelector(remoteSelector);\n\n          if (remoteElement) {\n            // Remove attributes\n            var _iteratorNormalCompletion = true;\n            var _didIteratorError = false;\n            var _iteratorError = undefined;\n\n            try {\n              for (var _iterator = dom.attributes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n                var name = _step.value.name;\n                targetElement.removeAttribute(name);\n              } // Update attributes\n\n            } catch (err) {\n              _didIteratorError = true;\n              _iteratorError = err;\n            } finally {\n              try {\n                if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n                  _iterator[\"return\"]();\n                }\n              } finally {\n                if (_didIteratorError) {\n                  throw _iteratorError;\n                }\n              }\n            }\n\n            var _iteratorNormalCompletion2 = true;\n            var _didIteratorError2 = false;\n            var _iteratorError2 = undefined;\n\n            try {\n              for (var _iterator2 = remoteElement.attributes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n                var _step2$value = _step2.value,\n                    name = _step2$value.name,\n                    value = _step2$value.value;\n                targetElement.setAttribute(name, value);\n              } // Update content\n\n            } catch (err) {\n              _didIteratorError2 = true;\n              _iteratorError2 = err;\n            } finally {\n              try {\n                if (!_iteratorNormalCompletion2 && _iterator2[\"return\"] != null) {\n                  _iterator2[\"return\"]();\n                }\n              } finally {\n                if (_didIteratorError2) {\n                  throw _iteratorError2;\n                }\n              }\n            }\n\n            targetElement.innerHTML = remoteElement.innerHTML;\n          }\n        });\n      });\n      event.preventDefault();\n    }\n  };\n};\n\nfunction remoteform() {\n  var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'form';\n  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  options = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({\n    responseSelector: '',\n    request: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, options.request)\n  }, options);\n  var handleSubmit = createSubmitHandler(selector, options);\n  document.addEventListener('submit', handleSubmit);\n  return {\n    destroy: function destroy() {\n      window.removeEventListener('submit', handleSubmit);\n    }\n  };\n} // Pollute the global namespace accidentally ;-)\n\n\nglobal.remoteform = remoteform;\n/* harmony default export */ __webpack_exports__[\"default\"] = (remoteform);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ \"../node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./remoteform.js?");

/***/ }),

/***/ 0:
/*!**************************************************************************************!*\
  !*** multi ./remoteform.js ../test/fixtures/index.html ../test/fixtures/update.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! /Users/rafaelnowrotek/Projects/remoteform/src/remoteform.js */\"./remoteform.js\");\n__webpack_require__(/*! /Users/rafaelnowrotek/Projects/remoteform/test/fixtures/index.html */\"../test/fixtures/index.html\");\nmodule.exports = __webpack_require__(/*! /Users/rafaelnowrotek/Projects/remoteform/test/fixtures/update.html */\"../test/fixtures/update.html\");\n\n\n//# sourceURL=webpack:///multi_./remoteform.js_../test/fixtures/index.html_../test/fixtures/update.html?");

/***/ })

/******/ });