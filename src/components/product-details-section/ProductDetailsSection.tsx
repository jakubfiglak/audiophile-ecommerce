import React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import { IResponsiveImages } from '../../../graphql/types';
import { useResponsiveImage } from '../../hooks/useResponsiveImage';
import { Button } from '../buttons/Button';
import { StyledNewProductIndicator } from '../new-product-indicator/NewProductIndicator';
import { formatPrice, splitTitleToTwoLines } from '../../utils/helpers';
import { NumberInput } from '../inputs/NumberInput';
import { LayoutContentWrapper } from '../layout/LayoutContentWrapper';
import { breakpointFrom } from '../../styles/breakpoints';

const StyledSection = styled.section`
  margin-top: 2.4rem;
`;

const StyledContainer = styled.article`
  ${breakpointFrom('tablet')} {
    display: flex;
  }
`;

const StyledGatsbyImage = styled(GatsbyImage)`
  border-radius: ${({ theme }) => theme.borderRadius};

  ${breakpointFrom('tablet')} {
    flex: 1 0 40%;
  }

  ${breakpointFrom('desktop')} {
    flex: 1 0 50%;
  }
`;

const StyledContentContainer = styled.div`
  margin-top: 3.2rem;

  ${breakpointFrom('tablet')} {
    margin-left: 7rem;
    margin-top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  ${breakpointFrom('desktop')} {
    margin-left: 12.5rem;
  }
`;

const StyledHeading = styled.h1`
  margin: 2.4rem 0;
  font-size: 2.8rem;
  line-height: 3.8rem;
  letter-spacing: 1px;

  ${breakpointFrom('tablet')} {
    margin: 1.6rem 0 3.2rem;
    line-height: 3.2rem;
  }
`;

const StyledDescription = styled.p`
  opacity: 0.5;
`;

const StyledPrice = styled.p`
  margin: 2.4rem 0 3.2rem;
  font-size: 1.8rem;
  line-height: 2.5rem;
  letter-spacing: 1.3px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  ${breakpointFrom('tablet')} {
    margin: 3.2rem 0;
  }

  ${breakpointFrom('desktop')} {
    margin: 3.2rem 0 4.8rem;
  }
`;

const StyledForm = styled.form`
  display: flex;
  gap: 1.6rem;
`;

type Props = {
  productImages: IResponsiveImages;
  isNew: boolean;
  name: string;
  description: string;
  price: number;
};

export const ProductDetailsSection = ({
  productImages,
  isNew,
  name,
  description,
  price,
}: Props) => {
  const image = useResponsiveImage(productImages);
  const { firstLine, secondLine } = splitTitleToTwoLines(name);
  const formattedPrice = formatPrice(price);

  return (
    <StyledSection>
      <LayoutContentWrapper>
        <StyledContainer>
          <StyledGatsbyImage image={image.data} alt={image.alt} />
          <StyledContentContainer>
            {isNew ? (
              <StyledNewProductIndicator>New product</StyledNewProductIndicator>
            ) : null}
            <StyledHeading>
              {firstLine}
              <br />
              {secondLine}
            </StyledHeading>
            <StyledDescription>{description}</StyledDescription>
            <StyledPrice>{formattedPrice}</StyledPrice>
            <StyledForm
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <NumberInput />
              <Button label="Add to cart" type="submit" />
            </StyledForm>
          </StyledContentContainer>
        </StyledContainer>
      </LayoutContentWrapper>
    </StyledSection>
  );
};
