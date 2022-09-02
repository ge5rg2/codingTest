function square(num) {
  return Math.pow(num, 2);
}

function mul10(num) {
  return num * 10;
}

function mapCallback(func, arr) {
  if (arr.length == 0) {
    return [];
  }
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(func(arr[i]));
  }
  return result;
}

let output = mapCallback(square, [2, 4, 7]);
console.log(output); // --> [4, 16, 49]

output = mapCallback(mul10, [2, 4, 7]);
console.log(output); // --> [20, 40, 70]

output = mapCallback(square, []);
console.log(output); // --> []
