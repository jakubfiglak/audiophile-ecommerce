import React, { ReactNode } from 'react';
import type { PageProps } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { GlobalStyle } from '../../styles/GlobalStyle';
import { theme } from '../../styles/theme';

type Props = Omit<PageProps, 'children'> & { children: ReactNode };

export const Layout = ({ children, location }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header backgroundBlack={location.pathname !== '/'} />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
};
