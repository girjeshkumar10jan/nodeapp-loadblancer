var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('We are  in AWS  Cloud. this is a demo project for load-balancer for ric'); //write a response to the client
  res.end(); //end the response
}).listen(5000); //the server object listens on port 4000
