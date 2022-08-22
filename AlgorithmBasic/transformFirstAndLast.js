let arr = ["Queen", "Elizabeth", "Of Hearts", "Beyonce"];

function transformFirstAndLast(arr) {
  let result = {};
  for (let value of arr) {
    result[value] = arr[arr.length - 1];
    return result;
  }
}

let output = transformFirstAndLast(arr);
console.log(output); // --> { Queen : 'Beyonce' }
