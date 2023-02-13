import { ratesData } from 'Constants';
import getTotalReview from 'Helpers/getSumTotalReview';
import updateChartRates from 'Helpers/updateChartRatesFunc';

describe('when getTotalReview is called', () => {
 const updatedData = updateChartRates(ratesData, 5);
 const result = getTotalReview(Object.values(updatedData));
 it('should expect getTotalReview to get the right total review rating', () => {
  expect(result.totalRate).toEqual(1);
 });
 it('should expect getTotalReview to get the wrong total review rating', () => {
  expect(result.totalRate).not.toEqual(5);
 });
 it('should expect getTotalReview to get the right average review rating', () => {
  expect(result.average).toEqual('5.0');
 });
 it('should expect getTotalReview to get the wrong average review rating', () => {
  expect(result.average).not.toEqual(1);
 });
});

describe('when updateChartRates is called', () => {
 const result = updateChartRates(ratesData, 5);
 it('should expect updateChartRates to get the right total review rating', () => {
  expect(result).toEqual({
   five: ['☆☆☆☆☆', 1],
   four: ['☆☆☆☆', 0],
   three: ['☆☆☆', 0],
   two: ['☆☆', 0],
   one: ['☆', 0],
  });
 });
 it('should expect updateChartRates to get the wrong total review rating', () => {
  expect(result).not.toEqual({
   five: ['☆☆☆☆☆', 0],
   four: ['☆☆☆☆', 0],
   three: ['☆☆☆', 0],
   two: ['☆☆', 0],
   one: ['☆', 0],
  });
 });
});
