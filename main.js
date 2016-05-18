var http = require('http');
var url = require('url');
var port = process.argv[2] || 12345

var server = http.createServer(function(req, res) {
  console.log(req.url);

  var urlObj = url.parse(req.url, true, true);
  console.log(urlObj);

  var time = new Date(urlObj.query.iso)

  if (urlObj.pathname == '/api/parsetime') {
    var respTime = {
      hour: time.getHours(),
      minute: time.getMinutes(),
      second: time.getSeconds()
    }

  } else if (urlObj.pathname == '/api/unixtime') {
    var respTime = {
      unixtime: time.getTime()
    }
  }

  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(respTime));
});

server
  .listen(port)
  .on('listening', function() {
    console.log('Listening now!');
  })
