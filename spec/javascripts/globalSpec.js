describe("A suite", function(){
  it("pending with message", function(){
           pending("message");
           expect(false).toBe(true);
  });
  it("pending NO message", function(){
           pending();
           expect(false).toBe(true);
  });
  it("passing", function () {
           expect(true).toBe(true);
  });
  it("passing 2", function () {
           expect(true).toBe(true);
  });
  it("failing", function () {
           expect(false).toBe(true);
           expect(false).toBe(true);
  });
  it("failing 2", function () {
     expect('foo').toEqual('bar');
     expect('foo').toEqual('baz');
  });
  it("error", function () {
    throw 'error!'
  });
});

describe("Another suite", function(){
  afterAll(function () {
     expect('after2').toEqual('bah');
  });
  it("fail", function(){
     expect(false).toBe(true);
  });
});
