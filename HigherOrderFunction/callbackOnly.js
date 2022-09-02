function getDomain(email) {
  return email.split("@")[1].split(".")[0];
}

function getUserId(email) {
  return email.split("@")[0];
}

function callbackOnly(callback, response) {
  /** 공략
   * response.status가 fail이면
   * return 'Something went wrong!
   * 그 외
   * 콜백(response.data) 끝
   */
  if (response.status == "fail") {
    return "Something went wrong!";
  }
  return callback(response.data);
}

let output = callbackOnly(getDomain, {
  status: "success",
  data: "mike@codestates.com",
});
console.log(output); // --> codestate

output = callbackOnly(getUserId, {
  status: "success",
  data: "mike@codestates.com",
});
console.log(output); // --> mike

output = callbackOnly(getUserId, {
  status: "fail",
  data: "mike@codestates.com",
});
console.log(output); // --> 'Something went wrong!'
