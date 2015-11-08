var util = require('util'),
my_http = require('http');

my_http.createServer(function(request,response){
  console.log(request);
    console.log('I got called');
    response.writeHeader(200, {'Content-Type': 'text/plain'});
    response.write('Hey there from port 8080!');
    response.end();
}).listen(8080);
console.log('Server Running on 8080');

