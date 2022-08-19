const arr = [
  ["make", "Ford"],
  ["model", "Mustang"],
  ["year", "1964"],
  ["make", "Bill"],
];

function convertListToObject(arr) {
  // TODO: 여기에 코드를 작성합니다.
  // {}를 가진 변수 생성
  // 반복문을 이용 각 배열의 값을 변수에 대입
  // 출력
  let result = {};
  for (let value of arr) {
    if (value.length == 0) {
      continue;
    } else if (result[value[0]]) {
      continue;
    } else {
      result[value[0]] = value[1];
    }
  }
  return result;
}

let output = convertListToObject(arr);

console.log(output); /*
  {
    make : 'Ford'
    model : 'Mustang',
    year : '1964'
  }
  */
