/**
 * updateChartRates function
 * updates the chart rates.
 * @param allRates - allRates will accept parameter as array.
 * @param item - item will accept parameter as string.
 * @returns array
 */
const updateChartRates = (allRates: any[], item: string | number) => {
 const copyData = { ...allRates };
 const updatedData: any = {};

 Object.entries(copyData).forEach(([key, value]) => {
  if (value[0].length === +item) {
   let copyValue = value;
   copyValue = [value[0], value[1] + 1];
   updatedData[key] = copyValue;
  } else {
   updatedData[key] = value;
  }
 });

 return updatedData;
};

export default updateChartRates;
