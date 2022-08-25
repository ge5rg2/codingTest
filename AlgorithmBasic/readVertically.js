let input = ["YCDt", "oao", "unI"];

function readVertically(arr) {
  let eachLength = arr.map((x) => x.length);
  let maxNum = Math.max(...eachLength);
  let result = [];
  for (let i = 0; i < maxNum; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (!arr[j][i]) {
        continue;
      } else {
        result.push(arr[j][i]);
      }
    }
  }
  return result.join("");
}

let output = readVertically(input);
console.log(output); // --> 'YouCanDoIt'
