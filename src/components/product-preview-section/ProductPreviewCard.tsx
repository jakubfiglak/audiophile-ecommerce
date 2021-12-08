import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { SingleProduct } from './types';
import { LinkButton } from '../buttons/Button';
import { StyledNewProductIndicator } from '../new-product-indicator/NewProductIndicator';
import { useResponsiveImage } from '../../hooks/useResponsiveImage';
import { breakpointFrom } from '../../styles/breakpoints';
import { splitTitleToTwoLines } from '../../utils/helpers';

type Props = SingleProduct;

const StyledContainer = styled.article`
  ${breakpointFrom('desktop')} {
    display: flex;
    gap: 12.5rem;

    :nth-child(even) {
      .gatsby-image-wrapper {
        order: 2;
      }
    }
  }
`;

const StyledImage = styled(GatsbyImage)`
  border-radius: ${({ theme }) => theme.borderRadius};

  ${breakpointFrom('desktop')} {
    flex: 1 0 540px;
  }
`;

const StyledContentContainer = styled.div`
  margin-top: 3.2rem;
  text-align: center;

  ${breakpointFrom('desktop')} {
    margin-top: 0;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

const StyledHeading = styled.h2`
  margin: 2.4rem 0;
  font-size: 2.8rem;
  line-height: 3.8rem;
  letter-spacing: 1px;

  ${breakpointFrom('tablet')} {
    margin: 1.6rem 0 3.2rem;
    font-size: 4rem;
    line-height: 4.4rem;
    letter-spacing: 1.4px;
  }
`;

const StyledParagraph = styled.p`
  margin-bottom: 2.4rem;

  ${breakpointFrom('tablet')} {
    padding: 0 5.8rem;
  }

  ${breakpointFrom('desktop')} {
    padding: 0;
    margin-bottom: 4rem;
  }
`;

export const ProductPreviewCard = ({
  images,
  isNew,
  name,
  description,
  linkTo,
}: Props) => {
  const image = useResponsiveImage(images);
  const { firstLine, secondLine } = splitTitleToTwoLines(name);

  return (
    <StyledContainer>
      <StyledImage image={image.data} alt={image.alt} />
      <StyledContentContainer>
        {isNew ? (
          <StyledNewProductIndicator>New product</StyledNewProductIndicator>
        ) : null}
        <StyledHeading>
          {firstLine}
          <br />
          {secondLine}
        </StyledHeading>
        <StyledParagraph>{description}</StyledParagraph>
        <LinkButton to={`/product/${linkTo}`} label="See product" />
      </StyledContentContainer>
    </StyledContainer>
  );
};
