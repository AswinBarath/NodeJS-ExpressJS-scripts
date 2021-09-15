var express = require('express')
var app = express();

app.get('/:word/echo', function(req, res) { 
	res.json({echo: req.params.word});
});
module.exports = app;
