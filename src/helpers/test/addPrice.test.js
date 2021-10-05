import addPrice from "../addPrice";

describe("returning a price", () => {
  it("should return a price with the matched date", () => {
    const prices = new Map([
      [1, { effectiveDate: new Date(2021, 8, 1, 5, 0, 0), price: 35464.53 }],
      [2, { effectiveDate: new Date(2021, 8, 2, 5, 0, 0), price: 35658.76 }],
    ]);

    expect(addPrice(2, prices)).toEqual(35658.76);
  });

  it("should take the last found price over the entered date", () => {
    const prices = new Map([
      [1, { effectiveDate: new Date(2021, 8, 1, 5, 0, 0), price: 35464.53 }],
      [2, { effectiveDate: new Date(2021, 8, 2, 5, 0, 0), price: 35658.76 }],
    ]);

    expect(addPrice(3, prices)).toEqual(35658.76);
  });
});
