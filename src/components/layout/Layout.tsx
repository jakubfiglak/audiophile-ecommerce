import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../../styles/GlobalStyle';
import { theme } from '../../styles/theme';
import { Nav } from '../Nav/Nav';

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Nav />
      {children}
    </ThemeProvider>
  );
};
