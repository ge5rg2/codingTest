let output = decryptCaesarCipher("nzop delepd dfaazced jzf", 11);

function decryptCaesarCipher(str, secret) {
  /** 공략
   * 1. 알파벳을 담은 배열 alpha를 만든다.
   * - 결과 변수 result 을 만든다.
   * 2. for문으로 문자 하나당 secret 만큼 alpha에서 해당 문자에서 시작해 배열 이동
   * 3. 나온 결과값을 result에 삽입
   * 4. return result
   */
  let alpha = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let lowerArr = alpha.map((el) => el.toLowerCase());
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let locate = lowerArr.indexOf(str[i]);
    if (locate >= 0) {
      if (locate - Number(secret) < 0) {
        result.push(lowerArr[lowerArr.length + (locate - Number(secret))]);
      } else {
        result.push(lowerArr[locate - Number(secret)]);
      }
    } else if (str[i] == " ") {
      result.push(" ");
    }
  }
  return result.join("");
}

console.log(output); // --> hello
