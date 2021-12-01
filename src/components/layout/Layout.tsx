import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { Header } from '../header/Header';
import { GlobalStyle } from '../../styles/GlobalStyle';
import { theme } from '../../styles/theme';

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
    </ThemeProvider>
  );
};
