let input = ["YCDt", "oao", "unI"];

function readVertically(arr) {
  /** 공략
   * 1. 배열의 길이가 가장 긴 배열을 찾는다
   * - 변수 result를 생성.
   * 2. 두번의 반복문을 사용 만약 해당 배열 위치가 undifind라면 continue 나머지는 result에 추가
   * 3. 쭉 출력
   */
  let arrLength = arr.map((el) => el.length);
  let maxLength = Math.max(...arrLength);
  let result = "";
  for (let i = 0; i < maxLength; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (!arr[j][i]) {
        continue;
      }
      result = result + arr[j][i];
    }
  }
  return result;
}

let output = readVertically(input);
console.log(output); // --> 'YouCanDoIt'
