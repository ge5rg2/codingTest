function getDoubledElements(arr) {
  /** 공략
   * map으로 각 요소에 *2
   */
  return arr.map((el) => el * 2);
}

let output = getDoubledElements([1, 2, 3, 4]);
console.log(output); // --> [2, 4, 6, 8]
