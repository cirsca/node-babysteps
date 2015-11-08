var request = require('request');

/**
 *
 * NEED TO HAVE OBJECT PASSED FROM OTHER FUNCTION
 * INSTEAD OF HARDCODED IN FOR BABYSTEP TO BE
 * COMPLETED
 *
 */


var optionsObject = {
  // Getting request url from the console's 3rd argument
  uri: process.argv[2],
  // What type of HTTP method we are using
  method: "GET",
  // How long to wait for a response before giving up
  timeout: 10000,
  // Allow us to follow any behind-the-scense redirect
  followRedirect: true,
  // Maximum amount of rabbitholes we'll go down
  maxRedirects: 10
}

request(optionsObject, function(error,response,body){
  if(error){
    throw Error(error);
  }else {
    console.log(body);
  }
});
