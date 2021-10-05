import addValue from "../addValue";

describe("returning a value", () => {
  it("should return a value summed with the previous days value", () => {
    const prices = new Map([
      [1, { effectiveDate: new Date(2021, 8, 1, 5, 0, 0), value: 1 }],
      [2, { effectiveDate: new Date(2021, 8, 2, 5, 0, 0), value: 2 }],
    ]);

    expect(addValue(2, prices)).toEqual(3);
  });

  it("should take the last value if date doesn't exist", () => {
    const prices = new Map([
      [1, { effectiveDate: new Date(2021, 8, 1, 5, 0, 0), price: 1 }],
      [2, { effectiveDate: new Date(2021, 8, 2, 5, 0, 0), price: 2 }],
    ]);

    expect(addValue(3, prices)).toEqual(3);
  });
});
