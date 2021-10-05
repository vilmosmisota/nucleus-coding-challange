const addValue = (day, transformedValues) => {
  const firstDateOfPrices = transformedValues.entries().next().value;

  if (
    transformedValues.has(day) === true &&
    transformedValues.has(day - 1) === true
  ) {
    return (
      transformedValues.get(day).value + addValue(day - 1, transformedValues)
    );
  }

  if (transformedValues.has(day) === false) {
    return addValue(day - 1, transformedValues);
  }

  if (
    transformedValues.has(day - 1) === false &&
    transformedValues.has(day) === true &&
    day > firstDateOfPrices[0]
  ) {
    return (
      transformedValues.get(day).value + addValue(day - 1, transformedValues)
    );
  }

  return transformedValues.get(day).value;
};

export default addValue;
