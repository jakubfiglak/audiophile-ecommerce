import React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FeaturedCardCommonProps } from './types';
import { LinkButton } from '../buttons/Button';
import pattern from '../../assets/svg/pattern-circles.svg';
import { breakpointFrom } from '../../styles/breakpoints';

const StyledContainer = styled.article`
  background-color: ${({ theme }) => theme.colors.primary};
  background-image: url(${pattern});
  background-position: top -120px center;
  background-repeat: no-repeat;
  padding: 5.5rem 2.4rem;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;

  ${breakpointFrom('tablet')} {
    padding: 5.2rem 17rem 6.4rem;
    background-position: bottom 120px center;
  }

  ${breakpointFrom('desktop')} {
    display: flex;
    gap: 14rem;
    text-align: left;
    padding: 9.6rem 9.6rem 0;
    background-position: center center;
  }
`;

const StyledGatsbyImage = styled(GatsbyImage)`
  width: 50%;

  ${breakpointFrom('desktop')} {
    width: 100%;
    transform: translateY(10px);
  }
`;

const StyledHeading = styled.h3`
  font-size: 3.6rem;
  line-height: 4rem;
  margin: 3.2rem 2.4rem 2.4rem;

  ${breakpointFrom('tablet')} {
    font-size: 5.6rem;
    line-height: 5.8rem;
    letter-spacing: 2px;
    margin-top: 6.4rem;
  }

  ${breakpointFrom('desktop')} {
    margin: 4rem 2.4rem 2.4rem 0;
  }
`;

const StyledParagraph = styled.p`
  margin-bottom: 2.4rem;

  ${breakpointFrom('tablet')} {
    margin-bottom: 4rem;
  }
`;

type Props = FeaturedCardCommonProps & { description: string };

export const FeaturedCardVariantOne = ({
  image,
  title,
  description,
  slug,
}: Props) => {
  return (
    <StyledContainer>
      <div>
        <StyledGatsbyImage image={image.data} alt={image.alt} />
      </div>
      <div>
        <StyledHeading>{title}</StyledHeading>
        <StyledParagraph>{description}</StyledParagraph>
        <LinkButton to={`/product/${slug}`} label="See product" tertiary />
      </div>
    </StyledContainer>
  );
};
