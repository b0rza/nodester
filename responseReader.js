var bl = require('bl');

module.exports = function (response, callback) {
  response
    .pipe(bl(function (err, data) {
      if(err){ return callback(err); }

      return callback(null, data.toString());
    }));
}
