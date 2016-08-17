var config = require('../config');

function Pusher() {
  this.io = null;
}

Pusher.prototype.configure = function(server) {

  // Socket.io
  this.io = require('socket.io')(server);
  var redis = require('socket.io-redis');

// Setup
  this.io.adapter(redis({
    host: config.redisHost,
    port: config.redisPort
  }));

  console.log('Socket.io listening on port ' + server.address().port);
  this.io.on('connect', function (socket) {
    console.log(socket.id + " connected.");

    // Add auth middleware
  });


  // Listen for redis messages, if no target, publish to all
  // else search for target user and publish to all their socket ids
};
module.exports = new Pusher();
