import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import type { IResponsiveImages } from '../../../graphql/types';
import { useResponsiveImage } from '../../hooks/useResponsiveImage';
import { LayoutContentWrapper } from '../layout/LayoutContentWrapper';
import { breakpointFrom } from '../../styles/breakpoints';

const StyledSection = styled.section`
  margin-top: 12rem;

  ${breakpointFrom('desktop')} {
    margin-top: 16rem;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${breakpointFrom('tablet')} {
    display: grid;
    grid-template-columns: repeat(2, auto);

    .third {
      grid-column: 2;
      grid-row: 1 / span 2;
    }
  }

  ${breakpointFrom('desktop')} {
    gap: 3rem;
  }
`;

const StyledImage = styled(GatsbyImage)`
  border-radius: ${({ theme }) => theme.borderRadius};
`;

type Props = {
  galleryItemOneImages: IResponsiveImages;
  galleryItemTwoImages: IResponsiveImages;
  galleryItemThreeImages: IResponsiveImages;
};

export const ProductGallerySection = ({
  galleryItemOneImages,
  galleryItemTwoImages,
  galleryItemThreeImages,
}: Props) => {
  const imageOne = useResponsiveImage(galleryItemOneImages);
  const imageTwo = useResponsiveImage(galleryItemTwoImages);
  const imageThree = useResponsiveImage(galleryItemThreeImages);

  return (
    <StyledSection>
      <LayoutContentWrapper>
        <StyledContainer>
          <StyledImage image={imageOne.data} alt={imageOne.alt} />
          <StyledImage image={imageTwo.data} alt={imageTwo.alt} />
          <StyledImage
            image={imageThree.data}
            alt={imageThree.alt}
            className="third"
          />
        </StyledContainer>
      </LayoutContentWrapper>
    </StyledSection>
  );
};
