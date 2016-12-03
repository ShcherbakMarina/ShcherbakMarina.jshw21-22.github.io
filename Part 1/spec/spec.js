var test = require('../js/script.js');

describe("function with power", function() {
  it("a number and power are positive", function() {
    //prepare
    var result;
    //act
    result = test.myPow(3, 4);
    //assert
    expect(result).toEqual(81);
  });
  it("a number is positive and a power is negative", function() {
    //prepare
    var result;
    //act
    result = test.myPow(2, -2);
    //assert
    expect(result).toEqual(0.25);
  });
  it("a number is null and a power is positive", function() {
    //prepare
    var result;
    //act
    result = test.myPow(0, 4);
    //assert
    expect(result).toEqual(0);
  });
  it("a number is positive and a power is null", function() {
    //prepare
    var result;
    //act
    result = test.myPow(3, 0);
    //assert
    expect(result).toEqual(1);
  });
  it("a number is negative and a power is even", function() {
    //prepare
    var result;
    //act
    result = test.myPow(-3, 3);
    //assert
    expect(result).toEqual(-27);
  });
  it("a number is negative and a power is odd", function() {
    //prepare
    var result;
    //act
    result = test.myPow(-3, 2);
    //assert
    expect(result).toEqual(9);
  });
});
