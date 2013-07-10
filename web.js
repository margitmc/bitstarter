var express = require('express');

var app = express.createServer(express.logger());

var respbuff = fs.readFileSync(index.html);

var resptxt = respbuff.toString;

app.get('/', function(request, response) {
  response.send(resptxt);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
