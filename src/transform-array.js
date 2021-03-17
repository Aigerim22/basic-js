const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw Error("It is not an array");
  let newArr = [];
  const cases = [
    "--discard-next",
    "--discard-prev",
    "--double-next",
    "--double-prev",
  ];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == cases[0]) {
      if (arr[i + 2] == cases[3] || arr[i + 2] == cases[1]) {
        i += 2;
      } else i++;
      newArr.push(arr[i]);
      newArr.pop();
    } else if (arr[i] == cases[1]) {
      newArr.pop();
    } else if (arr[i] == cases[2]) {
      newArr.push(arr[i + 1]);
    } else if (arr[i] == cases[3]) {
      newArr.push(newArr[newArr.length - 1]);
    } else newArr.push(arr[i]);
  }
  return newArr.filter((elem) => elem !== undefined);
};
