import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';

import { setupStore } from 'Redux/store';
import { FeedbackReviews } from 'Pages';
import { comments } from 'Constants';
import { Layout } from 'Components';

const mockedState = {
 reviews: comments,
 totalChartRates: [
  ['☆☆☆☆☆', 5],
  ['☆☆☆☆', 0],
  ['☆☆☆', 5],
  ['☆☆', 1],
  ['☆', 0],
 ],
};

export default {
 title: 'Pages/FeedbackReviews',
 component: FeedbackReviews,
} as ComponentMeta<typeof FeedbackReviews>;

const Template: ComponentStory<typeof FeedbackReviews> = () => (
 <Layout>
  <FeedbackReviews />
 </Layout>
);

const preloadedState: any = {
 Feedback: {
  ...mockedState,
 },
};
export const Feedbacks = Template.bind({});
export const Empty = Template.bind({});

Feedbacks.decorators = [
 (Story) => (
  <Provider
   store={setupStore({
    ...preloadedState,
   })}
  >
   <MemoryRouter>
    <Story />
   </MemoryRouter>
  </Provider>
 ),
];

Empty.decorators = [
 (Story) => (
  <Provider store={setupStore()}>
   <MemoryRouter>
    <Story />
   </MemoryRouter>
  </Provider>
 ),
];
