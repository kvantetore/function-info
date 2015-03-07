var bin = require("../build/Release/functionInfo");

module.exports = function(fn) {
  return bin.getFunctionInfo(fn);
}
