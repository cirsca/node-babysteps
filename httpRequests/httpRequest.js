var request = require('request');

var url = process.argv[2];

request(url, function(error,response,body){
  if(error){
    throw Error(error);
  }else {
    console.log(response);
    console.log('\n');
    console.log(body);
  }
});
