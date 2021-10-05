import addReportData from "../addReportData";

describe("returning an object with the report data", () => {
  test("should return an object", () => {
    const price = new Map([
      [1, { effectiveDate: new Date(2021, 8, 1, 5, 0, 0), price: 35464.53 }],
      [2, { effectiveDate: new Date(2021, 8, 2, 5, 0, 0), price: 35658.76 }],
    ]);

    const value = new Map([
      [1, { effectiveDate: new Date(2021, 8, 1, 9, 0, 0), value: 0.012 }],
      [2, { effectiveDate: new Date(2021, 8, 2, 15, 0, 0), value: -0.007 }],
    ]);

    expect(addReportData(1, 7, price, value)).toEqual({
      start: 1,
      finish: 7,
      transformedPrices: price,
      transformedValues: value,
    });
  });
});
