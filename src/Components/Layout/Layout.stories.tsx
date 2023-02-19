import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Comments, Layout } from 'Components';
import { comments } from 'Constants';

export default {
 title: 'components/Layout',
 component: Layout,
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const Basic = Template.bind({});

Basic.args = {
 children: <Comments comments={comments} />,
};
