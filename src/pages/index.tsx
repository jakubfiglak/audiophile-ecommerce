import * as React from 'react';
import { Layout } from '../components/layout/Layout';
import { HomePageHero } from '../components/hero/HomePageHero';

const IndexPage = () => {
  return (
    <Layout>
      <HomePageHero />
    </Layout>
  );
};

export default IndexPage;
