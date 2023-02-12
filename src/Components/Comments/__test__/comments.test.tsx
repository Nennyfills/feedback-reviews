import { render, screen } from '@testing-library/react';
import Comments from '..';

describe('when rendered comments with `children` prop', () => {
 it('should render the comments', () => {
  render(
   <Comments
    comments={[
     {
      email: 'test@get.com',
      name: 'test test',
      rate: 3,
      comment: 'i love it',
     },
    ]}
   />
  );
  const comments = screen.getByTestId('reuseable-comments');
  expect(comments).toBeInTheDocument();
  expect(comments).toHaveTextContent('test@get.com');
  expect(comments).toHaveTextContent('i love it');
 });
});
