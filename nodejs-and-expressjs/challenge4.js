var express = require('express')
var app = express();

var helloObj = {"message": "Hello json"};
app.get('/json', function(req, res) {
	res.json(helloObj);
});

module.exports = app;
