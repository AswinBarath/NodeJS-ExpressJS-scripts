var express = require('express');
var app = express();

let path = __dirname + "/public";
app.use("/public", express.static(path));

module.exports = app;
