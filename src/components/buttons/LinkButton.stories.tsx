import React from 'react';

import { Story, Meta } from '@storybook/react';

import { LinkButton, Props } from './LinkButton';

export default {
  component: LinkButton,
  title: 'Components/Button',
} as Meta;

const Template: Story<Props> = (args) => <LinkButton {...args} />;

export const Link = Template.bind({});

Link.args = {
  label: 'Link',
  to: '/',
};
