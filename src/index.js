import transformPrices from "./transformers/transformPrices.js";
import transformValues from "./transformers/transformValues.js";
import pricesData from "./data/pricesData.js";
import transactionsData from "./data/transactionsData.js";
import addReportData from "./constructor/addReportData.js";
import getDailyPortfolioValues from "./view/PortfolioPerformance.js";

const transformedPrices = transformPrices(pricesData());
const transformedValues = transformValues(transactionsData());
const reportData = addReportData(1, 7, transformedPrices, transformedValues);

getDailyPortfolioValues(reportData);

console.log(getDailyPortfolioValues(reportData));
