import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { FeaturedCardVariantOne } from './FeaturedCardVariantOne';
import { mapSanityResponsiveImagesToResponsiveImagesData } from '../../utils/helpers';
import { useResponsiveImage } from '../../hooks/useResponsiveImage';
import { LayoutContentWrapper } from '../layout/LayoutContentWrapper';
import { FeaturedCardVariantTwo } from './FeaturedCardVariantTwo';
import { breakpointFrom } from '../../styles/breakpoints';

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
    fragment ImageData on SanityMainImage {
      alt
      asset {
        gatsbyImageData
      }
    }

    fragment ProductData on SanityProduct {
      name
      slug {
        current
      }
      featuredImages {
        desktop {
          ...ImageData
        }
        mobile {
          ...ImageData
        }
        tablet {
          ...ImageData
        }
      }
    }

    query FeaturedProductsSection {
      productOne: sanityProduct(name: { eq: "ZX9 Speaker" }) {
        ...ProductData
      }
      productTwo: sanityProduct(name: { eq: "ZX7 Speaker" }) {
        ...ProductData
      }
    }
  `);

  const productOneImageData = useResponsiveImage(
    mapSanityResponsiveImagesToResponsiveImagesData(
      data.productOne.featuredImages
    )
  );

  const productTwoImageData = useResponsiveImage(
    mapSanityResponsiveImagesToResponsiveImagesData(
      data.productTwo.featuredImages
    )
  );

  return (
    <StyledContainer>
      <LayoutContentWrapper>
        <StyledCardsContainer>
          <FeaturedCardVariantOne
            image={productOneImageData}
            description="The ZX9 Speaker is a premium speaker that is designed to deliver the best sound quality and sound experience for your home or office."
            title={data.productOne.name}
            slug={data.productOne.slug.current}
          />
          <FeaturedCardVariantTwo
            image={productTwoImageData}
            title={data.productTwo.name}
            slug={data.productTwo.slug.current}
          />
        </StyledCardsContainer>
      </LayoutContentWrapper>
    </StyledContainer>
  );
};
