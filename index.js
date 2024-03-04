var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('You are  in AWS  Cloud. this is a demo project for load-balancer'); //write a response to the client
  res.end(); //end the response
}).listen(3000); //the server object listens on port 4000
