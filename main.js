var net = require('net');
var strftime = require('strftime');

var port = process.argv[2] || 12345
var server = net.createServer(function(socket) {
  socket.write(strftime('%Y-%m-%d %H:%M'));
  socket.end('\n');
});

server
  .listen(port)
  .on('listening', function() {
    console.log('Server listening on port: ' + port);
  })
  .on('connection', function() {
    console.log('New connection! ' + strftime('%Y-%m-%d %H:%M'));
  });
