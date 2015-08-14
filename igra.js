module.exports = function(io, options) {
    console.log(options.game);
    io.on('connection', function(socket){
        console.log('a user connected');
    });
};