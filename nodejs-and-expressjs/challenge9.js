var express = require('express')
var app = express();

var handler = function(req, res) {
	res.json({name: `${req.query.first} ${req.query.last}`});
}

app.route('/name').get(handler).post(handler);

module.exports = app;
