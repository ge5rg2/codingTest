function lessThan100(number) {
  return number < 100;
}

function getElementsLessThan100AtProperty(obj, property) {
  // TODO: 여기에 코드를 작성합니다.
  let newArr = obj[property];
  if (newArr == undefined || typeof newArr !== "string") {
    return [];
  }
  return newArr.filter((el) => typeof el == "number" && lessThan100(el));
}

const obj = {
  key: [1000, 20, 50, 500],
};

let output = getElementsLessThan100AtProperty(obj, "key");
console.log(output); // --> [20, 50]

const obj2 = { arr: "sike" };

let output2 = getElementsLessThan100AtProperty(obj2, "arr");
console.log(output2);
