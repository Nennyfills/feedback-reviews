import React from 'react';
import { Story } from '@storybook/react';

import { ComponentMeta } from '@storybook/react';
import { Input } from 'Components';
import { useForm } from 'react-hook-form';

import { InputProps } from 'Components/Input';

export default {
 title: 'components/Input',
 component: Input,
 argTypes: {
  onClick: { action: 'call me' },
 },
} as ComponentMeta<typeof Input>;

const Template: Story<InputProps> = (args: any) => {

 const { register } = useForm();

 return (
  <Input {...args} register={register} />
 );
};

export const Basic = Template.bind({});
export const Error = Template.bind({});

Basic.args = {
 placeholder: 'Name',
 error: undefined || '',
};

Error.args = {
 placeholder: 'Name',
 error: 'Name is required',
};
