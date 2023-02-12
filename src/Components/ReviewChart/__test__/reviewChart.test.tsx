import { render, screen } from '@testing-library/react';
import { ratesData } from 'Constants';
import ReviewChart from '..';

describe('when rendered reviewChart with prop', () => {
 it('should render the reviewChart', () => {

  render(<ReviewChart chartData={Object.values(ratesData)} />);
  const reviewChart = screen.getByTestId('reuseable-review-chart');
  expect(reviewChart).toBeInTheDocument();
 });
});
