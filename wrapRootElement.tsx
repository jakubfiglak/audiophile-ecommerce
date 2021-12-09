import * as React from 'react';
import type { GatsbyBrowser } from 'gatsby';
import { CartStateProvider } from './src/context/cart/CartStateProvider';

const wrapPageElement: GatsbyBrowser['wrapRootElement'] = ({ element }) => {
  return <CartStateProvider>{element}</CartStateProvider>;
};

export default wrapPageElement;
