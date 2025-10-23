const express = require('express'),
    app = express(),
    path = require('path');

//app.use(express.static('public'));
app.use('/static', express.static(path.join(__dirname, 'public')));

//app.get('/game', (req, res) => {
//    res.sendFile(path.join(__dirname + '/public/game.html'));
//});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/game.html'));
});

app.listen(process.env.PORT, () => {
    console.log("Express server listening on port %d in %s mode", process.env.PORT, app.settings.env);
});