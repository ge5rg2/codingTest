function square(number) {
  return number * number;
}

function getSquaredElementsAtProperty(obj, property) {
  // TODO: 여기에 코드를 작성합니다.
  /** 공략
   * obj[prop]가 배열인지 확인 isArray
   * 배일이라면 map 매서드를 사용해서 결과값 도출
   * 아니면 빈 배열
   */
  let arr = obj[property];
  if (Array.isArray(arr)) {
    return arr.map(square);
  }
  return [];
}

const obj = {
  key: [2, 1, 5],
};

let output = getSquaredElementsAtProperty(obj, "key");
console.log(output); // --> [4, 1, 25]
