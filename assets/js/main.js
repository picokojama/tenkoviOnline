var canvas = $('canvas#main')[0],
    actionService = require('./services/actionService'),
    socketService = require('./services/socketService'),
    beforeGame = require('./beforeGame'),
    Tenk = require('./classes/Tenk'),
    stage;

$(function() {
    stage = new createjs.Stage('main');
    beforeGame(stage);
    socketService.init(stage, beforeGame);
    tenk1 = new Tenk(20, 30);
    console.log(tenk1);
    createjs.Ticker.addEventListener('tick', function() {
        stage.update();
    });
});