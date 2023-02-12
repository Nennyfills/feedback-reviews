import { render, screen } from '@testing-library/react';
import Input from '..';

import { register } from 'Test/register';
import userEvent from '@testing-library/user-event';

const value = { name: 'name' };
describe('when rendered `onChange` is not press', () => {
 it('should check if input has no value', () => {
  render(
   <Input
    register={register(value)}
    error={'name is required'}
    placeholder="name"
   />
  );
  expect(screen.getByTestId('reuseable-input')).toBeInTheDocument();
  expect(screen.getByTestId('error')).toBeInTheDocument();
  expect(screen.getByTestId('error')).toHaveTextContent('name is required');
 });
});

describe('when rendered with `onChange` is press', () => {
 it('should check if input has value', () => {
  render(
   <Input register={register(value)} error={undefined} placeholder="name" />
  );
  const input = screen.getByTestId('reuseable-input');
  userEvent.type(input, 'Test,{enter}food!');
  expect(input).toHaveValue(`Test,food!`);

  expect(screen.getByTestId('reuseable-input')).toBeInTheDocument();
  expect(screen.getByTestId('error')).toBeInTheDocument();
 });
});
