let output = removeExtremes(["where", "is", "the", "longest", "word"]);

function removeExtremes(arr) {
  let long = 0;
  let short = 20;
  let longIdx = 0;
  let shortIdx = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= long) {
      long = arr[i].length;
      longIdx = i;
    }
    if (arr[i].length <= short) {
      short = arr[i].length;
      shortIdx = i;
    }
  }
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i != longIdx && i != shortIdx) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(output); // --> ['where', 'the', 'word',]
