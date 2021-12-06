import React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FeaturedCardCommonProps } from './types';
import { LinkButton } from '../buttons/Button';
import { breakpointFrom } from '../../styles/breakpoints';

const StyledContainer = styled.article`
  position: relative;
  padding: 0 2.4rem;
  border-radius: ${({ theme }) => theme.borderRadius};

  ${breakpointFrom('tablet')} {
    padding: 0 6.2rem;
  }

  ${breakpointFrom('desktop')} {
    padding: 0 9.5rem;
  }
`;

const StyledImageWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;

  .gatsby-image-wrapper {
    border-radius: ${({ theme }) => theme.borderRadius};
  }
`;

const StyledContentContainer = styled.div`
  position: relative;
  z-index: 2;
  padding: 10.1rem 0;
`;

const StyledHeading = styled.h3`
  font-size: 2.8rem;
  line-height: 3.8rem;
  letter-spacing: 2px;
  margin-bottom: 3.2rem;
`;

export const FeaturedCardVariantTwo = ({
  image,
  title,
  slug,
}: FeaturedCardCommonProps) => {
  return (
    <StyledContainer>
      <StyledImageWrapper>
        <GatsbyImage image={image.data} alt={image.alt} />
      </StyledImageWrapper>
      <StyledContentContainer>
        <StyledHeading>{title}</StyledHeading>
        <LinkButton to={`/product/${slug}`} label="See product" secondary />
      </StyledContentContainer>
    </StyledContainer>
  );
};
