
declare module "function-info" {
  interface IFunctionInfo {
    sourceFile: string;
    lineNumber: number;
    columnNumber: number;
  }

  function functionInfo(fn: Function): IFunctionInfo;

  export = functionInfo;
}
