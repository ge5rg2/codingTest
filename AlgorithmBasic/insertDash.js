let output = insertDash("454793");

function insertDash(num) {
  // 반복문에서 해당 숫자 뒤에 숫자가 홀수 -> "-" 추가
  // 뒤에 짝수 -> 진행
  let result = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2) {
      if (num[i + 1] % 2) {
        result.push(num[i] + "-");
      } else {
        result.push(num[i]);
      }
    } else {
      result.push(num[i]);
    }
  }
  return result.join("");
}

console.log(output); // --> 4547-9-3
