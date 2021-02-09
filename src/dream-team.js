const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let arr = [];
  if (!Array.isArray(members)) {
    return false;
  }
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === "string") {
      let removed = members[i].trim();
      arr.push(removed.charAt(0).toUpperCase());
    }
  }
  for (let i = 0; i < arr.length; i++) {
    return arr.sort().join("");
  }
};
