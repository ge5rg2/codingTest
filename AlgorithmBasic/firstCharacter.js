function firstCharacter(str) {
  // TODO: 여기에 코드를 작성합니다.
  let splitStr = str.split(" ");
  let result = "";
  for (let character of splitStr) {
    result = result + character[0];
  }
  return result;
}

let output = firstCharacter(
  "The community at Code States might be the biggest asset"
);

console.log(output); // --> "TcaCSmbtba"
