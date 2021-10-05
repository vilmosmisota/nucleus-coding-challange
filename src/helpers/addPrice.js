const addPrice = (day, transformedPrices) => {
  if (transformedPrices.has(day) === false) {
    return 0 + addPrice(day - 1, transformedPrices);
  }
  return transformedPrices.get(day).price;
};

export default addPrice;
