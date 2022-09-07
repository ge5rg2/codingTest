// computeProductOfAllElements

function computeProductOfAllElements(arr) {
  // TODO: 여기에 코드를 작성합니다.
  if (arr.length == 0) return 1;
  return arr.reduce((acc, cur) => acc * cur);
}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60
