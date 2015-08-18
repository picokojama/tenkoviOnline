var beforeGame = require('./beforeGame');

try{
    var socket = io('/' + igra);
} catch(e) {
    console.log('Ne moze ucitati io');
    console.log(e);
}

var events = [],
    stage, beforeGame;

module.exports = {
    init : init,
    sendEvent : sendEvent,
    getEvents : getEvents
};

function init(stageNow, beforeGame) {
    try {
        if(!stageNow) throw 'Nije poslan argument stage';
        if(!beforeGame || typeof beforeGame != 'function') throw 'Nesto nevalja s beforeGame';
        stage = stageNow;
    } catch (e) {
        console.log(e);
    }
}

function sendEvent(type, data) {

}

function getEvents() {
    return events;
}

socket.on('zaponiIgru', function() {
    try {
        if(!stage) throw 'Nema var stage';
        stage.removeAllChildren();
    } catch (e) {
        console.log('Pogreška kod micanja childrena');
        console.log(e);
    }
});

socket.on('userDisconected', function() {
    try {
        if(!beforeGame || typeof beforeGame != 'function') throw 'u userDisconnect nema beforeGame';
        if(!stage) throw 'Nema stage u userDisconnect';
        stage.removeAllChildren();
        beforeGame(stage);
    } catch (e) {
        console.log('Greska prilikom userDisconnect');
        console.log(e);
    }
});