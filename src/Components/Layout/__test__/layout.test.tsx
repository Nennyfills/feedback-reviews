import { render, screen } from '@testing-library/react';
import Layout from '..';

describe('when rendered layout with `children` prop', () => {
 it('should render the layout', () => {
  render(
   <Layout>
    <div>testing layout</div>
   </Layout>
  );
  const layout = screen.getByTestId('layout');
  expect(layout).toBeInTheDocument();
  expect(layout).toHaveTextContent('testing layout');
 });
});
