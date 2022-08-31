const actions = ["B", "C", -1, "D", "A", -1, 1, -1, -1];
const start = "A";
const output = browserStack(actions, start);

function browserStack(actions, start) {
  if (typeof start !== "string") {
    return false;
  }
  let pre = [];
  let next = [];
  let cur = start;
  for (let i = 0; i < actions.length; i++) {
    if (actions[i] == -1 && pre.length != 0) {
      let prePage = pre.pop();
      next.push(cur);
      cur = prePage;
    } else if (actions[i] == 1 && next.length != 0) {
      let nextPage = next.pop();
      pre.push(cur);
      cur = nextPage;
    } else if (typeof actions[i] == "string") {
      pre.push(cur);
      cur = actions[i];
      next = [];
    }
    console.log([pre, cur, next]);
  }
  return [pre, cur, next];
}

console.log(output); // [["A"], "B", ["A", "D"]]
