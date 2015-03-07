#include <node.h>
#include <nan.h>

using namespace v8;

NAN_METHOD(GetFunctionInfo) {
  NanScope();

  if (args.Length() < 1) {
    NanThrowTypeError("Wrong number of arguments, please pass function reference as only argument");
    NanReturnUndefined();
  }

  //cast first argument to function
  Local<Function> func = args[0].As<Function>();

  //create return object
  Local<Object> ret = NanNew<Object>();
  ret->Set(NanNew("sourceFile"), NanNew(func->GetScriptOrigin().ResourceName()));
  ret->Set(NanNew("lineNumber"), NanNew(func->GetScriptLineNumber()));
  ret->Set(NanNew("columnNumber"), NanNew(func->GetScriptColumnNumber()));

  NanReturnValue(ret);
}

void Init(Handle<Object> exports) {
  exports->Set(NanNew("getFunctionInfo"), NanNew<FunctionTemplate>(GetFunctionInfo)->GetFunction());
}

NODE_MODULE(functionInfo, Init)
