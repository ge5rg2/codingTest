// computeSumOfAllElements

function computeSumOfAllElements(arr) {
  // TODO: 여기에 코드를 작성합니다.
  if (arr.length == 0) {
    return 0;
  }
  return arr.reduce((acc, cur) => acc + cur);
}

let output = computeSumOfAllElements([1, 2, 3]);
console.log(output); // --> 6
