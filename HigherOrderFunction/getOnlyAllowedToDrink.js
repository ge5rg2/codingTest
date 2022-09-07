function getOnlyAllowedToDrink(arr) {
  // TODO: 여기에 코드를 작성합니다.
  if (arr.length == 0) {
    return [];
  }
  return arr.filter((el) => el.age >= 18).map((el) => el.name);
}

let output = getOnlyAllowedToDrink([
  { name: "Harry", age: 15 },
  { name: "Ron", age: 14 },
  { name: "Hermione", age: 14 },
]);
console.log(output); // --> []

let output2 = getOnlyAllowedToDrink([
  { name: "Cho", age: 14 },
  { name: "Dumbledore", age: 87 },
  { name: "Snape", age: 53 },
  { name: "Hagrid", age: 43 },
]);
console.log(output2); // --> ['Dumbledore', 'Snape', 'Hargrid']

let output3 = getOnlyAllowedToDrink([]);
console.log(output3); // --> []
