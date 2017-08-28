var express = require('express');
var app = express();
var index = require('./routes/index.js')
//var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//app.use (express.static(path.join(__dirname, './public')));
app.use(express.static('public'));
app.use(bodyParser.json());

app.use('/', index);

//var databaseUrl = 'mongodb://localhost:27017/'

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), function () {
    console.log('listening on port: ', app.get('port'));
})