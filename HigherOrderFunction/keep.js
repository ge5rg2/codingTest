let output = keep([1, 2, 3, 2, 1], 2);

function keep(arr, keeper) {
  // TODO: 여기에 코드를 작성합니다.
  return arr.filter((el) => el == keeper);
}

console.log(output); // --> [2, 2]
