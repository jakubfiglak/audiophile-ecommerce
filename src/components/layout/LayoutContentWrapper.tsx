import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  max-width: 110rem;
  margin: 0 auto;
`;

type Props = { children: ReactNode };

export const LayoutContentWrapper = ({ children }: Props) => {
  return <StyledContainer>{children}</StyledContainer>;
};
