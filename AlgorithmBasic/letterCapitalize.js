let output1 = letterCapitalize("hello world");

function letterCapitalize(str) {
  // TODO: 여기에 코드를 작성합니다.
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      result.push(str[i].toUpperCase());
    } else if (str[i - 1] == " ") {
      result.push(str[i].toUpperCase());
    } else {
      result.push(str[i]);
    }
  }
  return result.join("");
}

console.log(output1); // "Hello World"
