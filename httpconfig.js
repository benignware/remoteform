/* eslint-disable no-console */
const { readFileSync } = require('fs');
const { join: joinPath } = require('path');
const { IncomingForm } = require('formidable');

module.exports = {
  hostname: '0.0.0.0',
  port: '3000',
  webPath: __dirname,
  mockPath: __dirname,
  logLevel: 'debug',
  mocks: {
    '/submit.html': {
      post: function(request, response) {
        const html = readFileSync(joinPath(__dirname, 'update.html'));
        const form = new IncomingForm();
        const { headers } = request;

        // Inspect
        console.log('headers: ', headers);
        form.parse(request, (err, fields) => {
          console.log('fields: ', fields); // ES
        });

        // Send response
        response.send(html);
      }
    }
  }
};
