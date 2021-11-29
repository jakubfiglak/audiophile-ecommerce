import React from 'react';
import styled from 'styled-components';
import { Story, Meta } from '@storybook/react';
import { MobileMenu } from './MobileMenu';

const StyledContainer = styled.div`
  width: 689px;
  margin-top: 100px;
`;

export default {
  component: MobileMenu,
  title: 'Components/Menu',
} as Meta;

const Template: Story = () => (
  <StyledContainer>
    <MobileMenu />
  </StyledContainer>
);

export const Mobile = Template.bind({});

Mobile.args = {};
