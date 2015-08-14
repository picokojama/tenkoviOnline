var findSockets = require('./helpers/findSockets');

module.exports = function(io, options) {
    var namespace = io.of('/' + options.game);
    var brojIgraca = 0;
    namespace.on('connection', function(socket){
        brojIgraca ++;

        if(brojIgraca == 2) {
            namespace.emit('zaponiIgru');
        }

        socket.on('disconnect', function(){
            brojIgraca --;
            namespace.emit('userDisconected');
        });
    });
};