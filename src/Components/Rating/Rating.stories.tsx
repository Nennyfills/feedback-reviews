import React from 'react';
import { Story } from '@storybook/react';

import { ComponentMeta } from '@storybook/react';
import { Rating } from 'Components';
import { useForm } from 'react-hook-form';

import { RatingProps } from 'Components/Rating';

export default {
 title: 'components/Rating',
 component: Rating,
} as ComponentMeta<typeof Rating>;

const Template: Story<RatingProps> = (args: any) => {
 const { register } = useForm();

 return <Rating {...args} register={register} />;
};

export const Basic = Template.bind({});
export const Error = Template.bind({});

Basic.args = {
 error: undefined || '',
};

Error.args = {
 error: 'Rating is required',
};
