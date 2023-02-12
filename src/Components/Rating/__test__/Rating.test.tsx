import { render, screen, fireEvent } from '@testing-library/react';
import Rating from '..';
import { register } from 'Test/register';

const value = { name: 'rate' };

describe('when rendered `onClick and onChange` are not press', () => {
 it('should check if input is checked', () => {
  render(<Rating register={register(value)} error={'rating is required'} />);
  fireEvent.click(screen.getByRole('button'));
  const radio1 = screen.getByTestId('rating-input-1');

  expect(screen.getByTestId('rating-icon-1')).toBeInTheDocument();
  expect(radio1).not.toBeChecked();
  expect(screen.getByTestId('error')).toBeInTheDocument();
  expect(screen.getByTestId('error')).toHaveTextContent('rating is required');
 });
});
describe('when rendered with `onClick and onChange` are press', () => {
 it('should check if input is checked', () => {
  render(<Rating register={register(value)} error={undefined} />);
  fireEvent.click(screen.getByRole('button'));
  const radio1 = screen.getByTestId('rating-input-1');
  const radio2 = screen.getByTestId('rating-input-2');
  const radio3 = screen.getByTestId('rating-input-3');
  const radio4 = screen.getByTestId('rating-input-4');
  const radio5 = screen.getByTestId('rating-input-5');

  expect(screen.getByTestId('error')).toBeInTheDocument();

  expect(screen.getByTestId('rating-icon-1')).toBeInTheDocument();
  expect(radio1).not.toBeChecked();
  fireEvent.click(radio1);
  expect(radio1).toBeChecked();

  expect(screen.getByTestId('rating-icon-2')).toBeInTheDocument();
  expect(radio2).not.toBeChecked();
  fireEvent.click(radio2);
  expect(radio2).toBeChecked();

  expect(screen.getByTestId('rating-icon-3')).toBeInTheDocument();
  expect(radio3).not.toBeChecked();
  fireEvent.click(radio3);
  expect(radio3).toBeChecked();

  expect(screen.getByTestId('rating-icon-4')).toBeInTheDocument();
  expect(radio4).not.toBeChecked();
  fireEvent.click(radio4);
  expect(radio4).toBeChecked();

  expect(screen.getByTestId('rating-icon-5')).toBeInTheDocument();
  expect(radio5).not.toBeChecked();
  fireEvent.click(radio5);
  expect(radio5).toBeChecked();
 });
});
