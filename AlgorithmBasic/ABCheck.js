let output = ABCheck("TgDrnjAz6kAbdEaxFkrKIsa");

function ABCheck(str) {
  // code goes here
  // 반복문 시작 -> str[i]가 a 혹은 b 이면 i+4에 b나 a가 들어가는지 확인
  // 있다면 return true
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "a" || str[i] == "A") {
      if (str[i + 4] == "b" || str[i + 4] == "B") {
        return true;
      }
    } else if (str[i] == "b" || str[i] == "B") {
      if (str[i + 4] == "a" || str[i + 4] == "A") {
        return true;
      }
    }
  }
  return false;
}

console.log(output); // --> false
