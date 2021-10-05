const addReportData = (start, finish, transformedPrices, transformedValues) => {
  if (typeof start !== "number" && finish !== "number") {
    console.log("You need to enter numbers to start");
  }

  if (transformedPrices.size < 2 && transformedValues.size < 2) {
    console.log("data is not long enough");
  }
  const reportData = {
    start,
    finish,
    transformedPrices,
    transformedValues,
  };
  return reportData;
};

export default addReportData;
