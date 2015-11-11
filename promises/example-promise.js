// function doWork (data, callback) {
//   callback('done');
// }

// function doWorkPromise (data){
//   return new Promise(function(resolve, reject){
//     setTimeout(function(){
//       reject('Everything is broken....');
//     }, 1234);
//   });
// }

// doWorkPromise('This is some data').then(function(data){
//   console.log(data);
// }, function(error){
//   console.log(error);
// });
var request = require('request');
function getWeather(location){
  return new Promise( function (resolve, reject){
    var endocdedLocation = encodeURIComponent(location);
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + endocdedLocation + '&appid=2de143494c0b295cca9337e1e96b00e0&units=imperial';

    if(!location){
      return reject('No location provided!');
    }

    request({
      url: url,
      json: true,
    }, function (error, response, body){ 
      if(error){
        reject('Unable to fetch weather...Sorry I failed you');
      }else {
        resolve('It\'s ' + body.main.temp + 'F in ' + body.name + '!');
      }
    });
  });
}

getWeather('san francisco').then(function(currentWeather){
  console.log(currentWeather);
}, function(error){
  console.log(error);
});