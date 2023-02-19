import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from 'Components';

export default {
 title: 'components/Card',
 component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Basic = Template.bind({});

Basic.args = {
 children: 'Comment card for you',
};
