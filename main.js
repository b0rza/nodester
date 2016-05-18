var http = require('http');
var map = require('through2-map');
var strftime = require('strftime');

var port = process.argv[2] || 12345

var server = http.createServer(function(request, response) {
  if (request.method != 'POST') {
    return response.end('a POST dude');
  }

  request.pipe(map(function(chunk) {
    return chunk.toString().toUpperCase();
  })).pipe(response);
});

server
  .on('listening', function() {
    console.log('Server started on port ' + port);
  })
  .on('connection', function() {
    console.log('New connection! ' + strftime('%Y-%m-%d %H:%M'));
  })
  .listen(port);
