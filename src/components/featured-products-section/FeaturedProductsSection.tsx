import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { FeaturedCardVariantOne } from './FeaturedCardVariantOne';
import { mapSanityResponsiveImagesToResponsiveImagesData } from '../../utils/helpers';
import { useResponsiveImage } from '../../hooks/useResponsiveImage';
import { LayoutContentWrapper } from '../layout/LayoutContentWrapper';
import { FeaturedCardVariantTwo } from './FeaturedCardVariantTwo';
import { breakpointFrom } from '../../styles/breakpoints';
import { FeaturedCardVariantThree } from './FeaturedCardVariantThree';

const StyledContainer = styled.section`
  margin-top: 12rem;
`;

const StyledCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  ${breakpointFrom('tablet')} {
    gap: 3.2rem;
  }

  ${breakpointFrom('desktop')} {
    gap: 4.8rem;
  }
`;

export const FeaturedProductsSection = () => {
  const data = useStaticQuery(graphql`
    query FeaturedProductsSection {
      allSanityProduct(
        filter: { featured: { eq: true } }
        sort: { fields: orderRank, order: ASC }
      ) {
        nodes {
          shortName
          slug {
            current
          }
          featuredImages {
            ...ResponsiveImagesData
          }
        }
      }
    }
  `);

  const products = data.allSanityProduct.nodes;

  const productOneImageData = useResponsiveImage(
    mapSanityResponsiveImagesToResponsiveImagesData(products[0].featuredImages)
  );

  const productTwoImageData = useResponsiveImage(
    mapSanityResponsiveImagesToResponsiveImagesData(products[1].featuredImages)
  );

  const productThreeImageData = useResponsiveImage(
    mapSanityResponsiveImagesToResponsiveImagesData(products[2].featuredImages)
  );

  return (
    <StyledContainer>
      <LayoutContentWrapper>
        <StyledCardsContainer>
          <FeaturedCardVariantOne
            image={productOneImageData}
            description="The ZX9 Speaker is a premium speaker that is designed to deliver the best sound quality and sound experience for your home or office."
            title={products[0].shortName}
            slug={products[0].slug.current}
          />
          <FeaturedCardVariantTwo
            image={productTwoImageData}
            title={products[1].shortName}
            slug={products[1].slug.current}
          />
          <FeaturedCardVariantThree
            image={productThreeImageData}
            title={products[2].shortName}
            slug={products[2].slug.current}
          />
        </StyledCardsContainer>
      </LayoutContentWrapper>
    </StyledContainer>
  );
};
