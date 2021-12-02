import React from 'react';
import styled from 'styled-components';
import { breakpointFrom } from '../../styles/breakpoints';
import { LayoutContentWrapper } from '../layout/LayoutContentWrapper';
import { MobileMenu } from './MobileMenu';

const StyledContainer = styled.div`
  margin-top: 9.2rem;

  ${breakpointFrom('tablet')} {
    margin-top: 14.8rem;
  }

  ${breakpointFrom('desktop')} {
    margin-top: 20rem;
  }
`;

export const ExtraMenu = () => {
  return (
    <LayoutContentWrapper>
      <StyledContainer>
        <MobileMenu />
      </StyledContainer>
    </LayoutContentWrapper>
  );
};
