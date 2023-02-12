import { render, screen, fireEvent } from '@testing-library/react';
import Button from '..';


describe('when rendered with `onClick and children` prop', () => {
 it('should render the button with props', () => {
  render(<Button onClick={() => {}}>Submit</Button>);
  expect(screen.getByRole('button')).toBeInTheDocument();
  expect(screen.getByText(/Submit/i)).toBeVisible();
 });
});
describe('when the button is pressed', () => {
 it('should call the `onClick`', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Submit</Button>);
  fireEvent.click(screen.getByRole('button'));
  expect(handleClick).toHaveBeenCalled();
  expect(handleClick).toHaveBeenCalledTimes(1);
 });
});
