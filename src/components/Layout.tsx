import React, { ReactNode } from 'react';
import { GlobalStyle } from '../styles/GlobalStyle';

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div>
      <GlobalStyle />
      {children}
    </div>
  );
};
