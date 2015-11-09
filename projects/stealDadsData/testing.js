var firstNumber = process.argv[2];
var secondNumber = process.argv[3];

var squareNumbers = function(x,y,callback){
  var numbers = {
    first: x*x,
    second: y*y
  };

  console.log(numbers);

  callback(numbers);
}

var callback = function(numbers){
  console.log('Our first number was: ' + Math.sqrt(numbers.first));
  console.log('Our second number was: ' + Math.sqrt(numbers.second));
  console.log(numbers);
};

squareNumbers(firstNumber,secondNumber,callback);