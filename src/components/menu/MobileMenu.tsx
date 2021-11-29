import React from 'react';
import styled from 'styled-components';
import { CategoryCard } from '../category-card/CategoryCard';
import { categoriesCardData } from '../../data';

const StyledContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledCardWrapper = styled.div`
  flex: 1;
`;

export const MobileMenu = () => {
  return (
    <StyledContainer>
      {categoriesCardData.map(({ id, ...props }) => (
        <StyledCardWrapper key={id}>
          <CategoryCard {...props} />
        </StyledCardWrapper>
      ))}
    </StyledContainer>
  );
};
