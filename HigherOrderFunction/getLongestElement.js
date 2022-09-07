// getLongestElement

function getLongestElement(arr) {
  // TODO: 여기에 코드를 작성합니다.
  return arr.length == 0
    ? ""
    : arr.reduce((acc, cur) => {
        if (cur.length > acc.length) {
          return cur;
        } else {
          return acc;
        }
      });
}

let output = getLongestElement(["one", "two", "three"]);
console.log(output); // --> 'three'

let output2 = getLongestElement(["one", "two", "wow"]);
console.log(output2); // --> 'one'
