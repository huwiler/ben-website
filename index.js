const express = require('express'),
    app = express(),
    path = require('path'),
    port = process.env.PORT || 3000;;

app.use(express.static('public'));

app.get('/game', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/game.html'));
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(port);