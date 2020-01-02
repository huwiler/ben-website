const express = require('express'),
    app = express(),
    path = require('path');

app.use(express.static('public'));

app.get('/game', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/game.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(process.env.PORT, () => {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});