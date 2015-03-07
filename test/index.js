var should = require('chai').should(),
    test = require('./test')
    functionInfo = require("../lib/index");


describe("functionInfo", function() {
  it('gets right line number', function() {
    functionInfo(test.hello).lineNumber.should.equal(1);
    functionInfo(test.world).lineNumber.should.equal(7);
  });

  it('gets right column number', function() {
    functionInfo(test.hello).columnNumber.should.equal(31);
    functionInfo(test.world).columnNumber.should.equal(14);
  });

  it('gets right script file', function() {
    functionInfo(test.hello).sourceFile.should.equal(process.cwd() + '/test/test.js');
    functionInfo(test.world).sourceFile.should.equal(process.cwd() + '/test/test.js');
  })

});
