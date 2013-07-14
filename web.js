var fs = require('fs');
var express = require('express');

var content;

fs.readFile('index.html', 'utf-8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    content = data;
});

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(content);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});