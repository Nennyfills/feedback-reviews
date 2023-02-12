import { cleanup, fireEvent, screen } from '@testing-library/react';
import { store, withOnlyRedux } from 'Test/testUtils';

import Feedback from '..';
import userEvent from '@testing-library/user-event';
import FeedbackReviews from 'Pages/FeedbackReviews';
import { act } from 'react-dom/test-utils';

describe('when feedback first renders', () => {
 beforeEach(() => {
  withOnlyRedux(<Feedback />, store);
 });
 afterEach(cleanup);

 it('should render without error', () => {
  const element = screen.getByTestId('feedback');
  expect(element).toBeInTheDocument();
 });
});

describe('when feedback renders with issue', () => {
 beforeEach(() => {
  withOnlyRedux(<Feedback />, store);
 });
 afterEach(cleanup);

 test('should display correct error message', async () => {
  const submit = screen.getByTestId('reuseable-button');

  fireEvent.click(submit);
  expect(await screen.findByText('Submit')).toBeInTheDocument();
  expect(
   await screen.findByText('name is a required field')
  ).toBeInTheDocument();
  expect(
   await screen.findByText('email is a required field')
  ).toBeInTheDocument();
  expect(
   await screen.findByText('rate is a required field')
  ).toBeInTheDocument();
  expect(
   await screen.findByText('comment is a required field')
  ).toBeInTheDocument();
 });
});

describe('when feedback renders without issues', () => {
 beforeEach(() => {
  withOnlyRedux(<Feedback />, store);
 });
 afterEach(cleanup);

 it('should display required error when value is invalid', async () => {
  fireEvent.input(screen.getByPlaceholderText('Name'), {
   target: {
    value: 'test',
   },
  });
  fireEvent.input(screen.getByPlaceholderText('Email'), {
   target: {
    value: 'test@gmail.com',
   },
  });
  const rate = screen.getByTestId('rating-input-4');
  userEvent.dblClick(rate);
  userEvent.type(screen.getByPlaceholderText('Comment'), 'i love my top');

  const submit = screen.getByTestId('reuseable-button');

  fireEvent.click(submit);

  act(() => withOnlyRedux(<FeedbackReviews />, store));
  expect(await screen.findByText('Feedback Results')).toBeInTheDocument();
 });
});
