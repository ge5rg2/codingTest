let output = filterOddLengthWords(["there", "it", "is", "now"]);

function filterOddLengthWords(words) {
  // TODO: 여기에 코드를 작성합니다.
  return words.filter((el) => el.length % 2 == 1);
}

console.log(output); // --> ['there', "now']
