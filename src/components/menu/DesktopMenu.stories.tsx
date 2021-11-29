import React from 'react';
import styled from 'styled-components';
import { Story, Meta } from '@storybook/react';
import { DesktopMenu, Props } from './DesktopMenu';

const StyledContainer = styled.div`
  background: ${({ theme }) => theme.colors.black};
  padding: 4rem;
`;

export default {
  component: DesktopMenu,
  title: 'Components/Menu',
} as Meta;

const Template: Story<Props> = (args) => (
  <StyledContainer>
    <DesktopMenu {...args} />
  </StyledContainer>
);

export const Desktop = Template.bind({});

Desktop.args = {};
