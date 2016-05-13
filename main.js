var fs = require('fs');
var path = require('path');
var readFilter = require('./readFilter.js');

var currFile = '/home/borza/workspace/nodester/main.js'
var currDir = '/home/borza/workspace/nodester'

var currDir = process.argv[2];
var extension = process.argv[3];

readFilter(currDir, extension, function(err, files) {

  if (err) {
    return console.log('An error: ' + err);
  }

  for (var i = 0; i < files.length; i++) {
    console.log(files[i]);
  }
});
