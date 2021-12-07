import * as React from 'react';
import type { GatsbyBrowser } from 'gatsby';
import { Layout } from './src/components/layout/Layout';

const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
  props,
}) => {
  return <Layout {...props}>{element}</Layout>;
};

export default wrapPageElement;
