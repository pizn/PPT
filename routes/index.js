/**
 *  定义 socket 的端口号，处理广播
 */
var io = require('socket.io').listen(3001);
io.sockets.on('connection', function (socket) {
    socket.on('message', function(data) {
        socket.broadcast.emit('message', data);
    });
});

/*
 * GET home page.
 */

exports.index = function(req, res){
  res.redirect('/show.html');
};
