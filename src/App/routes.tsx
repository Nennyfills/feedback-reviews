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
  loader: <div>loading...</div>,
 },
 {
  path: 'feedback-reviews',
  exact: true,
  element: <FeedbackReviews />,
  loader: <div>loading...</div>,
 },
];

export default routes;
