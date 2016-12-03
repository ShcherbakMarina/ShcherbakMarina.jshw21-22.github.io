// var number = +prompt("Enter a number:");
// var power = +prompt("Enter a power:");

function myPow (a, b) {
  var res = 1;

  if (b < 0) {
    for (var i = 0; i > b; i--) {
      res *= a;
    }
    res = 1/res;

    if (b % 2) {
      res *= -1;
    }
  } else {
    for (var i = 0; i < b; i++) {
      res *= a;
    }
  }

  return res;
}

// var result = myPow(number, power);

// console.log(result);

module.exports.myPow = myPow;
