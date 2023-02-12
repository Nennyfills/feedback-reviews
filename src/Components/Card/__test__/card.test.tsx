import { render, screen } from '@testing-library/react';
import Card from '..';

describe('when rendered card with `children` prop', () => {
 it('should render the card', () => {
  render(<Card>Hello world</Card>);
  expect(screen.getByTestId('reuseable-card')).toBeInTheDocument();
  expect(screen.getByTestId('reuseable-card')).toHaveTextContent('Hello world');
 });
});
