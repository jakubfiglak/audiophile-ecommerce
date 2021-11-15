import React from 'react';

import { Story, Meta } from '@storybook/react';

import { Button, Props } from './Button';

export default {
  component: Button,
  title: 'Components/Button',
} as Meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Main = Template.bind({});

Main.args = {
  label: 'Button',
  secondary: false,
};
