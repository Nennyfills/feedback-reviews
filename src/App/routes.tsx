import { Feedback, FeedbackReviews } from 'Pages';

type route = {
 path: string;
 exact: boolean;
 element: JSX.Element;
 loader: JSX.Element;
};
const routes: route[] = [
 {
  path: '/',
  exact: true,
  element: <Feedback />,
  loader: <div>loader</div>,
  //   loader: <LoaderOne remove />,
 },
 {
  path: 'feedback-reviews',
  exact: true,
  element: <FeedbackReviews />,
  loader: <div>loader</div>,
  //   loader: <LoaderThree />,
 },
];

export default routes;
