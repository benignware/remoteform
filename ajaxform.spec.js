/* eslint-env node, mocha */
const assert = require('assert');
const ajaxform = require('./ajaxform');
const { JSDOM } = require('jsdom');
const { readFileSync } = require('fs');
const fetchMock = require('fetch-mock');

require('isomorphic-fetch');

const getContents = file => readFileSync(file, 'utf-8');
const getView = html => (new JSDOM(html)).window;

describe('ajaxform', () => {
  const fixtures = {
    index: getContents('./index.html'),
    update: getContents('./update.html')
  };

  fetchMock.post('submit.html', fixtures.success);

  beforeEach(() => {
    global.window = getView(fixtures.index);
    global.document = global.window.document;
  });

  it('should post form and update specified element', (done) => {
    const element = document.querySelector('.container');
    const form = element.querySelector('form');
    const expected = getView(fixtures.success).document.querySelector('.container').innerHTML;

    // Initialize ajaxform
    ajaxform(element);

    // Simulate event
    const event = new window.Event('submit', {
      'view': window,
      'bubbles': true,
      'cancelable': true
    });
    form.dispatchEvent(event);

    // Assert after timeout
    window.setTimeout(() => {
      const html = element.innerHTML;
      assert.equal(html, expected);
      done();
    }, 1000);
  });
});
