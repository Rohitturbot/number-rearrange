const assert = require("assert");
const arrangeNumbers = require("./index");

describe("Arrange Numbers", () => {
  it("arrangeNumbers should be a function", () => {
    assert.strictEqual(typeof arrangeNumbers, "function");
  });
  it("Should fail when parameter is not an array", () => {
    assert.strictEqual(arrangeNumbers("a, b, x"), "You should pass an array!");
  });
  it("Should return the array without iteration if length is 1", () => {
    const arr = [1];
    assert.deepStrictEqual(arrangeNumbers(arr), [1]);
  });
  it("Should work with all positive numbers", () => {
    const arr = [19, 1, 78, 345, 090, 87, 234, 12];
    const expectedArr = [1, 78, 19, 345, 87, 234, 12, 90];
    assert.deepStrictEqual(arrangeNumbers(arr), expectedArr);
  });
  it("Should work with all negative numbers", () => {
    const arr = [-10, -90, -49, -2.1, -0.5, -5, -23];
    const expectedArr = [-90, -10, -49, -0.5, -5, -2.1, -23];
    assert.deepStrictEqual(arrangeNumbers(arr), expectedArr);
  });
  it("Should work with decimal numbers", () => {
    const arr = [0.1, 0.01, 1, 5, 123, 4.34];
    const expectedArr = [0.01, 1, 0.1, 123, 4.34, 5];
    assert.deepStrictEqual(arrangeNumbers(arr), expectedArr);
  });

  it("Should work if all numbers are sorted", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    const expectedArr = [1, 3, 2, 5, 4, 7, 6, 8];
    assert.deepStrictEqual(arrangeNumbers(arr), expectedArr);
  });

  it("Should work if all numbers are -ve and sorted", () => {
    const arr = [-1, -2, -3, -4, -5, -6, -7, -8];
    const expectedArr = [-2, -1, -4, -3, -6, -5, -8, -7];
    assert.deepStrictEqual(arrangeNumbers(arr), expectedArr);
  });

  it("Should work if numbers are mixed", () => {
    const arr = [10, -90, 49, 2.1, -0.5, -5, -23];
    const expectedArr = [-90, 49, 2.1, 10, -5, -0.5, -23];
    assert.deepStrictEqual(arrangeNumbers(arr), expectedArr);
  });
  it("Should work if array containes invalid entries", () => {
    const arr = [
      10,
      -90,
      49,
      2.1,
      -0.5,
      -5,
      null,
      ,
      ,
      undefined,
      "",
      { a: "" },
      -23,
    ];
    const expectedArr = [-90, 49, 2.1, 10, -5, -0.5, -23];
    assert.deepStrictEqual(arrangeNumbers(arr), expectedArr);
  });
});
