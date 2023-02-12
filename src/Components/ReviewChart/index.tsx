import { FC, useMemo } from 'react';
import { Chart } from 'react-google-charts';

import { getTotalReview } from 'Helpers';
import { getOptions } from 'Constants';

interface ReviewChartProps {
 chartData: number[];
}
const ReviewChart: FC<ReviewChartProps> = ({ chartData }: ReviewChartProps) => {
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
