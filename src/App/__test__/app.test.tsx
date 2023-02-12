import { screen } from '@testing-library/react';
import { mainAppRender } from 'Test/testUtils';

describe('when App first renders', () => {
 it('should render without error', () => {
  mainAppRender();
  const element = screen.getByTestId('app');
  expect(element).toBeInTheDocument();
 });
});
