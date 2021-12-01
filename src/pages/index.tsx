import * as React from 'react';
import { Layout } from '../components/layout/Layout';
import { HomePageHero } from '../components/hero/HomePageHero';
import { ExtraMenu } from '../components/menu/ExtraMenu';

const IndexPage = () => {
  return (
    <Layout>
      <HomePageHero />
      <ExtraMenu />
    </Layout>
  );
};

export default IndexPage;
