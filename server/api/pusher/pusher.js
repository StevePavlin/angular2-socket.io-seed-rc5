var db = require('../../db');
var config = require('../../config');

function Pusher() {

  this.io = require('socket.io-emitter')({ host: config.redisHost, port: config.redisPort });
}

Pusher.prototype.publishTo = function(user, event, data, callback) {
  // TODO Get users sockets and emit
};

Pusher.prototype.publishToAll = function(event, data, callback) {
  this.io.emit(event, data);
};

module.exports = new Pusher();
