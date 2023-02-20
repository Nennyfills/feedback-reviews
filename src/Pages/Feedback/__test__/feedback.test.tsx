/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-render-in-setup */
import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders, testStore } from 'Test/testUtils';

import Feedback from '..';
import userEvent from '@testing-library/user-event';
import FeedbackReviews from 'Pages/FeedbackReviews';
import { act } from 'react-dom/test-utils';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
 ...(jest.requireActual('react-router-dom') as any),
 useNavigate: () => mockedUsedNavigate,
}));

testStore.dispatch = jest.fn();

describe('when feedback first renders', () => {
 beforeEach(() => {
  renderWithProviders(<Feedback />);
 });
 it('should render without error', () => {
  const element = screen.getByTestId('feedback');
  expect(element).toBeInTheDocument();
 });
});

describe('when feedback renders with issue', () => {
 beforeEach(() => {
  renderWithProviders(<Feedback />);
 });

 test('should display correct error message when all field are empty', async () => {
  const submit = screen.getByTestId('reuseable-button');
  await act(async () => fireEvent.click(submit));

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
 beforeEach(async () => {
  renderWithProviders(<Feedback />);
 });
 it('should send successfully send feedback when all fields are filled', async () => {
  const rate = screen.getByTestId('rating-input-4');
  const submit = screen.getByTestId('reuseable-button');

  await act(async () => {
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
   userEvent.dblClick(rate);
   userEvent.type(screen.getByPlaceholderText('Comment'), 'i love my top');
   fireEvent.click(submit);
  });
  renderWithProviders(<FeedbackReviews />);
  expect(await screen.findByText('Feedback Results')).toBeInTheDocument();
 });
});
