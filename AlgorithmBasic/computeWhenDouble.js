let output = computeWhenDouble(7);

function computeWhenDouble(num) {
  let rate = 1 + num / 100;
  let year = 0;
  let original = 1;
  while (original < 2) {
    original = original * rate;
    year++;
  }
  return year;
}

console.log(output); // --> 11
