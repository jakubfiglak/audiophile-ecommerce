import * as React from 'react';
import { Layout } from '../components/layout/Layout';
import { HomePageHero } from '../components/hero/HomePageHero';
import { ExtraMenu } from '../components/menu/ExtraMenu';
import { FeaturedProductsSection } from '../components/featured-products-section/FeaturedProductsSection';

const IndexPage = () => {
  return (
    <Layout>
      <HomePageHero />
      <ExtraMenu />
      <FeaturedProductsSection />
    </Layout>
  );
};

export default IndexPage;
