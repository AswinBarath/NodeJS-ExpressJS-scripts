var express = require('express');
var app = express();

// var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({extended: false}));


// app.post('/name', function(req, res, next) {
// 	query = req.body;
// 	first = query.first.toString();
// 	last = query.last.toString();
// 	next();
// }, function(req, res) {
// 	res.send({name: `${first} ${last}`})
// })


// app.get('/name', function(req, res, next) {
// 	query = req.query;
// 	first = query.first.toString();
// 	last = query.last.toString();
// 	next();
// }, function(req, res) {
// 	res.send({name: `${first} ${last}`})
// })


// app.get('/:word/echo', function(req, res) {
// 	word = req.params.word;
// 	res.send({echo: word});
// })


// app.get('/now', function(req, res, next) {
// 	req.time = new Date().toString();
// 	next();
// }, function(req, res) {
// 	res.send({time: req.time})
// })



// app.use(function(req, res, next) {
//   console.log(req.method, req.path, "-", req.ip);
//   next();
// })



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


// Exercise 1
// console.log("Hello World")


module.exports = app;
