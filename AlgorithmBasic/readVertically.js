let input = ["YCDt", "oao", "unI"];

function readVertically(arr) {
  let checkLength = arr.map((el) => el.length);
  let maxNum = Math.max(...checkLength);
  let result = "";
  for (let i = 0; i < maxNum; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (!arr[j][i]) {
        continue;
      }
      result = result + arr[j][i];
    }
  }
  return result;
}

let output = readVertically(input);
console.log(output); // --> 'YouCanDoIt'
