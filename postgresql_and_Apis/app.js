var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var api = require('./api/index');
var app = express();
var router = express.Router();

app.use(express.json())
app.use(bodyParser.json({
    limit: 1024 * 1024 * 16
}));
app.use(bodyParser.urlencoded({
    limit: 1024 * 1024 * 16,
    extended: true
}));


app.use(router);
app.use('/api', api);

app.use('/', express.static(path.join(__dirname, 'public')))

app.listen(5454, function () {
    console.log("Server started on http://localhost:5454");
});