import { FC, useMemo } from 'react';
import { Chart } from 'react-google-charts';

import { getTotalReview } from 'Helpers';
import { getOptions } from 'Constants';

 /** Declaring ReviewChart component props type */
export interface ReviewChartProps {
 /** chartData type number of array */
 chartData: number[];
}

/**
 * The reviewChart component.
 * @ReviewChart reuseable reviewChart
 * @param {*} chartData - chartData will accept parameter as array.
 * @returns JSX.Element
 */
const ReviewChart: FC<ReviewChartProps> = ({ chartData }: ReviewChartProps) => {
 /**
  * useMemo
  * memories function and only update if an item changes.
  * @returns option
  */
 const options = useMemo(
  () => getOptions(getTotalReview(chartData)),
  [chartData]
 );

 return (
  <div className="review-chart" data-testid="reuseable-review-chart">
   <Chart
    data-testid="reuseable-chart"
    chartType="BarChart"
    width="100%"
    height="400px"
    data={[['Rating', 'Total Review'], ...chartData]}
    options={options}
   />
  </div>
 );
};

export default ReviewChart;
