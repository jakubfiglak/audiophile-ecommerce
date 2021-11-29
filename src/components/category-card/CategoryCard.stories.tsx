import React from 'react';
import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';
import { CategoryCard, Props } from './CategoryCard';
import { categoriesCardData } from '../../data';

export default {
  component: CategoryCard,
  title: 'Components/Cards',
} as Meta;

const StyledContainer = styled.div`
  width: 223px;
  margin-top: 200px;
`;

const Template: Story<Props> = (args) => (
  <StyledContainer>
    <CategoryCard {...args} />
  </StyledContainer>
);

export const Category = Template.bind({});

Category.args = {
  ...categoriesCardData[0],
};
