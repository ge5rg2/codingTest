let output1 = powerOfTwo(15);

function powerOfTwo(num) {
  if (num == 1) {
    return true;
  }
  if (num % 2) {
    return false;
  }
  let pow = 1;
  while (pow < num) {
    pow = pow * 2;
  }
  return pow == num;
}

console.log(output1); // true
