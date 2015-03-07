# function-info

Get source info from a function definition in NodeJS.

## Introduction

NodeJS does not export methods to get source file name, line and column number from a function reference. function-info is a NodeJS addon that calls the relevant V8 methods to get this information back to js.

## Getting Started

Install from npm
```bash
npm install function-info
```

The main export from function-info is a function taking a function reference as its single argument and returns a function-info structure:
```
{
  sourceFile: "<absolute-path-to-source-file>",
  lineNumber: <line-number-of-function-definition>,
  columnNumber: <column-number-of-function-definition>
}
```

## Example

Create test.js:
```js

module.exports.hello = function() {
  return "Hello";
}

module.exports.world = world;

function world() {
  return "World";
}
```

Then in node repl:
```js
var test = require("./test");
var functionInfo = require('function-info');

console.log(functionInfo(test.hello)); //{ sourceFile: "<cwd>/test.js", lineNumber: 1, columnNumber: 31 }
console.log(functionInfo(test.world)); //{ sourceFile: "<cwd>/test.js", lineNumber: 7, columnNumber: 14 }
```
