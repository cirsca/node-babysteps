WHAT'S THIS?
============

_*I CAN HAZ THE DATA?*_

There is a very smart man that is using far more advanced algorithms than I can really imagine. We are going to access his server with the publi API, GET some data, PUSH it to our MongoDB , then GET it to our client. We are going to steall his data and show it off as our own, with no one the wiser....

### The What

* MongoDB
* Express
* Callbacks
* CRUDdy MicroServices
* [Our mighty data](http://hypothesis.ornl.gov/)

### The How

* Create a server, with routes to display data and enter uri/url's
* Create a MongoDB and interact with its Collections
* Pass data from the client (a url/uri to pull the JSON data from) to the server
* GET data from url and save it to our MongoDB Collection
* GET data from Collection to client

### The Why

* If we want to know how to pull data from the interwebs, pulling data that is using a pretty sweet algorithm seems like a good place to start.
* This will be the basis for all other Node applications: data going from the client (an event), doing business logic on it, then returning whatever is needed to the client.
* We will have to create a few needed micro services that we will use for most of our future Nodejs applications