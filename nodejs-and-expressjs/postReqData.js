var express = require('express')
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoeded({extended: false}));

var postHandler = function(req, res) {
	res.json({name: `${req.body.first} ${req.body.last}`});
};
app.route('/name').post(postHandler);

module.exports = app;
