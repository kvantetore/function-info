var bin = require("../build/Release/functionInfo");

module.exports = function(fn) {
  if (typeof fn !== "function") {
    throw new TypeError("Expected function, got " + fn);
  }

  return bin.getFunctionInfo(fn);
}
