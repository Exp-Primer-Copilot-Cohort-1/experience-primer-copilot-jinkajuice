// Create web server 
// Run the server and open the browser to view the page
// Open the browser and type localhost:8080 in the address bar
// The browser will display the message "Hello World"

// Load the http module to create an http server.
var http = require('http');

// Configure the HTTP server to respond with "Hello World"
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});

// Listen on port 8080, IP defaults tog
