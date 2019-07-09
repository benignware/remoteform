/* eslint-disable no-console */
const { readFileSync } = require('fs');
const path = require('path');
const { IncomingForm } = require('formidable');

module.exports = {
  hostname: 'localhost',
  port: '3011',
  webPath: path.join(__dirname, 'dist'),
  mockPath: __dirname,
  logLevel: 'debug',
  mocks: {
    '/submit.html': {
      post: function(request, response) {
        const form = new IncomingForm();
        const { headers } = request;

        // Inspect
        console.log('headers: ', headers);
        form.parse(request, (err, fields) => {
          console.log('fields: ', fields); // ES

          let output = null;

          if (fields['test']) {
            output = readFileSync(path.join(__dirname, 'test/fixtures/success.html'));
          } else {
            output = readFileSync(path.join(__dirname, 'test/fixtures/error.html'));
          }

          // Send response
          response.send(output);
        });
      }
    }
  }
};
