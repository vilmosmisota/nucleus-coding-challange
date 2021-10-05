import transformValues from "../transformValues";

describe("returning a transformed map object from prices data", () => {
  it("should return a map object", () => {
    const data = [
      { effectiveDate: new Date(2021, 8, 1, 9, 0, 0), value: 0.012 },
      { effectiveDate: new Date(2021, 8, 2, 15, 0, 0), value: -0.007 },
    ];
    expect(transformValues(data)).toEqual(
      new Map([
        [1, { effectiveDate: new Date(2021, 8, 1, 9, 0, 0), value: 0.012 }],
        [2, { effectiveDate: new Date(2021, 8, 2, 15, 0, 0), value: -0.007 }],
      ])
    );
  });

  it("should add the 2 values if they are from the same date", () => {
    const data = [
      { effectiveDate: new Date(2021, 8, 1, 9, 0, 0), value: 0.012 },
      { effectiveDate: new Date(2021, 8, 1, 15, 0, 0), value: -0.007 },
      { effectiveDate: new Date(2021, 8, 4, 9, 0, 0), value: 0.017 },
    ];
    expect(transformValues(data)).toEqual(
      new Map([
        [1, { effectiveDate: new Date(2021, 8, 1, 15, 0, 0), value: 0.005 }],
        [4, { effectiveDate: new Date(2021, 8, 4, 9, 0, 0), value: 0.017 }],
      ])
    );
  });
});
