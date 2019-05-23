import uniqueSelector from 'unique-selector';
import qs from 'qs';
import getFormData from 'get-form-data';


const updateElement = (element, otherElement, updateContent = true) => {
  for (let { name } of element.attributes) {
    if (!otherElement.hasAttribute(name)) {
      element.removeAttribute(name);
    }
  }

  // Update attributes
  for (let { name, value } of otherElement.attributes) {
    element.setAttribute(name, value);
  }

  if (updateContent) {
    // Update content
    const fragment = document.createDocumentFragment();
    const children = [ ...otherElement.childNodes ];

    for (let child of children) {
      fragment.appendChild(child);
    }

    element.innerHTML = '';
    element.appendChild(fragment);
  }

  return element;
};

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

  let { request } = options;

  request.method = (formElement.getAttribute('method') || request.method).toUpperCase();
  request.headers = Object.assign({}, request.method === 'POST' && {
    'X-remoteform': '*',
    'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
  }, request.headers);

  if (request.method === 'POST') {
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

        // Find remote element
        const remoteElement = dom.querySelector(remoteSelector);

        // Find permanent elements
        [ ...remoteElement.querySelectorAll('*[data-remoteform-permanent]') ]
          .map((remotePermanentElement) => ({
            remotePermanentElement,
            permanentElement: targetElement.querySelector(`*[id='${remotePermanentElement.getAttribute('id')}']`),
          }))
          .filter(({ permanentElement }) => permanentElement)
          .forEach(({ permanentElement, remotePermanentElement }) => {
            remotePermanentElement.parentNode.insertBefore(permanentElement, remotePermanentElement);
            remotePermanentElement.parentNode.removeChild(remotePermanentElement);
          });

        if (remoteElement) {
          if (typeof options.update === 'function') {
            options.update(targetElement, remoteElement);
          }

          updateElement(targetElement, remoteElement);
        }
      });
    });
    event.preventDefault();
  }
};

function remoteform(selector = 'form', options = {}) {
  options = {
    responseSelector: '',
    request: {
      // Options passed to fetch
      ...options.request
    },
    ...options
  };

  const handleSubmit = createSubmitHandler(selector, options);

  document.addEventListener('submit', handleSubmit);

  return {
    destroy() {
      window.removeEventListener('submit', handleSubmit);
    }
  };
}

// Pollute the global namespace accidentally ;-)
global.remoteform = remoteform;

export default remoteform;
