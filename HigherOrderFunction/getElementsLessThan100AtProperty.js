function lessThan100(number) {
  return typeof number == "number" && number < 100;
}

function getElementsLessThan100AtProperty(obj, property) {
  /** 공략
   * obj에 prop을 넣어서 해당 값이 있는지 확인
   * if문으로 없거나, 해당 값이 배열이 아닐 경우 빈배열을 return
   * filter로 해당 el이 숫자거나 lessthan100 함수에 통과된 el로 구성된 배열만 리턴
   */
  let newArr = obj[property];
  if (Array.isArray(newArr)) {
    return newArr.filter(lessThan100);
  }
  return [];
}

const obj = {
  key: [1000, 20, 50, 500],
};

let output = getElementsLessThan100AtProperty(obj, "key");
console.log(output); // --> [20, 50]

const obj2 = { arr: "sike" };

let output2 = getElementsLessThan100AtProperty(obj2, "arr");
console.log(output2);
