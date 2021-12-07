import React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FeaturedCardCommonProps } from './types';
import { LinkButton } from '../buttons/Button';
import { breakpointFrom } from '../../styles/breakpoints';

const StyledContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  ${breakpointFrom('tablet')} {
    flex-direction: row;
    gap: 1rem;
  }

  ${breakpointFrom('desktop')} {
    gap: 2rem;
  }
`;

const StyledImageWrapper = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;

  ${breakpointFrom('tablet')} {
    flex-basis: calc(50% - 0.5rem);
  }

  ${breakpointFrom('desktop')} {
    flex-basis: calc(50% - 1rem);
  }
`;

const StyledContentContainer = styled.div`
  padding: 4.1rem 2.4rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.colors.lightGray};

  ${breakpointFrom('tablet')} {
    padding: 10.1rem 4.1rem;
    flex-basis: calc(50% - 0.5rem);
  }

  ${breakpointFrom('desktop')} {
    padding: 10.1rem 9.5rem;
    flex-basis: calc(50% - 1rem);
  }
`;

const StyledHeading = styled.h3`
  font-size: 2.8rem;
  line-height: 3.8rem;
  letter-spacing: 2px;
  margin-bottom: 3.2rem;
`;

export const FeaturedCardVariantThree = ({
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
        <LinkButton to={`/product/${slug}`} label="See product" $secondary />
      </StyledContentContainer>
    </StyledContainer>
  );
};
