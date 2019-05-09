/* eslint-env node, mocha */
const path = require('path');
const assert = require('assert');
const { JSDOM } = require('jsdom');
const { readFileSync } = require('fs');
const fetchMock = require('fetch-mock');
require('isomorphic-fetch');

const getContents = file => readFileSync(file, 'utf-8');
const getView = html => (new JSDOM(html)).window;

const { default: remoteform } = require('../src/remoteform');

describe('remoteform', () => {
  const fixtures = {
    index: getContents(path.resolve(__dirname, './fixtures/index.html')),
    update: getContents(path.resolve(__dirname, './fixtures/update.html'))
  };

  fetchMock.post('/submit.html', fixtures.update);

  beforeEach(() => {
    global.window = getView(fixtures.index);
    global.document = global.window.document;
  });

  it('should post form and update specified element', (done) => {
    const element = document.querySelector('.remoteform');
    const form = element.querySelector('form');
    const expected = getView(fixtures.update).document.querySelector('.remoteform').innerHTML;

    // Initialize remoteform
    remoteform(element);

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
