import transformPrices from "../transformPrices";

describe("returning a transformed map object from prices data", () => {
  it("should return a map object", () => {
    const data = [
      { effectiveDate: new Date(2021, 8, 1, 5, 0, 0), price: 35464.53 },
      { effectiveDate: new Date(2021, 8, 2, 5, 0, 0), price: 35658.76 },
    ];
    expect(transformPrices(data)).toEqual(
      new Map([
        [1, { effectiveDate: new Date(2021, 8, 1, 5, 0, 0), price: 35464.53 }],
        [2, { effectiveDate: new Date(2021, 8, 2, 5, 0, 0), price: 35658.76 }],
      ])
    );
  });

  it("should keep the latest price if the data is from the same day", () => {
    const data = [
      { effectiveDate: new Date(2021, 8, 1, 5, 0, 0), price: 35464.53 },
      { effectiveDate: new Date(2021, 8, 2, 5, 0, 0), price: 35658.76 },
      { effectiveDate: new Date(2021, 8, 2, 6, 0, 0), price: 35744.76 },
    ];
    expect(transformPrices(data)).toEqual(
      new Map([
        [1, { effectiveDate: new Date(2021, 8, 1, 5, 0, 0), price: 35464.53 }],
        [2, { effectiveDate: new Date(2021, 8, 2, 6, 0, 0), price: 35744.76 }],
      ])
    );
  });
});
