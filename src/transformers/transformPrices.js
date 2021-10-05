const transformPrices = (array) => {
  if (!array.length) {
    console.log("Data is not long enough");
  }

  return array.reduce(
    (map, obj) => map.set(obj.effectiveDate.getDate(), obj),
    new Map()
  );
};

export default transformPrices;
