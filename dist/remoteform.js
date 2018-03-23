require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var a=e[n]=new t.Module;r[n][0].call(a.exports,i,a,a.exports)}return e[n].exports}function o(){this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({8:[function(require,module,exports) {
"use strict";function e(e){var t=e.getAttribute("id");return null!==t&&""!==t?"#"+t:null}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getID=e;
},{}],9:[function(require,module,exports) {
"use strict";function t(t){if(!t.hasAttribute("class"))return[];try{return Array.prototype.slice.call(t.classList)}catch(r){var e=t.getAttribute("class");return(e=e.trim().replace(/\s+/g," ")).split(" ")}}function e(e){return t(e).filter(Boolean).map(function(t){return"."+t})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getClasses=t,exports.getClassSelectors=e;
},{}],10:[function(require,module,exports) {
"use strict";function e(t,o,r,n,i,s,u){if(s!==u)for(var f=n;f<=i&&i-f+1>=u-s;++f)r[s]=o[f],e(t,o,r,f+1,i,s+1,u);else t.push(r.slice(0,s).join(""))}function t(t,o){for(var r=[],n=t.length,i=[],s=1;s<=o;++s)e(r,t,i,0,n-1,0,s);return r}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getCombinations=t;
},{}],11:[function(require,module,exports) {
"use strict";function e(e){if(Array.isArray(e)){for(var r=0,t=Array(e.length);r<e.length;r++)t[r]=e[r];return t}return Array.from(e)}function r(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["id","class","length"],n=r.attributes;return[].concat(e(n)).reduce(function(e,r){return t.indexOf(r.nodeName)>-1||e.push("["+r.nodeName+'="'+r.value+'"]'),e},[])}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getAttributes=r;
},{}],17:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function t(t){return"object"===("undefined"==typeof HTMLElement?"undefined":e(HTMLElement))?t instanceof HTMLElement:!!t&&"object"===(void 0===t?"undefined":e(t))&&1===t.nodeType&&"string"==typeof t.nodeName}exports.isElement=t;
},{}],12:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getNthChild=r;var e=require("./isElement");function r(r){var t=0,i=void 0,n=void 0,o=r.parentNode;if(Boolean(o)){var l=o.childNodes,d=l.length;for(i=0;i<d;i++)if(n=l[i],(0,e.isElement)(n)&&(t++,n===r))return":nth-child("+t+")"}return null}
},{"./isElement":17}],13:[function(require,module,exports) {
"use strict";function e(e){return e.tagName.toLowerCase().replace(/:/g,"\\:")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getTag=e;
},{}],14:[function(require,module,exports) {
"use strict";function e(e,r){if(!Boolean(r))return!1;var t=e.ownerDocument.querySelectorAll(r);return 1===t.length&&t[0]===e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.isUnique=e;
},{}],15:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getParents=r;var e=require("./isElement");function r(r){for(var t=[],s=r;(0,e.isElement)(s);)t.push(s),s=s.parentNode;return t}
},{"./isElement":17}],2:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=h;var e=require("./getID"),r=require("./getClasses"),t=require("./getCombinations"),n=require("./getAttributes"),i=require("./getNthChild"),a=require("./getTag"),o=require("./isUnique"),u=require("./getParents");function l(t,o,u){var l={Tag:a.getTag,NthChild:i.getNthChild,Attributes:function(e){return(0,n.getAttributes)(e,u)},Class:r.getClassSelectors,ID:e.getID};return o.reduce(function(e,r){return e[r]=l[r](t),e},{})}function s(e,r){var t=e.parentNode.querySelectorAll(r);return 1===t.length&&t[0]===e}function f(e,r){return r.find(s.bind(null,e))}function c(e,r,n){var i=(0,t.getCombinations)(r,3),a=f(e,i);return Boolean(a)?a:Boolean(n)&&(a=f(e,i=i.map(function(e){return n+e})),Boolean(a))?a:null}function g(e,r,t){var n=void 0,i=l(e,r,t),a=!0,o=!1,u=void 0;try{for(var f,g=r[Symbol.iterator]();!(a=(f=g.next()).done);a=!0){var h=f.value,v=i.ID,d=i.Tag,y=i.Class,b=i.Attributes,C=i.NthChild;switch(h){case"ID":if(Boolean(v)&&s(e,v))return v;break;case"Tag":if(Boolean(d)&&s(e,d))return d;break;case"Class":if(Boolean(y)&&y.length&&(n=c(e,y,d)))return n;break;case"Attributes":if(Boolean(b)&&b.length&&(n=c(e,b,d)))return n;break;case"NthChild":if(Boolean(C))return C}}}catch(e){o=!0,u=e}finally{try{!a&&g.return&&g.return()}finally{if(o)throw u}}return"*"}function h(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=r.selectorTypes,n=void 0===t?["ID","Class","Tag","NthChild"]:t,i=r.attributesToIgnore,a=void 0===i?["id","class","length"]:i,l=[],s=(0,u.getParents)(e),f=!0,c=!1,h=void 0;try{for(var v,d=s[Symbol.iterator]();!(f=(v=d.next()).done);f=!0){var y=g(v.value,n,a);Boolean(y)&&l.push(y)}}catch(e){c=!0,h=e}finally{try{!f&&d.return&&d.return()}finally{if(c)throw h}}var b=[],C=!0,q=!1,B=void 0;try{for(var T,p=l[Symbol.iterator]();!(C=(T=p.next()).done);C=!0){var I=T.value;b.unshift(I);var N=b.join(" > ");if((0,o.isUnique)(e,N))return N}}catch(e){q=!0,B=e}finally{try{!C&&p.return&&p.return()}finally{if(q)throw B}}return null}
},{"./getID":8,"./getClasses":9,"./getCombinations":10,"./getAttributes":11,"./getNthChild":12,"./getTag":13,"./isUnique":14,"./getParents":15}],16:[function(require,module,exports) {
"use strict";var r=Object.prototype.hasOwnProperty,t=function(){for(var r=[],t=0;t<256;++t)r.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return r}(),e=function(r){for(var t;r.length;){var e=r.pop();if(t=e.obj[e.prop],Array.isArray(t)){for(var o=[],n=0;n<t.length;++n)void 0!==t[n]&&o.push(t[n]);e.obj[e.prop]=o}}return t};exports.arrayToObject=function(r,t){for(var e=t&&t.plainObjects?Object.create(null):{},o=0;o<r.length;++o)void 0!==r[o]&&(e[o]=r[o]);return e},exports.merge=function(t,e,o){if(!e)return t;if("object"!=typeof e){if(Array.isArray(t))t.push(e);else{if("object"!=typeof t)return[t,e];(o.plainObjects||o.allowPrototypes||!r.call(Object.prototype,e))&&(t[e]=!0)}return t}if("object"!=typeof t)return[t].concat(e);var n=t;return Array.isArray(t)&&!Array.isArray(e)&&(n=exports.arrayToObject(t,o)),Array.isArray(t)&&Array.isArray(e)?(e.forEach(function(e,n){r.call(t,n)?t[n]&&"object"==typeof t[n]?t[n]=exports.merge(t[n],e,o):t.push(e):t[n]=e}),t):Object.keys(e).reduce(function(t,n){var c=e[n];return r.call(t,n)?t[n]=exports.merge(t[n],c,o):t[n]=c,t},n)},exports.assign=function(r,t){return Object.keys(t).reduce(function(r,e){return r[e]=t[e],r},r)},exports.decode=function(r){try{return decodeURIComponent(r.replace(/\+/g," "))}catch(t){return r}},exports.encode=function(r){if(0===r.length)return r;for(var e="string"==typeof r?r:String(r),o="",n=0;n<e.length;++n){var c=e.charCodeAt(n);45===c||46===c||95===c||126===c||c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122?o+=e.charAt(n):c<128?o+=t[c]:c<2048?o+=t[192|c>>6]+t[128|63&c]:c<55296||c>=57344?o+=t[224|c>>12]+t[128|c>>6&63]+t[128|63&c]:(n+=1,c=65536+((1023&c)<<10|1023&e.charCodeAt(n)),o+=t[240|c>>18]+t[128|c>>12&63]+t[128|c>>6&63]+t[128|63&c])}return o},exports.compact=function(r){for(var t=[{obj:{o:r},prop:"o"}],o=[],n=0;n<t.length;++n)for(var c=t[n],p=c.obj[c.prop],u=Object.keys(p),a=0;a<u.length;++a){var s=u[a],i=p[s];"object"==typeof i&&null!==i&&-1===o.indexOf(i)&&(t.push({obj:p,prop:s}),o.push(i))}return e(t)},exports.isRegExp=function(r){return"[object RegExp]"===Object.prototype.toString.call(r)},exports.isBuffer=function(r){return null!==r&&void 0!==r&&!!(r.constructor&&r.constructor.isBuffer&&r.constructor.isBuffer(r))};
},{}],6:[function(require,module,exports) {
"use strict";var t=String.prototype.replace,r=/%20/g;module.exports={default:"RFC3986",formatters:{RFC1738:function(e){return t.call(e,r,"+")},RFC3986:function(t){return t}},RFC1738:"RFC1738",RFC3986:"RFC3986"};
},{}],5:[function(require,module,exports) {
"use strict";var e=require("./utils"),r=require("./formats"),t={brackets:function(e){return e+"[]"},indices:function(e,r){return e+"["+r+"]"},repeat:function(e){return e}},n=Date.prototype.toISOString,o={delimiter:"&",encode:!0,encoder:e.encode,encodeValuesOnly:!1,serializeDate:function(e){return n.call(e)},skipNulls:!1,strictNullHandling:!1},i=function r(t,n,i,l,a,c,f,s,u,d,y,p){var v=t;if("function"==typeof f)v=f(n,v);else if(v instanceof Date)v=d(v);else if(null===v){if(l)return c&&!p?c(n,o.encoder):n;v=""}if("string"==typeof v||"number"==typeof v||"boolean"==typeof v||e.isBuffer(v))return c?[y(p?n:c(n,o.encoder))+"="+y(c(v,o.encoder))]:[y(n)+"="+y(String(v))];var m,b=[];if(void 0===v)return b;if(Array.isArray(f))m=f;else{var g=Object.keys(v);m=s?g.sort(s):g}for(var O=0;O<m.length;++O){var k=m[O];a&&null===v[k]||(b=Array.isArray(v)?b.concat(r(v[k],i(n,k),i,l,a,c,f,s,u,d,y,p)):b.concat(r(v[k],n+(u?"."+k:"["+k+"]"),i,l,a,c,f,s,u,d,y,p)))}return b};module.exports=function(n,l){var a=n,c=l?e.assign({},l):{};if(null!==c.encoder&&void 0!==c.encoder&&"function"!=typeof c.encoder)throw new TypeError("Encoder has to be a function.");var f=void 0===c.delimiter?o.delimiter:c.delimiter,s="boolean"==typeof c.strictNullHandling?c.strictNullHandling:o.strictNullHandling,u="boolean"==typeof c.skipNulls?c.skipNulls:o.skipNulls,d="boolean"==typeof c.encode?c.encode:o.encode,y="function"==typeof c.encoder?c.encoder:o.encoder,p="function"==typeof c.sort?c.sort:null,v=void 0!==c.allowDots&&c.allowDots,m="function"==typeof c.serializeDate?c.serializeDate:o.serializeDate,b="boolean"==typeof c.encodeValuesOnly?c.encodeValuesOnly:o.encodeValuesOnly;if(void 0===c.format)c.format=r.default;else if(!Object.prototype.hasOwnProperty.call(r.formatters,c.format))throw new TypeError("Unknown format option provided.");var g,O,k=r.formatters[c.format];"function"==typeof c.filter?a=(O=c.filter)("",a):Array.isArray(c.filter)&&(g=O=c.filter);var w,D=[];if("object"!=typeof a||null===a)return"";w=c.arrayFormat in t?c.arrayFormat:"indices"in c?c.indices?"indices":"repeat":"indices";var N=t[w];g||(g=Object.keys(a)),p&&g.sort(p);for(var h=0;h<g.length;++h){var A=g[h];u&&null===a[A]||(D=D.concat(i(a[A],A,N,s,u,d?y:null,O,p,v,m,k,b)))}var j=D.join(f),z=!0===c.addQueryPrefix?"?":"";return j.length>0?z+j:""};
},{"./utils":16,"./formats":6}],7:[function(require,module,exports) {
"use strict";var e=require("./utils"),t=Object.prototype.hasOwnProperty,r={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:e.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},i=function(e,i){for(var l={},o=i.ignoreQueryPrefix?e.replace(/^\?/,""):e,a=i.parameterLimit===1/0?void 0:i.parameterLimit,n=o.split(i.delimiter,a),c=0;c<n.length;++c){var p,s,d=n[c],u=d.indexOf("]="),y=-1===u?d.indexOf("="):u+1;-1===y?(p=i.decoder(d,r.decoder),s=i.strictNullHandling?null:""):(p=i.decoder(d.slice(0,y),r.decoder),s=i.decoder(d.slice(y+1),r.decoder)),t.call(l,p)?l[p]=[].concat(l[p]).concat(s):l[p]=s}return l},l=function(e,t,r){for(var i=t,l=e.length-1;l>=0;--l){var o,a=e[l];if("[]"===a)o=(o=[]).concat(i);else{o=r.plainObjects?Object.create(null):{};var n="["===a.charAt(0)&&"]"===a.charAt(a.length-1)?a.slice(1,-1):a,c=parseInt(n,10);!isNaN(c)&&a!==n&&String(c)===n&&c>=0&&r.parseArrays&&c<=r.arrayLimit?(o=[])[c]=i:o[n]=i}i=o}return i},o=function(e,r,i){if(e){var o=i.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,a=/(\[[^[\]]*])/g,n=/(\[[^[\]]*])/.exec(o),c=n?o.slice(0,n.index):o,p=[];if(c){if(!i.plainObjects&&t.call(Object.prototype,c)&&!i.allowPrototypes)return;p.push(c)}for(var s=0;null!==(n=a.exec(o))&&s<i.depth;){if(s+=1,!i.plainObjects&&t.call(Object.prototype,n[1].slice(1,-1))&&!i.allowPrototypes)return;p.push(n[1])}return n&&p.push("["+o.slice(n.index)+"]"),l(p,r,i)}};module.exports=function(t,l){var a=l?e.assign({},l):{};if(null!==a.decoder&&void 0!==a.decoder&&"function"!=typeof a.decoder)throw new TypeError("Decoder has to be a function.");if(a.ignoreQueryPrefix=!0===a.ignoreQueryPrefix,a.delimiter="string"==typeof a.delimiter||e.isRegExp(a.delimiter)?a.delimiter:r.delimiter,a.depth="number"==typeof a.depth?a.depth:r.depth,a.arrayLimit="number"==typeof a.arrayLimit?a.arrayLimit:r.arrayLimit,a.parseArrays=!1!==a.parseArrays,a.decoder="function"==typeof a.decoder?a.decoder:r.decoder,a.allowDots="boolean"==typeof a.allowDots?a.allowDots:r.allowDots,a.plainObjects="boolean"==typeof a.plainObjects?a.plainObjects:r.plainObjects,a.allowPrototypes="boolean"==typeof a.allowPrototypes?a.allowPrototypes:r.allowPrototypes,a.parameterLimit="number"==typeof a.parameterLimit?a.parameterLimit:r.parameterLimit,a.strictNullHandling="boolean"==typeof a.strictNullHandling?a.strictNullHandling:r.strictNullHandling,""===t||null===t||void 0===t)return a.plainObjects?Object.create(null):{};for(var n="string"==typeof t?i(t,a):t,c=a.plainObjects?Object.create(null):{},p=Object.keys(n),s=0;s<p.length;++s){var d=p[s],u=o(d,n[d],a);c=e.merge(c,u,a)}return e.compact(c)};
},{"./utils":16}],3:[function(require,module,exports) {
"use strict";var r=require("./stringify"),e=require("./parse"),s=require("./formats");module.exports={formats:s,parse:e,stringify:r};
},{"./stringify":5,"./parse":7,"./formats":6}],4:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=o,exports.getFieldData=a;var e={"[object HTMLCollection]":!0,"[object NodeList]":!0,"[object RadioNodeList]":!0},t={button:!0,fieldset:!0,reset:!0,submit:!0},r={checkbox:!0,radio:!0},l=/^\s+|\s+$/g,i=Array.prototype.slice,n=Object.prototype.toString;function o(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{trim:!1};if(!e)throw new Error("A form is required by getFormData, was given form="+e);for(var l={},i=void 0,n=[],o={},s=0,u=e.elements.length;s<u;s++){var d=e.elements[s];t[d.type]||d.disabled||(i=d.name||d.id)&&!o[i]&&(n.push(i),o[i]=!0)}for(var f=0,c=n.length;f<c;f++){var v=a(e,i=n[f],r);null!=v&&(l[i]=v)}return l}function a(t,r){var l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{trim:!1};if(!t)throw new Error("A form is required by getFieldData, was given form="+t);if(!r&&"[object String]"!==n.call(r))throw new Error("A field name is required by getFieldData, was given fieldName="+r);var i=t.elements[r];if(!i||i.disabled)return null;if(!e[n.call(i)])return s(i,l.trim);for(var o=[],a=!0,u=0,d=i.length;u<d;u++)if(!i[u].disabled){a&&"radio"!==i[u].type&&(a=!1);var f=s(i[u],l.trim);null!=f&&(o=o.concat(f))}return a&&1===o.length?o[0]:o.length>0?o:null}function s(e,t){var n=null,o=e.type;if("select-one"===o)return e.options.length&&(n=e.options[e.selectedIndex].value),n;if("select-multiple"===o){n=[];for(var a=0,s=e.options.length;a<s;a++)e.options[a].selected&&n.push(e.options[a].value);return 0===n.length&&(n=null),n}return"file"===o&&"files"in e?(e.multiple?0===(n=i.call(e.files)).length&&(n=null):n=e.files[0],n):(r[o]?e.checked&&(n=e.value):n=t?e.value.replace(l,""):e.value,n)}o.getFieldData=a;
},{}],1:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("unique-selector"),t=a(e),r=require("qs"),n=a(r),o=require("get-form-data"),i=a(o);function a(e){return e&&e.__esModule?e:{default:e}}var u=function(e,t){for(var r=["webkit","ms"].map(function(e){return e+"Matches"}).find(function(t){return e[t]})||"matches";e.parentElement;){if("string"==typeof t&&e[r](t)||t instanceof window.HTMLElement&&e===t)return e;e=e.parentElement}return null},f=function(e,r){return function(o){var a=o.target,f=(0,i.default)(a),l=u(o.target,e),c=a.getAttribute("action")||".",d=r.request;if(d.method=(a.getAttribute("method")||d.method).toUpperCase(),d.headers=Object.assign({},"POST"===d.method&&{"X-remoteform":"*",Accept:"application/json, application/xml, text/plain, text/html, *.*","Content-Type":"application/x-www-form-urlencoded; charset=utf-8"},d.headers),"POST"===d.method&&(d.body=n.default.stringify(f)),l){var s=r.remoteSelector||(0,t.default)(l);fetch(c,d).then(function(e){e.text().then(function(e){var t=document.createElement("div");t.innerHTML=e;var r=t.querySelector(s);if(r){var n=!0,o=!1,i=void 0;try{for(var a,u=t.attributes[Symbol.iterator]();!(n=(a=u.next()).done);n=!0){var f=a.value.name;l.removeAttribute(f)}}catch(e){o=!0,i=e}finally{try{!n&&u.return&&u.return()}finally{if(o)throw i}}var c=!0,d=!1,m=void 0;try{for(var v,p=r.attributes[Symbol.iterator]();!(c=(v=p.next()).done);c=!0){var h=v.value,y=h.name,b=h.value;l.setAttribute(y,b)}}catch(e){d=!0,m=e}finally{try{!c&&p.return&&p.return()}finally{if(d)throw m}}l.innerHTML=r.innerHTML}})}),o.preventDefault()}}};function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"form",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t=Object.assign({responseSelector:"",request:Object.assign({},t.request)},t);var r=f(e,t);return document.addEventListener("submit",r),{destroy:function(){window.removeEventListener("submit",r)}}}"undefined"!=typeof window&&(window.remoteform=l),exports.default=l;
},{"unique-selector":2,"qs":3,"get-form-data":4}]},{},[1])