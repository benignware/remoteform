import uniqueSelector from 'unique-selector';
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
  const form = event.target;
  const element = closest(event.target, selector);
  const url = form.getAttribute('action') || '.';

  const request = Object.assign({
    method: form.getAttribute('method') || options.method || 'GET'
  }, options.request);

  if (element) {
    const remoteSelector = options.remoteSelector || uniqueSelector(element);

    fetch(url, request).then(response => {
      response.text().then(html => {
        // Parse html
        const dom = document.createElement( 'div' );
        dom.innerHTML = html;

        // Find element
        const remoteElement = dom.querySelector(remoteSelector);

        if (remoteElement) {
          // Update element
          element.innerHTML = remoteElement.innerHTML;
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
