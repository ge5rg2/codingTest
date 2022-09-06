function getLengthOfElements(arr) {
  // TODO: 여기에 코드를 작성합니다.
  return arr.map((el) => el.length);
}

let output = getLengthOfElements(["", "a", "ab", "abc"]);
console.log(output); // --> [0, 1, 2, 3]

let output2 = getLengthOfElements(["hello", "code", "states"]);
console.log(output2); // --> [5, 4, 6]
