var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

app.get('/', function(request, response) {
  var buff = new Buffer(fs.readFileSync('index.html'));
  buff.toString;
  response.send(buff);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
