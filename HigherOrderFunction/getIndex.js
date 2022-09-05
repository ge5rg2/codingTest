function getIndex(arr, num) {
  // TODO: 여기에 코드를 작성합니다.
  return arr.filter((el) => el < num).length;
}

let output = getIndex([5, 4, 1, 3], 2);
console.log(output); // --> 1

let output2 = getIndex([10, 5, 1, 3], 13);
console.log(output2); // --> 4
