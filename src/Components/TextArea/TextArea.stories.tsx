import React from 'react';
import { Story } from '@storybook/react';

import { ComponentMeta } from '@storybook/react';
import { TextArea } from 'Components';
import { useForm } from 'react-hook-form';

import { TextAreaProps } from 'Components/TextArea';

export default {
 title: 'components/TextArea',
 component: TextArea,
} as ComponentMeta<typeof TextArea>;

const Template: Story<TextAreaProps> = (args: any) => {
 const { register } = useForm();

 return <TextArea {...args} register={register} />;
};

export const Basic = Template.bind({});
export const Error = Template.bind({});

Basic.args = {
 placeholder: 'Name',
 error: undefined || '',
 rows: 10,
};

Error.args = {
 placeholder: 'Name',
 error: 'Name is required',
};
