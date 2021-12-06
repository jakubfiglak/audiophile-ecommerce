import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { breakpointFrom } from '../../styles/breakpoints';

const StyledContainer = styled.div`
  max-width: 110rem;
  margin: 0 auto;
  padding: 0 2.4rem;

  ${breakpointFrom('tablet')} {
    padding: 0 4rem;
  }

  ${breakpointFrom('desktop')} {
    padding: 0;
  }
`;

type Props = { children: ReactNode };

export const LayoutContentWrapper = ({ children }: Props) => {
  return <StyledContainer>{children}</StyledContainer>;
};
