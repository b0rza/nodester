var fs = require('fs');
var http = require('http');

var port = process.argv[2] || 12345
var filePath = process.argv[3] || '/home/borza/workspace/nodester/package.json'

var server = http.createServer(function(request, response) {
  var fileStream = fs.createReadStream(filePath);
  fileStream.pipe(response);
})

server
  .on('listening', function() {
    console.log('Server started on port ' + port);
    console.log('Serving file: ' + filePath);
  })
  .listen(port);
