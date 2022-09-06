function getOnlyNames(arr) {
  // TODO: 여기에 코드를 작성합니다.
  return arr.map((el) => el.name);
}

let output = getOnlyNames([
  { name: "Harry", age: 15 },
  { name: "Ron", age: 14 },
  { name: "Hermione", age: 14 },
]);
console.log(output); // --> ['Harry', 'Ron', 'Hermione']
