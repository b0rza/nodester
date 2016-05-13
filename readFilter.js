var fs = require('fs');
var path = require('path');

var currFile = '/home/borza/workspace/nodester/main.js'
var currDir = '/home/borza/workspace/nodester'

// module.exports = {
//   files: function (directory, extension, callback) {
//
//     fs.readdir(directory, function (err, data) {
//       if (err){
//         return callback(err);
//       }
//
//       callback(null, data);
//     })
//   }
// }

module.exports = function (directory, extension, callback) {
  fs.readdir(directory, function (err, data) {
    if (err){ return callback(err); }

    var fl = []
    for (var i = 0; i < data.length; i++) {
      if (path.extname(data[i]).replace('.','') === extension.replace('.','')) {
        fl.push(data[i]);
      }
    }

    callback(null, fl);
  })
}
