const { readFileSync } = require('fs');
const qs = require('querystring');
const { join: joinPath } = require('path');
const { IncomingForm } = require('formidable');
const { inspect } = require('util');

module.exports = {
  hostname: '0.0.0.0',
  port: '3000',
  webPath: __dirname,
  mockPath: __dirname,
  logLevel: 'debug',
  mocks: {
    '/submit.html': {
      // 'get': 'testdata/test.json',
      post: function(request, response) {
        const html = readFileSync(joinPath(__dirname, 'update.html'));
        let body = '';
        const form = new IncomingForm();
        form.parse(request, (err, fields, files) => {
          const inspection = inspect({ fields: fields, files: files });
          console.log('inspection: ', inspection);
        });

        // request.on('data', function (data) {
        //   body += data;
        //   // Too much POST data, kill the connection!
        //   // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
        //   if (body.length > 1e6) {
        //     request.connection.destroy();
        //   }
        // });
        // request.on('end', function () {
        //   const post = qs.parse(body);
        //   console.log('POST: ', post);
        // });
        response.send(html);
      }
    }
  }
};
