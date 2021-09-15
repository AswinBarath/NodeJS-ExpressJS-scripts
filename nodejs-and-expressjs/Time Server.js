var express = require('express')
var app = express();

app.get('/now', function(req, res, next) { 
	// middleware 1 - Add current time
	req.time = new Date().toString();
	next();
}, function(req, res) { 
	// middleware 2 (handler) - Handle the response
	res.json({time: req.time});
});

module.exports = app;
