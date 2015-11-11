var util = require('util'),
my_http = require('http'),
request = require('./httpRequest');

my_http.createServer(function(request,response){
  console.log(request);
  console.log('I got called');
  response.writeHeader(200, {'Content-Type': 'text/plain'});
  response.write('Hello from port 8080!');
  response.end();
}).listen(8080);

console.log('Server Running on 8080');

