var http = require('http');
var responseReader = require('./responseReader.js');

var urls = process.argv.splice(2)

http.get(urls[0], function callback (response) {
  responseReader(response, function (err, data) {
    if(err){ return console.log('Error: ' + err); };
    console.log(data);

    http.get(urls[1], function callback (response) {
      responseReader(response, function (err, data) {
        if(err){ return console.log('Error: ' + err); };
        console.log(data);

        http.get(urls[2], function callback (response) {
          responseReader(response, function (err, data) {
            if(err){ return console.log('Error: ' + err); };
            console.log(data);
          });
        });
      });
    });
  });
});
