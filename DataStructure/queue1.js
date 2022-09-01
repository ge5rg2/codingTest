const boxes = [95, 90, 99, 99, 80, 99];
const output = paveBox(boxes);

function paveBox(arr) {
  /** 공략
   * 변수 start에 arr[0]의 값으로 지정
   * 변수 count 생성 초기값 1
   * for문으로 진행 i=1로 시작
   * if
   * arr[i]이 start보다 작다면 count+1
   * start 값을 arr[i]로 변경
   * else
   * 실행 종료 break
   * return count값
   */
  let current = arr[0];
  let count = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > current) {
      break;
    } else {
      count = count + 1;
    }
  }
  return count;
}

console.log(output); // 3
