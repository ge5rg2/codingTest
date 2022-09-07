// getLengthOfLongestElement

function getLengthOfLongestElement(arr) {
  // 여기에 코드를 입력하세요
  return arr.reduce((pre, cur) => {
    if (pre.length >= cur.length) {
      return pre;
    }
    return cur;
  }, 0).length;
}

let output = getLengthOfLongestElement(["one", "two", "no"]);
console.log(output); // --> 3
