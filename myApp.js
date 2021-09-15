var express = require('express');
var app = express();

// Challenge 10 & 11
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));


// Challenge 6 - Mounted at root level to log all the requests
app.use(function(req, res, next) {
	console.log(`${req.method} ${req.path} - ${req.ip}`);
	next();
});


// Challenge 11
var postHandler = function(req, res) {
	res.json({name: `${req.body.first} ${req.body.last}`});
};
app.route('/name').post(postHandler);

// or

// app.post('/name', function(req, res, next) {
// 	query = req.body;
// 	first = query.first.toString();
// 	last = query.last.toString();
// 	next();
// }, function(req, res) {
// 	res.send({name: `${first} ${last}`})
// })


// Challenge 9
var handler = function(req, res) {
	res.json({name: `${req.query.first} ${req.query.last}`});
}

app.route('/name').get(handler).post(handler);

//or

// app.get('/name', function(req, res, next) {
// 	query = req.query;
// 	first = query.first.toString();
// 	last = query.last.toString();
// 	next();
// }, function(req, res) {
// 	res.send({name: `${first} ${last}`})
// });


// Challenge 8
app.get('/:word/echo', function(req, res) { 
	res.json({echo: req.params.word});
});


// Challenge 7
app.get('/now', function(req, res, next) { 
	// middleware 1 - Add current time
	req.time = new Date().toString();
	next();
}, function(req, res) { 
	// middleware 2 (handler) - Handle the response
	res.json({time: req.time});
});


// Challenge 5
var helloObjLow = {"message": "Hello json"};
var helloObjUp = {"message": "HELLO JSON"};
app.get('/json', function(req, res) {
	const mySecret = process.env['MESSAGE_STYLE']
	if(mySecret == "uppercase") {
		res.json(helloObjUp);
	} else {
		res.json(helloObjLow);
	}
});


// Challenge 4
// var helloObj = {"message": "Hello json"};
// app.get('/json', function(req, res) {
// 	res.json(helloObj);
// });


// Challenge 3
let path = __dirname + "/public";
app.use("/public", express.static(path))


// Challenge 2
app.get('/', function(req, res) {
	let path = __dirname + "/views/index.html"
	res.sendFile(path)
})


// Challenge 1
// app.get('/', function(req, res) {
// 	res.send("Hello Express");
// })


// Exercise
// console.log("Hello World")


module.exports = app;
