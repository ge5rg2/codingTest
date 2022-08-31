let output = decryptCaesarCipher("nzop delepd dfaazced jzf", 11);

function decryptCaesarCipher(str, num) {
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  if (str.length == 0) {
    return "";
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      result = result + " ";
      continue;
    }
    let locate = alpha.indexOf(str[i]);
    if (locate < num) {
      result = result + alpha[locate - num + alpha.length];
    } else {
      result = result + alpha[locate - num];
    }
  }
  return result;
}

console.log(output); // --> hello
