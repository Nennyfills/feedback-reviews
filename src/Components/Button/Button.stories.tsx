import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from 'Components';

export default {
 title: 'components/Button',
 component: Button,
 argTypes: {
  onClick: { action: 'call me' },
 },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Basic = Template.bind({});

Basic.args = {
 children: 'Press Me',
};
