let output = computeSquareRoot(9);
// https://velog.io/@seungsang00/JavaScript-바빌로니아-방법으로-제곱근-구하기
function computeSquareRoot(num) {
  let approx = 1;

  while (approx ** 2 !== num) {
    if (Number((approx * approx).toFixed(2)) === num) {
      break;
    }
    approx = (approx + num / approx) / 2;
  }

  return Number(approx.toFixed(2));
}

console.log(output); // --> 3
