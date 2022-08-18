let output = firstReverse("I love codestates");

function firstReverse(str) {
  // TODO: 여기에 코드를 작성합니다.
  let arr = str.split("");
  arr.reverse();
  return arr.join("");
}

console.log(output); // "setatsedoc evol I"
