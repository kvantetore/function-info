var bin = require("../build/Release/functionInfo");

module.exports = function(fn) {
  if (!(fn instanceof Function)) {
    throw new TypeError("Expected function, got " + fn);
  }

  return bin.getFunctionInfo(fn);
}
