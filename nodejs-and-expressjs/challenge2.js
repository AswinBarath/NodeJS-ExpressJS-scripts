var express = require('express');
var app = express();

app.get('/', function(req, res) {
	let path = __dirname + "/views/index.html";
	res.sendFile(path);
});

module.exports = app;
