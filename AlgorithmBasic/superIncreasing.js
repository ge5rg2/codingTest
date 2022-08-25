let output = superIncreasing([1, 3, 6, 13, 54]);
/** 비교값 변수를 생성하고 반복문 진행
 * 처음 값은 그대로 변수에 삽입
 * 두번째 값부터 변수 값과 비교 -> 변수 값이 작다면 변수값에 추가(더하기)
 * 이후 계속 비교 -> 만약 변수값이 크다면 즉시 false return
 */

function superIncreasing(arr) {
  let compareNum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > compareNum) {
      compareNum = compareNum + arr[i];
    } else {
      return false;
    }
  }
  return true;
}

console.log(output); // --> true
