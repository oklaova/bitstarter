var express = require('express');
var fs = require('fs');
//var content = fs.readFileSync('index.html','utf-8');
var app = express.createServer(express.logger());


app.get('/', function(request, response) {
  // read content of the file index.html. The content returned
  // is a buffer unless the encoding is included (string returned)
  var content = fs.readFileSync('index.html');
  response.send(content.toString("utf-8"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
