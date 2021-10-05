import addPrice from "../helpers/addPrice.js";
import addValue from "../helpers/addValue.js";

const getDailyPortfolioValues = (reportData) => {
  const { start, finish, transformedPrices, transformedValues } = reportData;
  const period = [];
  let count = 0;

  for (let i = start; i <= finish; i++) {
    let rawValue =
      addValue(i, transformedValues) * addPrice(i, transformedPrices);
    let cleanValue = parseFloat(rawValue.toFixed(5));

    period[count++] = {
      effectiveDate: new Date(2021, 8, i, 1),
      value: cleanValue,
    };
  }

  return period;
};

export default getDailyPortfolioValues;
