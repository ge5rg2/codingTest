const actions = ["B", "C", -1, "D", "A", -1, 1, -1, -1];
const start = "A";
const output = browserStack(actions, start);

function browserStack(actions, start) {
  if (typeof start != "string") {
    return false;
  }
  let prePage = [];
  let nextPage = [];
  let cur = start;
  for (let i = 0; i < actions.length; i++) {
    if (actions[i] == -1 && prePage.length != 0) {
      let pre = prePage.pop();
      nextPage.push(cur);
      cur = pre;
    } else if (actions[i] == 1 && nextPage.length != 0) {
      let next = nextPage.pop();
      prePage.push(cur);
      cur = next;
    } else {
      prePage.push(cur);
      cur = actions[i];
      nextPage = [];
    }
  }
  return [prePage, cur, nextPage];
}

console.log(output); // [["A"], "B", ["A", "D"]]
