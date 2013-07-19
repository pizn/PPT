var io = require('socket.io').listen(3001);
io.sockets.on('connection', function (socket) {
    socket.on('message', function(data) {
        console.log('Message Received:', data);
        socket.broadcast.emit('message', data);
    });
});

/*
 * GET home page.
 */

exports.index = function(req, res){
  res.redirect('/index.html');
};
