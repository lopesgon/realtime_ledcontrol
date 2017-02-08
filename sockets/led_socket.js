/**
 * Created by fredericlopesgoncalvesmagalhaes on 24.01.17.
 */
var io = require('socket.io');
var obj_checkbox = require('../metier/obj_ck_singleton');
var python = require('../python/python');

module.exports = {

  startSocketLed: function(server) {
    var listener = io.listen(server);

    listener.sockets.on('connection', function (socket) {

      socket.on('led', function (data) {
        var obj = obj_checkbox.getInstance();
        obj._state = data.state;
        python.ledAction(data.state);
        socket.broadcast.emit('led_state', data.state);
      });

      // Disconnect listener
      socket.on('disconnect', function () {
        console.log('Client disconnected.');
      });
    });

    listener.sockets.on('connection', function (socket) {
      socket.emit('message', {'message': 'Coucou World!'});
    });
  }

}