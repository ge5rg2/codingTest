let output = modulo(25, 4);

// 다시 보기
function modulo(num1, num2) {
  if (num1 == 0 || num2 == 0) {
    return "Error: cannot divide by zero";
  }
  while (num1 >= num2) {
    num1 = num1 - num2;
  }
  return num1;
}

console.log(output); // --> 1
