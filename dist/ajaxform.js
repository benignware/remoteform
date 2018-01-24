// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }
      
      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module;

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module() {
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({5:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getID = getID;
/**
 * Returns the Tag of the element
 * @param  { Object } element
 * @return { String }
 */
function getID(el) {
  var id = el.getAttribute('id');

  if (id !== null && id !== '') {
    return '#' + id;
  }
  return null;
}
},{}],7:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClasses = getClasses;
exports.getClassSelectors = getClassSelectors;
/**
 * Get class names for an element
 *
 * @pararm { Element } el
 * @return { Array }
 */
function getClasses(el) {
  if (!el.hasAttribute('class')) {
    return [];
  }

  try {
    return Array.prototype.slice.call(el.classList);
  } catch (e) {
    var className = el.getAttribute('class');

    // remove duplicate and leading/trailing whitespaces
    className = className.trim().replace(/\s+/g, ' ');

    // split into separate classnames
    return className.split(' ');
  }
}

/**
 * Returns the Class selectors of the element
 * @param  { Object } element
 * @return { Array }
 */
function getClassSelectors(el) {
  var classList = getClasses(el).filter(Boolean);
  return classList.map(function (cl) {
    return '.' + cl;
  });
}
},{}],6:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getCombinations = getCombinations;
/**
 * Recursively combinate items.
 * @param  { Array } result
 * @param  { Array } items
 * @param  { Array } data
 * @param  { Number } start
 * @param  { Number } end
 * @param  { Number } index
 * @param  { Number } k
 */
function kCombinations(result, items, data, start, end, index, k) {
    if (index === k) {
        result.push(data.slice(0, index).join(''));
        return;
    }

    for (var i = start; i <= end && end - i + 1 >= k - index; ++i) {
        data[index] = items[i];
        kCombinations(result, items, data, i + 1, end, index + 1, k);
    }
}

/**
 * Returns all the possible selector combinations
 * @param  { Array } items
 * @param  { Number } k
 * @return { Array }
 */
function getCombinations(items, k) {
    var result = [],
        n = items.length,
        data = [];

    for (var l = 1; l <= k; ++l) {
        kCombinations(result, items, data, 0, n - 1, 0, l);
    }

    return result;
}
},{}],8:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAttributes = getAttributes;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Returns the Attribute selectors of the element
 * @param  { DOM Element } element
 * @param  { Array } array of attributes to ignore
 * @return { Array }
 */
function getAttributes(el) {
  var attributesToIgnore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['id', 'class', 'length'];
  var attributes = el.attributes;

  var attrs = [].concat(_toConsumableArray(attributes));

  return attrs.reduce(function (sum, next) {
    if (!(attributesToIgnore.indexOf(next.nodeName) > -1)) {
      sum.push('[' + next.nodeName + '="' + next.value + '"]');
    }
    return sum;
  }, []);
}
},{}],13:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.isElement = isElement;
/**
 * Determines if the passed el is a DOM element
 */
function isElement(el) {
  var isElem = void 0;

  if ((typeof HTMLElement === 'undefined' ? 'undefined' : _typeof(HTMLElement)) === 'object') {
    isElem = el instanceof HTMLElement;
  } else {
    isElem = !!el && (typeof el === 'undefined' ? 'undefined' : _typeof(el)) === 'object' && el.nodeType === 1 && typeof el.nodeName === 'string';
  }
  return isElem;
}
},{}],10:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNthChild = getNthChild;

var _isElement = require('./isElement');

/**
 * Returns the selectors based on the position of the element relative to its siblings
 * @param  { Object } element
 * @return { Array }
 */
function getNthChild(element) {
  var counter = 0;
  var k = void 0;
  var sibling = void 0;
  var parentNode = element.parentNode;


  if (Boolean(parentNode)) {
    var childNodes = parentNode.childNodes;

    var len = childNodes.length;
    for (k = 0; k < len; k++) {
      sibling = childNodes[k];
      if ((0, _isElement.isElement)(sibling)) {
        counter++;
        if (sibling === element) {
          return ':nth-child(' + counter + ')';
        }
      }
    }
  }
  return null;
}
},{"./isElement":13}],9:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTag = getTag;
/**
 * Returns the Tag of the element
 * @param  { Object } element
 * @return { String }
 */
function getTag(el) {
  return el.tagName.toLowerCase().replace(/:/g, '\\:');
}
},{}],12:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isUnique = isUnique;
/**
 * Checks if the selector is unique
 * @param  { Object } element
 * @param  { String } selector
 * @return { Array }
 */
function isUnique(el, selector) {
  if (!Boolean(selector)) return false;
  var elems = el.ownerDocument.querySelectorAll(selector);
  return elems.length === 1 && elems[0] === el;
}
},{}],11:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getParents = getParents;

var _isElement = require('./isElement');

/**
 * Returns all the element and all of its parents
 * @param { DOM Element }
 * @return { Array of DOM elements }
 */
function getParents(el) {
  var parents = [];
  var currentElement = el;
  while ((0, _isElement.isElement)(currentElement)) {
    parents.push(currentElement);
    currentElement = currentElement.parentNode;
  }

  return parents;
}
},{"./isElement":13}],3:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = unique;

var _getID = require('./getID');

var _getClasses = require('./getClasses');

var _getCombinations = require('./getCombinations');

var _getAttributes = require('./getAttributes');

var _getNthChild = require('./getNthChild');

var _getTag = require('./getTag');

var _isUnique = require('./isUnique');

var _getParents = require('./getParents');

/**
 * Returns all the selectors of the elmenet
 * @param  { Object } element
 * @return { Object }
 */
/**
 * Expose `unique`
 */

function getAllSelectors(el, selectors, attributesToIgnore) {
  var funcs = {
    'Tag': _getTag.getTag,
    'NthChild': _getNthChild.getNthChild,
    'Attributes': function Attributes(elem) {
      return (0, _getAttributes.getAttributes)(elem, attributesToIgnore);
    },
    'Class': _getClasses.getClassSelectors,
    'ID': _getID.getID
  };

  return selectors.reduce(function (res, next) {
    res[next] = funcs[next](el);
    return res;
  }, {});
}

/**
 * Tests uniqueNess of the element inside its parent
 * @param  { Object } element
 * @param { String } Selectors
 * @return { Boolean }
 */
function testUniqueness(element, selector) {
  var parentNode = element.parentNode;

  var elements = parentNode.querySelectorAll(selector);
  return elements.length === 1 && elements[0] === element;
}

/**
 * Tests all selectors for uniqueness and returns the first unique selector.
 * @param  { Object } element
 * @param  { Array } selectors
 * @return { String }
 */
function getFirstUnique(element, selectors) {
  return selectors.find(testUniqueness.bind(null, element));
}

/**
 * Checks all the possible selectors of an element to find one unique and return it
 * @param  { Object } element
 * @param  { Array } items
 * @param  { String } tag
 * @return { String }
 */
function getUniqueCombination(element, items, tag) {
  var combinations = (0, _getCombinations.getCombinations)(items, 3),
      firstUnique = getFirstUnique(element, combinations);

  if (Boolean(firstUnique)) {
    return firstUnique;
  }

  if (Boolean(tag)) {
    combinations = combinations.map(function (combination) {
      return tag + combination;
    });
    firstUnique = getFirstUnique(element, combinations);

    if (Boolean(firstUnique)) {
      return firstUnique;
    }
  }

  return null;
}

/**
 * Returns a uniqueSelector based on the passed options
 * @param  { DOM } element
 * @param  { Array } options
 * @return { String }
 */
function getUniqueSelector(element, selectorTypes, attributesToIgnore) {
  var foundSelector = void 0;

  var elementSelectors = getAllSelectors(element, selectorTypes, attributesToIgnore);

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = selectorTypes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var selectorType = _step.value;
      var ID = elementSelectors.ID,
          Tag = elementSelectors.Tag,
          Classes = elementSelectors.Class,
          Attributes = elementSelectors.Attributes,
          NthChild = elementSelectors.NthChild;

      switch (selectorType) {
        case 'ID':
          if (Boolean(ID) && testUniqueness(element, ID)) {
            return ID;
          }
          break;

        case 'Tag':
          if (Boolean(Tag) && testUniqueness(element, Tag)) {
            return Tag;
          }
          break;

        case 'Class':
          if (Boolean(Classes) && Classes.length) {
            foundSelector = getUniqueCombination(element, Classes, Tag);
            if (foundSelector) {
              return foundSelector;
            }
          }
          break;

        case 'Attributes':
          if (Boolean(Attributes) && Attributes.length) {
            foundSelector = getUniqueCombination(element, Attributes, Tag);
            if (foundSelector) {
              return foundSelector;
            }
          }
          break;

        case 'NthChild':
          if (Boolean(NthChild)) {
            return NthChild;
          }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return '*';
}

/**
 * Generate unique CSS selector for given DOM element
 *
 * @param {Element} el
 * @return {String}
 * @api private
 */

function unique(el) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$selectorType = options.selectorTypes,
      selectorTypes = _options$selectorType === undefined ? ['ID', 'Class', 'Tag', 'NthChild'] : _options$selectorType,
      _options$attributesTo = options.attributesToIgnore,
      attributesToIgnore = _options$attributesTo === undefined ? ['id', 'class', 'length'] : _options$attributesTo;

  var allSelectors = [];
  var parents = (0, _getParents.getParents)(el);

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = parents[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var elem = _step2.value;

      var selector = getUniqueSelector(elem, selectorTypes, attributesToIgnore);
      if (Boolean(selector)) {
        allSelectors.push(selector);
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  var selectors = [];
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = allSelectors[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var it = _step3.value;

      selectors.unshift(it);
      var _selector = selectors.join(' > ');
      if ((0, _isUnique.isUnique)(el, _selector)) {
        return _selector;
      }
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  return null;
}
},{"./getID":5,"./getClasses":7,"./getCombinations":6,"./getAttributes":8,"./getNthChild":10,"./getTag":9,"./isUnique":12,"./getParents":11}],4:[function(require,module,exports) {
/* eslint-env browser */
module.exports = typeof self == 'object' ? self.FormData : window.FormData;

},{}],2:[function(require,module,exports) {

},{}],1:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _uniqueSelector = require('unique-selector');

var _uniqueSelector2 = _interopRequireDefault(_uniqueSelector);

var _formData = require('form-data');

var _formData2 = _interopRequireDefault(_formData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var fs = require('fs');

// const uniqueSelector = require('unique-selector');

// Find index of element in siblings
// const findElementIndex = element => Array.prototype.slice
//   .call(element.parentNode.childNodes)
//   .filter(element => element.nodeType === 1)
//   .indexOf(element);

// Finds a unique selector for an element
// const uniqueSelector = (element, options = {}) => {
//   const segments = [];
//   let id;
//
//   // Traverse dom and collect parent selectors
//   while (!element.tagName.match(/html|body/ui)) {
//     id = element.getAttribute && element.getAttribute('id');
//     segments.unshift(
//       id
//         ? '#' + id
//         : '*:nth-child(' + ( findElementIndex(element) + 1 ) + ')'
//     );
//     element = element.parentNode;
//   }
//   return segments.join(' > ');
// };

// Find the closest matching ancestor
var closest = function closest(el, selector) {
  // Detect vendor name
  var matches = ['webkit', 'ms'].map(function (prefix) {
    return prefix + 'Matches';
  }).find(function (name) {
    return el[name];
  }) || 'matches';

  // Traverse dom to find the closest element
  while (el.parentElement) {
    if (typeof selector === 'string' && el[matches](selector) || selector instanceof window.HTMLElement && el === selector) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
};

var createSubmitHandler = function createSubmitHandler(selector, options) {
  return function (event) {
    var formElement = event.target;
    var formData = new _formData2.default(formElement);
    var targetElement = closest(event.target, selector);
    var url = formElement.getAttribute('action') || '.';

    var _options$request = options.request,
        _options$request$meth = _options$request.method,
        method = _options$request$meth === undefined ? 'POST' : _options$request$meth,
        headers = _options$request.headers,
        request = _objectWithoutProperties(_options$request, ['method', 'headers']);

    method = formElement.getAttribute('method') || method;
    headers = Object.assign({}, method === 'POST' && {
      'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
    }, headers);

    request = _extends({}, request, { method: method, headers: headers
    });

    if (method === 'POST') {
      request.body = formData;
    }

    if (targetElement) {
      var remoteSelector = options.remoteSelector || (0, _uniqueSelector2.default)(targetElement);

      fetch(url, request).then(function (response) {
        response.text().then(function (html) {
          // Parse html
          var dom = document.createElement('div');
          dom.innerHTML = html;

          // Find element
          var remoteElement = dom.querySelector(remoteSelector);

          if (remoteElement) {
            // Update element
            targetElement.innerHTML = remoteElement.innerHTML;
          }
        });
      });
    }

    event.preventDefault();
  };
};

function ajaxform(selector, options) {
  options = Object.assign({
    responseSelector: '',
    request: {
      // Options passed to fetch
    }
  }, options);
  var handleSubmit = createSubmitHandler(selector, options);
  document.addEventListener('submit', handleSubmit);

  return {
    destroy: function destroy() {
      window.removeEventListener('submit', handleSubmit);
    }
  };
}

// Global pollution
window.ajaxform = ajaxform;

exports.default = ajaxform;
},{"unique-selector":3,"form-data":4,"fs":2}],14:[function(require,module,exports) {

var global = (1, eval)('this');
var OldModule = module.bundle.Module;
function Module() {
  OldModule.call(this);
  this.hot = {
    accept: function (fn) {
      this._acceptCallback = fn || function () {};
    },
    dispose: function (fn) {
      this._disposeCallback = fn;
    }
  };
}

module.bundle.Module = Module;

if (!module.bundle.parent && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var ws = new WebSocket('ws://' + hostname + ':' + '61936' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.require, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.require, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + 'data.error.stack');
    }
  };
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  if (cached && cached.hot._disposeCallback) {
    cached.hot._disposeCallback();
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallback) {
    cached.hot._acceptCallback();
    return true;
  }

  return getParents(global.require, id).some(function (id) {
    return hmrAccept(global.require, id);
  });
}
},{}]},{},[14,1])
//# sourceMappingURL=/dist/ajaxform.map