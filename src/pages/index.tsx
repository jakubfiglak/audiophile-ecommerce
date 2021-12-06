import * as React from 'react';
import { HomePageHero } from '../components/hero/HomePageHero';
import { ExtraMenu } from '../components/menu/ExtraMenu';
import { FeaturedProductsSection } from '../components/featured-products-section/FeaturedProductsSection';
import { AboutSection } from '../components/about-section/AboutSection';

const IndexPage = () => {
  return (
    <>
      <HomePageHero />
      <ExtraMenu />
      <FeaturedProductsSection />
      <AboutSection />
    </>
  );
};

export default IndexPage;
