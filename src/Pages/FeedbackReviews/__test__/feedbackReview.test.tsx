import { screen, cleanup } from '@testing-library/react';
import { store, withOnlyRedux } from 'Test/testUtils';

import FeedbackReviews from 'Pages/FeedbackReviews';

describe('when FeedbackReviews first renders', () => {
 afterEach(cleanup);
 beforeEach(() => withOnlyRedux(<FeedbackReviews />, store));

 it('should render without error', async () => {
  const element = screen.getByTestId('feedback-reviews');
  expect(element).toBeInTheDocument();
 });
});

describe('when FeedbackReviews renders and have no data', () => {
 beforeEach(() => {
  withOnlyRedux(<FeedbackReviews />, store);
 });
 afterEach(cleanup);

 it('should display placeholder', async () => {
  expect(await screen.findByText('Feedback Results')).toBeInTheDocument();
  expect(await screen.findByText('Go Back')).toBeInTheDocument();
  expect(await screen.findByText('Lates Comment')).toBeInTheDocument();
  expect(await screen.findByText('No Comment Available')).toBeInTheDocument();
 });
});
