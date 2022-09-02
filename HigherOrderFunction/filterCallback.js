function isOdd(num) {
  return num % 2 === 1;
}

function isEven(num) {
  return !isOdd(num);
}

function filterCallback(func, arr) {
  let result = [];
  for (let el of arr) {
    if (func(el)) {
      result.push(el);
    }
  }
  return result;
}

let output = filterCallback(isOdd, [1, 2, 3, 4]);
console.log(output); // --> [1, 3]

output = filterCallback(isEven, [1, 2, 3, 4]);
console.log(output); // --> [2, 4]
