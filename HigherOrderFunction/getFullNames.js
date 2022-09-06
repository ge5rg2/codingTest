function getFullNames(arr) {
  // TODO: 여기에 코드를 작성합니다.
  return arr.map((el) => el.firstName + " " + el.lastName);
}

let output = getFullNames([
  {
    firstName: "Tim",
    lastName: "Goldfish",
  },
]);
console.log(output); // --> ['Tim Goldfish']
