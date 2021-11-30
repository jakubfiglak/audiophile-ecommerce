import React, { ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Header } from '../header/Header';
import { GlobalStyle } from '../../styles/GlobalStyle';
import { theme } from '../../styles/theme';

type Props = {
  children: ReactNode;
};

const StyledMain = styled.main`
  margin-top: 90px;
`;

export const Layout = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <StyledMain>{children}</StyledMain>
    </ThemeProvider>
  );
};
