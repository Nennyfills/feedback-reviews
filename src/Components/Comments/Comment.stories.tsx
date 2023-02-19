import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Comments } from 'Components';
import { comments } from 'Constants';

export default {
 title: 'components/Comments',
 component: Comments,
} as ComponentMeta<typeof Comments>;

const Template: ComponentStory<typeof Comments> = (args) => <Comments {...args} />;

export const Basic = Template.bind({});

Basic.args = {
 comments,
};
