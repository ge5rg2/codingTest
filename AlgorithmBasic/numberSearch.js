let output = numberSearch("");
/** 공략
 * 문자열의 공백을 제거하는 배열 arr을 생성
 * 문자열만 담아주는 배열 charArr 생성
 * 숫자의 총합을 가지고 있는 변수 sum 생성
 * arr에 대한 반복문을 진행
 * 만약 arr[i]값이 숫자가 안된다면 charArr에 push
 * 숫자라면 sum에 대입
 * 최종적으로 나온 sum/charArr.length에 float나 toFix로 반올림
 */
function numberSearch(str) {
  let arr = [...str.split(" ").join("")];
  if (arr.length == 0) {
    return 0;
  }
  let charArr = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Number(arr[i])) {
      sum = sum + Number(arr[i]);
    } else {
      charArr.push(arr[i]);
    }
  }
  return Math.round(sum / charArr.length);
}

console.log(output); // --> 1
