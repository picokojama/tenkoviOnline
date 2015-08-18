var canvas = $('canvas#main')[0],
    actionService = require('./actionService'),
    socketService = require('./socketService'),
    beforeGame = require('./beforeGame'),
    stage;

$(function() {
    stage = new createjs.Stage('main');
    beforeGame(stage);
    socketService.init(stage, beforeGame);
    createjs.Ticker.addEventListener('tick', function() {
        stage.update();
    });
});