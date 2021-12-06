import * as React from 'react';
import { Layout } from '../components/layout/Layout';
import { HomePageHero } from '../components/hero/HomePageHero';
import { ExtraMenu } from '../components/menu/ExtraMenu';
import { FeaturedProductsSection } from '../components/featured-products-section/FeaturedProductsSection';
import { AboutSection } from '../components/about-section/AboutSection';

const IndexPage = () => {
  return (
    <Layout>
      <HomePageHero />
      <ExtraMenu />
      <FeaturedProductsSection />
      <AboutSection />
    </Layout>
  );
};

export default IndexPage;
