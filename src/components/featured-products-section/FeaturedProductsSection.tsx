import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { FeaturedCardVariantOne } from './FeaturedCardVariantOne';
import { mapSanityResponsiveImagesToResponsiveImagesData } from '../../utils/helpers';
import { useResponsiveImage } from '../../hooks/useResponsiveImage';
import { LayoutContentWrapper } from '../layout/LayoutContentWrapper';

const StyledContainer = styled.section`
  margin-top: 12rem;
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
    }
  `);

  // const productOne = data.sanityProduct;
  console.log(data);

  const productOneImageData = useResponsiveImage(
    mapSanityResponsiveImagesToResponsiveImagesData(
      data.productOne.featuredImages
    )
  );

  return (
    <StyledContainer>
      <LayoutContentWrapper>
        <FeaturedCardVariantOne
          image={productOneImageData}
          description="The ZX9 Speaker is a premium speaker that is designed to deliver the best sound quality and sound experience for your home or office."
          title={data.productOne.name}
          slug={data.productOne.slug.current}
        />
      </LayoutContentWrapper>
    </StyledContainer>
  );
};
