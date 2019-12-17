const sum = require("./functions").sum;

const doubler = require("./functions").doubler;

const area = require("./functions").area;

describe("testing the test suite Jest", () => {
  test("I am in the test block 1", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("I am in the test block 2", () => {
    expect(sum(5, 5)).toBe(10);
  });

  test("I am in the test block 3", () => {
    expect(doubler(5)).toBe(10);
  });

  test("I am in the test block 4", () => {
    expect(area(10, 10)).toBe(100);
  });
  test("I am in the test block 5 but I fail", () => {
    throw new Error();
  });
});
