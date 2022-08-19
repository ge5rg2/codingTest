let output = convertDoubleSpaceToSingle("string  with  double  spaces");

function convertDoubleSpaceToSingle(str) {
  // TODO: 여기에 코드를 작성합니다.
  return str.split("  ").join(" ");
}

console.log(output); // --> "string with double spaces"
