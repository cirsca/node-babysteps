var express = require('express');
var app = express();


/*==============================
=            ROUTES            =
==============================*/

var router = express.Router();

router.get('/',function(req,res){
  res.json({message: 'hooray! welcome to our api!'});
});

app.use('/api',router);

/*=====  End of ROUTES  ======*/

app.listen(port);
console.log('Magic happens on port ' + port);
