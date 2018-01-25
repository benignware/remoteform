import uniqueSelector from 'unique-selector';
import qs from 'qs';
import getFormData from 'get-form-data';

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
  const formData = getFormData(formElement);
  const targetElement = closest(event.target, selector);
  const url = formElement.getAttribute('action') || '.';
  let { request: { method = 'POST', headers, ...request } } = options;

  method = (formElement.getAttribute('method') || method).toUpperCase();
  headers = Object.assign({}, method === 'POST' && {
    'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
  }, headers);

  request = {
    ...request, method, headers
  };

  if (method === 'POST') {
    request.body = qs.stringify(formData);
  }
  // TODO: For get requests, merge url with query params

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

export default ajaxform;
