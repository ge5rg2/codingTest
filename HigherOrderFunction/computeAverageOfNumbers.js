// computeAverageOfNumbers
function computeAverageOfNumbers(arr) {
  // TODO: 여기에 코드를 작성합니다.
  if (arr.length == 0) return 0;
  return arr.reduce((acc, cur) => acc + cur) / arr.length;
}

let output = computeAverageOfNumbers([4, 5, 6]);
console.log(output); // --> 5
