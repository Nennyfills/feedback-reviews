import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { setupStore } from 'Redux/store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { Feedback } from 'Pages';
import { Layout } from 'Components';

export default {
 title: 'Pages/Feedback',
 component: Feedback,
} as ComponentMeta<typeof Feedback>;

const Template: ComponentStory<typeof Feedback> = () => (
 <Layout>
  <Feedback />
 </Layout>
);

export const CreateComment = Template.bind({});

CreateComment.decorators = [
 (Story) => (
  <Provider store={setupStore()}>
   <MemoryRouter>
    <Story />
   </MemoryRouter>
  </Provider>
 ),
];
