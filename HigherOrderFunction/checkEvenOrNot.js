function checkEvenOrNot(arr) {
  // TODO: 여기에 코드를 작성합니다.
  return arr.map((el) => (el % 2 || el == 0 ? "no" : "ok"));
}

let output = checkEvenOrNot([1, 2, 3, 4]);
console.log(output); // --> ['no', 'ok', 'no', 'ok']

let output2 = checkEvenOrNot([0, 3, 4]);
console.log(output2); // --> ['no', 'no', 'ok']
