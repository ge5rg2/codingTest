let output = computeSquareRoot(9);
// https://velog.io/@seungsang00/JavaScript-바빌로니아-방법으로-제곱근-구하기

function computeSquareRoot(num) {
  let x = 1;
  while (x ** 2 != num) {
    if (Number((x * x).toFixed(2)) == num) {
      break;
    }
    x = (x + num / x) / 2;
  }
  return Number(x.toFixed(2));
}

console.log(output); // --> 3
