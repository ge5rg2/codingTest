function firstCharacter(str) {
  // TODO: 여기에 코드를 작성합니다.
  let splitStr = str.split(" ");
  let result = [];
  for (let character of splitStr) {
    result.push(character[0]);
  }
  return result.join("");
}

let output = firstCharacter(
  "The community at Code States might be the biggest asset"
);

console.log(output); // --> "TcaCSmbtba"
