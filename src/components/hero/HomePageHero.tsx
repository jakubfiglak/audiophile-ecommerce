import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import { HomePageHeroQuery } from '../../../graphql/generated-types';
import { LayoutContentWrapper } from '../layout/LayoutContentWrapper';
import { LinkButton } from '../buttons/Button';
import { useHeroImage } from '../../hooks/useHeroImage';
import { mapSanityHeroImagesToHeroImagesData } from '../../utils/helpers';
import { breakpointFrom } from '../../styles/breakpoints';

const StyledSection = styled.section`
  position: relative;
  background: ${({ theme }) => theme.colors.darkGray};
`;

const StyledGatsbyImage = styled(GatsbyImage)`
  display: block;
`;

const StyledContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin-top: ${({ theme }) => theme.navHeight};
  color: ${({ theme }) => theme.colors.white};
`;

const StyledContentContainer = styled.div`
  margin-top: ${({ theme }) => `calc(198px - ${theme.navHeight})`};
  padding: 0 2.4rem;
  text-align: center;

  ${breakpointFrom('tablet')} {
    margin-top: ${({ theme }) => `calc(216px - ${theme.navHeight})`};
    padding: 0 19.5rem;
  }

  ${breakpointFrom('desktop')} {
    margin-top: ${({ theme }) => `calc(225px - ${theme.navHeight})`};
    text-align: left;
    max-width: 400px;
    padding: 0;
  }
`;

const StyledSpan = styled.span`
  font-size: 1.4rem;
  line-height: 1.9rem;
  letter-spacing: 1rem;
  text-transform: uppercase;
  opacity: 0.5;
`;

const StyledHeading = styled.h1`
  font-size: 3.6rem;
  line-height: 4rem;
  letter-spacing: 1.29px;
  margin: 1.6rem 0 2.4rem;

  ${breakpointFrom('tablet')} {
    font-size: 5.6rem;
    line-height: 5.8rem;
    margin: 2.4rem 0;
  }
`;

const StyledParagraph = styled.p`
  margin-bottom: 2.8rem;

  ${breakpointFrom('tablet')} {
    padding: 0 1.5rem;
    margin-bottom: 4rem;
  }

  ${breakpointFrom('tablet')} {
    padding: 0;
  }
`;

export const HomePageHero = () => {
  const data = useStaticQuery<HomePageHeroQuery>(graphql`
    fragment ImageData on SanityMainImage {
      alt
      asset {
        gatsbyImageData
      }
    }

    query HomePageHero {
      sanityProduct(name: { eq: "XX99 Mark II Headphones" }) {
        name
        new
        slug {
          current
        }
        heroImages {
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
    }
  `);

  const product = data.sanityProduct;

  const image = useHeroImage(
    mapSanityHeroImagesToHeroImagesData(product.heroImages)
  );

  return (
    <StyledSection>
      <StyledGatsbyImage
        image={image.data}
        alt={image.alt}
        objectPosition="center"
        objectFit="contain"
      />
      <StyledContainer>
        <LayoutContentWrapper>
          <StyledContentContainer>
            {product.new ? <StyledSpan>New product</StyledSpan> : null}
            <StyledHeading>{product.name}</StyledHeading>
            <StyledParagraph>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </StyledParagraph>
            <LinkButton label="See product" to={`/${product.slug.current}`} />
          </StyledContentContainer>
        </LayoutContentWrapper>
      </StyledContainer>
    </StyledSection>
  );
};
