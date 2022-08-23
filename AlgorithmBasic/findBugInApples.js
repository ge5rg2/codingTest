let output = findBugInApples([
  ["A", "A", "A", "A", "A"],
  ["A", "A", "B", "A", "A"],
  ["A", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A"],
]);

function findBugInApples(arr) {
  /** indexOf를 활용 B를 가진 배열 위치 파악
   * 파악 한 배열 위치 i를 첫번째 값으로, 나온 위치 값을 두번째 값으로
   * result 배열에 push
   */
  let idx = 0;
  let locateB = 0;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf("B") != -1) {
      idx = i;
      locateB = arr[idx].indexOf("B");
      result.push(idx, locateB);
    }
  }
  return result;
}

console.log(output); //[1, 2]
