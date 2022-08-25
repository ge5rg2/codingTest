let output = isIsogram("moOse");
/** 공략
 * 대소문자를 구분하지 않기 때문에 toLowerCase로 소문자 구성으로 변경
 * 배열 생성 후 해당 문자열을 삽입(spread op)
 * 반복문으로 접근 arr[i]와 중복되는 문자를 찾는다면,
 * i index에 해당하는 값을 지운 변수를 반복문 안에 생성
 * 해당 변수 배열에서 arr[i]가 있는지 찾고 있다면 즉시 false 반환
 * 반복문 이후 return true
 */
function isIsogram(str) {
  let arr = [...str.toLowerCase()];
  for (let i = 0; i < arr.length; i++) {
    let result = arr.reduce((acc, cur) => (cur == arr[i] ? acc + 1 : acc), 0);
    if (result > 1) {
      return false;
    }
  }
  return true;
}

console.log(output); // false
