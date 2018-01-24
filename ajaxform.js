import uniqueSelector from 'unique-selector';
import FormData from 'form-data';

const fs = require('fs');


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
const closest = (el, selector) => {
  // Detect vendor name
  const matches = ['webkit', 'ms'].map(prefix => prefix + 'Matches').find(name => el[name]) || 'matches';

  // Traverse dom to find the closest element
  while (el.parentElement) {
    if (typeof selector === 'string' && el[matches](selector) || selector instanceof window.HTMLElement && el === selector ) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
};

const createSubmitHandler = (selector, options) => event => {
  const formElement = event.target;
  const formData = new FormData(formElement);
  const targetElement = closest(event.target, selector);
  const url = formElement.getAttribute('action') || '.';
  let { request: { method = 'POST', headers, ...request } } = options;

  method = formElement.getAttribute('method') || method;
  headers = Object.assign({}, method === 'POST' && {
    'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
  }, headers);

  request = {
    ...request, method, headers
  };

  if (method === 'POST') {
    request.body = formData;
  }

  if (targetElement) {
    const remoteSelector = options.remoteSelector || uniqueSelector(targetElement);

    fetch(url, request).then(response => {
      response.text().then(html => {
        // Parse html
        const dom = document.createElement( 'div' );
        dom.innerHTML = html;

        // Find element
        const remoteElement = dom.querySelector(remoteSelector);

        if (remoteElement) {
          // Update element
          targetElement.innerHTML = remoteElement.innerHTML;
        }
      });
    });
  }

  event.preventDefault();
};

function ajaxform(selector, options) {
  options = Object.assign({
    responseSelector: '',
    request: {
      // Options passed to fetch
    }
  }, options);
  const handleSubmit = createSubmitHandler(selector, options);
  document.addEventListener('submit', handleSubmit);

  return {
    destroy() {
      window.removeEventListener('submit', handleSubmit);
    }
  };
}

// Global pollution
window.ajaxform = ajaxform;

export default ajaxform;
