try{
    var express = require('express'),
        app = express(),
        http = require('http').Server(app),
        io = require('socket.io')(http),
        randomstring = require("randomstring"),
        igra = require('./igra');
} catch (e) {
    console.log('Moduli nisu učitani.');
    console.log('Pokreni npm install');
    console.log('Error: ', e);
}

var gameOptions = {};

app.set('view engine', 'ejs');
app.use(express.static('app'));

app.get('/', function(req, res){
    var link;
    try{
        gameOptions.game = randomstring.generate(10);
        link = '/' + gameOptions.game;
        res.redirect(link);
    } catch (e) {
        console.log('Greska prilikom redirectanja');
        console.log('String: ', gameOptions.game);
        console.log('Link: ', link);
        console.log(e);
        res.send('Došlo je do greske sa serverom. Probajte otići na ovaj link: <a href="' + link + '">link</a>');
    }
});
app.get('/:igra', function(req, res){
    try{
        gameOptions.game = req.params.igra;
        igra(io, gameOptions);
        res.render('index', {gameOptions : gameOptions});
    } catch (e) {
        console.log('Greska nakon redirectanja');
        console.log('Error:', e);
    }
});

http.listen(80);