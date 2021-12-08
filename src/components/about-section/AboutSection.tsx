import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { AboutSectionQuery } from '../../../graphql/generated-types';
import { useResponsiveImage } from '../../hooks/useResponsiveImage';
import { mapSanityResponsiveImagesToResponsiveImagesData } from '../../utils/helpers';
import { LayoutContentWrapper } from '../layout/LayoutContentWrapper';
import { breakpointFrom } from '../../styles/breakpoints';

const StyledContainer = styled.section`
  margin: 12rem 0;
`;

const StyledContentContainer = styled.article`
  ${breakpointFrom('desktop')} {
    display: flex;
  }
`;

const StyledImageContainer = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;

  .gatsby-image-wrapper {
    border-radius: ${({ theme }) => theme.borderRadius};
  }

  ${breakpointFrom('desktop')} {
    order: 2;
  }
`;

const StyledTextContainer = styled.div`
  text-align: center;

  ${breakpointFrom('tablet')} {
    padding: 0 5.8rem;
  }

  ${breakpointFrom('desktop')} {
    padding: 14.65rem 0;
    margin-right: 12.5rem;
    text-align: left;
    flex-basis: 445px;
  }
`;

const StyledHeading = styled.h2`
  margin: 4rem 0 2.4rem;

  ${breakpointFrom('tablet')} {
    margin: 6.3rem 0 3.2rem;
  }

  ${breakpointFrom('desktop')} {
    margin: 0 0 3.2rem;
  }

  p {
    font-size: 2.8rem;
    line-height: 3.8rem;
    letter-spacing: 1px;
    font-weight: bold;

    ${breakpointFrom('tablet')} {
      font-size: 4rem;
      line-height: 4.4rem;
      letter-spacing: 1.5px;
    }
  }

  em {
    color: ${({ theme }) => theme.colors.primary};
    font-style: normal;
  }
`;

const StyledParagraph = styled.p`
  opacity: 0.5;
`;

export const AboutSection = () => {
  const data = useStaticQuery<AboutSectionQuery>(graphql`
    query AboutSection {
      sanityGlobalData {
        aboutSection {
          _rawTitle
          text
          images {
            ...ResponsiveImagesData
          }
        }
      }
    }
  `);

  const { aboutSection } = data.sanityGlobalData;

  const image = useResponsiveImage(
    mapSanityResponsiveImagesToResponsiveImagesData(aboutSection.images)
  );

  console.log(aboutSection);

  return (
    <StyledContainer>
      <LayoutContentWrapper>
        <StyledContentContainer>
          <StyledImageContainer>
            <GatsbyImage image={image.data} alt={image.alt} />
          </StyledImageContainer>
          <StyledTextContainer>
            <StyledHeading>
              <BlockContent blocks={aboutSection._rawTitle} />
            </StyledHeading>
            <StyledParagraph>{aboutSection.text}</StyledParagraph>
          </StyledTextContainer>
        </StyledContentContainer>
      </LayoutContentWrapper>
    </StyledContainer>
  );
};
