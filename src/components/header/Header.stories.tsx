import React from 'react';

import { Story, Meta } from '@storybook/react';

import { Header } from './Header';

export default {
  component: Header,
  title: 'Components/Header',
} as Meta;

const Template: Story = () => <Header />;

export const Main = Template.bind({});

// Main.args = {
//   label: 'Link',
//   to: '/',
// };
