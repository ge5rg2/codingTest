function square(num) {
  return num * num;
}

function add5(num) {
  return num + 5;
}

function isOdd(num) {
  return num % 2 !== 0;
}

function compose2(a, b) {
  return function (num) {
    return a(b(num));
  };
}

let output = compose2(add5, square);
console.log(output(4)); // --> 21

output = compose2(square, add5);
console.log(output(4)); // --> 81

output = compose2(isOdd, add5);
console.log(output(4)); // --> true
