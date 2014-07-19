// web.js
2
var express = require("express");
3
var logfmt = require("logfmt");
4
var app = express();
5
 
6
app.use(logfmt.requestLogger());
7
 
8
app.get('/', function(req, res) {
9
  res.send('Hello World!');
10
});
11
 
12
var port = Number(process.env.PORT || 5000);
13
app.listen(port, function() {
14
  console.log("Listening on " + port);
15
});
