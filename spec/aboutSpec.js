// Let's test this function
const addr = (a, b) => a + b;

// Assertion below
describe("addr", function () {
  it("should add two numbers", () => {
    expect(addr(1, 2)).toEqual(3);

    // Uncomment below to see Failing test
    expect(addr(-1, -2)).toEqual(-3);
  });
});
