let output = compressString("abc");
let output2 = compressString("wwwggoppopppp");

function compressString(str) {
  /** 공략
   * 첫번째 단어를 삽입한 변수 생성
   * count =1 변수 생성
   * 반복문을 거치면서 다음 i+1값이 같다면 count+1
   * 만약 같지 않다면 result에 해당 값 삽입
   * (count가 1이면 숫자 추가안함)
   * count가 2면 해당 알파벳을 두번 삽입
   */
  let alpha = str[0];
  let count = 1;
  let result = "";
  str = str + " ";
  for (let i = 1; i < str.length; i++) {
    if (str[i] == alpha) {
      count++;
    } else {
      if (count == 1) {
        result = result + alpha;
      } else if (count == 2) {
        result = result + alpha + alpha;
      } else {
        result = result + `${count}${alpha}`;
      }
      count = 1;
      alpha = str[i];
    }
  }
  return result;
}

console.log(output); // --> abc
console.log(output2); // --> 3wggoppo4p
