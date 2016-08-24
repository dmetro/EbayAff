
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.end('Hello World\n');
});

// Listen on port 8000, 
server.listen(8000);