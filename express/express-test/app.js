var express = require('express');
var app = express();

var user = require('./routers/user');

app.use('/user/', user)

var port = process.env.PORT || 3000;

app.listen(port);