import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReviewChart } from 'Components';

export default {
 title: 'components/ReviewChart',
 component: ReviewChart,
} as ComponentMeta<typeof ReviewChart>;

const data: any= [
 ['☆☆☆☆☆', 5],
 ['☆☆☆☆', 0],
 ['☆☆☆', 5],
 ['☆☆', 1],
 ['☆', 0],
];
const Template: ComponentStory<typeof ReviewChart> = (args) => (
 <ReviewChart {...args} />
);

export const Basic = Template.bind({});

Basic.args = {
 chartData: data,
};
