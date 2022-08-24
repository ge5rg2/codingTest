// spread q.1
// spread는 배열, 문자열 상관없이 다 쪼개준다.
var a = [1, 2, 3];
var b = "김밥";
var c = [...b, ...a];
console.log(c); // result?

//spread q.2
var a = [1, 2, 3];
var b = ["you", "are"];
var c = function (a, b) {
  console.log([[...a], ...[...b]][1]);
};
c(a, b); // result?

// default parameter q.1
// default는 입력 인자값이 없으면 실행됨.
function 함수(a = 5, b = a * 2) {
  console.log(a + b);
  return 10;
}
함수(3); // result?

// default parameter q.2
function 함수(a = 5, b = a * 2) {
  console.log(a + b);
}
함수(undefined, undefined); // result?

// need to make array function
function 어레이(...rest) {
  console.log(rest);
}

var newArray = 어레이(1, 2, 3, 4, 5);
console.log(newArray); // [1,2,3,4,5]

// find max number
var numbers = [2, 3, 4, 5, 6, 1, 3, 2, 5, 5, 4, 6, 7];
console.log(Math.max(...numbers));

// adapt sort method in obj
function 정렬(...rest) {
  let result = [];
  for (let i = 0; i < rest.length; i++) {
    result.push(...rest[i]);
  }
  console.log(result.sort());
  return result.sort();
}

정렬("bear"); // result ->  a b e r

// datamining
function 글자세기(parameters) {
  let str = 정렬(parameters);
  let result = {};
  for (let i = 0; i < str.length; i++) {
    if (result[str[i]]) {
      result[str[i]]++;
    } else {
      result[str[i]] = 1;
    }
  }
  console.log(result);
}
글자세기("aacbbb"); // result -> { a : 2, b : 3, c : 1 }
