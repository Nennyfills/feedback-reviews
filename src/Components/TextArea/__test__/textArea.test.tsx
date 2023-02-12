import { render, screen } from '@testing-library/react';
import TextArea from '..';

import { register } from 'Test/register';
import userEvent from '@testing-library/user-event';

const value = { name: 'comment' };

describe('when rendered `onChange` is not press', () => {
 it('should check if textarea has no value', () => {
  render(
   <TextArea
    register={register(value)}
    error={'comment is required'}
    placeholder="name"
    rows={8}
   />
  );
  expect(screen.getByTestId('reuseable-textarea')).toBeInTheDocument();
  expect(screen.getByTestId('error')).toBeInTheDocument();
  expect(screen.getByTestId('error')).toHaveTextContent('comment is required');
 });
});

describe('when rendered with `onChange` is press', () => {
 it('should check if textarea has value', () => {
  render(
   <TextArea
    register={register(value)}
    error={undefined}
    placeholder="name"
    rows={8}
   />
  );
  const textarea = screen.getByTestId('reuseable-textarea');
  userEvent.type(textarea, 'I love all i bought');
  expect(textarea).toHaveValue('I love all i bought');

  expect(screen.getByTestId('reuseable-textarea')).toBeInTheDocument();
  expect(screen.getByTestId('error')).toBeInTheDocument();
 });
});
