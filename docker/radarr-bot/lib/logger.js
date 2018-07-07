/* global __dirname */

var Winston = require('winston');

module.exports = new(Winston.Logger)({
  transports: [
    new(Winston.transports.Console)({
      json        : false,
      timestamp   : true,
      prettyPrint : true,
      colorize    : true
    }),
    new(Winston.transports.File)({ filename: __dirname + '/../sonarr.log', json: true })
  ]
});
