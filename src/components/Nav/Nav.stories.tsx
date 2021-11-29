import React from 'react';

import { Story, Meta } from '@storybook/react';

import { Nav } from './Nav';

export default {
  component: Nav,
  title: 'Components/Nav',
} as Meta;

const Template: Story = () => <Nav />;

export const Main = Template.bind({});

// Main.args = {
//   label: 'Link',
//   to: '/',
// };
