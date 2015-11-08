WHAT'S THIS?
============

* Both of these files rely on `process.argv[2]` in order to process with URL to `get` from. 
* Both `console.log` the same thing (which is whatever is received from the url)
* Both `require` the module `request` which must be installed with `npm install request`

`httpRequest.js`

* Takes the url to `request` from the terminal
* Passes it to the `request()`, with `callback(error,reponse,body)`
* `callback()` throws error if `error` came along for the ride
* if `else`, it prints the `body` of the `request()` function to the `console`

`httpRequestRobust.js`

* Takes the url to `request` from the terminal (`process.argv[2]`)
* Instead of passing just that to the `request()` function, we assign it to a property of an object we are calling `optionsOjbect`, which is an object full of options for our `request()` function to use.
* We then follow the same `callback()` function from `httpRequest.js`. This chould be extrapolated into its own checking function where if the response was X or if the body is Y, do some other function?