const transformValues = (array) => {
  if (!array.length) {
    console.log("Data is not long enough");
  }

  const transformedValues = new Map();
  for (let elem of array) {
    if (transformedValues.has(elem.effectiveDate.getDate())) {
      elem.value =
        elem.value + transformedValues.get(elem.effectiveDate.getDate()).value;
    }

    transformedValues.set(elem.effectiveDate.getDate(), elem);
  }

  return transformedValues;
};

export default transformValues;
