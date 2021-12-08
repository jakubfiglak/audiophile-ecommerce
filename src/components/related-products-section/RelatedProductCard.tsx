import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { Product } from './types';
import { LinkButton } from '../buttons/Button';
import { useResponsiveImage } from '../../hooks/useResponsiveImage';
import { breakpointFrom } from '../../styles/breakpoints';

const StyledImage = styled(GatsbyImage)`
  border-radius: ${({ theme }) => theme.borderRadius};
`;

const StyledHeading = styled.h3`
  font-size: 2.4rem;
  line-height: 3.2rem;
  letter-spacing: 1.7px;
  margin: 3.2rem 0;

  ${breakpointFrom('tablet')} {
    margin: 4rem 0 3.2rem;
  }
`;

type Props = Product;

export const RelatedProductCard = ({ images, name, slug }: Props) => {
  const image = useResponsiveImage(images);

  return (
    <div>
      <StyledImage image={image.data} alt={image.alt} />
      <StyledHeading>{name}</StyledHeading>
      <LinkButton label="See product" to={`/product/${slug}`} />
    </div>
  );
};
