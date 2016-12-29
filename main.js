// Write a function that performs a basic math operation expressed in words, and return the result in words. For example... "two plus two" would return "two plus two is four" "two minus one" would return "two minus one is one"
//
// You should at minimum support the numbers zero to twenty and the operators plus, minus and times.
//
// Bonus
//
// Feel free to add more operators and support any amount of numbers.

var num = {
  "zero"      : 0,
  "one"       : 1,
  "two"       : 2,
  "three"     : 3,
  "four"      : 4,
  "five"      : 5,
  "six"       : 6,
  "seven"     : 7,
  "eight"     : 8,
  "nine"      : 9,
  "ten"       : 10,
  "eleven"    : 11,
  "twelve"    : 12,
  "thirteen"  : 13,
  "fourteen"  : 14,
  "fifteen"   : 15,
  "sixteen"   : 16,
  "seventeen" : 17,
  "eighteen"  : 18,
  "nineteen"  : 19,
  "twenty"    : 20,
  "plus"      : "+",
  "minus"     : "-",
  "times"     : "*"
}

var x = "two plus three"
var a = 0
var b = 0
var c = 0
var result = 0

function basicMath(count) {
  var y = count.split(" ")
  console.log(y);
  var result = 0
  for (var words in num) {
    if (words === y[0]) {
      a = num[words]
      console.log(a);
    }
  }
  for (var words in num) {
    if (words === y[1]) {
      b = num[words]
      console.log(b);
    }
  }
  for (var words in num) {
    if (words === y[2]) {
      c = num[words]
      console.log(c);
    }
  }
  result = parseInt(a) + b + parseInt(c)

  var sign = b;
  switch(sign) {
    case "+":
      result = parseInt(a) + parseInt(c);
      break;
    case "-":
      result = parseInt(a) - parseInt(c);
      break;
    case "*":
      result = parseInt(a) * parseInt(c);
      break;
  }
  for (var words in num) {
    if (result === num[words]) {
      result = words
      console.log(result);
    }
  }
  console.log(x+" is " + result);
  // console.log(result);
  // console.log(typeof result);
}

basicMath(x)
//     if (y[0] === numbers[words]) {
//       a = words
//     }
//   }
//   for (var words in numbers) {
//     if (y[1] === numbers[words]) {
//       b = words
//     }
//   }
//   for (var words in numbers) {
//     if (y[2] === numbers[words]) {
//       c = words
//     }
//     result = parseInt(a)+b+parseInt(c)
//     console.log(result);
//   }
// }
