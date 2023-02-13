/* eslint-disable testing-library/no-render-in-setup */
import { screen } from '@testing-library/react';
import { initialState, renderWithProviders } from 'Test/testUtils';

import FeedbackReviews from 'Pages/FeedbackReviews';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
 ...(jest.requireActual('react-router-dom') as any),
 useNavigate: () => mockedUsedNavigate,
}));

describe('when FeedbackReviews first renders', () => {
 beforeEach(() => {
  renderWithProviders(<FeedbackReviews />);
 });
 it('should render without error', async () => {
  const element = screen.getByTestId('feedback-reviews');
  expect(element).toBeInTheDocument();
 });
});

describe('when feedback renders with no data available', () => {
 beforeEach(() => {
  renderWithProviders(<FeedbackReviews />);
 });

 it('should display accurate text', async () => {
  expect(await screen.findByText('Feedback Results')).toBeInTheDocument();
  expect(await screen.findByText('Go Back')).toBeInTheDocument();
  expect(await screen.findByText('Lates Comment')).toBeInTheDocument();
  expect(await screen.findByText('No Comment Available')).toBeInTheDocument();
 });
});

describe('when feedback renders with data available', () => {
 beforeEach(() => {});

 it('should display accurate text', async () => {
  renderWithProviders(<FeedbackReviews />, {
   preloadedState: {
    Feedback: initialState,
   },
  });

  expect(await screen.findByText('test@test.com')).toBeInTheDocument();
  expect(await screen.findByText('Nice place to go')).toBeInTheDocument();
 });
});
