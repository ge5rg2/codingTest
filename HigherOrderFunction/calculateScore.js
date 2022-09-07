// calculateScore

function calculateScore(records, value) {
  // TODO: Your code here!
  return records.reduce((acc, cur) => {
    if (cur.animal == value) {
      return acc + cur.score;
    } else {
      return acc;
    }
  }, 0);
}

const records = [
  {
    score: 63,
    animal: "dog",
  },
  {
    score: 75,
    animal: "dog",
  },
  {
    score: 87,
    animal: "cat",
  },
  {
    score: 98,
    animal: "cat",
  },
  {
    score: 24,
    animal: "dog",
  },
];

let output = calculateScore(records, "cat");
console.log(output); // --> 185

let output2 = calculateScore(records, "dog");
console.log(output2); // --> 162

let output3 = calculateScore([], "dog");
console.log(output3); // --> 0

let output4 = calculateScore(records, "mouse");
console.log(output4); // --> 0
